import React, { Component } from "react";
import "./Mainfunc.js";

export default class main extends Component {
  handleBasicChange = (e) => {};

  render() {
    return (
      <div className="main">
        <div className="topicChn">汇率计算器</div>
        <div className="topicEng">currency Converter</div>
        <div>输入金额</div>
        <input id="amount"></input>
        <div>
          <span>基础货币</span>
          <span>目标货币</span>
        </div>
        <select
          id="basicCurrency"
          className="basicselect"
          onChange={this.handleBasicChange}
        >
          <option value="CNY" selected>
            人民币
          </option>
          <option value="USD">美元</option>
          <option value="CAD">加币</option>
          <option value="EUR">欧元</option>
          <option value="JPY">日元</option>
          <option value="KRW">韩元</option>
        </select>
        <button id="swapbtn">to</button>
        <select id="targetCurrency" className="targetselect" defaultValue={""}>
          <option value="CNY">人民币</option>
          <option value="USD" selected>
            美元
          </option>
          <option value="CAD">加币</option>
          <option value="EUR">欧元</option>
          <option value="JPY">日元</option>
          <option value="KRW">韩元</option>
        </select>
        <div id="textArea">text</div>
        <button id="btn">获取汇率</button>
        {/* document.getElementById("btn").addEventListener("click", calculate())
        document.getElementById("swapbtn").addEventListener("click", swap()) */}
      </div>
    );
  }
}
