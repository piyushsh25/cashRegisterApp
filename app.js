const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkButton=document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");


const availableNotes=[2000,500,100,10,5,1];
checkButton.addEventListener("click",function calculateChange(){
hideMessage();
if(Number(billAmount.value)>0){
if(Number(cashGiven.value)>=Number(billAmount.value)){
const amountToBeReturned=cashGiven.value-billAmount.value;
changeToBeReturned(amountToBeReturned);
}else{
    showMessage("wanna wash plates??")
    billAmount.value='';
cashGiven.value=''
}
}else{
    showMessage("invalid bill amount")
    billAmount.value='';
cashGiven.value=''
}


});
function changeToBeReturned(amountToBeReturned){
    for(let i=0;i<availableNotes.length;i++){
        const change=Math.trunc(amountToBeReturned/availableNotes[i]);
        amountToBeReturned=amountToBeReturned%availableNotes[i]
        noOfNotes[i].innerText=change;
    }
   
}
function hideMessage(){
    message.style.display="none";
}
function showMessage(msg){
    message.style.display="block";
    message.innerText=msg;
}