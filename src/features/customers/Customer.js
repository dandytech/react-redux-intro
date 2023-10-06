import { useSelector } from "react-redux";

function Customer() {
  //useSelector Hook to communicate to store using callBack function
  const fullName = useSelector((store) => store.customer.fullName);

  return (
    <h2>
      👋 Welcome, <span className="welcome">{fullName}</span>
    </h2>
  );
}

export default Customer;
