// Initialize products from localStorage or use default
let products = JSON.parse(localStorage.getItem('products'));

// Help function to clean names and extract weight if missing
function processProducts(items) {
    return items.map((p, index) => {
        if (p.name && p.name.includes('~')) {
            const parts = p.name.split('~');
            const cleanName = parts[0].trim();
            const extractedWeight = parts[1].trim();
            if (!p.weight) p.weight = extractedWeight;
            p.name = cleanName;
        }
        // Set creation date if missing
        // For default products, we create sequential past dates based on their initial index
        if (!p.createdAt) {
            const date = new Date();
            date.setMinutes(date.getMinutes() - (items.length - index));
            p.createdAt = date.toISOString();
        }
        return p;
    });
}

if (!products) {
    products = processProducts([
        {
            id: 1,
            name: "Lõi Nạc Vai bò ~ 250g",
            price: 102375,
            category: "beef",
            image: "https://static.wixstatic.com/media/2b8ac7_164a4c5ba2ab43cf8903c87bb9be9203~mv2.jpg",
            description: "Mô tả ngắn: Lõi nạc vai bò mềm vừa, ít mỡ, vị ngọt tự nhiên.\nĐặc điểm: Nạc nhiều, thớ thịt mỏng, không khô.\nChế biến: Xào, áp chảo, nhúng lẩu, nướng.",
            visible: true,
            inStock: true
        },
        {
            id: 2,
            name: "Thăn ngoại ~ 250g",
            price: 145500,
            category: "beef",
            image: "https://static.wixstatic.com/media/124b33_1410d5fe3fff4515a9b9c0231918cbf7~mv2.jpg",
            description: "Mô tả ngắn: Thăn ngoại bò mềm, có viền mỡ thơm béo.\nĐặc điểm: Cân bằng nạc – mỡ, đậm vị.\nChế biến: Steak, nướng BBQ, áp chảo.",
            visible: true,
            inStock: true
        },
        {
            id: 3,
            name: "Thăn Ngoại Bò ANGUS ~ 250g",
            price: 281250,
            category: "beef",
            image: "https://static.wixstatic.com/media/2b8ac7_b6984f62c53645a09941830a6ebf1a00~mv2.jpg",
            description: "Mô tả ngắn: Thăn ngoại bò Angus cao cấp, mềm, vân mỡ đẹp.\nĐặc điểm: Thịt ngọt, béo nhẹ, chất lượng cao.\nChế biến: Steak, nướng, áp chảo.",
            visible: true,
            inStock: true
        },
        {
            id: 4,
            name: "Thịt đùi bò ~ 500g",
            price: 215000,
            category: "beef",
            image: "https://static.wixstatic.com/media/124b33_c28a5a3dda6b47a3affaa5130bda01ec~mv2.jpg",
            description: "Mô tả ngắn: Thịt đùi bò nạc nhiều, chắc thịt.\nĐặc điểm: Ít mỡ, vị đậm, không bở.\nChế biến: Bò kho, hầm, nấu phở.",
            visible: true,
            inStock: true
        },
        {
            id: 6,
            name: "Nạc Lưng WAGYU ~ 250g",
            price: 675000,
            category: "beef",
            image: "https://static.wixstatic.com/media/2b8ac7_744d3500f0bf4d86834256fe233b6c9f~mv2.jpeg",
            description: "Mô tả ngắn: Nạc lưng bò Wagyu mềm tan, vân mỡ cẩm thạch.\nĐặc điểm: Cao cấp, béo ngậy, thơm đặc trưng.\nChế biến: Steak, nướng, áp chảo nhanh.",
            visible: true,
            inStock: true
        },
        {
            id: 7,
            name: "Phi lê bò ~ 250g",
            price: 234875,
            category: "beef",
            image: "https://static.wixstatic.com/media/2b8ac7_09e69947c7bc4111a06368d666438cb1~mv2.jpg",
            description: "Mô tả ngắn: Phi lê bò mềm nhất, gần như không mỡ.\nĐặc điểm: Thớ mịn, ngọt thịt, dễ ăn.\nChế biến: Steak, bò lúc lắc, áp chảo.",
            visible: true,
            inStock: true
        },
        {
            id: 8,
            name: "Thăn Nội bò ANGUS ~ 250g",
            price: 505000,
            category: "beef",
            image: "https://static.wixstatic.com/media/2b8ac7_70be13a0c9ee47d6b19db407adde42ec~mv2.jpg",
            description: "Mô tả ngắn: Thăn nội bò Angus mềm, ít gân.\nĐặc điểm: Thịt ngọt, cao cấp.\nChế biến: Steak, nướng, áp chảo.",
            visible: true,
            inStock: true
        },
        {
            id: 9,
            name: "Thăn Nội bò Wagyu ~ 250g",
            price: 700000,
            category: "beef",
            image: "https://static.wixstatic.com/media/2b8ac7_bfa73678421c4277afed09992c18b764~mv2.jpeg",
            description: "Mô tả ngắn: Thăn nội bò Wagyu cao cấp, mềm tan.\nĐặc điểm: Vân mỡ đẹp, vị béo tự nhiên.\nChế biến: Steak cao cấp, nướng nhanh.",
            visible: true,
            inStock: true
        },
        {
            id: 10,
            name: "Nạc vai heo ~ 1,5Kg hoặc 3Kg",
            price: 280000,
            category: "pork",
            image: "https://static.wixstatic.com/media/2b8ac7_b9f88f601b5041438f14ce087bd2c496~mv2.jpg",
            description: "Mô tả ngắn: Nạc vai heo mềm, nạc xen mỡ.\nĐặc điểm: Không khô, dễ chế biến.\nChế biến: Kho, nướng, xay.",
            visible: true,
            inStock: true
        },
        {
            id: 11,
            name: "Thịt Heo phi-lê ~ 450g",
            price: 108000,
            category: "pork",
            image: "https://static.wixstatic.com/media/2b8ac7_041257fd66ca47b4b91343c5a8050332~mv2.jpg",
            description: "Mô tả ngắn: Thịt heo phi lê nạc hoàn toàn, mềm.\nĐặc điểm: Ít mỡ, dễ ăn.\nChế biến: Chiên, xào, áp chảo.",
            visible: true,
            inStock: true
        },
        {
            id: 12,
            name: "Thịt thăn heo ~ 500g",
            price: 102375,
            category: "pork",
            image: "https://static.wixstatic.com/media/2b8ac7_99e4dc2139b747e99f5f052e5d51449c~mv2.jpg",
            description: "Mô tả ngắn: Thịt thăn heo mềm, nạc.\nĐặc điểm: Thớ mịn, không dai.\nChế biến: Chiên xù, xào, rim.",
            visible: true,
            inStock: true
        },
        {
            id: 13,
            name: "Ba chỉ Heo thái lát ~ 500g",
            price: 110250,
            category: "pork",
            image: "https://static.wixstatic.com/media/2b8ac7_04bc2f34023f4dc080f6d4361b58a124~mv2.png",
            description: "Mô tả ngắn: Ba chỉ heo thái lát mỏng, béo thơm.\nĐặc điểm: Nạc mỡ xen kẽ đều.\nChế biến: Nướng BBQ, lẩu, chiên.",
            visible: true,
            inStock: true
        },
        {
            id: 14,
            name: "Sườn heo ~ 1,2Kg",
            price: 308700,
            category: "pork",
            image: "https://static.wixstatic.com/media/2b8ac7_9930d74a87914b9ea1f074d203fbdaf3~mv2.jpg",
            description: "Mô tả ngắn: Sườn heo tươi, thịt mềm bám xương.\nĐặc điểm: Ngọt thịt, ít mỡ thừa.\nChế biến: Nướng, kho, rim, hầm.",
            visible: true,
            inStock: true
        },
        {
            id: 15,
            name: "Thịt heo xay ~ 500g",
            price: 89500,
            category: "pork",
            image: "https://static.wixstatic.com/media/2b8ac7_e50398615edb419e90fec659b037a348~mv2.jpeg",
            description: "Mô tả ngắn: Thịt heo xay tươi, xay mịn.\nĐặc điểm: Dễ nấu, tiện lợi.\nChế biến: Viên, chả, nhân bánh, canh.",
            visible: true,
            inStock: true
        },
        {
            id: 16,
            name: "Thịt Ba Chỉ Heo ~ 600g",
            price: 132300,
            category: "pork",
            image: "https://static.wixstatic.com/media/2b8ac7_e34f4af65c5742b1a958569783176800~mv2.jpg",
            description: "Mô tả ngắn: Thịt ba chỉ heo tươi, nạc mỡ cân đối.\nĐặc điểm: Béo thơm, không ngấy.\nChế biến: Kho, rang, nướng, luộc.",
            visible: true,
            inStock: true
        },
        {
            id: 17,
            name: "Ba chỉ bò thái lát ~ 500g",
            price: 156500,
            category: "beef",
            image: "https://static.wixstatic.com/media/2b8ac7_be49dafe4db3411482b7dee000dbbe86~mv2.png",
            description: "Mô tả ngắn: Ba chỉ bò thái lát mỏng, vân mỡ đều, thơm ngon.\nĐặc điểm: Phần thịt bụng bò, béo ngậy, ngọt thịt.\nChế biến: Nướng, xào, nhúng lẩu.",
            visible: true,
            inStock: true
        },
        {
            id: 18,
            name: "Sườn non bò có xương ~ 500g",
            price: 342500,
            category: "beef",
            image: "https://static.wixstatic.com/media/2b8ac7_f0623932da904b67802f001d2182d31a~mv2.jpeg",
            description: "Mô tả ngắn: Sườn non bò có xương nhập khẩu Mỹ, chất lượng cao.\nĐặc điểm: Thịt dày, bám xương, ngọt và thơm.\nChế biến: Nướng BBQ, hầm, rim.",
            visible: true,
            inStock: true
        },
        {
            id: 19,
            name: "Nạc vai bò Mỹ thái lát ~ 500g",
            price: 430000,
            category: "beef",
            image: "https://static.wixstatic.com/media/2b8ac7_1227ebb07c9d42d8976acef79faf3a4c~mv2.jpg",
            description: "Mô tả ngắn: Nạc vai bò Mỹ thái mỏng, mềm và đậm vị.\nĐặc điểm: Vân mỡ cẩm thạch, thớ thịt mịn.\nChế biến: Xào, nhúng lẩu, áp chảo.",
            visible: true,
            inStock: true
        },
        {
            id: 20,
            name: "Sườn non không xương ~ 500g",
            price: 475000,
            category: "beef",
            image: "https://static.wixstatic.com/media/2b8ac7_56aba1397023452c9d59f27934abe817~mv2.jpeg",
            description: "Mô tả ngắn: Sườn non bò không xương cao cấp, thịt mềm tan.\nĐặc điểm: Không còn xương, nạc nhiều xen mỡ.\nChế biến: Làm Steak, nướng, áp chảo.",
            visible: true,
            inStock: true
        },
        {
            id: 21,
            name: "Cọng sườn bò WAGYU ~ 1.3Kg MB 6+",
            price: 2418000,
            category: "beef",
            image: "https://static.wixstatic.com/media/2b8ac7_0e84e0ddc7ed4acdab4e4d857ae78a9a~mv2.jpeg",
            description: "Mô tả ngắn: Sườn bò Wagyu Úc cao cấp, chỉ số MB 6+.\nĐặc điểm: Vân mỡ cực đẹp, thịt mềm béo đặc trưng.\nChế biến: Nướng cao cấp, BBQ thượng hạng.",
            visible: true,
            inStock: true
        }
    ]);
    localStorage.setItem('products', JSON.stringify(products));
} else {
    // Also clean existing localStorage products just in case
    products = processProducts(products);
}

