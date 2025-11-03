"use client";

export default function MapElPage() {
    // 1. 기본 방법
    ["명수", "준하", "재석"].map((el, index) => {
        console.log("el: ", el);
        console.log("index: ", index);
    });

    console.log("=============================");

    // 2. 매개변수 변경 방법
    ["명수", "준하", "재석"].map((asdfasdf, qwerqwer) => {
        console.log("el: ", asdfasdf);
        console.log("index: ", qwerqwer);
    });

    console.log("=============================");

    // 3. 함수 선언식 방법
    ["명수", "준하", "재석"].map(function (asdfasdf, qwerqwer) {
        console.log("el: ", asdfasdf);
        console.log("index: ", qwerqwer);
    });

    console.log("=============================");

    // 4. el과 index 바꾸기
    ["명수", "준하", "재석"].map((index, el) => {
        console.log("index: ", index);
        console.log("el: ", el);
    });

    return <></>;
}
