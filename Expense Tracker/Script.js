const expenseForm = document.getElementById('expenseForm')
const expenseList = document.getElementById('expenseList')
const totalAmountDisplay = document.getElementById('totalAmount');

let totalAmount = 0;

expenseForm.addEventListener('submit',function(event){
    event.preventDefault();

    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if(description && category && !isNaN(amount) && amount>0){
        const newRow = document.createElement('tr')

        newRow.innerHTML = `<td>${description}</td>
        <td>${category}</td>
        <td>${amount}</td>`;
        
        expenseList.appendChild(newRow);

        totalAmount += amount;
        totalAmountDisplay.textContent = totalAmount.toFixed(2);

        document.getElementById('description').value=''
    document.getElementById('category').value=''
    document.getElementById('amount').value=''
    }else{
        alert('Please fill out all fields with valid Data')
    }

    

})
