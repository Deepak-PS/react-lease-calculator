import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class LeaseCalculator extends Component {
  constructor() {
    super();

    this.state = {
      monthlyRate: 0,
      principal: "",
      interestRate: "",
      duration: ""
    };
    this.calculate = this.calculate.bind(this);
    this.handlePrincipal = this.handlePrincipal.bind(this);
    this.handleInterestRate = this.handleInterestRate.bind(this);
    this.handleDuration = this.handleDuration.bind(this);
  }

  /* To calculate Monthly Rate*/
  calculate(event) {
    event.preventDefault();
      
    let decInterestRate = this.state.interestRate;
      
    {/* To convert interest rate in percentage to decimal */}
    decInterestRate /= 100.0;
      
    {/* To get monthly interest rate */}
    let mtRate = decInterestRate / 12.0;
      
    {/* To calculate monthly rate */}
    this.state.monthlyRate =
      this.state.principal *
      mtRate /
      (1 - Math.pow(1 + mtRate, -this.state.duration));

    this.setState({
      monthlyRate: this.state.monthlyRate
    });
  }


  handlePrincipal(event) {
    this.setState({ principal: event.target.value });
  }

  handleInterestRate(event) {
    this.setState({ interestRate: event.target.value });
  }

  handleDuration(event) {
    this.setState({ duration: event.target.value });
  }
  render() {
    return (
      <div className="App">
        <form>
          <fieldset>
            <legend>Lease Calculator</legend>
            <table>
              <tbody>
                <tr>
                  <td>Principal: </td>
                  <td>
                    <input
                      type="text"
                      name="principal"
                      value={this.state.principal}
                      onChange={this.handlePrincipal}
                    />
                  </td>
                  <td>€</td>
                </tr>
                <tr>
                  <td>Interest Rate: </td>
                  <td>
                    <input
                      type="text"
                      name="interestRate"
                      value={this.state.interestRate}
                      onChange={this.handleInterestRate}
                    />
                  </td>
                  <td>%</td>
                </tr>
                <tr>
                  <td>Duration: </td>
                  <td>
                    <input
                      type="text"
                      name="duration"
                      value={this.state.duration}
                      onChange={this.handleDuration}
                    />
                  </td>
                  <td>months</td>
                </tr>
              </tbody>
            </table>
            <input
              type="submit"
              onClick={this.calculate}             
              value="Calculate"
            />
            <hr />
            <table>
              <tbody>
                <tr>
                  <td>Monthly Rate: </td>
                  <td>
                    {this.state.monthlyRate} €
                  </td>
                </tr>
              </tbody>
            </table>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default LeaseCalculator;
