const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: "Marlboro Gold",
        price: 3.0,
        colors: [
            {
                code: "gold",
                img: "./img/Marlboro Gold.png",
            },
            {
                code: "goldenrod",
                img: "./img/MarlboroGold100s.png",
            },
        ],
    },
    {
        id: 2,
        title: "Marlboro Red",
        price: 3.50,
        colors:[
            {
                code: "darkred",
                img: "./img/MarlboroRed100s.png",
            },
            {
                code: "red",
                img: "./img/Marlboro Red.png",
            },
        ],
    },
    {
        id: 3,
        title: "IQOS HEETS Yellow Selection",
        price: 2.80,
        colors: [
            {
                code: "yellow",
                img: "./img/IQOS HEETS Bronze Selection.png",
            },
            {
                code: "burlywood",
                img: "./img/IQOSHEETSyellowselection.png",
            },
        ],
    },
    {
        id: 4,
        title: "BIC J5 Standard Mini",
        price: 1.25,
        colors: [
            {
                code: "darkred",
                img: "./img/BIC J5 Standard.png",
            },

            {
                code: "black",
                img: "./img/bicblack.png",
            },
        ],
    },
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductOkusi = document.querySelectorAll(".okus")

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //mijenja slajd
        wrapper.style.transform= `translateX(${-100 * index}vw)`

        //mijenja izabrani artikal
        choosenProduct = products[index]

        //mijenja tekst produkta
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = choosenProduct.price + "€"
        currentProductImg.src = choosenProduct.colors[0].img

        //pridodaje boje kvadratićima
        currentProductColors.forEach((color,index)=>{
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});


    currentProductColors.forEach((color,index)=>{
        color.addEventListener("click", ()=>{
            currentProductImg.src = choosenProduct.colors[index].img
        });
    });

    currentProductOkusi.forEach((okus,index)=>{
        okus.addEventListener("click",()=>{
            currentProductOkusi.forEach(okus=>{
                okus.style.backgroundColor= "white"
                okus.style.Color= "black"
            });
            okus.style.backgroundColor= "black"
            okus.style.Color= "white"
        });
    });


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})

close.addEventListener("click",()=>{
    payment.style.display="none"
})

/*const inputField = document.getElementById("quantityInput");
const result = document.getElementById("result");
const cartPrice = document.querySelector(".cartPrice").innerHTML;

inputField.addEventListener("input", function() {
  result.innerHTML = inputField.value * cartPrice + '€';
});*/

const items = document.querySelectorAll(".item");
let total = 0;

items.forEach(function(item) {
  const inputField = item.querySelector(".quantityInput");
  const result = item.querySelector(".result");
  const cartPrice = parseFloat(item.querySelector(".cartPrice").innerHTML);
  
  inputField.addEventListener("input", function() {
    let itemTotal = inputField.value * cartPrice;
    result.innerHTML = '= ' + itemTotal + '€';
    total += itemTotal;
    document.querySelector(".total").innerHTML = 'Total: ' + total + '€';
  });
});

const payButton = document.querySelector('.payButton');

payButton.addEventListener('click', function() {
  alert('Hvala na narudžbi i na ukazanome povjerenju :)');
});
