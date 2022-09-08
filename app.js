function search() {
  var searchInput = document.getElementById("fakegsearch").value;

  var processedSearchInput = searchInput.replace(" ", "+");
  console.log(processedSearchInput);
  window.open(`https://www.google.com/search?q=${searchInput}`, "_blank");
}