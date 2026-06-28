document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const query = document.getElementById("q").value.trim();
  if (!query) return;

  const blocked = "-site:grokipedia.com -inurl:grokipedia -intitle:grokipedia";
  const url = "https://www.google.com/search?q=" + encodeURIComponent(query + " " + blocked);

  window.location.href = url;
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");

  const params = new URLSearchParams(window.location.search);
const urlQuery = params.get("q");

if (urlQuery) {
  search(urlQuery);
}
}
