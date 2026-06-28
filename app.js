const input = document.getElementById("q");
const form = document.getElementById("searchForm");

const blocked =
  "-site:grokipedia.com -site:www.grokipedia.com -inurl:grokipedia -intitle:grokipedia";

function search(query) {
  query = query.trim();
  if (!query) return;

  const fullQuery = `${query} ${blocked}`;

  window.location.href =
    "https://www.google.com/search?q=" +
    encodeURIComponent(fullQuery);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  search(input.value);
});

// If someone opens the app with ?q=something,
// immediately redirect to Google.
const params = new URLSearchParams(window.location.search);
const q = params.get("q");

if (q) {
  search(q);
} else {
  setTimeout(() => input.focus(), 250);
}

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
