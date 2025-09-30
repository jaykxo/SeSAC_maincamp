// 1. 함수를 return하는 함수
function aaa() {
  const apple = 10

  return function bbb() {
      const banana = 20
      console.log(banana)
      console.log(apple)   
  }
}
// undefined
aaa()
// ƒ bbb() {
//       const banana = 20
//       console.log(banana)
//       console.log(apple)   
//   }
(aaa())()
// VM279:6 20
// VM279:7 10
// undefined
aaa()()
// VM279:6 20
// VM279:7 10
// undefined

// 2. 함수를 return하는 함수 - 인자
function aaa(apple) {

  return function bbb(banana) {
      console.log(banana)
      console.log(apple)   
  }
}
// undefined
aaa(10)(20)
// VM448:4 20
// VM448:5 10
// undefined


// 3. 함수를 return하는 함수 - 화살표함수
const aaa = (apple) => (banana) => {
  console.log(banana)
  console.log(apple)   
}
// undefined
aaa(10)(20)
// VM635:2 20
// VM635:3 10
// undefined

// 4. 함수를 return하는 함수 - 인자 여러개
const aaa = (apple) => (banana) => (tomato) => (orange) => {
  console.log(banana)
  console.log(apple)
  console.log(tomato)
  console.log(orange)
}
// undefined
aaa(10)(20)(30)(40)
// VM906:2 20
// VM906:3 10
// VM906:4 30
// VM906:5 40
// undefined