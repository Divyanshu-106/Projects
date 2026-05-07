// Colors for each Pokémon type
  const typeColors = {
    fire: '#F08030', water: '#6890F0', grass: '#78C850', electric: '#F8D030',
    normal: '#A8A878', psychic: '#F85888', ice: '#98D8D8', dragon: '#7038F8',
    dark: '#705848', fairy: '#EE99AC', fighting: '#C03028', poison: '#A040A0',
    ground: '#E0C068', flying: '#A890F0', bug: '#A8B820', rock: '#B8A038',
    ghost: '#705898', steel: '#B8B8D0'
  };

  let offset = 0;        // How many Pokémon we've loaded so far
  const limit = 40;      // How many to load each time

  // Get references to HTML elements
  const grid = document.getElementById('grid');
  const loadingMsg = document.getElementById('loading-msg');
  const loadMoreBtn = document.getElementById('load-more-btn');
  const searchBox = document.getElementById('search-box');
  const listPage = document.getElementById('list-page');
  const detailPage = document.getElementById('detail-page');

  // ── LOAD POKÉMON ──
  async function loadPokemon() {
    loadingMsg.style.display = 'block';
    loadMoreBtn.style.display = 'none';

    // Fetch a batch of Pokémon names from the API
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data = await res.json();
    offset += limit;

    // For each name, fetch its full details
    for (const item of data.results) {
      const poke = await fetch(item.url).then(r => r.json());
      addCard(poke);
    }

    loadingMsg.style.display = 'none';
    if (data.next) loadMoreBtn.style.display = 'block';
  }

  // ── CREATE A CARD ──
  function addCard(poke) {
    const types = poke.types.map(t => t.type.name);
    const img = poke.sprites.other['official-artwork'].front_default || poke.sprites.front_default;

    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <div class="number">#${String(poke.id).padStart(3, '0')}</div>
      <img src="${img}" alt="${poke.name}">
      <div class="name">${poke.name}</div>
      <div>
        ${types.map(t => `<span class="type" style="background:${typeColors[t] || '#aaa'}">${t}</span>`).join('')}
      </div>
    `;

    // When the card is clicked, open the detail page
    card.addEventListener('click', () => openDetail(poke.id));
    grid.appendChild(card);
  }

  // ── SEARCH ──
  searchBox.addEventListener('input', async () => {
    const query = searchBox.value.trim().toLowerCase();

    if (!query) {
      // If search is cleared, reload the normal grid
      grid.innerHTML = '';
      offset = 0;
      await loadPokemon();
      return;
    }

    // Try to find the Pokémon by name directly from the API
    try {
      grid.innerHTML = '';
      loadingMsg.style.display = 'block';
      loadMoreBtn.style.display = 'none';
      const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`).then(r => r.json());
      loadingMsg.style.display = 'none';
      addCard(poke);
    } catch {
      loadingMsg.textContent = 'No Pokémon found!';
      loadingMsg.style.display = 'block';
    }
  });

  // ── OPEN DETAIL PAGE ──
  async function openDetail(id) {
    listPage.style.display = 'none';
    detailPage.style.display = 'block';
    window.scrollTo(0, 0);

    // Fetch Pokémon data + species data (for description)
    const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json());
    const spec = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(r => r.json());

    const types = poke.types.map(t => t.type.name);
    const img = poke.sprites.other['official-artwork'].front_default || poke.sprites.front_default;

    // Fill in the detail page
    document.getElementById('d-img').src = img;
    document.getElementById('d-name').textContent = poke.name;
    document.getElementById('d-number').textContent = `#${String(poke.id).padStart(3, '0')}`;
    document.getElementById('d-types').innerHTML = types.map(t =>
      `<span class="type" style="background:${typeColors[t] || '#aaa'}">${t}</span>`
    ).join('');

    // Description (flavor text in English)
    const entry = spec.flavor_text_entries.find(e => e.language.name === 'en');
    document.getElementById('d-desc').textContent = entry
      ? entry.flavor_text.replace(/\f/g, ' ')
      : '';

    document.getElementById('d-height').textContent = `${(poke.height / 10).toFixed(1)} m`;
    document.getElementById('d-weight').textContent = `${(poke.weight / 10).toFixed(1)} kg`;
    document.getElementById('d-xp').textContent = poke.base_experience ?? '–';

    // Stats
    const statsEl = document.getElementById('d-stats');
    statsEl.innerHTML = '';
    const statColors = ['#e74c3c','#e67e22','#3498db','#2ecc71','#9b59b6','#1abc9c'];
    poke.stats.forEach((s, i) => {
      const pct = Math.round((s.base_stat / 255) * 100);
      statsEl.innerHTML += `
        <div class="stat">
          <div class="stat-name">${s.stat.name}</div>
          <div class="stat-val">${s.base_stat}</div>
          <div class="stat-bar-bg">
            <div class="stat-bar-fill" style="width:0%;background:${statColors[i]}" data-pct="${pct}"></div>
          </div>
        </div>
      `;
    });
    // Animate the bars
    setTimeout(() => {
      document.querySelectorAll('.stat-bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    }, 100);

    // Abilities
    const abEl = document.getElementById('d-abilities');
    abEl.innerHTML = poke.abilities.map(a =>
      `<span class="type" style="background:#888;margin:3px">${a.ability.name}</span>`
    ).join('');
  }

  // ── BACK BUTTON ──
  document.getElementById('back-btn').addEventListener('click', () => {
    detailPage.style.display = 'none';
    listPage.style.display = 'block';
    window.scrollTo(0, 0);
  });

  // ── LOAD MORE BUTTON ──
  loadMoreBtn.addEventListener('click', loadPokemon);

  // ── START ──
  loadPokemon();