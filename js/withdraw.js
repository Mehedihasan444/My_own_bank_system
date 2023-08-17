document.getElementById('btn-withdraw').addEventListener('click',function () {
    const previousBalance = getInnerTextOfElement('w-balance');
    const newBalance = getInnerValueOfElement('w-input');
    const newWithdrawBalance = previousBalance + newBalance;
    const mainBalance = getInnerTextOfElement('main-balance');
    const newMainBalance = mainBalance - newWithdrawBalance;
    if (newMainBalance<0) {
        alert('You do not have enough balance.')
    }else{
        setValue('w-balance', newWithdrawBalance);

        setValue('main-balance', newMainBalance);
    }
});