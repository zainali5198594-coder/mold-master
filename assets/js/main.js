const products=[
{id:1,name:'12-Piece Nozzle Set',category:'Decorating Tools',price:1699,old:1999,icon:'✦',tag:'Bestseller'},
{id:2,name:'Premium Cake Mold',category:'Cake Molds',price:899,old:1250,icon:'◯',tag:'Sale'},
{id:3,name:'Silicone Fondant Mold',category:'Silicone Molds',price:599,old:850,icon:'◇',tag:'Popular'},
{id:4,name:'Fondant Decorating Tool Kit',category:'Fondant Tools',price:1199,old:1499,icon:'✧',tag:'New'},
{id:5,name:'Creative Cookie Cutter Set',category:'Cookie Cutters',price:499,old:699,icon:'○',tag:'Sale'},
{id:6,name:'Cake Scraper Set',category:'Decorating Tools',price:759,old:950,icon:'▱',tag:'Popular'},
{id:7,name:'Muffin & Cupcake Pan',category:'Baking Accessories',price:1350,old:1700,icon:'□',tag:'New'},
{id:8,name:'Pizza Cutter',category:'Baking Accessories',price:449,old:599,icon:'◒',tag:'Value'}
];
function money(n){return 'Rs. '+Number(n).toLocaleString('en-PK')}
function addToCart(id){const p=products.find(x=>x.id===id);let cart=JSON.parse(localStorage.getItem('moldMasterCart')||'[]');const item=cart.find(x=>x.id===id);if(item)item.qty++;else cart.push({...p,qty:1});localStorage.setItem('moldMasterCart',JSON.stringify(cart));updateCartCount();alert(p.name+' added to cart');}
function updateCartCount(){const cart=JSON.parse(localStorage.getItem('moldMasterCart')||'[]');const count=cart.reduce((s,x)=>s+x.qty,0);document.querySelectorAll('#cartCount').forEach(e=>e.textContent=count)}
function productLink(id){return `product.html?id=${id}`}
function card(p){return `<article class="product-card"><a class="product-img" href="${productLink(p.id)}" aria-label="View ${p.name}"><span>${p.icon}</span></a><div class="product-info"><p>${p.category} · ${p.tag}</p><h3><a href="${productLink(p.id)}">${p.name}</a></h3><div><span class="price">${money(p.price)}</span> <span class="old">${money(p.old)}</span><button class="mini-btn" onclick="addToCart(${p.id})">+ Cart</button></div></div></article>`}
function renderFeatured(){const el=document.getElementById('featuredProducts');if(el)el.innerHTML=products.slice(0,4).map(card).join('')}
updateCartCount();renderFeatured();
