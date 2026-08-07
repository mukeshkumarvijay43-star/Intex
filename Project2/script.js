// ---------- Recipe data ----------
const recipes = [
  { id:1, title:"Brown Butter Miso Cookies", cat:"baking", time:"35 min", serves:"18", desc:"Nutty brown butter meets salty miso for a cookie that's equal parts sweet and savory.", image:"Brown Butter Miso Cookies.jpg" },
  { id:2, title:"Charred Lemon Roast Chicken", cat:"mains", time:"1 hr 20", serves:"4", desc:"A whole chicken, blistered lemons, and a pan sauce you'll want to drink.", image:"Charred Lemon Roast Chicken.jpg" },
  { id:3, title:"Soft Scrambled Eggs on Toast", cat:"breakfast", time:"10 min", serves:"2", desc:"Low heat, constant stirring, and good bread — the only trick you need.", image:"Soft Scrambled Eggs on Toast.jpg" },
  { id:4, title:"Cardamom Cold Brew", cat:"drinks", time:"12 hr steep", serves:"4", desc:"Coarse grounds, whole cardamom pods, and a very patient fridge.", image:"Cardamom Cold Brew.jpg" },
  { id:5, title:"Sheet Pan Miso Salmon", cat:"mains", time:"25 min", serves:"3", desc:"One pan, one glaze, dinner in under half an hour.", image:"Sheet Pan Miso Salmon.jpg" },
  { id:6, title:"Olive Oil Cake with Orange", cat:"baking", time:"55 min", serves:"8", desc:"Dense, citrusy, and better on day two — if it survives that long.", image:"Olive Oil Cake with Orange.jpg" },
  { id:7, title:"Shakshuka for a Slow Morning", cat:"breakfast", time:"30 min", serves:"3", desc:"Tomatoes simmered until jammy, eggs poached right in the pan.", image:"Shakshuka for a Slow Morning.jpg" },
  { id:8, title:"Ginger Honey Fizz", cat:"drinks", time:"15 min", serves:"2", desc:"Fresh ginger syrup, lime, and sparkling water — a five-minute mocktail.", image:"Ginger Honey Fizz.jpg" },
  { id:9, title:"Brown Sugar Sourdough Loaf", cat:"baking", time:"18 hr total", serves:"1 loaf", desc:"A slow overnight rise for a deeply caramelized crust.", image:"Brown Sugar Sourdough Loaf.jpg" },
  { id:10, title:"Masala Chai Pancakes", cat:"breakfast", time:"25 min", serves:"2", desc:"Fluffy pancakes soaked in cardamom chai spices and topped with toasted almonds.", image:"Masala Chai Pancakes.jpg" },
  { id:11, title:"Spiced Coconut Lentil Curry", cat:"mains", time:"40 min", serves:"4", desc:"A creamy dal simmered with coconut, turmeric, and a squeeze of lime.", image:"Spiced Coconut Lentil Curry.jpg" },
  { id:12, title:"Saffron Cardamom Kulfi Bars", cat:"baking", time:"5 hr chill", serves:"6", desc:"Silky milk bars infused with saffron, cardamom, and crushed pistachios.", image:"Saffron Cardamom Kulfi Bars.jpg" },
  { id:13, title:"Mango Lassi Spritz", cat:"drinks", time:"10 min", serves:"2", desc:"A fizzy mango yogurt drink with lime, ginger, and a mint garnish.", image:"Mango Lassi Spritz.jpg" },
  { id:14, title:"Paniyaram Breakfast Bites", cat:"breakfast", time:"20 min", serves:"4", desc:"Soft lentil and rice dumplings spiced with curry leaves and chilies, perfect with coconut chutney.", image:"Paniyaram Breakfast Bites.jpg" },
  { id:15, title:"Kara Kuzhambu with Rice", cat:"mains", time:"35 min", serves:"4", desc:"A tangy tamarind stew loaded with drumsticks and okra, served over steaming rice.", image:"Kara Kuzhambu with Rice.jpg" },
  { id:16, title:"Thengai Maavu Cake", cat:"baking", time:"50 min", serves:"8", desc:"A fragrant coconut cake made with rice flour, jaggery, and a hint of cardamom.", image:"Thengai Maavu Cake.jpg" },
  { id:17, title:"Neer Mor Cooler", cat:"drinks", time:"10 min", serves:"3", desc:"A refreshing spiced buttermilk drink with ginger, curry leaves, and crushed pepper.", image:"Neer Mor Cooler.jpg" }
];

