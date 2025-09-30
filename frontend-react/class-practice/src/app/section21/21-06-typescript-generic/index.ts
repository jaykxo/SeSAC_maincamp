import { useState } from "react";

// 1. 문자/숫자/불린(primitive) 타입
const getPrimitive = (arg1: string, arg2: number, arg3: boolean): [boolean, number, string] => {
  return [arg3, arg2, arg1];
};
const result = getPrimitive("명수", 123, true);

//
//
// 2. any 타입 => 그냥 자바스크립트랑 같음
const getAny = (arg1: any, arg2: any, arg3: any): [any, any, any] => {
  console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
const result = getAny("명수", 123, true);

//
//
// 3. unknown 타입 => any보다 안전
const getUnknown = (arg1: unknown, arg2: unknown, arg3: unknown): [unknown, unknown, unknown] => {
  if (typeof arg1 === "number") console.log(arg1 * 1000);
  return [arg3, arg2, arg1];
};
const result = getUnknown("명수", 123, true);

//
//
// 4. generic 타입
const getGeneric = <Mytype1, Mytype2, Mytype3>(arg1: Mytype1, arg2: Mytype2, arg3: Mytype3): [Mytype3, Mytype2, Mytype1] => {
  return [arg3, arg2, arg1];
};
const result = getGeneric("명수", 123, true);

//
//
// 4. generic 타입 - 짧게
const getGeneric2 = <T1, T2, T3>(arg1: T1, arg2: T2, arg3: T3): [T3, T2, T1] => {
  return [arg3, arg2, arg1];
};
const result = getGeneric2("명수", 123, true);

//
//
// 4. generic 타입 - 실무버전
const getGeneric3 = <T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] => {
  return [arg3, arg2, arg1];
};
const result = getGeneric3("명수", 123, true);

//
//
// 4. generic 타입 - 함수선언식
function getGeneric4<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result = getGeneric4("명수", 123, true);

//
//
// 4. generic 타입 - 타입 명시
function getGeneric5<T, U, V>(arg1: T, arg2: U, arg3: V): [V, U, T] {
  return [arg3, arg2, arg1];
}
const result = getGeneric5<string, number, boolean>("명수", 123, true);
