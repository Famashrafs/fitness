// import res from "express/lib/response";

// start setting-box toggle
let setting=document.querySelector('.background');
let settingBox=document.querySelector('.setting-box');
setting.addEventListener("click",function (){
    settingBox.classList.toggle("setting-active");
})

// end setting-box toggle

// start color-option
const colorsLi=document.querySelectorAll(".colors-list li");
const  landing=document.querySelector('.landing-page');
colorsLi.forEach(li => {
    li.addEventListener("click",(e) => {
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        if(e.target.dataset.color == "#ff6436"){
        landing.style.cssText="background-image: url(img/landing.jpg);"

        }else if(e.target.dataset.color == "#086a9b"){
        landing.style.cssText="background-image: url(img/landing-2.jpg);background-position:0px 0px;"

        }else if(e.target.dataset.color == "#680596"){
        landing.style.cssText="background-image: url(img/landing-3.jpg);"

        }else if(e.target.dataset.color == "#088a33"){
        landing.style.cssText="background-image: url(img/landing-4.jpg);"
    }
    })
});
// end color-option

// let nav=document.querySelector('nav');
// window.addEventListener('scroll',function(){
//     if(landing.getBoundingClientRect().bottom <= 0){
//         nav.style.cssText="position:fixed; background-color:#222; padding:0; margin:0;";
//         console.log(landing.getBoundingClientRect().bottom);
//     }else{
//         nav.style.cssText="position:relative; background-color:transperant;";
//     }
// })





let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});




function calculate(){
  //Need to determine the constant of some id functions.
    var bmi;
    var result = document.querySelector(".result-res");
  //The value of the height slider
    var height = parseInt(document.querySelector(".height").value);
  //The value of the weight slider
    var weight = parseInt(document.querySelector(".weight").value);

//Now I have added the formula for calculating BMI in "bmi"
    bmi = (weight / Math.pow( (height/100), 2 )).toFixed(1);
  //With the help of "textContent" we have arranged to display in the result page of BMI
    result.textContent = bmi;

  //Now we have to make arrangements to show the text


  //When the BMI is less than 18.5, you can see the text below
      if(bmi <= 0){
        result.textContent = "Error"
        category= "please inter a valied number"
        result.style.color = "#ff5e57";
    }
      else if(bmi < 18.5){
        category = "Underweight ";
        result.style.color = "#ffc44d";
    }
  //If BMI is >=18.5 and <=24.9
    else if( bmi >= 18.5 && bmi <= 24.9 ){
        category = "Normal Weight ";
        result.style.color = "#0be881";
    }

  //If BMI is >= 25 and <= 29.9
    else if( bmi >= 25 && bmi <= 29.9 ){
        category = "Overweight ";
        result.style.color = "#ff884d";

    }
  //If BMI is <= 30
    else{
        category = "Obese ";
        result.style.color = "#ff5e57";
    }

  //All of the above text is stored in "category".

//Now you have to make arrangements to display the information in the webpage with the help of "textContent"
    document.querySelector(".category").textContent = category;
}


//  making a hover in trainer -1 & -2 & -3 layout3
const trainer1=document.querySelector(".trainer-1"),
      trainer2 = document.querySelector(".trainer-2"),
      trainer3 = document.querySelector(".trainer-3");

   // start of trainer-1 hover
      trainer1.addEventListener('mouseover' , ()=> {
        trainer1.style.cssText=`
        transform: scale(1.1);
        position: absolute;
        left: 15px;
        top: 50px;
        z-index: 1;
        transition: all .5s;
        `
        trainer2.style.cssText=`
        opacity:0.3;
        right: 275px;
        transform: scale(0.8);
        transition: all .5s;`
        trainer3.style.cssText=`
        opacity:0.3;
        right:0px;
        top:50px;
        transform: scale(0.8);
        transition: all .5s;`
      })

      trainer1.addEventListener('mouseout', () => {
        trainer1.style.cssText=`
        transform: rotateZ(345deg);
        position: absolute;
        left: 215px;
        top: 80px;
        z-index: 1;
        transition: all .5s;
        `
        trainer2.style.cssText=`
        opacity:1;
        transform: scale(1.1);
        position: absolute;
        right: 480px;
        top: 50px;
        z-index: 2;
        `
        trainer3.style.cssText=`
        opacity:1;
        transform: rotateZ(20deg);
        position: absolute;
        right: 225px;
        top: 80px;
        `
      });
      // end of trainer-1 hover

      // start of trainer-2 hover
      trainer2.addEventListener('mouseover' , ()=> {
        trainer1.style.cssText=`
        transform: scale(0.8);
        opacity:0.3;
        position: absolute;
        left: 15px;
        top: 50px;
        z-index: 1;
        transition: all .5s;
        `
        trainer2.style.cssText=`
        transform: scale(1.1);
        right: 475px;
        transition: all .5s;`
        trainer3.style.cssText=`
        opacity:0.3;
        right:0px;
        top:50px;
        transform: scale(0.8);
        transition: all .5s;`
      })

      trainer2.addEventListener('mouseout', () => {
        trainer1.style.cssText=`
        transform: rotateZ(345deg);
        position: absolute;
        left: 215px;
        top: 80px;
        z-index: 1;
        transition: all .5s;
        `
        trainer2.style.cssText=`
        opacity:1;
        transform: scale(1.1);
        position: absolute;
        right: 480px;
        top: 50px;
        z-index: 2;
        `
        trainer3.style.cssText=`
        opacity:1;
        transform: rotateZ(20deg);
        position: absolute;
        right: 225px;
        top: 80px;
        `
      });

      // end of trainer-2 hover

      // start of trainer-3 hover
      trainer3.addEventListener('mouseover' , ()=> {
        trainer1.style.cssText=`
        transform: scale(0.8);
        opacity:0.3;
        position: absolute;
        left: 15px;
        top: 50px;
        z-index: 1;
        transition: all .5s;
        `
        trainer2.style.cssText=`
        transform: scale(0.8);
        opacity:0.3;
        right: 675px;
        transition: all .5s;`
        trainer3.style.cssText=`
        transform: scale(1.1);
        right:0px;
        top:50px;
        transition: all .5s;`
      })

      trainer3.addEventListener('mouseout', () => {
        trainer1.style.cssText=`
        transform: rotateZ(345deg);
        position: absolute;
        left: 215px;
        top: 80px;
        z-index: 1;
        transition: all .5s;
        `
        trainer2.style.cssText=`
        opacity:1;
        transform: scale(1.1);
        position: absolute;
        right: 480px;
        top: 50px;
        z-index: 2;
        `
        trainer3.style.cssText=`
        opacity:1;
        transform: rotateZ(20deg);
        position: absolute;
        right: 225px;
        top: 80px;
        `
      });
