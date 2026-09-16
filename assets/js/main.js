const WHATSAPP = '923338748486';
const CART_KEY = 'moldMasterCart';
const WISHLIST_KEY = 'moldMasterWishlist';

// Image sources: original MOLD MASTER vector visuals, the user's uploaded can-opener photo,
// and public-domain Wikimedia Commons images for generic baking tools.
const svgData = svg => 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(svg);
const visual = {
  nozzle: svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" rx="36" fill="#f8f6f0"/><text x="400" y="70" text-anchor="middle" font-family="Arial" font-size="34" font-weight="700" fill="#122b4d">12-PIECE NOZZLE SET</text><g fill="none" stroke="#c99b22" stroke-width="18"><path d="M170 170h70l20 55H150z"/><path d="M320 170h70l20 55H300z"/><path d="M470 170h70l20 55H450z"/><path d="M620 170h70l20 55H600z"/><path d="M170 300h70l20 55H150z"/><path d="M320 300h70l20 55H300z"/><path d="M470 300h70l20 55H450z"/><path d="M620 300h70l20 55H600z"/></g><path d="M170 465h460" stroke="#122b4d" stroke-width="10"/><text x="400" y="525" text-anchor="middle" font-family="Arial" font-size="26" fill="#6a6a6a">Professional cake decorating tips</text></svg>`),
  mold: svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" rx="36" fill="#f8f6f0"/><text x="400" y="72" text-anchor="middle" font-family="Arial" font-size="36" font-weight="700" fill="#122b4d">PREMIUM CAKE MOLD</text><ellipse cx="400" cy="315" rx="235" ry="150" fill="#d9dde1" stroke="#122b4d" stroke-width="12"/><ellipse cx="400" cy="300" rx="185" ry="110" fill="#fff" stroke="#c99b22" stroke-width="10"/><path d="M250 390Q400 455 550 390" fill="none" stroke="#c99b22" stroke-width="14"/><text x="400" y="520" text-anchor="middle" font-family="Arial" font-size="28" fill="#6a6a6a">Reusable baking pan</text></svg>`),
  silicone: svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" rx="36" fill="#f8f6f0"/><text x="400" y="70" text-anchor="middle" font-family="Arial" font-size="34" font-weight="700" fill="#122b4d">SILICONE FONDANT MOLD</text><rect x="150" y="150" width="500" height="300" rx="42" fill="#d9a6b5" stroke="#122b4d" stroke-width="10"/><g fill="#f8f6f0" stroke="#fff" stroke-width="8"><circle cx="250" cy="240" r="45"/><circle cx="400" cy="240" r="45"/><circle cx="550" cy="240" r="45"/><circle cx="325" cy="360" r="45"/><circle cx="475" cy="360" r="45"/></g><text x="400" y="520" text-anchor="middle" font-family="Arial" font-size="27" fill="#6a6a6a">Flexible • reusable • easy release</text></svg>`),
  fondant: svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" rx="36" fill="#f8f6f0"/><text x="400" y="70" text-anchor="middle" font-family="Arial" font-size="34" font-weight="700" fill="#122b4d">FONDANT TOOL KIT</text><g fill="none" stroke="#122b4d" stroke-width="16" stroke-linecap="round"><path d="M190 180v250"/><path d="M290 180v250"/><path d="M390 180v250"/><path d="M490 180v250"/><path d="M590 180v250"/></g><g fill="#c99b22"><circle cx="190" cy="180" r="26"/><circle cx="290" cy="180" r="26"/><circle cx="390" cy="180" r="26"/><circle cx="490" cy="180" r="26"/><circle cx="590" cy="180" r="26"/></g><text x="400" y="520" text-anchor="middle" font-family="Arial" font-size="27" fill="#6a6a6a">Shape • smooth • detail your fondant</text></svg>`),
  scraper: svgData(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600"><rect width="800" height="600" rx="36" fill="#f8f6f0"/><text x="400" y="70" text-anchor="middle" font-family="Arial" font-size="36" font-weight="700" fill="#122b4d">CAKE SCRAPER SET</text><path d="M230 180h340v250H230z" fill="#dfe4e8" stroke="#122b4d" stroke-width="12"/><path d="M270 180v-45h260v45" fill="none" stroke="#c99b22" stroke-width="18"/><path d="M270 250h260M270 320h260M270 390h260" stroke="#fff" stroke-width="12"/><text x="400" y="520" text-anchor="middle" font-family="Arial" font-size="27" fill="#6a6a6a">Clean edges • smooth finishes</text></svg>`)
};

const products = [
  {id:1,name:'12-Piece Nozzle Set',category:'Decorating Tools',price:1699,old:1999,tag:'Bestseller',image:visual.nozzle},
  {id:2,name:'Premium Cake Mold',category:'Cake Molds',price:899,old:1250,tag:'Sale',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Angel_Food_Cake_Pan.JPG'},
  {id:3,name:'Silicone Fondant Mold',category:'Silicone Molds',price:599,old:850,tag:'Popular',image:visual.silicone},
  {id:4,name:'Fondant Decorating Tool Kit',category:'Fondant Tools',price:1199,old:1499,tag:'New',image:visual.fondant},
  {id:5,name:'Creative Cookie Cutter Set',category:'Cookie Cutters',price:499,old:699,tag:'Sale',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/CookieCuttersAl.jpg'},
  {id:6,name:'Cake Scraper Set',category:'Decorating Tools',price:759,old:950,tag:'Popular',image:visual.scraper},
  {id:7,name:'Muffin & Cupcake Pan',category:'Baking Accessories',price:1350,old:1700,tag:'New',image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Muffin_pan.jpg'},
  {id:8,name:'Can & Bottle Opener',category:'Baking Accessories',price:899,old:null,tag:'New',image:'assets/images/can-opener.jpg'}
];

function money(n){ return 'Rs. ' + Number(n).toLocaleString('en-PK'); }
function getCart(){ try{return JSON.parse(localStorage.getItem(CART_KEY)||'[]')}catch{return[]} }
function saveCart(cart){ localStorage.setItem(CART_KEY,JSON.stringify(cart)); updateCartCount(); }
function getWishlist(){ try{return JSON.parse(localStorage.getItem(WISHLIST_KEY)||'[]')}catch{return[]} }
function updateCartCount(){ const count=getCart().reduce((s,x)=>s+Number(x.qty||0),0); document.querySelectorAll('#cartCount').forEach(e=>e.textContent=count); }
function addToCart(id,qty=1){ const p=products.find(x=>x.id===Number(id)); if(!p)return; const cart=getCart(); const item=cart.find(x=>x.id===p.id); if(item)item.qty=Math.min(99,item.qty+qty); else cart.push({...p,qty:Math.max(1,qty)}); saveCart(cart); toast(`${p.name} added to cart`); }
function removeFromCart(id){ saveCart(getCart().filter(x=>x.id!==Number(id))); toast('Item removed from cart'); }
function setCartQty(id,qty){ const cart=getCart(); const item=cart.find(x=>x.id===Number(id)); if(!item)return; item.qty=Math.max(1,Math.min(99,Number(qty)||1)); saveCart(cart); }
function cartSubtotal(){ return getCart().reduce((s,x)=>s+x.price*x.qty,0); }
function productLink(id){ return `product.html?id=${id}`; }
function whatsappUrl(message){ return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`; }
function orderMessage(p){ return `Assalam o Alaikum MOLD MASTER, I want to order ${p.name} for ${money(p.price)}.`; }
function productVisual(p){
  if(p.image) return `<img src="${p.image}" alt="${escapeHtml(p.name)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'"><div class="product-placeholder fallback"><span>IMAGE</span><small>Image unavailable</small></div>`;
  return `<div class="product-placeholder"><span>IMAGE</span><small>Product image</small></div>`;
}
function card(p){
  const wish=getWishlist().includes(p.id);
  return `<article class="product-card reveal"><a class="product-img" href="${productLink(p.id)}">${productVisual(p)}<span class="product-tag">${escapeHtml(p.tag||'')}</span></a><div class="product-info"><p>${escapeHtml(p.category)}</p><h3><a href="${productLink(p.id)}">${escapeHtml(p.name)}</a></h3><div class="price-row"><span class="price">${money(p.price)}</span>${p.old?`<span class="old">${money(p.old)}</span>`:''}</div><div class="card-actions"><button class="mini-btn" onclick="addToCart(${p.id})">Add to Cart</button><button class="wish-btn ${wish?'active':''}" aria-label="Wishlist" onclick="toggleWishlist(${p.id})">${wish?'♥':'♡'}</button></div></div></article>`;
}
function renderFeatured(){ const el=document.getElementById('featuredProducts'); if(el)el.innerHTML=products.slice(0,4).map(card).join(''); }
function renderShop(){
  const el=document.getElementById('products'); if(!el)return;
  let list=[...products];
  const q=(document.getElementById('search')?.value||new URLSearchParams(location.search).get('q')||'').trim().toLowerCase();
  const c=document.getElementById('category')?.value||new URLSearchParams(location.search).get('category')||'';
  const s=document.getElementById('sort')?.value||'default';
  if(q)list=list.filter(p=>(p.name+' '+p.category+' '+(p.tag||'')).toLowerCase().includes(q));
  if(c)list=list.filter(p=>p.category===c);
  if(s==='low')list.sort((a,b)=>a.price-b.price);
  if(s==='high')list.sort((a,b)=>b.price-a.price);
  if(s==='name')list.sort((a,b)=>a.name.localeCompare(b.name));
  el.innerHTML=list.length?list.map(card).join(''):`<div class="empty-state"><h3>No products found</h3><p>Try another search or category.</p><a class="btn btn-dark" href="shop.html">View all products</a></div>`;
  const count=document.getElementById('resultCount'); if(count)count.textContent=`${list.length} product${list.length===1?'':'s'}`;
}
function toggleWishlist(id){ const w=getWishlist(); const i=w.indexOf(Number(id)); if(i>=0)w.splice(i,1);else w.push(Number(id)); localStorage.setItem(WISHLIST_KEY,JSON.stringify(w)); renderFeatured(); renderShop(); toast(i>=0?'Removed from wishlist':'Added to wishlist'); }
function renderCart(){
  const el=document.getElementById('cartItems'); if(!el)return;
  const cart=getCart();
  el.innerHTML=cart.length?cart.map(x=>`<article class="cart-item reveal"><div class="cart-thumb">${productVisual(x)}</div><div class="cart-main"><h3>${escapeHtml(x.name)}</h3><p>${escapeHtml(x.category)}</p><strong>${money(x.price)}</strong></div><div class="qty"><button aria-label="Decrease quantity" onclick="setCartQty(${x.id},${x.qty-1});renderCart()">−</button><span>${x.qty}</span><button aria-label="Increase quantity" onclick="setCartQty(${x.id},${x.qty+1});renderCart()">+</button></div><div class="cart-line">${money(x.price*x.qty)}</div><button class="remove-btn" onclick="removeFromCart(${x.id});renderCart()">Remove</button></article>`).join(''):`<div class="empty-state"><h2>Your cart is empty.</h2><p>Add baking tools to continue.</p><a class="btn btn-dark" href="shop.html">Continue Shopping</a></div>`;
  const sub=cartSubtotal(); document.querySelectorAll('#cartSubtotal').forEach(e=>e.textContent=money(sub)); document.querySelectorAll('#cartTotal').forEach(e=>e.textContent=money(sub));
}
function toast(text){ let t=document.getElementById('toast'); if(!t){t=document.createElement('div');t.id='toast';document.body.appendChild(t)} t.textContent=text;t.classList.add('show');clearTimeout(window.__toastTimer);window.__toastTimer=setTimeout(()=>t.classList.remove('show'),1800); }
function escapeHtml(s){return String(s).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]));}
function setupMenu(){ const b=document.querySelector('.menu'),nav=document.querySelector('.nav nav'); if(!b||!nav)return; b.setAttribute('aria-expanded','false'); b.addEventListener('click',()=>{const open=nav.classList.toggle('open');b.setAttribute('aria-expanded',String(open));}); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');b.setAttribute('aria-expanded','false')})); document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');b.setAttribute('aria-expanded','false')}}); }
function setupHeader(){ const header=document.querySelector('.header'); if(!header)return; const update=()=>header.classList.toggle('scrolled',window.scrollY>12); update(); window.addEventListener('scroll',update,{passive:true}); }
function setupSearch(){ const input=document.getElementById('search'); if(!input)return; input.addEventListener('input',()=>renderShop()); input.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();renderShop()}}); const category=document.getElementById('category'); const sort=document.getElementById('sort'); if(category)category.addEventListener('change',renderShop); if(sort)sort.addEventListener('change',renderShop); }
function setupInteractions(){ document.addEventListener('click',e=>{const button=e.target.closest('.btn,.mini-btn,.wish-btn');if(!button)return;button.classList.remove('click-pop');void button.offsetWidth;button.classList.add('click-pop');}); }

updateCartCount();
renderFeatured();
renderShop();
renderCart();
setupMenu();
setupHeader();
setupSearch();
setupInteractions();