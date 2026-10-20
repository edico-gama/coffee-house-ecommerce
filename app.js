        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        coffee: {
                            50: '#fdfbf7',
                            100: '#f7f2e8',
                            200: '#ebdcc3',
                            300: '#ddc297',
                            400: '#cc9e66',
                            500: '#be8142',
                            600: '#a36332',
                            700: '#834b29',
                            800: '#5c3520',
                            900: '#3a2013',
                            950: '#1e0f08',
                        },
                        cream: '#FDFBF7',
                        gold: '#D4AF37',
                        roast: '#2C1810',
                        artisan: '#3E5C43'
                    },
                    fontFamily: {
                        serif: ['Playfair Display', 'serif'],
                        sans: ['Inter', 'sans-serif'],
                    }
                }
            }
        }

        /* ==========================================================================
           PRODUCT DATA STORE
           ========================================================================== */
        const PRODUCTS = [
            {
                id: 'coffee-1',
                name: 'Bourbon Amarelo Sul de Minas',
                category: 'graos',
                price: 48.90,
                rating: 4.9,
                badge: 'SCA 86.5',
                image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=800&auto=format&fit=crop',
                notes: 'Caramelo, Chocolate ao Leite & Acidez Cítrica Suave',
                altitude: '1.250 metros',
                process: 'Natural',
                origin: 'Carmo de Minas, MG',
                description: 'Um clássico brasileiro inconfundível. Corpo aveludado com doçura natural marcante de caramelo e finalização limpa e prazerosa.',
                isCoffee: true
            },
            {
                id: 'coffee-2',
                name: 'Catuaí Vermelho Chapada Diamantina',
                category: 'graos',
                price: 52.00,
                rating: 4.8,
                badge: 'SCA 87.0',
                image: 'https://images.unsplash.com/photo-1587734195503-904fca47e0e9?q=80&w=800&auto=format&fit=crop',
                notes: 'Frutas Vermelhas, Mel & Acidez Brilhante',
                altitude: '1.380 metros',
                process: 'CD (Cereja Descascado)',
                origin: 'Piatã, Chapada Diamantina - BA',
                description: 'Cultivado nas altitudes baianas, este café impressiona pelo aroma floral exuberante e sabor refrescante de frutas vermelhas e mel.',
                isCoffee: true
            },
            {
                id: 'coffee-3',
                name: 'Reserva Especial Mantiqueira',
                category: 'moidos',
                price: 44.50,
                rating: 4.7,
                badge: 'SCA 85.0',
                image: 'https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?q=80&w=800&auto=format&fit=crop',
                notes: 'Nozes, Cacau 70% & Toque de Rapadura',
                altitude: '1.100 metros',
                process: 'Natural',
                origin: 'Serra da Mantiqueira, MG',
                description: 'Ideal para o café coado do dia a dia. Encorpado, reconfortante e com acidez baixa perfeitamente equilibrada.',
                isCoffee: true
            },
            {
                id: 'coffee-4',
                name: 'Geisha Microlote Raro (Edição Limitada)',
                category: 'graos',
                price: 89.00,
                rating: 5.0,
                badge: 'SCA 90.5',
                image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=800&auto=format&fit=crop',
                notes: 'Jasmin, Bergamota & Chá Branco',
                altitude: '1.450 metros',
                process: 'Fermentação Anaeróbica',
                origin: 'Caconde, SP',
                description: 'Uma joia rara da cafeicultura moderna. Notas florais extremamente complexas com elegância comparada aos melhores vinhos finos.',
                isCoffee: true
            },
            {
                id: 'coffee-5',
                name: 'Cápsulas Espressos Seleção (10 Unidades)',
                category: 'capsulas',
                price: 32.90,
                rating: 4.6,
                badge: 'Compatível Nespresso®',
                image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
                notes: 'Intenso, Crema Densa & Avelã',
                altitude: '1.200 metros',
                process: 'Blend Especial',
                origin: 'Blend Sul de Minas & Cerrado',
                description: 'Cápsulas 100% compostáveis em alumínio que preservam o aroma fresco e a crema espessa do verdadeiro espresso italiano.',
                isCoffee: false
            },
            {
                id: 'coffee-6',
                name: 'Prensa Francesa de Vidro Borossilicato (600ml)',
                category: 'acessorios',
                price: 119.00,
                rating: 4.9,
                badge: 'Acessório',
                image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=800&auto=format&fit=crop',
                notes: 'Extração por Infusão Completa',
                altitude: 'N/A',
                process: 'Aço Inox & Vidro',
                origin: 'Coffee House Gear',
                description: 'Prensa francesa com filtro duplo de aço inoxidável. Não necessita de filtro de papel, mantendo os óleos essenciais do café.',
                isCoffee: false
            },
            {
                id: 'coffee-7',
                name: 'Moedor de Café Manual em Inox com Mós de Cerâmica',
                category: 'acessorios',
                price: 149.90,
                rating: 4.8,
                badge: 'Acessório',
                image: 'https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?q=80&w=800&auto=format&fit=crop',
                notes: 'Ajuste Fino para Todos os Métodos',
                altitude: 'N/A',
                process: 'Mós Cerâmicas',
                origin: 'Coffee House Gear',
                description: 'Moa seus grãos na hora com precisão e consistência. Regulagem fácil desde moagem fina para espresso até grossa para prensa.',
                isCoffee: false
            },
            {
                id: 'coffee-8',
                name: 'Café Descafeinado Natural - Processo Swiss Water',
                category: 'moidos',
                price: 54.00,
                rating: 4.7,
                badge: 'SCA 84.5',
                image: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?q=80&w=800&auto=format&fit=crop',
                notes: 'Doce de Leite, Amêndoa & Sem Cafeína',
                altitude: '1.150 metros',
                process: 'Swiss Water (Sem Química)',
                origin: 'Cerrado Mineiro, MG',
                description: 'Todo o sabor e aroma do café especial sem os efeitos da cafeína. Decapeinado de forma 100% natural utilizando apenas água pura.',
                isCoffee: true
            }
        ];

        /* ==========================================================================
           STATE MANAGEMENT
           ========================================================================== */
        let cart = [];
        let favorites = [];
        let currentFilter = 'todos';
        let currentSort = 'popular';
        let appliedDiscount = 0;
        let appliedShipping = 0;
        let selectedProductForModal = null;

        /* ==========================================================================
           INITIALIZATION & EVENT LISTENERS
           ========================================================================== */
        document.addEventListener('DOMContentLoaded', () => {
            renderProducts();
            updateCartUI();

            // Category Filter Events
            document.querySelectorAll('.cat-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    document.querySelectorAll('.cat-btn').forEach(b => {
                        b.classList.remove('bg-coffee-800', 'text-amber-50', 'active');
                        b.classList.add('bg-coffee-100/80', 'text-coffee-800');
                    });
                    const target = e.currentTarget;
                    target.classList.add('bg-coffee-800', 'text-amber-50', 'active');
                    target.classList.remove('bg-coffee-100/80', 'text-coffee-800');

                    currentFilter = target.getAttribute('data-category');
                    renderProducts();
                });
            });

            // Sorting Event
            document.getElementById('sort-select').addEventListener('change', (e) => {
                currentSort = e.target.value;
                renderProducts();
            });

            // Search Filter
            const handleSearch = (e) => {
                const term = e.target.value.toLowerCase().trim();
                renderProducts(term);
            };
            document.getElementById('search-input').addEventListener('input', handleSearch);
            document.getElementById('search-input-mobile').addEventListener('input', handleSearch);

            // Drawer Cart Toggles
            document.getElementById('cart-btn').addEventListener('click', openCartDrawer);
            document.getElementById('close-cart-btn').addEventListener('click', closeCartDrawer);
            document.getElementById('cart-drawer-overlay').addEventListener('click', closeCartDrawer);

            // Mobile Menu Toggle
            document.getElementById('mobile-menu-btn').addEventListener('click', () => {
                document.getElementById('mobile-menu').classList.toggle('hidden');
            });

            // Product Modal Toggles
            document.getElementById('close-modal-btn').addEventListener('click', closeModal);
            document.getElementById('product-modal-overlay').addEventListener('click', (e) => {
                if (e.target.id === 'product-modal-overlay') closeModal();
            });

            // Checkout Modal Toggles
            document.getElementById('checkout-btn').addEventListener('click', openCheckoutModal);
            document.getElementById('close-checkout-btn').addEventListener('click', closeCheckoutModal);

            // Coupon & Shipping
            document.getElementById('apply-coupon-btn').addEventListener('click', applyCoupon);
            document.getElementById('calc-cep-btn').addEventListener('click', calculateShipping);
        });

        /* ==========================================================================
           RENDER PRODUCTS GRID
           ========================================================================== */
        function renderProducts(searchTerm = '') {
            const grid = document.getElementById('products-grid');
            grid.innerHTML = '';

            let filtered = PRODUCTS.filter(p => {
                const matchesCategory = (currentFilter === 'todos') || (p.category === currentFilter);
                const matchesSearch = p.name.toLowerCase().includes(searchTerm) || 
                                      p.notes.toLowerCase().includes(searchTerm) || 
                                      p.origin.toLowerCase().includes(searchTerm);
                return matchesCategory && matchesSearch;
            });

            // Sort logic
            if (currentSort === 'price-low') {
                filtered.sort((a, b) => a.price - b.price);
            } else if (currentSort === 'price-high') {
                filtered.sort((a, b) => b.price - a.price);
            } else if (currentSort === 'rating') {
                filtered.sort((a, b) => b.rating - a.rating);
            }

            if (filtered.length === 0) {
                grid.innerHTML = `
                    <div class="col-span-full py-12 text-center text-coffee-600">
                        <i class="fa-solid fa-mug-saucer text-4xl mb-3 text-coffee-300"></i>
                        <p class="text-sm font-medium">Nenhum café ou acessório encontrado para essa busca.</p>
                    </div>
                `;
                return;
            }

            filtered.forEach(product => {
                const isFav = favorites.includes(product.id);
                const card = document.createElement('div');
                card.className = "bg-white border border-coffee-200/80 rounded-2xl overflow-hidden shadow-sm coffee-card-hover flex flex-col justify-between relative group";

                card.innerHTML = `
                    <div class="relative overflow-hidden cursor-pointer h-52 bg-coffee-100" onclick="openProductModal('${product.id}')">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
                        <span class="absolute top-3 left-3 bg-coffee-950/80 backdrop-blur-md text-gold text-[10px] font-bold px-2.5 py-1 rounded-full border border-gold/30">
                            ${product.badge}
                        </span>
                        <button onclick="event.stopPropagation(); toggleFavorite('${product.id}')" class="absolute top-3 right-3 bg-white/80 hover:bg-white text-coffee-900 w-8 h-8 rounded-full flex items-center justify-center shadow transition-colors">
                            <i class="${isFav ? 'fa-solid text-rose-600' : 'fa-regular'} fa-heart text-sm"></i>
                        </button>
                    </div>

                    <div class="p-5 flex-grow flex flex-col justify-between space-y-3">
                        <div>
                            <div class="flex items-center justify-between text-[11px] text-coffee-500 font-medium mb-1">
                                <span>${product.origin}</span>
                                <span class="text-gold flex items-center gap-1"><i class="fa-solid fa-star"></i> ${product.rating.toFixed(1)}</span>
                            </div>
                            <h3 onclick="openProductModal('${product.id}')" class="font-serif font-bold text-coffee-950 text-base leading-snug hover:text-coffee-600 cursor-pointer transition-colors">
                                ${product.name}
                            </h3>
                            <p class="text-xs text-coffee-600 font-light mt-1.5 line-clamp-2">
                                🍃 ${product.notes}
                            </p>
                        </div>

                        ${product.isCoffee ? `
                            <div>
                                <label class="block text-[10px] font-bold uppercase tracking-wider text-coffee-700 mb-1">Moagem:</label>
                                <select id="grind-${product.id}" class="w-full bg-coffee-50 border border-coffee-200 text-coffee-900 text-xs rounded-lg p-1.5 focus:outline-none focus:border-coffee-500 font-medium">
                                    <option value="Grãos Inteiros">Grãos Inteiros</option>
                                    <option value="Filtro V60">Filtro / V60</option>
                                    <option value="Prensa Francesa">Prensa Francesa</option>
                                    <option value="Espresso">Espresso</option>
                                </select>
                            </div>
                        ` : ''}

                        <div class="flex items-center justify-between pt-2 border-t border-coffee-100">
                            <div>
                                <span class="text-[10px] text-coffee-500 block uppercase">Preço</span>
                                <span class="text-lg font-bold font-serif text-coffee-900">R$ ${product.price.toFixed(2).replace('.', ',')}</span>
                            </div>
                            <button onclick="addToCartFromCard('${product.id}')" class="bg-coffee-800 hover:bg-coffee-900 text-amber-50 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm">
                                <i class="fa-solid fa-plus text-[10px]"></i> Adicionar
                            </button>
                        </div>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        /* ==========================================================================
           PRODUCT MODAL LOGIC
           ========================================================================== */
        function openProductModal(productId) {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) return;
            selectedProductForModal = product;

            document.getElementById('modal-img').src = product.image;
            document.getElementById('modal-badge').innerText = product.badge;
            document.getElementById('modal-category').innerText = product.category.toUpperCase();
            document.getElementById('modal-title').innerText = product.name;
            document.getElementById('modal-price').innerText = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
            document.getElementById('modal-desc').innerText = product.description;

            // Rating Stars
            document.getElementById('modal-rating').innerHTML = `
                <i class="fa-solid fa-star"></i>
                <span class="font-bold text-coffee-900 text-xs ml-1">${product.rating.toFixed(1)}</span>
                <span class="text-coffee-500 text-[11px] font-normal">(48 avaliações de clientes)</span>
            `;

            // Specs Table
            const specsBox = document.getElementById('modal-specs');
            specsBox.innerHTML = `
                <div class="flex justify-between"><strong>Origem:</strong> <span>${product.origin}</span></div>
                <div class="flex justify-between"><strong>Altitude:</strong> <span>${product.altitude}</span></div>
                <div class="flex justify-between"><strong>Processamento:</strong> <span>${product.process}</span></div>
                <div class="flex justify-between"><strong>Perfil Sensorial:</strong> <span>${product.notes}</span></div>
            `;

            // Grind Select Toggle
            const grindWrapper = document.getElementById('modal-grind-wrapper');
            if (product.isCoffee) {
                grindWrapper.classList.remove('hidden');
            } else {
                grindWrapper.classList.add('hidden');
            }

            document.getElementById('modal-add-btn').onclick = () => {
                const grind = product.isCoffee ? document.getElementById('modal-grind-select').value : 'N/A';
                addToCart(product.id, grind);
                closeModal();
            };

            document.getElementById('product-modal-overlay').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('product-modal-overlay').classList.add('hidden');
        }

        /* ==========================================================================
           CART OPERATIONS
           ========================================================================== */
        function addToCartFromCard(productId) {
            const product = PRODUCTS.find(p => p.id === productId);
            let grind = 'N/A';
            if (product && product.isCoffee) {
                const grindSelect = document.getElementById(`grind-${productId}`);
                if (grindSelect) grind = grindSelect.value;
            }
            addToCart(productId, grind);
        }

        function addToCart(productId, grind = 'Grãos Inteiros') {
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) return;

            const existingIndex = cart.findIndex(item => item.id === productId && item.grind === grind);

            if (existingIndex > -1) {
                cart[existingIndex].quantity += 1;
            } else {
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    grind: grind,
                    quantity: 1
                });
            }

            updateCartUI();
            showToast(`"${product.name}" adicionado ao carrinho!`);
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCartUI();
        }

        function changeQuantity(index, delta) {
            cart[index].quantity += delta;
            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
            updateCartUI();
        }

        function updateCartUI() {
            const cartContainer = document.getElementById('cart-items-container');
            const cartBadge = document.getElementById('cart-badge');
            
            // Badge Count
            const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
            cartBadge.innerText = totalCount;

            // Render Cart Drawer Items
            cartContainer.innerHTML = '';

            if (cart.length === 0) {
                cartContainer.innerHTML = `
                    <div class="h-full flex flex-col items-center justify-center text-center text-coffee-500 py-12">
                        <i class="fa-solid fa-basket-shopping text-5xl mb-3 text-coffee-300"></i>
                        <p class="font-serif font-bold text-coffee-900 text-lg">Seu carrinho está vazio</p>
                        <p class="text-xs text-coffee-600 mt-1 max-w-xs">Explore nossa loja e descubra grãos artesanais incríveis.</p>
                    </div>
                `;
            } else {
                cart.forEach((item, index) => {
                    const itemEl = document.createElement('div');
                    itemEl.className = "flex items-center gap-3 bg-white p-3 rounded-xl border border-coffee-200/80 shadow-sm";
                    itemEl.innerHTML = `
                        <img src="${item.image}" alt="${item.name}" class="w-16 h-16 rounded-lg object-cover">
                        <div class="flex-grow min-w-0">
                            <h4 class="font-serif font-bold text-xs text-coffee-950 truncate">${item.name}</h4>
                            <p class="text-[10px] text-coffee-600 mt-0.5">Moagem: ${item.grind}</p>
                            <span class="text-xs font-bold text-coffee-800 font-serif">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                        </div>
                        <div class="flex items-center gap-1.5 bg-coffee-100 rounded-lg p-1">
                            <button onclick="changeQuantity(${index}, -1)" class="w-5 h-5 rounded bg-white text-coffee-900 font-bold text-xs flex items-center justify-center hover:bg-coffee-200">-</button>
                            <span class="text-xs font-bold w-4 text-center text-coffee-950">${item.quantity}</span>
                            <button onclick="changeQuantity(${index}, 1)" class="w-5 h-5 rounded bg-white text-coffee-900 font-bold text-xs flex items-center justify-center hover:bg-coffee-200">+</button>
                        </div>
                        <button onclick="removeFromCart(${index})" class="text-coffee-400 hover:text-rose-600 text-xs p-1">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    `;
                    cartContainer.appendChild(itemEl);
                });
            }

            // Calculate Breakdown
            const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            const discountValue = subtotal * appliedDiscount;
            const total = Math.max(0, subtotal - discountValue + appliedShipping);

            document.getElementById('cart-subtotal').innerText = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
            document.getElementById('cart-discount').innerText = `- R$ ${discountValue.toFixed(2).replace('.', ',')}`;
            document.getElementById('cart-shipping').innerText = appliedShipping === 0 ? 'Grátis' : `R$ ${appliedShipping.toFixed(2).replace('.', ',')}`;
            document.getElementById('cart-total').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
        }

        function openCartDrawer() {
            document.getElementById('cart-drawer-overlay').classList.remove('hidden');
            document.getElementById('cart-drawer').classList.remove('translate-x-full');
        }

        function closeCartDrawer() {
            document.getElementById('cart-drawer-overlay').classList.add('hidden');
            document.getElementById('cart-drawer').classList.add('translate-x-full');
        }

        /* ==========================================================================
           COUPON & SHIPPING LOGIC
           ========================================================================== */
        function applyCoupon() {
            const input = document.getElementById('coupon-input').value.trim().toUpperCase();
            const msg = document.getElementById('coupon-message');

            if (input === 'COFFEE10') {
                appliedDiscount = 0.10;
                msg.innerText = '✅ Cupom COFFEE10 aplicado (10% OFF)';
                msg.className = 'text-[11px] text-emerald-700 font-bold block';
            } else {
                appliedDiscount = 0;
                msg.innerText = '❌ Cupom inválido ou expirado';
                msg.className = 'text-[11px] text-rose-600 font-bold block';
            }
            updateCartUI();
        }

        function calculateShipping() {
            const cep = document.getElementById('cep-input').value.trim();
            const info = document.getElementById('shipping-info');

            if (cep.length >= 8) {
                const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
                if (subtotal >= 150) {
                    appliedShipping = 0;
                    info.innerText = '🚚 Parabéns! Você ganhou Frete Grátis!';
                    info.className = 'text-[11px] text-emerald-700 font-bold block';
                } else {
                    appliedShipping = 14.90;
                    info.innerText = '📦 Frete padrão estimado: R$ 14,90 (Entrega em 3 dias)';
                    info.className = 'text-[11px] text-coffee-700 font-medium block';
                }
            } else {
                info.innerText = 'Digite um CEP válido com 8 dígitos.';
                info.className = 'text-[11px] text-rose-600 block';
            }
            updateCartUI();
        }

        /* ==========================================================================
           SUBSCRIPTION CLUB LOGIC
           ========================================================================== */
        function subscribeClub(planName, price) {
            cart.push({
                id: `club-${planName.toLowerCase()}`,
                name: `Assinatura - ${planName}`,
                price: price,
                image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=800&auto=format&fit=crop',
                grind: 'Seleção do Barista',
                quantity: 1
            });
            updateCartUI();
            openCartDrawer();
            showToast(`${planName} adicionado ao carrinho!`);
        }

        /* ==========================================================================
           QUIZ LOGIC
           ========================================================================== */
        let quizAnswers = {};

        function selectQuizOption(step, value) {
            quizAnswers[step] = value;

            if (step === 1) {
                document.getElementById('quiz-step-1').classList.add('hidden');
                document.getElementById('quiz-step-2').classList.remove('hidden');
            } else if (step === 2) {
                document.getElementById('quiz-step-2').classList.add('hidden');
                showQuizResult();
            }
        }

        function showQuizResult() {
            const resultBox = document.getElementById('quiz-result');
            const recName = document.getElementById('quiz-recommended-name');
            const recDesc = document.getElementById('quiz-recommended-desc');
            const addBtn = document.getElementById('quiz-add-btn');

            let recommendedProduct = PRODUCTS[0];

            if (quizAnswers[1] === 'doce') {
                recommendedProduct = PRODUCTS.find(p => p.id === 'coffee-1') || PRODUCTS[0];
            } else if (quizAnswers[1] === 'frutado') {
                recommendedProduct = PRODUCTS.find(p => p.id === 'coffee-2') || PRODUCTS[1];
            } else {
                recommendedProduct = PRODUCTS.find(p => p.id === 'coffee-3') || PRODUCTS[2];
            }

            recName.innerText = recommendedProduct.name;
            recDesc.innerText = `Combina perfeitamente com seu gosto por notas ${recommendedProduct.notes}.`;

            addBtn.onclick = () => {
                addToCart(recommendedProduct.id, 'Grãos Inteiros');
                showToast('Recomendação do Quiz adicionada!');
            };

            resultBox.classList.remove('hidden');
        }

        function resetQuiz() {
            quizAnswers = {};
            document.getElementById('quiz-result').classList.add('hidden');
            document.getElementById('quiz-step-2').classList.add('hidden');
            document.getElementById('quiz-step-1').classList.remove('hidden');
        }

        /* ==========================================================================
           CHECKOUT MODAL & SIMULATION
           ========================================================================== */
        function openCheckoutModal() {
            if (cart.length === 0) {
                showToast('Adicione produtos ao carrinho antes de finalizar!');
                return;
            }

            closeCartDrawer();
            const summaryContainer = document.getElementById('checkout-summary-items');
            summaryContainer.innerHTML = '';

            let subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
            let discountValue = subtotal * appliedDiscount;
            let total = Math.max(0, subtotal - discountValue + appliedShipping);

            cart.forEach(item => {
                const row = document.createElement('div');
                row.className = 'flex justify-between items-center';
                row.innerHTML = `
                    <span>${item.quantity}x ${item.name} (${item.grind})</span>
                    <span class="font-bold">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                `;
                summaryContainer.appendChild(row);
            });

            document.getElementById('checkout-final-total').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
            document.getElementById('checkout-modal-overlay').classList.remove('hidden');
        }

        function closeCheckoutModal() {
            document.getElementById('checkout-modal-overlay').classList.add('hidden');
        }

        function togglePaymentView(type) {
            if (type === 'pix') {
                document.getElementById('pix-payment-box').classList.remove('hidden');
                document.getElementById('card-payment-box').classList.add('hidden');
            } else {
                document.getElementById('pix-payment-box').classList.add('hidden');
                document.getElementById('card-payment-box').classList.remove('hidden');
            }
        }

        function handleCheckoutSubmit(e) {
            e.preventDefault();
            closeCheckoutModal();

            // Clear Cart
            cart = [];
            appliedDiscount = 0;
            appliedShipping = 0;
            updateCartUI();

            showToast('🎉 Pedido realizado com sucesso! Enviamos a confirmação para seu e-mail.');
        }

        /* ==========================================================================
           FAVORITES TOGGLE
           ========================================================================== */
        function toggleFavorite(productId) {
            const index = favorites.indexOf(productId);
            if (index > -1) {
                favorites.splice(index, 1);
                showToast('Removido dos favoritos.');
            } else {
                favorites.push(productId);
                showToast('Adicionado aos favoritos!');
            }

            const favBadge = document.getElementById('fav-count');
            favBadge.innerText = favorites.length;
            if (favorites.length > 0) {
                favBadge.classList.remove('hidden');
            } else {
                favBadge.classList.add('hidden');
            }

            renderProducts();
        }

        /* ==========================================================================
           TOAST NOTIFICATION UTILITY
           ========================================================================== */
        function showToast(message) {
            const toast = document.getElementById('toast');
            document.getElementById('toast-msg').innerText = message;

            toast.classList.remove('translate-y-20', 'opacity-0');
            toast.classList.add('translate-y-0', 'opacity-100');

            setTimeout(() => {
                toast.classList.remove('translate-y-0', 'opacity-100');
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
        }
