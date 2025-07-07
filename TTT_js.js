// let boxes = document.querySelectorAll(".box")
// let reset = document.querySelector("#reset")

// let turn1 =true;//playerX  playerO

// const winPattern =[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,6,8],
//     [6,7,8],
// ];

// // CLICKING BOXES FUNCTIONS
// boxes.forEach((box) =>{
//     box.addEventListener("click", () =>{
//         console.log("box was clicked");

//         if(turn1){
//             box.innerText ="X";
//             turn1=false;
//         }
        
//         else{
//             box.innerText="O";
//             turn1=true;
//         }
//         box.disabled=true;

//         checkwinner();

//     });
// });



// //Disabling all boxes 
// //Used after game is won 
// const dis_BOX = () =>{
//     for(let box of boxes){
//         box.disabled = true;
//     }
// };

// // Checking for winner
// const checkwinner = () =>{
//     let winnerFound = false;

//     for(let pattern of winPattern){
//         let posV1= boxes[pattern[0]].innerText;
//         let posV2= boxes[pattern[1]].innerText;
//         let posV3= boxes[pattern[2]].innerText;

//         if(posV1 !="" && posV2 !="" && posV3 !=""){
//             if(posV1 === posV2 && posV1===posV3){
//                 console.log("winner");
//                 dis_BOX();       //HERE
//             }
//         }
//     }

//     // Check for draw if no winner
//     if (!winnerFound) {
//         let filledCount = 0;
//         boxes.forEach((box) => {
//             if (box.innerText !== "") filledCount++;
//         });

//         if (filledCount === 9) {
//             console.log("Draw");
//             dis_BOX();
//         }
//     }

// };

// //Resetting game
// const resetGame = () => {
//     let turn1 =true;
//     for (let box of boxes) {
//         box.innerText = "";     
//         box.disabled = false;   
//     }
// };



// reset.addEventListener("click", () => {
//     resetGame();
// });

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let title = document.querySelector("#title");

let turn1 = true; // true for 'X', false for 'O'

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 6, 8],
    [6, 7, 8],
];

// Function to disable all boxes after win or draw
const dis_BOX = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

// Function to check for a winner or draw
const checkwinner = () => {
    let winnerFound = false;

    for (let pattern of winPattern) {
        let pos1 = boxes[pattern[0]];
        let pos2 = boxes[pattern[1]];
        let pos3 = boxes[pattern[2]];

        let val1 = pos1.innerText;
        let val2 = pos2.innerText;
        let val3 = pos3.innerText;

        if (val1 !== "" && val2 !== "" && val3 !== "") {
            if (val1 === val2 && val1 === val3) {
                console.log("Winner:", val1);

                // Apply pop-out style to winning boxes
                pos1.classList.add("winner-box");
                pos2.classList.add("winner-box");
                pos3.classList.add("winner-box");

                // Transition heading to show winner
                title.innerText = `${val1} is the winner! 🏆`;
                title.classList.add("winner-text");

                dis_BOX();
                winnerFound = true;
                break;
            }
        }
    }

    // Check for draw if no winner
    if (!winnerFound) {
        let filledCount = 0;
        boxes.forEach((box) => {
            if (box.innerText !== "") filledCount++;
        });

        if (filledCount === 9) {
            console.log("Draw");

            title.innerText = "It's a draw! 😅";
            title.classList.add("winner-text");

            dis_BOX();
        }
    }
};

// Function to handle clicks on boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return;

        if (turn1) {
            box.innerText = "X";
            turn1 = false;
        } else {
            box.innerText = "O";
            turn1 = true;
        }

        box.disabled = true;
        checkwinner();
    });
});

// Function to reset the game
const resetGame = () => {
    turn1 = true;
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
        box.classList.remove("winner-box");
    }

    // Reset title text
    title.innerText = "Tic-Tac-Toe";
    title.classList.remove("winner-text");
};

reset.addEventListener("click", resetGame);
