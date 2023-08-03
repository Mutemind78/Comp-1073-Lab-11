const ul = document.querySelector(".shopping-list");
const input = document.querySelector("#item");
const addButton = document.querySelector("#addButton");

addButton.addEventListener("click", addItem);

function addItem() {
  let inputValue = input.value;
  input.value = "";

  const li = document.createElement("li");
  const span = document.createElement("span");
  const editButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  li.appendChild(span);
  li.appendChild(editButton);
  li.appendChild(deleteButton);

  span.textContent = inputValue;
  editButton.textContent = "Edit";
  deleteButton.textContent = "Delete";

  editButton.addEventListener("click", () => editItem(span));
  deleteButton.addEventListener("click", () => removeItem(li));

  ul.appendChild(li);

  input.focus();
}

function removeItem(item) {
  item.remove();
}

function editItem(span) {
  const oldValue = span.textContent;
  const newValue = prompt("Edit item:", oldValue);
  if (newValue !== null) {
    span.textContent = newValue;
  }
}
