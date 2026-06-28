const input = document.getElementById("q");
const form = document.getElementById("searchForm");

const blocked = "-site:grokipedia.com -site:www.grokipedia.com -inurl:grokipedia -intitle:grokipedia";

function goToGoogle(query) {
  query = query.trim();
  if (!query) return;

  const fullQuery = `${query} ${blocked}`;
  const googleUrl = "https://www.google.com/search?q=" + encodeURIComponent(fullQuery);

  window.location.replace(googleUrl);
}

const params = new URLSearchParams(window.location.search);
const queryFromUrl = params.get("q");

if (queryFromUrl) {
  goToGoogle(queryFromUrl);
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  goToGoogle(input.value);
});

setTimeout(() => input.focus(), 250);
