"use client";

import { Component } from "react";
import Link from "next/link";

export default class ClassCounterPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    console.log("그려지고 나서 실행!");
  }

  componentDidUpdate() {
    console.log("변경되고 나서 실행!");
  }

  componentWillUnmount() {
    console.log("사라지기 전에 실행!");
    // ex) 채팅방 나가기, 불필요한 타이머 취소 등 청소
  }

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

        <Link href={"/"}>나가기!</Link>
      </>
    );
  }
}
