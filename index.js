// Fetch suit data from local JSON file
fetch("suits.json")
  .then((response) => response.json())
  .then((suits) => {
    window.suitsData = suits; // Store globally for filtering
    renderSuits(suits);
  })
  .catch((error) => console.error("Error fetching suit data:", error));

// Function to render suit cards
function renderSuits(suits) {
  const container = document.getElementById("suits-container");
  container.innerHTML = suits
    .map(
      (suit) => `
      <div class="suit-card" data-id="${suit.id}">
        <img src="${suit.image}" alt="${suit.brand} suit">
        <div class="suit-info">
          <h3>${suit.brand}</h3>
          <p>Price: $${suit.price}</p>
          <p>Style: ${suit.style}</p>
        </div>
      </div>
    `
    )
    .join("");
}

// Filtering function to apply filters and search
function applyFilters() {
  const style = document.getElementById("style-filter").value.toLowerCase();
  const color = document.getElementById("color-filter").value.toLowerCase();
  const maxPrice =
    parseFloat(document.getElementById("price-filter").value) || Infinity;
  const searchText = document
    .getElementById("search-input")
    .value.toLowerCase();

  const filteredSuits = window.suitsData.filter((suit) => {
    const matchesStyle = style
      ? suit.style.toLowerCase().includes(style)
      : true;
    const matchesColor = color
      ? suit.color.toLowerCase().includes(color)
      : true;
    const matchesPrice = suit.price <= maxPrice;
    const matchesSearch = searchText
      ? suit.brand.toLowerCase().includes(searchText) ||
        (suit.details && suit.details.toLowerCase().includes(searchText))
      : true;

    return matchesStyle && matchesColor && matchesPrice && matchesSearch;
  });

  renderSuits(filteredSuits);
}

// Attach event listeners for filters and search
document
  .getElementById("style-filter")
  .addEventListener("change", applyFilters);
document.getElementById("color-filter").addEventListener("input", applyFilters);
document.getElementById("price-filter").addEventListener("input", applyFilters);
document.getElementById("search-input").addEventListener("input", applyFilters);

// Delegate click event on suit cards to display suit details in modal
document
  .getElementById("suits-container")
  .addEventListener("click", function (e) {
    const card = e.target.closest(".suit-card");
    if (card) {
      const suitId = card.getAttribute("data-id");
      const suit = window.suitsData.find((s) => s.id == suitId);
      if (suit) {
        showSuitDetails(suit);
      }
    }
  });

// Function to display suit details in modal
function showSuitDetails(suit) {
  document.getElementById("modal-image").src = suit.image;
  document.getElementById("modal-brand").textContent = suit.brand;
  document.getElementById("modal-price").textContent = `Price: $${suit.price}`;
  document.getElementById("modal-style").textContent = `Style: ${suit.style}`;
  document.getElementById("modal-details").textContent = suit.details || "";
  document.getElementById("suit-modal").classList.remove("hidden");
}

// Event listener to close the modal
document.getElementById("close-modal").addEventListener("click", function () {
  document.getElementById("suit-modal").classList.add("hidden");
});

// Toggle between grid and list views
document.getElementById("grid-view").addEventListener("click", function () {
  const container = document.getElementById("suits-container");
  container.classList.remove("list-view");
  container.classList.add("grid-view");
});

document.getElementById("list-view").addEventListener("click", function () {
  const container = document.getElementById("suits-container");
  container.classList.remove("grid-view");
  container.classList.add("list-view");
});

// Dark/Light Mode Toggle
document.getElementById("theme-toggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});
