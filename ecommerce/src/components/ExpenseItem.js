import "./ExpenseItem.css";
function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>March 20 2021</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">$290</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
