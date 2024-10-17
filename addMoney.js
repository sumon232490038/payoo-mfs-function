document.getElementById('add-money-btn').addEventListener("click",function(event){
    event.preventDefault()
    const addAmount = getInputFieldValueById("add-amount")
    const pinNumber = getInputFieldValueById("pin-number")
    const accountBlance = getElementinnerTextById("account-balance")


    if(isNaN(addAmount)){
        alert("sorry")
        return
    }

    if(pinNumber === 123){
        const newBalance = addfunc(addAmount,accountBlance)
        document.getElementById("account-balance").innerText = newBalance
        const p = document.createElement("p")
        p.innerText = `added:${addAmount} new balance ${newBalance}`
        document.getElementById("transaction-section").appendChild(p)

      
    }
    else {
        alert("your are not write parson and passwond wrong")
    }





})