import { Component } from "react";
import { CounterActions } from "../../components/CounterActions";
import { CounterResult } from "../../components/CounterResult";
import Styled from "./styles.module.css";

export class Counter extends Component {
  state = {
    counter: 0,
    isShowResult: false,
  };
  plusCounter = () => {
    // this.setState({ counter: this.state.counter + 1 });
    this.setState((prev) => {
      return {
        ...prev,
        counter: prev.counter + 1,
      };
    });
  };
  minusCounter = () => {
    this.setState((prev) => {
      return {
        ...prev,
        counter: prev.counter - 1,
      };
    });
  };

  showResult = () => {
    this.setState({ isShowResult: true });
  };
  hideResult = () => {
    this.setState({ isShowResult: false });
  };
  toggleResult = () => {
    const { isShowResult } = this.state;
    if (isShowResult) {
      this.hideResult();
    } else {
      this.showResult();
    }
  };

  componentDidMount() {
    /*
    Side effect
    1.Api calls (fetch)
    2.getElementById ... 
    3.document.title = `You clicked ${count} times`;
    */
    console.log("🚀 ~ componentDidMount");
  }
  componentDidUpdate() {
    console.log("🚀 ~ componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("🚀 ~ componentWillUnmount");
  }
  render() {
    console.log("Render");
    const { counter, isShowResult } = this.state;
    return (
      <div className={Styled["counter-section"]}>
        <CounterActions
          plusCounter={this.plusCounter}
          minusCounter={this.minusCounter}
          toggleResult={this.toggleResult}
          toggleResultBtnTextContent={isShowResult ? "Hide" : "Show"}
        />
        {isShowResult && <CounterResult counter={counter} />}
      </div>
    );
  }
}
