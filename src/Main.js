import React, { Component } from "react";
import "./Mainfunc.js";

export default class Main extends Component {
  state = {
    amt: null,
    basicCrcy: "CNY",
    targetCrcy: "USD",
    result: null,
  };

  async calculate(amt, basicCrcy, targetCrcy) {
    console.log(amt);
    console.log(basicCrcy);
    console.log(targetCrcy);
    return await fetch(
      `https://v6.exchangerate-api.com/v6/db6be6a69758392eb06f7863/latest/${basicCrcy}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const rate = data.conversion_rates[targetCrcy];
        console.log(rate);
        return amt + basicCrcy + "=" + (amt * rate).toFixed(2) + targetCrcy;
      })
      .catch((err) => console.log("Request Failed"));
  }

  handleBasicChange = (event) => {
    const element = event.target;
    this.setState({
      basicCrcy: element.value,
    });
  };

  handleTargetChange = (event) => {
    const element = event.target;
    this.setState({
      targetCrcy: element.value,
    });
  };

  onInput = (event) => {
    this.setState({
      amt: event.target.value,
    });
  };

  onClickGet = async () => {
    const { amt, basicCrcy, targetCrcy } = this.state;
    const result = await this.calculate(amt, basicCrcy, targetCrcy);
    console.log("result", result);
    this.setState({
      result,
    });
  };

  render() {
    const { basicCrcy, targetCrcy, result } = this.state;
    return (
      <div className="main">
        <div className="topicChn">汇率计算器</div>
        <div className="topicEng">currency Converter</div>
        <div>输入金额</div>
        <input onChange={this.onInput} />
        <div>
          <span>基础货币</span>
          <span>目标货币</span>
        </div>
        <select onChange={this.handleBasicChange} value={basicCrcy}>
          <option value="CNY">人民币</option>
          <option value="USD">美元</option>
          <option value="CAD">加币</option>
          <option value="EUR">欧元</option>
          <option value="JPY">日元</option>
          <option value="KRW">韩元</option>
        </select>
        <button>to</button>
        <select onChange={this.handleTargetChange} value={targetCrcy}>
          <option value="CNY">人民币</option>
          <option value="USD">美元</option>
          <option value="CAD">加币</option>
          <option value="EUR">欧元</option>
          <option value="JPY">日元</option>
          <option value="KRW">韩元</option>
        </select>
        <div>{result}</div>
        <button onClick={this.onClickGet}>获取汇率</button>
      </div>
    );
  }
}
