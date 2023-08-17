document.getElementById('btn-deposit').addEventListener('click', function () {
    const previousBalance = getInnerTextOfElement('d-balance');
    const newBalance = getInnerValueOfElement('d-input');
    const newDepositBalance = previousBalance + newBalance;
    setValue('d-balance', newDepositBalance);
    const mainBalance = getInnerTextOfElement('main-balance');
    const newMainBalance = mainBalance + newDepositBalance;
    setValue('main-balance', newMainBalance);
});