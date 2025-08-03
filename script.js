function calculateFinancialSummary() {
  const salary = 10000;
  const daysInMonth = 30;
  const weeksInMonth = 4;
  const monthsInYear = 12;

  let totalExpense = 0;
  expenses.forEach(exp => totalExpense += exp.amount);

  let dailyLimit = salary / daysInMonth;
  let weeklyLimit = salary / weeksInMonth;
  let monthlyBalance = salary - totalExpense;
  let yearlyBalance = (salary * monthsInYear) - (totalExpense * monthsInYear);

  document.getElementById("daily").textContent = `Daily: ₹${dailyLimit.toFixed(2)} - ₹${(totalExpense / daysInMonth).toFixed(2)} = ₹${(dailyLimit - (totalExpense / daysInMonth)).toFixed(2)} (Gain/Loss)`;
  document.getElementById("weekly").textContent = `Weekly: ₹${weeklyLimit.toFixed(2)} - ₹${(totalExpense / weeksInMonth).toFixed(2)} = ₹${(weeklyLimit - (totalExpense / weeksInMonth)).toFixed(2)}`;
  document.getElementById("monthly").textContent = `Monthly: ₹${salary} - ₹${totalExpense.toFixed(2)} = ₹${monthlyBalance.toFixed(2)}`;
  document.getElementById("yearly").textContent = `Yearly: ₹${salary * monthsInYear} - ₹${(totalExpense * monthsInYear).toFixed(2)} = ₹${yearlyBalance.toFixed(2)}`;
}
