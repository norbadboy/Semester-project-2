export function searchListener(list) {
  const searchForm = document.getElementById("searchForm");

  searchForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const form = event.target;
    console.log(form);
    const searchTerm = form.term.value;
    console.log(searchTerm);
    console.log(list);
    const filteredList = list.filter((item) => {
      return (
        item.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    console.log(filteredList);
    return filteredList;
  });
}
