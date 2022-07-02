import "./InvoiceForm.css";
import { useState } from "react";
function InvoiceForm(props) {
  const [enteredInvoice, setEnteredInvoice] = useState("");

  const invoiceChangeHandler = (event) => {
    setEnteredInvoice(event.target.value);
  };
  const [enteredNotes, setEnteredNotes] = useState("");
  const notesChangeHandler = (event) => {
    setEnteredNotes(event.target.value);
  };
  const [enteredItemName, setEnteredItemName] = useState("");
  const nameChangeHandler = (event) => {
    setEnteredItemName(event.target.value);
  };

  const [enteredRate, setEnteredRate] = useState("");
  const rateChangeHandler = (event) => {
    setEnteredRate(event.target.value);
  };

  const [enteredQuantity, setEnteredQuantity] = useState("");
  const quantityChangeHandler = (event) => {
    setEnteredQuantity(event.target.value);
  };

  const [enteredEmail, setEnteredEmail] = useState("");
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const [enteredStatus, setEnteredStatus] = useState("");
  const statusChangeHandler = (event) => {
    setEnteredStatus(event.target[event.target.selectedIndex].text);
  };

  const[enteredDate, setEnteredDate] = useState("")
  const dateChangeHandler = (event) => {
      setEnteredDate(event.target.value);
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const invoiceData = {
      invoice: enteredInvoice,
      notes: enteredNotes,
      name: enteredItemName,
      rate: enteredRate,
      quantity: enteredQuantity,
      status: enteredStatus,
      date: new Date (enteredDate),
    };

    props.onAddInvoice(invoiceData);
    setEnteredInvoice("");
    setEnteredNotes("");
    setEnteredItemName("");
    setEnteredRate("");
    setEnteredQuantity("");
    setEnteredEmail("");
  };

  return (
    <div>
      <form
        onSubmit={formSubmitHandler}
        className="border border-2 p-3 invoiceform__container mt-3 mb-5"
      >
        <div className="row">
          <div className="col-6 form__control">
            <label for="inputInvoice" class="form-label">
              Invoice Number
            </label>
            <input
              onChange={invoiceChangeHandler}
              type="text"
              value={enteredInvoice}
              class="form-control"
              id="inputInvoice"
              placeholder="19452"
            />
          </div>
          <div className="col-6 form__control">
            <label for="inputNotes" class="form-label">
              Payment Notes
            </label>
            <input
              onChange={notesChangeHandler}
              value={enteredNotes}
              type="text"
              class="form-control"
              id="inputNotes"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6 form__control">
            <label for="inputNotes" class="form-label">
              Item Name
            </label>
            <input
              onChange={nameChangeHandler}
              value={enteredItemName}
              type="text"
              class="form-control"
              id="inputNotes"
              placeholder="SEO Services for taxadda.com"
            />
          </div>
          <div className="col-3 form__control">
            <label for="inputNotes" class="form-label">
              Rate
            </label>
            <input
              onChange={rateChangeHandler}
              value={enteredRate}
              type="number"
              class="form-control"
              id="inputNotes"
              placeholder="per hour in USD"
            />
          </div>
          <div className="col-3 form__control">
            <label for="inputNotes" class="form-label">
              Quantity
            </label>
            <input
              onChange={quantityChangeHandler}
              value={enteredQuantity}
              type="number"
              class="form-control"
              id="inputNotes"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-6 form__control">
            <label for="inputEmail1" class="form-label">
              Email address
            </label>
            <input
              onChange={emailChangeHandler}
              value={enteredEmail}
              placeholder="johndoe312@gmail.com"
              type="email"
              class="form-control"
              id="inputEmail1"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="col-6 form__control">
            <label class="form-label">Due Date</label>
            <input
              onChange={dateChangeHandler}
              class="form-control"
              type="Date"
              min="2022-01-01"
              max="2024-12-31"
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-4"></div>
          <div className="col-4 invoice ">
            <select class="form-select" onChange={statusChangeHandler}>
              <option selected>Invoice Status</option>
              <option value="1">Paid</option>
              <option value="2">Outstanding</option>
              <option value="3">Late</option>
            </select>
          </div>
          <div className="col-4"></div>
        </div>
        <div className="margin__adjust mt-5">
          <button className="btn btn-outline-light btn-dark" type="submit">
            Create Invoice
          </button>
        </div>
      </form>
    </div>
  );
}

export default InvoiceForm;
