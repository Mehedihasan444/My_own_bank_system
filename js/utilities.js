function getInnerTextOfElement(id) {
    const previousBalanceElement = document.getElementById(id);
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    return previousBalance;
}


function getInnerValueOfElement(id) {
    const inputField = document.getElementById(id);
    const inputFieldValue = inputField.value;
    const inputFieldBalance = parseFloat(inputFieldValue);
    inputField.value = '';
    return inputFieldBalance;
}

function setValue(id , value) {
    document.getElementById(id).innerText = value;
    
}