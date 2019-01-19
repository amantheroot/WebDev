class Prices extends React.Component {
  state = {
    currency: "USD"
  };
  render() {
    let bpi;
    switch (this.state.currency) {
      case "USD":
        bpi = this.props.bpi.USD;
        break;
      case "GBP":
        bpi = this.props.bpi.GBP;
        break;
      case "EUR":
        bpi = this.props.bpi.EUR;
        break;
      default:
        bpi = this.props.bpi.USD;
        break;
    }
    return (
      <div>
        <h1>Prices</h1>
        <ul className="list-group">
          <li className="list-group-item">
            Bitcoin Rate For {bpi.description}:{" "}
            <span className="badge  badge-primary">{bpi.code}</span>
            <strong> {bpi.rate}</strong>
          </li>
        </ul>
        <br />
        <select
          onChange={e => this.setState({ currency: e.target.value })}
          className="form-control"
        >
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
          <option value="EUR">EUR</option>
        </select>
      </div>
    );
  }
}

export default Prices;
