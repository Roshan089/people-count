//method11111111------------
/*let countEL = document.getElementById("countEl")



let count =0;
function increment() {
    
    count = count+1;
    countEL.innerText = count;
    console.log(count);

}*/


//method22222222222-------------------

const countEL = document.getElementById("countEl")
const increm = document.getElementById("increment-buttom")
const saveBut =document.getElementById("save-buttom")
const peopC = document.getElementById("countsave")
let count =0;

console.log(saveBut);

increm.addEventListener("click", ()=> {
    count = count + 1;
    countEL.innerHTML = count;
})

saveBut.addEventListener("click", ()=> {
    let countstr = count + "-";
    peopC.innerHTML +=  count;
    console.log(count);
})