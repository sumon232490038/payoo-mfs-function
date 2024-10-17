function getInputFieldValueById(id){
    const step1 = document.getElementById(id).value
    const step2 = parseFloat(step1)
    return step2
}

function getElementinnerTextById(id){
    const step1 = document.getElementById(id).innerText;
    const step2 =parseFloat(step1)
    return step2
}

function addfunc(num1,num2) {
    const step1 = num1 + num2
    return step1
}

function substract(num1,num2){
    const step1 = num1 - num2;
    return step1
}


function hiddeAndBlock (id){
    document.getElementById("add-money-form").classList.add("hidden")
    document.getElementById("cash-out-form").classList.add("hidden")
    document.getElementById("transaction-section").classList.add("hidden")
    const block = document.getElementById(id).classList.remove("hidden")
    return block
}