document.getElementById("cash-out-btn").addEventListener("click",function(event){
    event.preventDefault();

    const pinNumber2 = getInputFieldValueById("pin-number-2");
    const addAmount2 = getInputFieldValueById("add-amount-1");
    const accountBlance2 = getElementinnerTextById("account-balance")

    if(isNaN(addAmount2)){
        alert("sorry to cash out ")
        return
    }
    

    if(pinNumber2 === 123){

        if(addAmount2 > accountBlance2){
            alert("you have not enough money ")
            return
        }
        const newBalance2 = substract(accountBlance2,addAmount2)
        document.getElementById("account-balance").innerText = newBalance2

        const p = document.createElement("p")
        p.innerText = `cash Out: ${addAmount2} new balance ${newBalance2}`
        document.getElementById("transaction-section").appendChild(p)
        
        

    }
    else {
        alert('sorry pin or pass was wrong maybe!')
    }


})