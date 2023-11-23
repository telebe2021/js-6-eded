// document.addEventListener('DOMContentLoaded', function () {
//     const container = document.getElementById('container');
  
//     for (let i = 1; i <= 9; i++) {
//       const box = document.createElement('div');
//       box.classList.add('box');
  
//       const randomColor = getRandomColor();
//       box.style.backgroundColor = randomColor;
  
//       box.addEventListener('click', function () {
     
//         resetColors();
  
        
//         box.style.backgroundColor = 'red';
//       });
  
//       container.appendChild(box);
//     }
//   });
  
//   function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }
  
//   function resetColors() {
//     const boxes = document.querySelectorAll('.box');
//     boxes.forEach(box => {
//       const randomColor = getRandomColor();
//       box.style.backgroundColor = randomColor;
//     });
// //   }

//    1-------


//  var createDivButton = document.getElementById("createDivButton");

//  createDivButton.addEventListener("click", function() {
//   var newDiv = document.createElement("div");


//   newDiv.style.width = "200px";
//   newDiv.style.height = "100px";
//   newDiv.style.backgroundColor = "green";
//   newDiv.style.color = "white";
//   newDiv.style.border = "2px solid black";
//   newDiv.style.textAlign = "center";
//   newDiv.style.lineHeight = "100px";
//   newDiv.textContent = " Yeni Div!";

//   document.body.appendChild(newDiv);
// });


// // 2-------
// var people = [
//     { name: "Ali", age: 25 },
//     { name: "ilham", age: 30 },
//     { name: "Mehmet", age: 22 },
//     { name: "Zeynep", age: 28 },
//     { name: "Aliqasim", age: 21 },
//     { name: "burhan", age: 33 },
//     { name: "aladdin", age: 23 },
//     { name: "Zaur", age: 24 },
//   ];

//   function showList(peopleArray) {
//     var listContainer = document.getElementById("personList");
//     listContainer.innerHTML = "";

//     peopleArray.forEach(function(person) {
//       var listItem = document.createElement("li");
//       listItem.textContent = `${person.name}, ${person.age} yaş`;
//       listContainer.appendChild(listItem);
//     });
//   }

//   showList(people);

//   document.getElementById("filterButton").addEventListener("click", function() {
//     var filteredPeople = people.filter(function(person) {
//       return person.name.toLowerCase().startsWith('a');
//     });

//     showList(filteredPeople);
//   });

    // 3-----


    // var shapes = [
    //     { type: "square", text: "Kare" },
    //     { type: "circle", text: "Daire" },
    //   ];
    
    //   function showShapes(shapesArray) {
    //     var container = document.getElementById("shapeContainer");
    //     container.innerHTML = "";
    
    //     shapesArray.forEach(function(shape) {
    //       var shapeElement = document.createElement("div");
    //       shapeElement.classList.add("shape", shape.type);
    //       shapeElement.textContent = shape.text;
    
    //       shapeElement.addEventListener("click", function() {
    //         handleShapeClick(shape);
    //       });
    
    //       container.appendChild(shapeElement);
    //     });
    //   }
    
    //   showShapes(shapes);
    
    //   function handleShapeClick(shape) {
    //     var newDiv = document.createElement("div");
    //     newDiv.textContent = `${shape.text} içinde!`;
    //     newDiv.classList.add("shape", shape.type);
    
    //     document.body.appendChild(newDiv);
    //   }


    //    4----


    
//   document.getElementById("submitButton").addEventListener("click", function() {
//     let firstName = document.getElementById("firstName").value;
//     let lastName = document.getElementById("lastName").value;

//     let fullName = `${firstName} ${lastName}`;

//     let fullNameContainer = document.getElementById("fullNameContainer");

//     fullNameContainer.textContent = `Full Name: ${fullName}`;
//   });

// 4..toExponential.apply.apply.


let navElement = document.querySelector('nav');

let firstLi = navElement.querySelector('li:first-child');
console.log(firstLi);

let divElement = navElement.querySelector('div');
console.log(divElement);

let thirdSpan = navElement.querySelector('li:nth-child(3) span');
console.log(thirdSpan);

let secondSpanText = navElement.querySelector('li:nth-child(2) span').textContent;
console.log(secondSpanText);


// 5------  
// function showSelectedValue() {
//     var radioButtons = document.getElementsByName("ageGroup");

//     var selectedRadioButton;
//     for (var i = 0; i < radioButtons.length; i++) {
//       if (radioButtons[i].checked) {
//         selectedRadioButton = radioButtons[i];
//         break;
//       }
//     }

//     if (selectedRadioButton) {
//       console.log("Seçilen yaş grubu: " + selectedRadioButton.value);
//     } else {
//       console.log("Herhangi bir yaş grubu seçilmedi.");
//     }
//   }


// 6--0---
//   var textInput = document.getElementById("textInput");
//   var openButton = document.getElementById("openButton");
//   var closeButton = document.getElementById("closeButton");

//   function enableInput() {
//     textInput.removeAttribute("disabled");
//     openButton.setAttribute("disabled", true);
//     closeButton.removeAttribute("disabled");
//   }

//   function disableInput() {
//     textInput.setAttribute("disabled", true);
//     openButton.removeAttribute("disabled");
//     closeButton.setAttribute("disabled", true);
//   }