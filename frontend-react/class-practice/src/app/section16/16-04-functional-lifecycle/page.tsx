"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FunctionalCounterPage() {
  const [count, setCount] = useState(0);
  const [dog, setDog] = useState("");

  // 1. componentDidMount와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행!");

    const getImage = async () => {
      const result = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await result.json();
      setDog(data.message); // 사진 주소
    };
    getImage();
  }, []);

  // 2. componentDidMount + componentDidUpdate 와 동일
  useEffect(() => {
    console.log("변경되고 나서 실행!");
  });

  // 3. componentWillUnmount와 동일
  useEffect(() => {
    return () => {
      console.log("사라지기 전에 실행!");
    };
  }, []);

  // // 4. useEffect 하나로 합치기
  // useEffect(() => {
  //   console.log("그려지고 나서 실행!");

  //   return () => {
  //     console.log("사라지기 전에 실행!");
  //   };
  // }, []);

  // // 5. useEffect의 잘못된 사용법 (1. 추가렌더링, 2. 무한루프)
  // useEffect(() => {
  //   setCount(prev => prev + 1)
  // }, [count])

  const onClickCountUp = () => {
    setCount(count + 1);
  };

  console.log("나는 언제 실행되게~?");

  return (
    <>
      <div>{count}</div>

      <button onClick={onClickCountUp}>카운트 올리기!</button>

      <Link href={"/"}>나가기!</Link>

      <img src={dog} />
    </>
  );
}
