async function fetchData() {
  const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
  const record = await res.json();
  document.querySelector(".fact").textContent = record.text;
}
fetchData();