const grid = document.getElementById('recipeGrid');
const noResults = document.getElementById('noResults');
const searchInput = document.getElementById('searchInput');
const catRow = document.getElementById('catRow');
let activeCat = 'all';

function renderRecipes(){
  const query = searchInput.value.trim().toLowerCase();
  const filtered = recipes.filter(r=>{
    const matchesCat = activeCat === 'all' || r.cat === activeCat;
    const matchesQuery = r.title.toLowerCase().includes(query) || r.desc.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  grid.innerHTML = '';
  noResults.style.display = filtered.length ? 'none' : 'block';

  filtered.forEach((r, index) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.id = 'recipe-' + r.id;
    card.style.animationDelay = `${index * 0.05}s`;
    card.innerHTML = `
      <div class="thumb">
        <img src="${r.image}" alt="${r.title}" loading="lazy">
        <span class="num">No. 0${r.id}</span>
      </div>
      <div class="body">
        <span class="cat-label">${r.cat}</span>
        <h3>${r.title}</h3>
        <p>${r.desc}</p>
        <div class="meta">
          <span>⏱ ${r.time}</span>
          <span>🍽 Serves ${r.serves}</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

catRow.addEventListener('click', (e)=>{
  const btn = e.target.closest('.chip');
  if(!btn) return;
  document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
  btn.classList.add('active');
  activeCat = btn.dataset.cat;
  renderRecipes();
});

searchInput.addEventListener('input', renderRecipes);

const slides = document.querySelectorAll(".bg-slide");
let currentSlide = 0;

if (slides.length) {
  slides[0].classList.add('active');
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
  }, 2000);
}

const categoryLinks = document.querySelectorAll('[data-scrollcat]');
categoryLinks.forEach(link=>{
  link.addEventListener('click', (e)=>{
    e.preventDefault();
    const cat = link.dataset.scrollcat;
    document.querySelectorAll('.chip').forEach(c=>{
      c.classList.toggle('active', c.dataset.cat === cat);
    });
    activeCat = cat;
    renderRecipes();
    document.getElementById('recipes').scrollIntoView({behavior:'smooth'});
  });
});

const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', ()=>{
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a=>{
  a.addEventListener('click', ()=> navLinks.classList.remove('open'));
});

const surpriseBtn = document.getElementById('surpriseBtn');
surpriseBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelectorAll('.chip').forEach(c=>c.classList.toggle('active', c.dataset.cat==='all'));
  activeCat = 'all';
  searchInput.value = '';
  renderRecipes();
  const pick = recipes[Math.floor(Math.random()*recipes.length)];
  setTimeout(()=>{
    const el = document.getElementById('recipe-' + pick.id);
    if(el){
      el.scrollIntoView({behavior:'smooth', block:'center'});
      el.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
      el.style.boxShadow = '0 0 0 3px #D9A441';
      el.style.transform = 'translateY(-6px)';
      setTimeout(()=>{ el.style.boxShadow = ''; el.style.transform = ''; }, 1800);
    }
  }, 80);
});

const subForm = document.getElementById('subForm');
subForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  const email = document.getElementById('subEmail').value;
  const msg = document.getElementById('formMsg');
  msg.textContent = `You're on the list — first card lands Sunday at ${email}.`;
  document.getElementById('subEmail').value = '';
});

if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const cursorDot = document.createElement('div');
  const cursorRing = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  cursorRing.className = 'cursor-ring';
  document.body.append(cursorDot, cursorRing);

  window.addEventListener('pointermove', (event) => {
    cursorDot.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    cursorRing.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    cursorDot.classList.add('is-visible');
    cursorRing.classList.add('is-visible');
  });

  document.querySelectorAll('a, button, input').forEach((element) => {
    element.addEventListener('mouseenter', () => cursorRing.classList.add('is-active'));
    element.addEventListener('mouseleave', () => cursorRing.classList.remove('is-active'));
  });
}

renderRecipes();