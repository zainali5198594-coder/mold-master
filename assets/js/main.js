const WHATSAPP='923338748486';
const CART_KEY='moldMasterCart';
const WISHLIST_KEY='moldMasterWishlist';

// MOLD MASTER verified/generated local image assets.
// 
const products=[
{id:1,name:'12-Piece Nozzle Set',category:'Icing Nozzles',price:1699,old:1999,tag:'Bestseller',image:'assets/images/product-12-piece-nozzle-set.jpg'},
{id:2,name:'Premium Cake Mold',category:'Cake Molds',price:899,old:1250,tag:'Sale',image:'assets/images/product-premium-cake-mold.jpg'},
{id:3,name:'Silicone Fondant Mold',category:'Silicone Molds',price:599,old:850,tag:'Popular',image:'assets/images/product-silicone-fondant-mold.jpg'},
{id:4,name:'Fondant Decorating Tool Kit',category:'Fondant Tools',price:1199,old:1499,tag:'New',image:'assets/images/product-fondant-decorating-tool-kit.jpg'},
{id:5,name:'Creative Cookie Cutter Set',category:'Cookie Cutters',price:499,old:699,tag:'Sale',image:'assets/images/category-cookie-cutters.jpg'},
{id:6,name:'Cake Scraper Set',category:'Cake Decorating Tools',price:759,old:950,tag:'Popular',image:'assets/images/category-decorating-tools.jpg'},
{id:7,name:'Muffin & Cupcake Pan',category:'Baking Trays & Pans',price:1350,old:1700,tag:'New',image:'assets/images/category-baking-accessories.jpg'},
{id:8,name:'Can & Bottle Opener',category:'Baking Accessories',price:899,old:null,tag:'New',image:'assets/images/can-opener.jpg'},
{id:9,name:'Round Cake Baking Mold',category:'Cake Molds',price:null,old:null,tag:'Catalog',image:'assets/images/category-cake-molds.jpg'},
{id:10,name:'Heart Shape Cake Mold',category:'Cake Molds',price:null,old:null,tag:'Catalog',image:'assets/images/category-cake-molds.jpg'},
{id:11,name:'Mini Silicone Chocolate Mold',category:'Chocolate & Candy Molds',price:null,old:null,tag:'Catalog',image:'assets/images/category-silicone-molds.jpg'},
{id:12,name:'Alphabet Silicone Mold A-Z',category:'Silicone Molds',price:null,old:null,tag:'Catalog',image:'assets/images/category-silicone-molds.jpg'},
{id:13,name:'Flower Fondant Cutter Set',category:'Fondant & Cookie Cutters',price:null,old:null,tag:'Catalog',image:'assets/images/category-cookie-cutters.jpg'},
{id:14,name:'Star Plunger Cutter Set',category:'Fondant & Cookie Cutters',price:null,old:null,tag:'Catalog',image:'assets/images/category-cookie-cutters.jpg'},
{id:15,name:'Fondant Texture Tool Set',category:'Fondant Work Tools',price:null,old:null,tag:'Catalog',image:'assets/images/category-fondant-tools.jpg'},
{id:16,name:'Icing Smoother & Scraper',category:'Cake Decorating Tools',price:null,old:null,tag:'Catalog',image:'assets/images/category-decorating-tools.jpg'},
{id:17,name:'Cake Decorating Spatula Set',category:'Cake Decorating Tools',price:null,old:null,tag:'Catalog',image:'assets/images/category-decorating-tools.jpg'},
{id:18,name:'Cake Turntable',category:'Cake Rotating Turntables',price:null,old:null,tag:'Catalog',image:'assets/images/category-decorating-tools.jpg'},
{id:19,name:'Piping Bag Set',category:'Piping Bags',price:null,old:null,tag:'Catalog',image:'assets/images/category-baking-accessories.jpg'},
{id:20,name:'Measuring Cups & Spoons Set',category:'Measuring Tools',price:null,old:null,tag:'Catalog',image:'assets/images/category-baking-accessories.jpg'},
{id:21,name:'Rolling Pin',category:'Fondant Work Tools',price:null,old:null,tag:'Catalog',image:'assets/images/category-fondant-tools.jpg'},
{id:22,name:'Icing Comb Set',category:'Cake Decorating Tools',price:null,old:null,tag:'Catalog',image:'assets/images/category-decorating-tools.jpg'},
{id:23,name:'Muffin Cupcake Liner Set',category:'Cupcake Accessories',price:null,old:null,tag:'Catalog',image:'assets/images/category-baking-accessories.jpg'},
{id:24,name:'Baking Gloves',category:'Baking Accessories',price:null,old:null,tag:'Catalog',image:'assets/images/category-baking-accessories.jpg'}
];

