
function addItem() {
    const itemName = document.getElementById('item-name').value.trim();
    const itemQuantity = document.getElementById('item-quantity').value.trim();

  
    if (!itemName || !itemQuantity || isNaN(itemQuantity) || itemQuantity <= 0) {
        alert('Please enter a valid item name and quantity.');
        return;
    }

    
    const listItem = document.createElement('li');
    listItem.className = 'shopping-list-item';

   
    const itemText = document.createElement('span');
    itemText.textContent = `${itemName} - ${itemQuantity}`;

   
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = () => editItem(listItem, itemText);

   
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = () => removeItem(listItem);

    
    listItem.appendChild(itemText);
    listItem.appendChild(editButton);
    listItem.appendChild(removeButton);

   
    document.getElementById('shopping-list').appendChild(listItem);
    document.getElementById('item-name').value = '';
    document.getElementById('item-quantity').value = '';
}


function editItem(listItem, itemText) {
    const [currentName, currentQuantity] = itemText.textContent.split(' - ');

 
    const newName = prompt('Edit item name:', currentName);
    const newQuantity = prompt('Edit item quantity:', currentQuantity);


    if (newName === null || newQuantity === null || !newName.trim() || isNaN(newQuantity) || newQuantity <= 0) {
        alert('Please enter valid new values.');
        return;
    }

  
    itemText.textContent = `${newName.trim()} - ${newQuantity.trim()}`;
}


function removeItem(listItem) {
    listItem.remove();
}


document.getElementById('add-item').addEventListener('click', addItem);
