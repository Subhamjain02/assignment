import "./InvoiceDate.css";
function InvoiceDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="date__container mt-2">
      <h5 className="mt-1"><u>Due by</u></h5>
      <h5 className="">
        {month} {date}, {year}
      </h5>
    </div>
  );
}

export default InvoiceDate;
