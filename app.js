const input = document.getElementById("q");
const form = document.getElementById("searchForm");
const recentBox = document.getElementById("recentSearches");

const blocked = "-site:grokipedia.com -site:www.grokipedia.com -inurl:grokipedia -intitle:grokipedia";

function search(query) {
  query = query.trim();
  if (!query) return;

  saveRecent(query);

  const fullQuery = `${query} ${blocked}`;
  const url = "https://www.google.com/search?q=" + encodeURIComponent(fullQuery);

  window.location.replace(url);
}

function saveRecent(query) {
  let searches = JSON.parse(localStorage.getItem("recentSearches") || "[]");

  searches = searches.filter(item => item !== query);
  searches.unshift(query);
  searches = searches.slice(0, 5);

  localStorage.setItem("recentSearches", JSON.stringify(searches));
}

function renderRecent() {
  const searches = JSON.parse(localStorage.getItem("recentSearches") || "[]");

  recentBox.innerHTML = "";

  if (!searches.length) return;

  const heading = document.createElement("p");
  heading.textContent = "Recent searches";
  recentBox.appendChild(heading);

  searches.forEach(query => {
    const item = document.createElement("span");
    item.className = "recentItem";
    item.textContent = query;
    item.addEventListener("click", () => search(query));
    recentBox.appendChild(item);
  });
}

form.addEventListener("submit", event => {
  event.preventDefault();
  search(input.value);
});

renderRecent();

setTimeout(() => input.focus(), 250);

const params = new URLSearchParams(window.location.search);
const urlQuery = params.get("q");

if (urlQuery) {
  search(urlQuery);
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
