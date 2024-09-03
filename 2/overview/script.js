let products = [];
function rendergraphs(){
    const pricegraph = document.getElementById('price-graph');
    const ratinggraph = document.getElementById('rating-graph');
    pricegraph.innerHTML = '';
    ratinggraph.innerHTML = '';
    products.forEach(product=>{
        const pricebar = document.createElement('div');
        pricebar.className = 'bar';
        pricebar.innerHTML = `<div style="height: ${product.price * 2}px;"></div>${product.name}<br>$${product.price}`;
        pricegraph.appendChild(pricebar);

        const ratingbar = document.createElement('div');
        ratingbar.className = 'bar bar-rating'
        ratingbar.innerHTML = `<div style="height: ${product.rating * 20}px;"></div>${product.name}<br>${product.rating} Stars`;
        ratinggraph.appendChild(ratingbar);
    });
}
function addproduct(){
    const name = document.getElementById('product-name').value ;
    const price = parseFloat(document.getElementById('product-price').value); 
    const rating = parseFloat(document.getElementById('product-rating').value);

    if(name && price>=0 && rating>=0 && rating <=5){
        products.push({name, price, rating});
        rendergraphs();
    }
}
function sortbyprice(){
    products.sort((a,b)=>a.price - b.price);
    rendergraphs();
}
function sortbyrating(){
    products.sort((a,b)=>a.rating - b.rating);
    rendergraphs();
}
document.getElementById('add-product').addEventListener('click',addproduct);
document.getElementById('sort-by-price').addEventListener('click',sortbyprice);
document.getElementById('sort-by-rating').addEventListener('click',sortbyrating);