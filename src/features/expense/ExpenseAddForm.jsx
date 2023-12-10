// ExpenseAddForm.js
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ExpenseAddForm = () => {
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date());
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", { category, date, label, amount });
  };

  return (
    <form className="max-w-md mx-auto mt-8" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="category"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Category
        </label>
        <select
          id="category"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="food">Food</option>
          <option value="groceries">Groceries</option>
          <option value="utilities">Utilities</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <div className="mb-4">
        <label
          htmlFor="date"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Date
        </label>
        <DatePicker
          id="date"
          selected={date}
          onChange={(newDate) => setDate(newDate)}
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="label"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Label
        </label>
        <input
          type="text"
          id="label"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="amount"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Amount
        </label>
        <input
          type="text"
          id="amount"
          className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-end">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ExpenseAddForm;
