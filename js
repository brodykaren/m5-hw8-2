// Create variables to count wins and losses

var wins = 0;
var losses = 0






// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'

const winElm = document.querySelector("#wins");
const losesElm = document.querySelector("#losses")
const messageElm = document.querySelector("#message")











// target all .box elements and attach a click event listener to each one using a loop

// determine which box was clicked with 'this.textContent' or event.target.textContent

const boxes = document.querySelectorAll(".box")

boxes.forEach(function(box){
    box.addEventListener("click", function(e){
       let clicked = parseInt(e.target.textContent) 
       console.log(clicked, typeof clicked)
//        var randomNumber = Math.ceil(Math.random()*3)
//        if(randomNumber === clicked){
//             wins++
//             messageElm.innerText = "Yay!! It's a win!!!"
//        }else{
//             losses ++
//             messageElm.innerText = "Oops!! Try again!"
//        }

//        winElm.innerText = wins;
//        losesElm.innerText = losses
//     })
// })




console.log(randomNumber)




// Between any two numbers


// Math.floor(Math.random() * (max - min + 1)) + min;






// determine if the box clicked is equal to the random number


// function boxclick() {
//     return Math.floor(Math.random() * 10);
// }




// if the numbers match, display a winning message by changing the text content of the div#message element


 


// if the numbers match, increment wins and display the win count in div#wins
// if the numbers don't match, change the div#message element's text to a random losing message from the array above




// let wins;

// if (Numbersmatch) {

//      Numbersmatch = wins;

// }
// alert ( "Wow, Let's go!!!")



//          Numbersmatch();


// function Numbersmatch() {
//      const num = Math.ceil(Math.randomn() * 10);
//      console.log(num);
//      const gnum = prompt('match the game');
//      if (gnum == num)
//           console.log('Matched');

//      else
//           console.log('Not matched' + gnum);
// }




// if the numbers don't match, increment losses and display the loss count in div#losses

var randomNumber = Math.ceil(Math.random()*3)
if(randomNumber === clicked){
     wins++
     messageElm.innerText = "Yay!! It's a win!!!"
}else{
     losses ++
     messageElm.innerText = "Oops!! Try again!"
}

winElm.innerText = wins;
losesElm.innerText = losses

         
})
})

 animation

var btn= document. querySelector ('button')
var box = document.querySelector ('box')

btn.onclick = function () {

 box.style.animationName = ""   
}


