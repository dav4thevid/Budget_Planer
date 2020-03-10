const reasonInput   =     document.querySelector('#input-reason');
const amountInput   =     document.querySelector('#input-amount');
const cancelBtn     =     document.querySelector('#btn-cancel');
const confirmBtn    =     document.querySelector('#btn-confirm');
const expensesList  =     document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtlr     =       document.querySelector('#ion-alert')

function presentAlert() {
    const alert = document.createElement('ion-alert');
    alert.header = 'Invalid Inputs';
    // alert.subHeader = 'Subtitle';
    alert.message = 'Please enter a valid reason and rating!!.';
    alert.buttons = ['Okay'];
  
    document.body.appendChild(alert);
    return alert.present();
  }

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmBtn.addEventListener('click',() => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim().length <= 0) {
    
        presentAlert();
        return;
    }
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ": N" + enteredAmount;

    expensesList.appendChild(newItem);

    totalExpenses += +enteredAmount;

    totalExpensesOutput.textContent = totalExpenses;
    clear();
});

cancelBtn.addEventListener('click', clear);