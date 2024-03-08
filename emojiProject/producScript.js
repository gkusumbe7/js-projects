


console.log(productsData);

let cards = document.getElementById("card");
let searchProducts = document.getElementById("search_field");





function displayProductData(query = ''){
    let filterProductsData = productsData.filter(e =>{
        if(e.name.indexOf(query) != -1){
            return true;
        }
    }) 

    cards.innerHTML = '';
    
    filterProductsData.forEach(proData =>{
    let card = document.createElement("div");
    let id_no = document.createElement("p");
    let pro_name = document.createElement("p");
    let pro_price = document.createElement("p");
    let pro_stock = document.createElement("p");
    
    id_no.innerText = proData.id;
    pro_name.innerText = proData.name;
    pro_price.innerText = proData.price;
    pro_stock.innerText = proData.stock;
    
    card.appendChild(id_no);
    card.appendChild(pro_name);
    card.appendChild(pro_price);
    card.appendChild(pro_stock);
    cards.appendChild(card);
    
    console.log(cards);
    
    });

}



function searchData(e){
    let value = e.target.value;
    console.log(value);
    displayProductData(value);
}

search_field.addEventListener('keyup' , searchData);

window.onload = () => displayProductData();