// Global filter to hide products set as hidden in admin
const visibleProducts = products.filter(p => p.visible !== false);

const productList = document.getElementById('product-list');
const searchInput = document.getElementById('search-input');
const cartCount = document.getElementById('cart-count');

function updateCartCount() {
    if (!cartCount) return;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.length; // Number of unique product types
    cartCount.textContent = totalItems;
}

// Initial count update
updateCartCount();

// Function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

const productsPerPage = 9;
let currentPageNum = 1;

function renderProducts(items, page = 1) {
    if (!productList) return;
    productList.innerHTML = '';

    if (items.length === 0) {
        productList.innerHTML = '<p style="text-align: center; grid-column: 1/-1;">Không tìm thấy sản phẩm nào.</p>';
        return;
    }

    const startIndex = (page - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const paginatedItems = items.slice(startIndex, endIndex);

    paginatedItems.forEach(product => {
        const card = document.createElement('div');
        const isOutOfStock = product.inStock === false;
        card.className = `product-card product-${product.id} ${isOutOfStock ? 'out-of-stock' : ''}`;

        // Badge Logic
        const isNew = product.createdAt && (new Date() - new Date(product.createdAt)) <= (5 * 24 * 60 * 60 * 1000);
        const isBestSeller = product.bestSeller === true;

        let badgesHtml = '';
        if (isNew) badgesHtml += '<div class="badge-item-tag badge-new">New</div>';

        if (isBestSeller) {
            badgesHtml += '<div class="product-badges">';
            badgesHtml += '<div class="badge-item-tag badge-best-seller">🔥</div>';
            badgesHtml += '</div>';
        }

        card.innerHTML = `
            ${badgesHtml}
            <div class="product-image" onclick="viewDetail(${product.id})">
                ${isOutOfStock ? '<div class="out-of-stock-badge">Hết hàng</div>' : ''}
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <div class="product-category">${product.category === 'beef' ? 'Thịt Bò' : 'Thịt Heo'}</div>
                <h3 class="product-title" onclick="viewDetail(${product.id})">${product.name}</h3>
                <div class="product-weight-small">${product.weight || ''} ${product.unit || ''}</div>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price)}</span>
                    <div id="product-action-${product.id}">
                        ${isOutOfStock ?
                '<button class="add-btn btn-disabled" disabled><i class="fa-solid fa-cart-shopping"></i></button>' :
                `<button class="add-btn" onclick="showAddQtyMode(${product.id})">
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>`
            }
                    </div>
                </div>
            </div>
        `;
        productList.appendChild(card);
    });

    renderPagination(items.length, page, (newPage) => {
        currentPageNum = newPage;
        renderProducts(items, newPage);
        productList.scrollIntoView({ behavior: 'smooth' });
    });
}

function renderPagination(totalItems, currentPage, onPageChange) {
    let paginationContainer = document.getElementById('pagination');
    if (!paginationContainer) {
        paginationContainer = document.createElement('div');
        paginationContainer.id = 'pagination';
        paginationContainer.className = 'pagination-container container';
        productList.after(paginationContainer);
    }

    const totalPages = Math.ceil(totalItems / productsPerPage);
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let html = '';
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="window.handlePageChange(${i})">${i}</button>`;
    }
    paginationContainer.innerHTML = html;
    window.handlePageChange = onPageChange;
}

function viewDetail(id) {
    window.location.href = `product-detail.html?id=${id}`;
}

function showAddQtyMode(id) {
    const actionContainer = document.getElementById(`product-action-${id}`);
    if (!actionContainer) return;

    actionContainer.innerHTML = `
        <div class="add-qty-mode">
            <div class="qty-control">
                <button onclick="updateTempQty(${id}, -1)"><i class="fa-solid fa-minus"></i></button>
                <span id="temp-qty-${id}" class="qty-value">1</span>
                <button onclick="updateTempQty(${id}, 1)"><i class="fa-solid fa-plus"></i></button>
            </div>
            <button class="confirm-add-btn" onclick="applyAddToCart(${id})">Thêm vào giỏ hàng</button>
        </div>
    `;

    // Close when clicking outside
    const closeMode = (e) => {
        if (!actionContainer.contains(e.target)) {
            renderActionIcon(id);
            document.removeEventListener('click', closeMode);
        }
    };
    setTimeout(() => document.addEventListener('click', closeMode), 0);
}

function updateTempQty(id, delta) {
    const qtySpan = document.getElementById(`temp-qty-${id}`);
    if (qtySpan) {
        let currentQty = parseInt(qtySpan.textContent);
        currentQty = Math.max(1, currentQty + delta);
        qtySpan.textContent = currentQty;
    }
}

function renderActionIcon(id) {
    const actionContainer = document.getElementById(`product-action-${id}`);
    if (actionContainer) {
        actionContainer.innerHTML = `
            <button class="add-btn" onclick="showAddQtyMode(${id})">
                <i class="fa-solid fa-cart-plus"></i>
            </button>
        `;
    }
}

function applyAddToCart(id) {
    const qtySpan = document.getElementById(`temp-qty-${id}`);
    if (qtySpan) {
        const qty = parseInt(qtySpan.textContent);
        addToCart(id, qty);
        renderActionIcon(id);
    }
}

function addToCart(id, qty = 1) {
    const product = products.find(p => p.id === id);
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.quantity += qty;
    } else {
        cart.push({
            ...product,
            quantity: qty,
            selected: true
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();

    // Animation effect
    if (cartCount) {
        cartCount.style.transform = 'scale(1.3)';
        cartCount.style.backgroundColor = '#fb5533';
        setTimeout(() => {
            cartCount.style.transform = 'scale(1)';
            cartCount.style.backgroundColor = 'var(--primary-color)';
        }, 300);
    }

    showCartToast(product.name);
}


function showCartToast(productName) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.cart-toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'cart-toast';
    toast.innerHTML = `
        <button class="cart-toast-close" onclick="this.parentElement.classList.remove('show'); setTimeout(() => this.parentElement.remove(), 500);"><i class="fa-solid fa-xmark"></i></button>
        <div class="cart-toast-header">
            <i class="fa-solid fa-check"></i>
            <div class="cart-toast-message">Bạn đã thêm <span class="product-name">${productName}</span> vào giỏ hàng</div>
        </div>
        <div class="cart-toast-actions">
            <a href="index.html" class="continue-shopping"><i class="fa-solid fa-chevron-left"></i> Tiếp tục mua hàng</a>
            <a href="cart.html" class="view-cart-btn">Xem giỏ hàng <i class="fa-solid fa-arrow-right"></i></a>
        </div>
    `;

    document.body.appendChild(toast);

    // Trigger animation
    setTimeout(() => toast.classList.add('show'), 100);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) toast.remove();
            }, 500);
        }
    }, 5000);
}

// Integrated Search & Filter functionality
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        applyShopFilters();
    });
}

const searchBtn = document.getElementById('search-btn');
if (searchBtn) {
    searchBtn.onclick = () => applyShopFilters();
}

function applyShopFilters() {
    const keyword = (document.getElementById('search-input')?.value || '').toLowerCase();
    const category = document.getElementById('shop-category-filter')?.value || 'all';
    const priceRange = document.getElementById('shop-price-filter')?.value || 'all';
    const sortBy = document.getElementById('shop-sort')?.value || 'newest';

    let filtered = visibleProducts.filter(p => {
        // Keyword Search
        const matchesKeyword = p.name.toLowerCase().includes(keyword) ||
            (p.description && p.description.toLowerCase().includes(keyword));

        // Category Filter
        const matchesCategory = category === 'all' || p.category === category;

        // Price Filter
        let matchesPrice = true;
        if (priceRange === '0-100') matchesPrice = p.price < 100000;
        else if (priceRange === '100-300') matchesPrice = p.price >= 100000 && p.price <= 300000;
        else if (priceRange === '300-500') matchesPrice = p.price > 300000 && p.price <= 500000;
        else if (priceRange === '500-up') matchesPrice = p.price > 500000;

        return matchesKeyword && matchesCategory && matchesPrice;
    });

    // Sorting & Special Filtering
    if (sortBy === 'best-selling') {
        // Filter to only show best sellers as requested
        filtered = filtered.filter(p => p.bestSeller === true);
    } else if (sortBy === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'newest') {
        filtered.sort((a, b) => {
            const dateA = new Date(a.createdAt || 0);
            const dateB = new Date(b.createdAt || 0);
            if (dateB - dateA !== 0) return dateB - dateA;
            return b.id - a.id;
        });
    }

    // Reset to page 1 and render
    currentPageNum = 1;
    renderProducts(filtered, 1);
}

// Global expose
window.applyShopFilters = applyShopFilters;

// Hero Slider Logic
let currentHeroSlide = 0;
const sliderContainer = document.getElementById('hero-slider');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const btnSliderPrev = document.getElementById('sliderPrev');
const btnSliderNext = document.getElementById('sliderNext');

function showSlide(index) {
    if (!sliderContainer) return;

    if (index >= slides.length) currentHeroSlide = 0;
    else if (index < 0) currentHeroSlide = slides.length - 1;
    else currentHeroSlide = index;

    sliderContainer.style.transform = `translateX(-${currentHeroSlide * (100 / slides.length)}%)`;

    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentHeroSlide);
    });
}

if (btnSliderPrev && btnSliderNext) {
    btnSliderPrev.onclick = () => showSlide(currentHeroSlide - 1);
    btnSliderNext.onclick = () => showSlide(currentHeroSlide + 1);

    dots.forEach((dot, i) => {
        dot.onclick = () => showSlide(i);
    });

    // Auto slide
    setInterval(() => {
        showSlide(currentHeroSlide + 1);
    }, 5000);
}

// Flash Sale Logic
const flashProductList = document.getElementById('flash-product-list');
const btnPrev = document.getElementById('slidePrev');
const btnNext = document.getElementById('slideNext');

function renderFlashSale() {
    if (!flashProductList) return;

    // Using a subset of products for flash sale
    const flashProducts = products.slice(0, 5).map(p => ({
        ...p,
        discount: Math.floor(Math.random() * 30) + 10,
        sold: Math.floor(Math.random() * 80) + 10
    }));

    flashProductList.innerHTML = '';
    flashProducts.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card flash-card';
        card.style.minWidth = '220px';
        card.innerHTML = `
            <div class="discount-badge">-${product.discount}%</div>
            <div class="product-image" onclick="viewDetail(${product.id})">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-title" onclick="viewDetail(${product.id})">${product.name}</h3>
                <div class="product-footer">
                    <span class="product-price">${formatPrice(product.price * (100 - product.discount) / 100)}</span>
                </div>
                <div class="flash-progress-bar">
                    <div class="progress-fill" style="width: ${product.sold}%"></div>
                    <span class="progress-text">Vừa mở bán</span>
                </div>
            </div>
        `;
        flashProductList.appendChild(card);
    });
}

if (btnPrev && btnNext) {
    btnPrev.onclick = () => flashProductList.scrollLeft -= 300;
    btnNext.onclick = () => flashProductList.scrollLeft += 300;
}

// Countdown Timer
function startCountdown() {
    let hours = 2, minutes = 36, seconds = 50;
    const hElem = document.getElementById('hours');
    const mElem = document.getElementById('minutes');
    const sElem = document.getElementById('seconds');

    if (!hElem) return;

    setInterval(() => {
        if (seconds > 0) seconds--;
        else {
            seconds = 59;
            if (minutes > 0) minutes--;
            else {
                minutes = 59;
                if (hours > 0) hours--;
            }
        }
        hElem.textContent = String(hours).padStart(2, '0');
        mElem.textContent = String(minutes).padStart(2, '0');
        sElem.textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// Detect page and initial render
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const currentPage = window.location.pathname.split('/').pop() || 'mijumeat.html';

// Create a copy of visible products and shuffle it for general viewing
const shuffledProducts = shuffleArray([...visibleProducts]);

if (currentPage === 'product-detail.html' && productId) {
    const product = products.find(p => p.id == productId);
    if (product) {
        document.getElementById('detail-image').src = product.image;
        document.getElementById('detail-name').textContent = product.name;
        document.getElementById('detail-weight').textContent = `Khối lượng: ${product.weight || ''} ${product.unit || ''}`;
        document.getElementById('detail-price').textContent = `Giá: ${formatPrice(product.price)}`;
        document.getElementById('detail-category').textContent = product.category === 'beef' ? 'Thịt Bò' : 'Thịt Heo';
        document.getElementById('add-to-cart-detail').onclick = () => addToCart(product.id);
    }
} else if (currentPage === 'heo.html' || currentPage === 'bo.html') {
    applyShopFilters();
} else {
    // For mijumeat.html or other pages, show products (apply default filters/sort)
    applyShopFilters();

    // For flash sale, take a random selection from the shuffled list
    if (typeof renderFlashSaleContent === 'undefined') {
        const originalRenderFlashSale = renderFlashSale;
        renderFlashSale = function () {
            if (!flashProductList) return;
            const flashProducts = shuffledProducts.slice(0, 5).map(p => ({
                ...p,
                discount: Math.floor(Math.random() * 30) + 10,
                sold: Math.floor(Math.random() * 80) + 10
            }));

            flashProductList.innerHTML = '';
            flashProducts.forEach(product => {
                const card = document.createElement('div');
                card.className = 'product-card flash-card';
                card.style.minWidth = '220px';
                card.innerHTML = `
                    <div class="discount-badge">-${product.discount}%</div>
                    <div class="product-image" onclick="viewDetail(${product.id})">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title" onclick="viewDetail(${product.id})">${product.name}</h3>
                        <div class="product-weight-small">${product.weight || ''} ${product.unit || ''}</div>
                        <div class="product-footer">
                            <span class="product-price">${formatPrice(product.price * (100 - product.discount) / 100)}</span>
                        </div>
                        <div class="flash-progress-bar">
                            <div class="progress-fill" style="width: ${product.sold}%"></div>
                            <span class="progress-text">Vừa mở bán</span>
                        </div>
                    </div>
                `;
                flashProductList.appendChild(card);
            });
        };
    }

    renderFlashSale();
    startCountdown();
    showSlide(0);
}



// Expose functions to global scope

// --- AUTHENTICATION SYSTEM ---

// 1. Register User
function registerUser(data) {
    // Validate
    if (!data.name || !data.phone || !data.email || !data.pass) {
        alert('Vui lòng điền đầy đủ thông tin bắt buộc (*)');
        return;
    }
    if (data.pass.length < 6) {
        document.getElementById('reg-pass-err').style.display = 'block';
        return;
    }
    // Check Email format @gmail.com
    if (!data.email.endsWith('@gmail.com')) {
        document.getElementById('reg-email-err').textContent = 'Email phải có định dạng @gmail.com';
        document.getElementById('reg-email-err').style.display = 'block';
        return;
    }
    if (data.pass !== data.repass) {
        document.getElementById('reg-repass-err').style.display = 'block';
        return;
    }

    // Get existing users
    const users = JSON.parse(localStorage.getItem('users') || '[]');

    // Check duplicates
    if (users.some(u => u.phone === data.phone)) {
        document.getElementById('reg-phone-err').style.display = 'block';
        alert('Số điện thoại này đã được đăng ký!');
        return;
    }

    // Generate Customer ID: MJ + Count + Last 3 Phone Digits
    const count = users.length + 1; // You might want a more persistent counter if users can be deleted
    const phoneSuffix = data.phone.slice(-3);
    const customerId = `MJ${String(count).padStart(3, '0')}${phoneSuffix}`;

    const newUser = {
        id: customerId,
        name: data.name,
        phone: data.phone,
        email: data.email,
        pass: data.pass, // In real app, HASH THIS!
        address: '',
        joinDate: new Date().toISOString()
    };

    // Save
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Auto Login
    localStorage.setItem('currentUser', JSON.stringify(newUser));

    alert('Đăng ký thành công! Đang chuyển hướng...');
    window.location.href = 'mijumeat.html';
}

// 2. Login User
function loginUser(phone, pass) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.phone === phone && u.pass === pass);

    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        alert(`Chào mừng ${user.name} trở lại!`);
        // Redirect to previous page or home
        window.location.href = 'mijumeat.html';
    } else {
        alert('Số điện thoại hoặc mật khẩu không đúng!');
    }
}

// 3. Update User Info (Helper)
function updateUserInStorage(updatedUser) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const index = users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
        users[index] = updatedUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
}

// 4. Logout
function logoutUser() {
    localStorage.removeItem('currentUser');
    window.location.href = 'login.html';
}

// 5. Update Header State
function updateHeaderAuth() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const nav = document.querySelector('.main-nav ul');

    // Safety check if nav exists
    if (!nav) return;

    if (currentUser) {
        // Remove existing login/register link if any (usually "Liên hệ" takes this spot or we append)
        // Let's replace the last item or append if it's "Liên hệ"

        // Find existing Auth Item to remove/update
        const existingAuth = document.getElementById('nav-auth-item');
        if (existingAuth) existingAuth.remove();

        // Create Dropdown HTML
        const li = document.createElement('li');
        li.id = 'nav-auth-item';
        li.innerHTML = `
            <div class="user-dropdown">
                <i class="fa-solid fa-user-circle" style="color: #ee4d2d;"></i>
                <span>${currentUser.name}</span>
                <div class="dropdown-menu">
                    <div class="user-info-header">
                        <strong>${currentUser.name}</strong>
                        <span>${currentUser.id}</span>
                    </div>
                    <a href="account.html" class="dropdown-item">
                        <i class="fa-regular fa-user"></i> Thông tin cá nhân
                    </a>
                    <a href="account.html" class="dropdown-item" onclick="setTimeout(()=>switchAccTab('orders'), 100)">
                        <i class="fa-solid fa-clock-rotate-left"></i> Đơn hàng của tôi
                    </a>
                    <div class="dropdown-divider"></div>
                    <a href="#" class="dropdown-item" onclick="logoutUser()">
                        <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất
                    </a>
                </div>
            </div>
        `;
        nav.appendChild(li); // Combine with existing nav
    } else {
        // Not logged in
        const existingAuth = document.getElementById('nav-auth-item');
        if (existingAuth) existingAuth.remove();

        const li = document.createElement('li');
        li.id = 'nav-auth-item';
        li.innerHTML = `<a href="login.html"><i class="fa-regular fa-user"></i> Tài khoản</a>`;
        nav.appendChild(li);
    }
}

// Run Update Header on Load
document.addEventListener('DOMContentLoaded', () => {
    updateHeaderAuth();
});

