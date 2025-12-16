
        // Product data with video information
        const productsData = {
            1: {
                id: 1,
                name: "Пармезан 36 месяцев",
                description: "Итальянский твердый сыр длительной выдержки с насыщенным вкусом и зернистой структурой. Идеален для терки в пасту, ризотто и салаты. Производится по традиционному рецепту с выдержкой в дубовых бочках.",
                price: 2450,
                image: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                video: "https://assets.mixkit.co/videos/preview/mixkit-close-up-shot-of-a-piece-of-cheese-43140-large.mp4",
                features: [
                    "Выдержка: 36 месяцев",
                    "Тип: твердый сычужный сыр",
                    "Жирность: 32%",
                    "Страна происхождения: Италия",
                    "Вес: 200г, 500г, 1кг"
                ]
            },
            2: {
                id: 2,
                name: "Камамбер",
                description: "Французский мягкий сыр с белой плесенью, нежной кремовой текстурой и насыщенным вкусом с нотками грибов и лесных орехов. Идеален с фруктами, орехами и красным вином.",
                price: 1890,
                image: "https://images.unsplash.com/photo-1488903548327-3e2f016f4f4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                video: "https://assets.mixkit.co/videos/preview/mixkit-close-up-shot-of-a-piece-of-cheese-43140-large.mp4",
                features: [
                    "Тип: мягкий сыр с белой плесенью",
                    "Жирность: 45%",
                    "Созревание: 4-5 недель",
                    "Текстура: кремовая, нежная",
                    "Вес: 125г, 250г"
                ]
            },
            3: {
                id: 3,
                name: "Дор-блю",
                description: "Полумягкий сыр с голубой плесенью, сливочный с солоноватым привкусом и мраморной текстурой. Отлично сочетается с грушами, медом и креплеными винами.",
                price: 2150,
                image: "https://images.unsplash.com/photo-1561336312-f7ce5d452b8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                video: "https://assets.mixkit.co/videos/preview/mixkit-close-up-shot-of-a-piece-of-cheese-43140-large.mp4",
                features: [
                    "Тип: полутвердый с голубой плесенью",
                    "Жирность: 50%",
                    "Созревание: 2-3 месяца",
                    "Цвет: белый с голубыми прожилками",
                    "Вес: 100г, 200г"
                ]
            },
            4: {
                id: 4,
                name: "Чеддер 24 месяца",
                description: "Английский твердый сыр длительной выдержки с острым вкусом и плотной рассыпчатой текстурой. Идеален для сэндвичей, бургеров и сырных тарелок.",
                price: 1950,
                image: "https://images.unsplash.com/photo-1603561596112-0a132b757442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
                video: "https://assets.mixkit.co/videos/preview/mixkit-close-up-shot-of-a-piece-of-cheese-43140-large.mp4",
                features: [
                    "Выдержка: 24 месяца",
                    "Тип: твердый прессованный сыр",
                    "Жирность: 48%",
                    "Цвет: насыщенный желтый",
                    "Вес: 300г, 500г, 1кг"
                ]
            }
        };

        // Mobile menu toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const nav = document.querySelector('nav');
        const overlay = document.querySelector('.overlay');
        
        mobileMenuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            overlay.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        overlay.addEventListener('click', () => {
            nav.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
            cartModal.classList.remove('active');
            productModal.classList.remove('active');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            
            // Show/hide back to top button
            const backToTop = document.getElementById('backToTop');
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });
        
        // Back to top functionality
        const backToTopBtn = document.getElementById('backToTop');
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Enhanced smooth scrolling for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's just "#" or if it's a button that triggers modal
                if (href === '#' || this.classList.contains('tab-btn') || 
                    this.classList.contains('product-video-btn') || 
                    this.classList.contains('add-to-cart') ||
                    this.id === 'show-404') {
                    return;
                }
                
                e.preventDefault();
                
                // Close mobile menu if open
                nav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.style.overflow = '';
                
                const targetId = href;
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Calculate the offset considering fixed header
                    const headerHeight = document.querySelector('header').offsetHeight;
                    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    // Smooth scroll to target
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Product filtering
        const typeFilter = document.getElementById('type-filter');
        const weightFilter = document.getElementById('weight-filter');
        const sortFilter = document.getElementById('sort-filter');
        const productCards = document.querySelectorAll('.product-card');
        
        function filterProducts() {
            const typeValue = typeFilter.value;
            const weightValue = weightFilter.value;
            const sortValue = sortFilter.value;
            
            let filteredProducts = Array.from(productCards);
            
            // Filter by type
            if (typeValue !== 'all') {
                filteredProducts = filteredProducts.filter(card => {
                    return card.getAttribute('data-category') === typeValue;
                });
            }
            
            // Filter by weight
            if (weightValue !== 'all') {
                filteredProducts = filteredProducts.filter(card => {
                    const weight = parseInt(card.getAttribute('data-weight'));
                    const filterWeight = parseInt(weightValue);
                    
                    if (filterWeight === 100) return weight <= 100;
                    if (filterWeight === 250) return weight > 100 && weight <= 250;
                    if (filterWeight === 500) return weight > 250 && weight <= 500;
                    if (filterWeight === 1000) return weight > 500;
                    return true;
                });
            }
            
            // Sort products
            if (sortValue === 'price-asc') {
                filteredProducts.sort((a, b) => {
                    return parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price'));
                });
            } else if (sortValue === 'price-desc') {
                filteredProducts.sort((a, b) => {
                    return parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price'));
                });
            } else if (sortValue === 'popular') {
                filteredProducts.sort((a, b) => {
                    return parseInt(b.getAttribute('data-popular')) - parseInt(a.getAttribute('data-popular'));
                });
            }
            
            // Hide all products first
            productCards.forEach(card => {
                card.style.display = 'none';
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
            });
            
            // Show filtered products with animation
            setTimeout(() => {
                filteredProducts.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.display = 'block';
                        setTimeout(() => {
                            card.style.opacity = '1';
                            card.style.transform = 'translateY(0)';
                        }, 10);
                    }, index * 100);
                });
            }, 50);
        }
        
        typeFilter.addEventListener('change', filterProducts);
        weightFilter.addEventListener('change', filterProducts);
        sortFilter.addEventListener('change', filterProducts);
        
        // Tab functionality for buyer info with sliding indicator
        const tabBtns = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');
        const tabSlider = document.getElementById('tab-slider');
        
        // Initialize slider position
        function initTabSlider() {
            const activeTab = document.querySelector('.tab-btn.active');
            if (activeTab && tabSlider) {
                const width = activeTab.offsetWidth;
                const left = activeTab.offsetLeft;
                tabSlider.style.width = `${width}px`;
                tabSlider.style.left = `${left}px`;
            }
        }
        
        // Set active tab with slider animation
        function setActiveTab(btn) {
            const tabId = btn.getAttribute('data-tab');
            
            // Animate slider
            const width = btn.offsetWidth;
            const left = btn.offsetLeft;
            
            tabSlider.style.width = `${width}px`;
            tabSlider.style.left = `${left}px`;
            
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            document.getElementById(`${tabId}-content`).classList.add('active');
        }
        
        tabBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                setActiveTab(btn);
            });
        });
        
        // Initialize slider on load
        window.addEventListener('load', initTabSlider);
        window.addEventListener('resize', initTabSlider);
        
        // Cart functionality
        const cartIcon = document.querySelector('.cart-icon');
        const cartModal = document.querySelector('.cart-modal');
        const closeCart = document.querySelector('.close-cart');
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartCount = document.querySelector('.cart-count');
        const totalPriceElement = document.querySelector('.total-price');
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const checkoutBtn = document.getElementById('checkout-btn');
        const clearCartBtn = document.getElementById('clear-cart');
        
        // Initialize empty cart
        let cart = [];
        
        // Load cart from localStorage
        function loadCart() {
            const savedCart = localStorage.getItem('cart');
            if (savedCart) {
                try {
                    cart = JSON.parse(savedCart);
                } catch (e) {
                    console.error('Ошибка загрузки корзины:', e);
                    cart = [];
                }
            }
            updateCart();
        }
        
        // Save cart to localStorage
        function saveCart() {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
        
        // Update cart UI
        function updateCart() {
            // Update cart count
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
            cartCount.textContent = totalItems;
            
            // Update cart items
            cartItemsContainer.innerHTML = '';
            
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = `
                    <div class="empty-cart-message" style="text-align: center; padding: 40px 20px; color: #888;">
                        <i class="fas fa-shopping-cart" style="font-size: 3rem; margin-bottom: 20px; opacity: 0.3;"></i>
                        <p>Ваша корзина пуста</p>
                        <p style="font-size: 0.9rem; margin-top: 10px;">Добавьте товары из каталога</p>
                    </div>
                `;
                totalPriceElement.textContent = '0 ₽';
                clearCartBtn.style.display = 'none';
                saveCart();
                return;
            }
            
            clearCartBtn.style.display = 'block';
            
            let totalPrice = 0;
            
            cart.forEach(item => {
                const itemTotal = item.price * item.quantity * (item.weightMultiplier || 1);
                totalPrice += itemTotal;
                
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.setAttribute('data-id', item.id);
                cartItem.setAttribute('data-weight', item.weight);
                cartItem.innerHTML = `
                    <div class="cart-item-img">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">${(item.price * (item.weightMultiplier || 1)).toFixed(0)} ₽</div>
                        <div class="cart-item-weight">${item.weight}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="decrease-quantity" data-id="${item.id}" data-weight="${item.weight}">-</button>
                        <span class="item-quantity">${item.quantity}</span>
                        <button class="increase-quantity" data-id="${item.id}" data-weight="${item.weight}">+</button>
                        <button class="remove-item" data-id="${item.id}" data-weight="${item.weight}">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                `;
                
                cartItemsContainer.appendChild(cartItem);
            });
            
            totalPriceElement.textContent = `${totalPrice.toFixed(0)} ₽`;
            
            // Add event listeners to cart item buttons
            document.querySelectorAll('.decrease-quantity').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const id = parseInt(btn.getAttribute('data-id'));
                    const weight = btn.getAttribute('data-weight');
                    updateQuantity(id, weight, -1);
                });
            });
            
            document.querySelectorAll('.increase-quantity').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const id = parseInt(btn.getAttribute('data-id'));
                    const weight = btn.getAttribute('data-weight');
                    updateQuantity(id, weight, 1);
                });
            });
            
            document.querySelectorAll('.remove-item').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const id = parseInt(btn.getAttribute('data-id'));
                    const weight = btn.getAttribute('data-weight');
                    removeFromCart(id, weight);
                });
            });
            
            saveCart();
        }
        
        // Add to cart from product cards
        addToCartButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = parseInt(button.getAttribute('data-id'));
                const product = productsData[id];
                
                if (product) {
                    addToCart(product, 200, 0.2);
                    
                    // Show success animation
                    const originalHTML = button.innerHTML;
                    const originalBg = button.style.backgroundColor;
                    button.innerHTML = '<i class="fas fa-check"></i>';
                    button.style.backgroundColor = '#28a745';
                    
                    setTimeout(() => {
                        button.innerHTML = originalHTML;
                        button.style.backgroundColor = originalBg;
                    }, 1000);
                }
            });
        });
        
        // Add to cart function
        function addToCart(product, weight = 200, weightMultiplier = 0.2) {
            const weightText = `${weight} г`;
            
            // Check if item already in cart with same weight
            const existingItemIndex = cart.findIndex(item => 
                item.id === product.id && item.weight === weightText
            );
            
            if (existingItemIndex !== -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    weight: weightText,
                    weightMultiplier: weightMultiplier,
                    quantity: 1
                });
            }
            
            updateCart();
            
            // Show notification
            showNotification(`Товар "${product.name}" добавлен в корзину!`);
        }
        
        // Update quantity in cart
        function updateQuantity(id, weight, change) {
            const itemIndex = cart.findIndex(item => 
                item.id === id && item.weight === weight
            );
            
            if (itemIndex !== -1) {
                cart[itemIndex].quantity += change;
                
                if (cart[itemIndex].quantity <= 0) {
                    cart.splice(itemIndex, 1);
                }
                
                updateCart();
            }
        }
        
        // Remove from cart
        function removeFromCart(id, weight) {
            cart = cart.filter(item => !(item.id === id && item.weight === weight));
            updateCart();
            showNotification('Товар удален из корзины');
        }
        
        // Clear cart
        clearCartBtn.addEventListener('click', () => {
            if (cart.length > 0) {
                if (confirm('Вы уверены, что хотите очистить корзину?')) {
                    cart = [];
                    updateCart();
                    showNotification('Корзина очищена');
                }
            }
        });
        
        // Show notification
        function showNotification(message) {
            // Remove existing notification
            const existingNotification = document.querySelector('.notification');
            if (existingNotification) {
                existingNotification.remove();
            }
            
            // Create notification
            const notification = document.createElement('div');
            notification.className = 'notification';
            notification.textContent = message;
            notification.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: var(--primary-color);
                color: white;
                padding: 15px 20px;
                border-radius: var(--border-radius);
                z-index: 3000;
                box-shadow: var(--shadow-heavy);
                animation: slideIn 0.3s ease;
                font-weight: 500;
                max-width: 300px;
            `;
            
            document.body.appendChild(notification);
            
            // Remove notification after 3 seconds
            setTimeout(() => {
                notification.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => {
                    if (notification.parentNode) {
                        notification.parentNode.removeChild(notification);
                    }
                }, 300);
            }, 3000);
        }
        
        // Add notification animations
        const notificationStyle = document.createElement('style');
        notificationStyle.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(notificationStyle);
        
        // Toggle cart modal
        cartIcon.addEventListener('click', () => {
            cartModal.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
        
        closeCart.addEventListener('click', () => {
            cartModal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        overlay.addEventListener('click', () => {
            cartModal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Initialize cart on load
        document.addEventListener('DOMContentLoaded', loadCart);
        
        // Product modal functionality
        const productModal = document.getElementById('product-modal');
        const closeModal = document.querySelector('.close-modal');
        const productVideoBtns = document.querySelectorAll('.product-video-btn');
        const modalPlayBtn = document.querySelector('.modal-play-btn');
        const weightOptions = document.querySelectorAll('.weight-option');
        const quantityMinus = document.querySelector('.quantity-btn.minus');
        const quantityPlus = document.querySelector('.quantity-btn.plus');
        const quantityInput = document.querySelector('.quantity-input');
        const modalAddToCartBtn = document.getElementById('modal-add-to-cart');
        
        let currentProduct = null;
        let selectedWeight = 200;
        let selectedWeightMultiplier = 0.2;
        let quantity = 1;
        
        // Open product modal
        productVideoBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(btn.getAttribute('data-id'));
                currentProduct = productsData[productId];
                
                if (currentProduct) {
                    openProductModal(currentProduct);
                }
            });
        });
        
        // Product card click to open modal
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't open modal if clicking on video button or add to cart button
                if (!e.target.closest('.product-video-btn') && !e.target.closest('.add-to-cart')) {
                    const productId = parseInt(card.querySelector('.add-to-cart').getAttribute('data-id'));
                    currentProduct = productsData[productId];
                    
                    if (currentProduct) {
                        openProductModal(currentProduct);
                    }
                }
            });
        });
        
        // Open product modal function
        function openProductModal(product) {
            document.getElementById('modal-image').src = product.image;
            document.getElementById('modal-title').textContent = product.name;
            document.getElementById('modal-price').textContent = `${product.price} ₽/кг`;
            document.getElementById('modal-description').textContent = product.description;
            
            // Set features
            const featuresList = document.getElementById('modal-features');
            featuresList.innerHTML = '';
            product.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                featuresList.appendChild(li);
            });
            
            // Reset weight selection
            weightOptions.forEach(option => option.classList.remove('active'));
            weightOptions[0].classList.add('active');
            selectedWeight = 200;
            selectedWeightMultiplier = 0.2;
            
            // Reset quantity
            quantity = 1;
            quantityInput.value = quantity;
            
            // Show modal
            productModal.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Weight selection
        weightOptions.forEach(option => {
            option.addEventListener('click', () => {
                weightOptions.forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
                selectedWeight = parseInt(option.getAttribute('data-weight'));
                selectedWeightMultiplier = parseFloat(option.getAttribute('data-price-multiplier'));
            });
        });
        
        // Quantity controls
        quantityMinus.addEventListener('click', () => {
            if (quantity > 1) {
                quantity--;
                quantityInput.value = quantity;
            }
        });
        
        quantityPlus.addEventListener('click', () => {
            if (quantity < 10) {
                quantity++;
                quantityInput.value = quantity;
            }
        });
        
        // Add to cart from modal
        modalAddToCartBtn.addEventListener('click', () => {
            if (currentProduct) {
                // Add multiple items based on quantity
                for (let i = 0; i < quantity; i++) {
                    addToCart(currentProduct, selectedWeight, selectedWeightMultiplier);
                }
                
                // Show success message
                const originalText = modalAddToCartBtn.textContent;
                modalAddToCartBtn.innerHTML = '<i class="fas fa-check"></i> Добавлено';
                modalAddToCartBtn.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    modalAddToCartBtn.textContent = originalText;
                    modalAddToCartBtn.style.backgroundColor = '';
                }, 1500);
                
                // Close modal after delay
                setTimeout(() => {
                    productModal.classList.remove('active');
                    overlay.classList.remove('active');
                    document.body.style.overflow = '';
                }, 1000);
            }
        });
        
        // Play video in modal
        modalPlayBtn.addEventListener('click', () => {
            if (currentProduct) {
                alert('Здесь будет запущено видео о сыре ' + currentProduct.name);
            }
        });
        
        // Play video in about section
        const aboutPlayBtn = document.querySelector('.about-video .play-btn');
        aboutPlayBtn.addEventListener('click', () => {
            alert('Здесь будет запущено видео о процессе производства сыра');
        });
        
        // Close modal
        closeModal.addEventListener('click', () => {
            productModal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        overlay.addEventListener('click', () => {
            productModal.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        // Checkout button
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) {
                alert('Корзина пуста. Добавьте товары перед оформлением заказа.');
                return;
            }
            
            const totalPrice = cart.reduce((sum, item) => {
                return sum + (item.price * item.quantity * (item.weightMultiplier || 1));
            }, 0);
            
            alert(`Заказ оформлен! Сумма заказа: ${totalPrice.toFixed(0)} ₽\n\nВ реальном проекте здесь будет переход к форме оформления заказа с интеграцией платежной системы.`);
        });
        
        // 404 page functionality
        const show404Link = document.getElementById('show-404');
        
        show404Link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Hide all content
            document.querySelectorAll('section, footer, header').forEach(el => {
                el.style.display = 'none';
            });
            
            // Create and show 404 page
            const notFoundPage = document.createElement('div');
            notFoundPage.className = 'not-found';
            notFoundPage.innerHTML = `
                <div class="not-found-content">
                    <h1>404</h1>
                    <h2>Страница не найдена</h2>
                    <p>К сожалению, запрашиваемая страница не существует или была перемещена. Возможно, вы перешли по устаревшей ссылке или ввели неверный адрес.</p>
                    <div class="not-found-actions">
                        <a href="#" class="btn" id="go-home">На главную</a>
                        <a href="#products" class="btn btn-secondary" id="go-products">В каталог</a>
                    </div>
                </div>
            `;
            
            document.body.appendChild(notFoundPage);
            
            // Add event listeners to 404 page buttons
            setTimeout(() => {
                document.getElementById('go-home').addEventListener('click', (e) => {
                    e.preventDefault();
                    location.reload();
                });
                
                document.getElementById('go-products').addEventListener('click', (e) => {
                    e.preventDefault();
                    location.reload();
                });
            }, 100);
        });
        
        // Interactive elements hover effects
        document.querySelectorAll('.product-card, .info-card, .btn').forEach(el => {
            el.addEventListener('mouseenter', () => {
                el.style.transform = 'translateY(-5px)';
            });
            
            el.addEventListener('mouseleave', () => {
                el.style.transform = '';
            });
        });
        
        // Auto-switch tabs for demo purposes
        let currentTabIndex = 0;
        const tabButtonsArray = Array.from(tabBtns);
        
        function autoSwitchTabs() {
            if (document.querySelector('.buyer-info')) {
                currentTabIndex = (currentTabIndex + 1) % tabButtonsArray.length;
                setActiveTab(tabButtonsArray[currentTabIndex]);
                
                // Switch every 5 seconds
                setTimeout(autoSwitchTabs, 5000);
            }
        }
        
        // Start auto-switching after page loads (for demo)
        setTimeout(autoSwitchTabs, 5000);
    