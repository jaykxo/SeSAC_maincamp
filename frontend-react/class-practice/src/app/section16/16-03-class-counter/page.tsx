"use client";

import { Component } from "react";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  // 해결 방법 1) 함수를 최신함수인 화살표 함수로 바꾸기
  onClickCountUp() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    return (
      <>
        <div>{this.state.count}</div>

        {/* 해결 방법 2) this를 넘겨주기 => 연결시키기 (binding) */}
        <button onClick={this.onClickCountUp.bind(this)}>카운트 올리기!</button>
      </>
    );
  }
}