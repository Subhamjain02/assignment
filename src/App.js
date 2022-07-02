import "./App.css";
import { useState } from "react";
import InvoiceForm from "./InvoiceForm";
import InvoiceList from "./InvoicesList";
const DUMMY_DATA = [
  {
    invoice: "#" + 13491,
    notes: "Please make the payment at 12345@ybl UPI",
    name: "Subham's tax filing",
    rate: 60,
    quantity: 3,
    total: 100,
    status: "paid",
    date: new Date(2021, 11, 14),

  },
  {
    invoice: "#" + 16315,
    notes: "Only UPI accepted at 9028171@okicic",
    name: "Cyber attacks protection services",
    rate: 35,
    quantity: 6,
    total: 100,
    status: "outstanding",
    date: new Date(2022, 4, 21),

  },
  {
    invoice: "#" + 10026,
    notes: "Paid in cash",
    name: "Car servicing for Audi A18",
    rate: 100,
    quantity: 2,
    total: 100,
    status: "late",
    date: new Date(2022, 9, 14),


  },
  {
    invoice: "#" + 13641,
    notes: "Prepaid service in store",
    name: "Oneplus repair and service",
    rate: 30,
    quantity: 4,
    total: 100,
    status: "paid",
    date: new Date(2021, 12, 25),


  },
];
function App() {
  const [invoices, setInvoices] = useState(DUMMY_DATA);
  
  const addInvoiceData = (additionalInvoiceData) => {
    setInvoices((prevExpenses) => {
      return [additionalInvoiceData, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <InvoiceForm onAddInvoice={addInvoiceData}></InvoiceForm>
      <InvoiceList invoicedata={invoices}></InvoiceList>
    </div>
  );
}

export default App;
