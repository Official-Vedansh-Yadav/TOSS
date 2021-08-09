console.log("Head Tail Game created by vedansh yadav");

// Intializing the toss funciton
function toss(value){
    // Intailizing the variables
    let random_no = Math.floor((Math.random() * 2) + 1);
    let coin_value;
    let choosen_value = value;
    // Adding rotate classes to the head and tail element
    document.querySelector(".head").classList.add('change-head');
    document.querySelector(".tail").classList.add('change-tail');   
// running all the logical code after 3 second of click button because after three second head and tail elemnt stops rotating
    setTimeout(()=>{
        // Removing rotate classes to the head and tail element
        document.querySelector(".head").classList.remove('change-head');
        document.querySelector(".tail").classList.remove('change-tail');   
        // Intialzing the coin value and the z-index of head and tail elements on the base of random number 
        if (random_no == 1) {
            coin_value = "head";
            document.querySelector(".head").style.zIndex = "10";
            document.querySelector(".tail").style.zIndex = "-10";
        }else if (random_no == 2) {
            coin_value = "tail";
            document.querySelector(".tail").style.zIndex = "10";
            document.querySelector(".head").style.zIndex = "-10";
        }
        // checking whether You won the toss or you lose the toss
        if (choosen_value == coin_value) {
            document.querySelector(".result").innerHTML = "WOW! You won the toss";
        }else if(choosen_value != coin_value){
            document.querySelector(".result").innerHTML = "Oops! You loss the toss";
        }
    },2000)
}