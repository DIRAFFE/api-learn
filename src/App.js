import React from "react";

export default function App() {
  const state = {
    amt: null,
    basicCrcy: "CNY",
    targetCrcy: "USD",
    result: null,
  };

  const getResult = async () => {
    const { amt, basicCrcy, targetCrcy } = state;
    state.result = await calculate(amt, basicCrcy, targetCrcy);
    console.log(state.result);
  };

  function calculate(amt, basicCrcy, targetCrcy) {
    console.log(amt);
    console.log(basicCrcy);
    console.log(targetCrcy);
    fetch(
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

  const handleBasicChange = (e) => {
    state.basicCrcy = e.target.value;
  };
  const handleTargetChange = (e) => {
    state.targetCrcy = e.target.value;
  };
  const handleAmountChange = (e) => {
    state.amt = e.target.value;
  };
  const handleCurrency = (e) => {
    console.log(e.target);
  };
  return (
    <div>
      <div className="topicChn">汇率计算器</div>
      <div className="topicEng">currency Converter</div>
      <div>输入金额</div>
      <input className="amount" onChange={handleAmountChange} />
      <div>
        <span>基础货币</span>
        <span>目标货币</span>
      </div>
      <select
        className="basicCurrency"
        onChange={handleBasicChange}
        defaultValue="CNY"
      >
        <option value="CNY">人民币</option>
        <option value="USD">美元</option>
        <option value="CAD">加币</option>
        <option value="EUR">欧元</option>
        <option value="JPY">日元</option>
        <option value="KRW">韩元</option>
      </select>
      <button className="swapIcon">to</button>
      <select
        className="targetCurrency"
        onChange={handleTargetChange}
        defaultValue="USD"
      >
        <option value="CNY">人民币</option>
        <option value="USD">美元</option>
        <option value="CAD">加币</option>
        <option value="EUR">欧元</option>
        <option value="JPY">日元</option>
        <option value="KRW">韩元</option>
      </select>
      <div className="textArea">{state.result}</div>
      <button className="btn" onClick={getResult}>
        获取汇率
      </button>
    </div>
  );
}
