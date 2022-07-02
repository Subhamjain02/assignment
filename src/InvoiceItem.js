import InvoiceDate from "./InvoiceDate";
import "./InvoiceItem.css";

function InvoiceItem(props) {
  return (
    <div className="container custom__width invoiceitem__border mt-4 mb-4">
      <div className="row mt-2 row__border">
        <div className="col-4">{props.invoicenumber}</div>
        <div className="col-8 margin__adjust">{props.addnotes}</div>
      </div>
      <div className="row mt-4">
        <div className="col-4"><u>Item Name</u> </div>
        <div className="col-2 adjust__center"><u>Rate</u> </div>
        <div className="col-2 adjust__center"> <u>Quantity</u> </div>
        <div className="col-2 adjust__center"> <u>Total</u></div>
        <div className="col-2 adjust__center"><u>Status</u></div>
      </div>
      <div className="row mb-3 mt-4">
        <div className="col-4">{props.name} </div>
        <div className="col-2 adjust__center">{props.rate}</div>
        <div className="col-2 adjust__center">{props.quantity}</div>
        <div className="col-2 adjust__center">{props.total}</div>
        <div className="col-2 adjust__center">{props.status}</div>
      </div>
      <div className="row mb-3">
        <div className="col-4"></div>
        <div className="col-4"><InvoiceDate date={props.date}></InvoiceDate></div>
        <div className="col-4"></div>
      </div>
      
    </div>
  );
}

export default InvoiceItem;
