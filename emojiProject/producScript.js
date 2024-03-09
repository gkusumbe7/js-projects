


console.log(productsData);

let cards = document.getElementById("card");
let searchProducts = document.getElementById("search_field");



let selectCategroryType = document.getElementById("selectType");


selectCategroryType.addEventListener('change',function(){
   let selectCategroryTypeByUser = selectCategroryType.value;
   console.log(selectCategroryTypeByUser);


// productsData.forEach(e =>{
//     let categoryTypeBySystem = e.category;
    
//     if(selectCategroryTypeByUser == 'All' || selectCategroryTypeByUser === categoryTypeBySystem ){
//     // console.log(selectCategroryTypeByUser ,categoryTypeBySystem);
//     console.log("True");
//     cards.style.display;

//   }else{
    
//      console.log("False");
//      cards.innerHTML = '';
    
//     }

// });
// let allProducts  = productsData.filter(product => product.category === selectCategroryTypeByUser);
if(selectCategroryTypeByUser === 'All'){
    displayProductData(productsData);
}else{
    let userSelectedProducts   = productsData.filter(product => product.category === selectCategroryTypeByUser);
    displayProductData(userSelectedProducts);
    
}



});



function displayProductData(filterProductsData){

   cards.innerHTML = '';

   filterProductsData.forEach(e =>{
    
   let cardDiv = document.createElement("cardDiv");

   cardDiv.classList.add('productCard');
   
   cardDiv.innerHTML=` <img class="imgDiv" src="${e.imgURL}" alt="">

   <p class="productName">${e.name}</p>
   <p class="productPrice">${e.price}</p>
   <p class="productStock">${e.stock}</p> `;    
   cards.appendChild(cardDiv);

 });

}



function searchData(e){
    let value = e.target.value;
    
    console.log(value);

    let filterProductsData = productsData.filter(e =>{
        if(e.name.indexOf(value) != -1){
            return true;
        }
   
    }) 


    displayProductData(filterProductsData);


}

search_field.addEventListener('keyup' , searchData);

window.onload = () => displayProductData(productsData);
