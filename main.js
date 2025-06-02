let items = []
function addItem() {
  const itemName = document.querySelector("#item").value
  if (itemName === ""){
    alert("Digite um item válido!")
    return
  }
    const item = { name: itemName, checked: false }
  items.push(item)
  document.querySelector("#item").value = ""
  showItemsList()
}
document.querySelector("#item").addEventListener("keydown", (event) => {
  if(event.key === "Enter") {
    addItem()
  }
})
function showItemsList() {
  const sectionList = document.querySelector(".list")
  sectionList.textContent = ""