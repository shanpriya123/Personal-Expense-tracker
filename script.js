let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

function addExpense() {
  const amount = document.querySelector("input[placeholder='Enter amount']").value;
  const category = document.querySelector("select").value;
  const description = document.querySelector("input[placeholder='Enter description']").value;

  if (amount === "" || isNaN(amount)) {
    alert("Please enter a valid amount.");
    return;
  }

  const expense = {
    amount: parseFloat(amount),
    category,
    description
  };

  expenses.push(expense);
  localStorage.setItem("expenses", JSON.stringify(expenses));

  displayExpenses();
}

function displayExpenses() {
  const tableBody = document.querySelector("table tbody");
  tableBody.innerHTML = "";

  let total = 0;

  expenses.forEach(exp => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>$${exp.amount.toFixed(2)}</td>
      <td>${exp.category}</td>
      <td>${exp.description}</td>
    `;

    total += exp.amount;
    tableBody.appendChild(row);
  });

  document.getElementById("total").textContent = `Total: $${total.toFixed(2)}`;
}

// Initial display on page load
window.onload = () => {
  displayExpenses();
}