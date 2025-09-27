const list = document.getElementById("myList");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function() {
  const newItem = document.createElement("li"); 
  newItem.textContent = "Item mới";             
  list.appendChild(newItem);                  
});
