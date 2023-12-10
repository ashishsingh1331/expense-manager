import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import ExpenseAddForm from "../../features/expense/ExpenseAddForm";

function ExpenseAdd() {
  const [showExpenseAddForm, setExpenseAddFormVisibility] = useState(false);

  function handleClick() {
    setExpenseAddFormVisibility(true);
  }

  return (
    <div>
      <Button onClick={handleClick} variant="primary">
        Add expense
      </Button>
      {showExpenseAddForm && (
        <Modal
          onClose={() => setExpenseAddFormVisibility(false)}
          isOpen={showExpenseAddForm}
        >
          <ExpenseAddForm />
        </Modal>
      )}
    </div>
  );
}

export default ExpenseAdd;
