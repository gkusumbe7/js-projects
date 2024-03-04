// console.log("Hello Sticky");

let btn = document.getElementById("button");
// console.log(btn);
let text = document.getElementsByTagName("textarea")[0];
let color = document.getElementById("color");
let notes = document.getElementById("notes_container");
let hideLine = document.getElementById("hide_line");
console.log(btn,text,color);
function addNotes(){
    if(text.value === ""){
        alert("Enter some text");
        return;
    }
    hideLine.innerText ="";
    let div = document.createElement("div");
    let p = document.createElement("p");
    let cross_btn = document.createElement("button");
    div.appendChild(p);
    div.appendChild(cross_btn);
    cross_btn.innerText ="X";
    p.innerText = text.value;
    div.style.backgroundColor = color.value;
    notes.appendChild(div);
    text.value ="";
    // console.log(div);
    cross_btn.addEventListener('click',function(){
        div.style.display = 'none';
        alert("Deleted SuccessFully");
    })
}




btn.addEventListener('click' ,addNotes);


