import { connect } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay({ balance }) {
  // const balance = useSelector((state) => state.account.balance);

  return <div className="balance">{formatCurrency(balance)}</div>;
}

//old way of accessing store states before Hook, but now we use useSelector hook
function mapStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}
export default connect(mapStateToProps)(BalanceDisplay);
