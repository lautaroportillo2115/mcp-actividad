const itemInput = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const counter = document.getElementById("counter");
const listaCompras = document.getElementById("listaCompras");
const storageKey = "listaCompras";

let items = JSON.parse(localStorage.getItem(storageKey)) || [];

function saveItems() {
  localStorage.setItem(storageKey, JSON.stringify(items));
}

function updateCounter() {
  counter.textContent = `Total: ${items.length} items`;
}

function renderItems() {
  listaCompras.innerHTML = "";

  items.forEach((item, index) => {
    const listItem = document.createElement("li");
    const itemText = document.createElement("span");
    const deleteButton = document.createElement("button");

    itemText.textContent = item;
    deleteButton.type = "button";
    deleteButton.textContent = "Eliminar";
    deleteButton.className = "delete-btn";
    deleteButton.addEventListener("click", () => {
      items.splice(index, 1);
      saveItems();
      renderItems();
    });

    listItem.append(itemText, deleteButton);
    listaCompras.appendChild(listItem);
  });

  updateCounter();
}

function addItem() {
  const item = itemInput.value.trim();

  if (!item) {
    return;
  }

  items.push(item);
  itemInput.value = "";
  saveItems();
  renderItems();
  itemInput.focus();
}

addBtn.addEventListener("click", addItem);

itemInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addItem();
  }
});

renderItems();