function money(n){return n==null?'Price on WhatsApp':'Rs. '+Number(n).toLocaleString('en-PK')}
function getCart(){try{return JSON.parse(localStorage.getItem(CART_KEY)||'[]')}catch{return[]}}
function saveCart(c){localStorage.setItem(CART_KEY,JSON.stringify(c));updateCartCount()}
function getWishlist(){try{return JSON.parse(localStorage.getItem(WISHLIST_KEY)||'[]')}catch{return[]}}
function updateCartCount(){const n=getCart().reduce((s,x)=>s+Number(x.qty||0),0);document.querySelectorAll('#cartCount').forEach(e=>e.textContent=n)}
function addToCart(id,qty=1){const p=products.find(x=>x.id===Number(id));if(!p)return;if(p.price==null){window.open(whatsappUrl(orderMessage(p)),'_blank','noopener');return;}const c=getCart(),i=c.find(x=>x.id===p.id);if(i)i.qty=Math.min(99,i.qty+qty);else c.push({...p,qty:Math.max(1,qty)});saveCart(c);toast(p.name+' added to cart')}
function removeFromCart(id){saveCart(getCart().filter(x=>x.id!==Number(id)));toast('Item removed from cart')}
function setCartQty(id,qty){const c=getCart(),i=c.find(x=>x.id===Number(id));if(!i)return;i.qty=Math.max(1,Math.min(99,Number(qty)||1));saveCart(c)}
function cartSubtotal(){return getCart().reduce((s,x)=>s+x.price*x.qty,0)}
function productLink(id){return `product.html?id=${id}`}
function whatsappUrl(message){return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`}
function orderMessage(p){return 'Assalam o Alaikum MOLD MASTER, I want to ask about '+p.name+(p.price!=null?' (listed at '+money(p.price)+')':'.')}
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
function productVisual(p){return `<img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="product-placeholder fallback"><span>IMAGE</span><small>Image unavailable</small></div>`}
function card(p){const w=getWishlist().includes(p.id);const action=p.price==null?'Ask Price':'Add to Cart';return `<article class="product-card reveal"><a class="product-img" href="${productLink(p.id)}">${productVisual(p)}<span class="product-tag">${escapeHtml(p.tag||'')}</span></a><div class="product-info"><p>${escapeHtml(p.category)}</p><h3><a href="${productLink(p.id)}">${escapeHtml(p.name)}</a></h3><div class="price-row"><span class="price">${money(p.price)}</span>${p.old?`<span class="old">${money(p.old)}</span>`:''}</div><div class="card-actions"><button class="mini-btn" onclick="addToCart(${p.id})">${action}</button><button class="wish-btn ${w?'active':''}" aria-label="Wishlist" onclick="toggleWishlist(${p.id})">${w?'♥':'♡'}</button></div></div></article>`}
function renderFeatured(){const e=document.getElementById('featuredProducts');if(e)e.innerHTML=products.slice(0,8).map(card).join('')}
function renderShop(){const e=document.getElementById('products');if(!e)return;let list=[...products];const q=(document.getElementById('search')?.value||new URLSearchParams(location.search).get('q')||'').trim().toLowerCase(),cat=document.getElementById('category')?.value||new URLSearchParams(location.search).get('category')||'',sort=document.getElementById('sort')?.value||'default';if(q)list=list.filter(p=>(p.name+' '+p.category+' '+(p.tag||'')).toLowerCase().includes(q));if(cat)list=list.filter(p=>p.category===cat);if(sort==='low')list.sort((a,b)=>a.price-b.price);if(sort==='high')list.sort((a,b)=>b.price-a.price);if(sort==='name')list.sort((a,b)=>a.name.localeCompare(b.name));e.innerHTML=list.length?list.map(card).join(''):`<div class="empty-state"><h3>No products found</h3><p>Try another search or category.</p><a class="btn btn-dark" href="shop.html">View all products</a></div>`;const count=document.getElementById('resultCount');if(count)count.textContent=`${list.length} product${list.length===1?'':'s'}`}
function toggleWishlist(id){const w=getWishlist(),n=Number(id),i=w.indexOf(n);if(i>=0)w.splice(i,1);else w.push(n);localStorage.setItem(WISHLIST_KEY,JSON.stringify(w));renderFeatured();renderShop();toast(i>=0?'Removed from wishlist':'Added to wishlist')}
function renderCart(){const e=document.getElementById('cartItems');if(!e)return;const c=getCart();e.innerHTML=c.length?c.map(x=>`<article class="cart-item reveal"><div class="cart-thumb">${productVisual(x)}</div><div class="cart-main"><h3>${escapeHtml(x.name)}</h3><p>${escapeHtml(x.category)}</p><strong>${money(x.price)}</strong></div><div class="qty"><button onclick="setCartQty(${x.id},${x.qty-1});renderCart()">−</button><span>${x.qty}</span><button onclick="setCartQty(${x.id},${x.qty+1});renderCart()">+</button></div><div class="cart-line">${money(x.price*x.qty)}</div><button class="remove-btn" onclick="removeFromCart(${x.id});renderCart()">Remove</button></article>`).join(''):`<div class="empty-state"><h2>Your cart is empty.</h2><p>Add baking tools to continue.</p><a class="btn btn-dark" href="shop.html">Continue Shopping</a></div>`;const sub=cartSubtotal();document.querySelectorAll('#cartSubtotal').forEach(x=>x.textContent=money(sub));document.querySelectorAll('#cartTotal').forEach(x=>x.textContent=money(sub))}
function toast(text){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';document.body.appendChild(t)}t.textContent=text;t.classList.add('show');clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>t.classList.remove('show'),1800)}
function setupMenu(){const b=document.querySelector('.menu'),nav=document.querySelector('.nav nav');if(!b||!nav)return;b.setAttribute('aria-expanded','false');b.addEventListener('click',()=>{const o=nav.classList.toggle('open');b.setAttribute('aria-expanded',String(o))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');b.setAttribute('aria-expanded','false')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');b.setAttribute('aria-expanded','false')}})}
function setupHeader(){const h=document.querySelector('.header');if(!h)return;const u=()=>h.classList.toggle('scrolled',scrollY>12);u();addEventListener('scroll',u,{passive:true})}
function setupSearch(){const i=document.getElementById('search');if(i){i.addEventListener('input',renderShop);i.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();renderShop()}})}const c=document.getElementById('category'),s=document.getElementById('sort');if(c)c.addEventListener('change',renderShop);if(s)s.addEventListener('change',renderShop)}
function setupInteractions(){document.addEventListener('click',e=>{const b=e.target.closest('.btn,.mini-btn,.wish-btn');if(!b)return;b.classList.remove('click-pop');void b.offsetWidth;b.classList.add('click-pop')})}
updateCartCount();renderFeatured();renderShop();renderCart();setupMenu();setupHeader();setupSearch();setupInteractions();
