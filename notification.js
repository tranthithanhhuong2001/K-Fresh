/**
 * Custom Notification System
 * Replaces browser's default alert() with styled notifications
 */

// Create notification container on page load
document.addEventListener('DOMContentLoaded', function () {
    if (!document.getElementById('custom-notification-container')) {
        const container = document.createElement('div');
        container.id = 'custom-notification-container';
        container.innerHTML = `
            <div class="custom-notification-overlay" id="notification-overlay">
                <div class="custom-notification-box" id="notification-box">
                    <div class="custom-notification-header">
                        <h3 id="notification-title">Thông báo</h3>
                        <button class="custom-notification-close" onclick="closeNotification()">
                            <i class="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                    <div class="custom-notification-body">
                        <div class="custom-notification-message">
                            <div class="custom-notification-icon">
                                <i class="fa-solid fa-check"></i>
                            </div>
                            <div class="custom-notification-text" id="notification-message">
                                Message here
                            </div>
                        </div>
                        <div class="custom-notification-actions" id="notification-actions">
                            <!-- Buttons will be inserted here -->
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(container);
    }
});

/**
 * Show custom notification
 * @param {string} message - The message to display
 * @param {object} options - Configuration options
 */
function showNotification(message, options = {}) {
    const defaults = {
        title: 'Thông báo',
        type: 'success', // success, error, warning, info
        buttons: null, // Array of button objects: [{text: 'OK', onClick: fn, primary: true}]
        autoClose: false,
        duration: 3000
    };

    const config = { ...defaults, ...options };

    const overlay = document.getElementById('notification-overlay');
    const box = document.getElementById('notification-box');
    const titleEl = document.getElementById('notification-title');
    const messageEl = document.getElementById('notification-message');
    const actionsEl = document.getElementById('notification-actions');
    const iconEl = box.querySelector('.custom-notification-icon i');

    // Set title and message
    titleEl.textContent = config.title;
    messageEl.innerHTML = message;

    // Set icon based on type
    const iconMap = {
        success: 'fa-check',
        error: 'fa-xmark',
        warning: 'fa-exclamation',
        info: 'fa-info'
    };
    iconEl.className = `fa-solid ${iconMap[config.type] || 'fa-check'}`;

    // Set icon color
    const iconColorMap = {
        success: '#4caf50',
        error: '#f44336',
        warning: '#ff9800',
        info: '#2196f3'
    };
    box.querySelector('.custom-notification-icon').style.background = iconColorMap[config.type] || '#4caf50';

    // Clear and set buttons
    actionsEl.innerHTML = '';

    if (config.buttons && config.buttons.length > 0) {
        box.classList.remove('simple');
        config.buttons.forEach(btn => {
            const button = document.createElement('button');
            button.className = `custom-notification-btn ${btn.primary ? 'custom-notification-btn-primary' : 'custom-notification-btn-secondary'}`;
            button.innerHTML = btn.icon ? `<i class="${btn.icon}"></i> ${btn.text}` : btn.text;
            button.onclick = () => {
                if (btn.onClick) btn.onClick();
                closeNotification();
            };
            actionsEl.appendChild(button);
        });
    } else {
        // Default OK button
        box.classList.add('simple');
        const okBtn = document.createElement('button');
        okBtn.className = 'custom-notification-btn custom-notification-btn-primary';
        okBtn.textContent = 'OK';
        okBtn.onclick = closeNotification;
        actionsEl.appendChild(okBtn);
    }

    // Show notification
    overlay.classList.add('show');

    // Auto close if enabled
    if (config.autoClose) {
        setTimeout(closeNotification, config.duration);
    }
}

/**
 * Close notification
 */
function closeNotification() {
    const overlay = document.getElementById('notification-overlay');
    if (overlay) {
        overlay.classList.remove('show');
    }
}

/**
 * Show success notification (shorthand)
 */
function showSuccess(message, options = {}) {
    showNotification(message, { ...options, type: 'success' });
}

/**
 * Show error notification (shorthand)
 */
function showError(message, options = {}) {
    showNotification(message, { ...options, type: 'error' });
}

/**
 * Show cart add notification (specific for e-commerce)
 */
function showCartNotification(productName) {
    showNotification(
        `Bạn đã thêm <strong>${productName}</strong> vào giỏ hàng`,
        {
            title: 'Thông báo',
            type: 'success',
            buttons: [
                {
                    text: 'Tiếp tục mua hàng',
                    icon: 'fa-solid fa-chevron-left',
                    onClick: () => {
                        // Just close, stay on current page
                    }
                },
                {
                    text: 'Xem giỏ hàng',
                    icon: 'fa-solid fa-arrow-right',
                    primary: true,
                    onClick: () => {
                        window.location.href = 'cart.html';
                    }
                }
            ]
        }
    );
}


/**
 * OVERRIDE DEFAULT ALERT()
 * This makes ALL alert() calls automatically use the custom notification
 */
window.alert = function (message) {
    // Ensure container exists
    if (!document.getElementById('notification-overlay')) {
        // Fallback to console if not ready
        console.log('Alert:', message);
        return;
    }

    const overlay = document.getElementById('notification-overlay');
    const messageEl = document.getElementById('notification-message');
    const actionsEl = document.getElementById('notification-actions');

    if (!overlay || !messageEl) return;

    // Set message
    messageEl.innerHTML = message;

    // Set default OK button
    actionsEl.innerHTML = '';
    const okBtn = document.createElement('button');
    okBtn.className = 'custom-notification-btn custom-notification-btn-primary';
    okBtn.textContent = 'OK';
    okBtn.onclick = closeNotification;
    actionsEl.appendChild(okBtn);

    // Show notification
    overlay.classList.add('show');

    // Auto-close after 5 seconds
    setTimeout(() => {
        closeNotification();
    }, 5000);
};
