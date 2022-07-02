import InvoiceItem from "./InvoiceItem";
import "./InvoiceList.css";

function InvoiceList(props) {
  return (
    <div className="container invoicelist__container border border-5 border-dark">
      {props.invoicedata.map((invoices) => (
        <InvoiceItem
          invoicenumber={invoices.invoice}
          addnotes={invoices.notes}
          name={invoices.name}
          rate={invoices.rate}
          quantity={invoices.quantity}
          total={invoices.rate * invoices.quantity}
          status={invoices.status}
          date={invoices.date}
        />
      ))}
    </div>
  );
}

export default InvoiceList;
