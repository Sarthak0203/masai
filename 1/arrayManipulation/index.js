function Item(id , name , quantity , price){
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
}
function additem(inventory , item){
    inventory.push(item);
}
function updateitem(inventory , id , newdetails){
    const item = inventory.find(item => item.id == id);
    if(item){
        Object.assign(item , newdetails);
    }
    else{
        console.log(`Item with ${id} is not found.`);
    }
}
function deleteitem(inventory , id){
    const index = inventory.findIndex(item => item.id == id);
    if(index!=-1){
        inventory.splice(index,1);
    } 
    else{
        console.log(`Item with ${id} not found.`);
    }
}
function getItem(inventory , id){
    return inventory.find(item => item.id == id);
}
function printInventory(inventory){
    console.log("Current Inventory");
    console.log(JSON.stringify(inventory, null, 2));
}
let inventory = [
    new Item(1,'Apple',10,0.5),
    new Item(2,'Banana',20,0.2)
];
console.log("Initial Inventory")
printInventory(inventory)

additem(inventory , new Item(3, 'Orange', 15, 0.7));
console.log("\n After adding item : ")
printInventory(inventory)

updateitem(inventory , 2 , {quantity : 30})
console.log("\n After updating item : ")
printInventory(inventory)

deleteitem(inventory, 2);
console.log("\nAfter deleting item:");
printInventory(inventory);