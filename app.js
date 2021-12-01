const billAmount= document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given")
const checkButton= document.querySelector("#check-button");
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes")

const availableNotes= [2000,500,100,50,10,5,1];
checkButton.addEventListener("click",function validateAmount(){
 message.style.display="none"

if(cashGiven.value && billAmount.value>=0) {
        if(cashGiven.value-billAmount.value>=0){
         if(cashGiven.value>=billAmount.value){
         const amountReturn=cashGiven.value-billAmount.value;
         calculateChange(amountReturn);
        }
        else{
            message.style.display="block";
            message.innerHTML="wanna wash plates?";  
        }
    }
    else{
message.style.display="block";
message.innerHTML="wanna wash plates!"; 
    }}else{
        message.style.display="block";
        message.innerHTML="Error amount!";  
    }

    cashGiven.value='';
    billAmount.value=''
})

function calculateChange(amountReturn){
for(let i=0;i<availableNotes.length;i++){
    const numberOfNotes =Math.trunc(amountReturn/availableNotes[i]);
    amountReturn%=availableNotes[i];
 noOfNotes[i].innerText=numberOfNotes;
}
}