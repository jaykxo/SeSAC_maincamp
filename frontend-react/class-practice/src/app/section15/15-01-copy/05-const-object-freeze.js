const profile = {
  name: "홍철",
  age: 12
}
// undefined
profile.name = "하하"
// '하하'
profile = {
  name: "하하",
  age: 12
}
// VM2918:1 Uncaught TypeError: Assignment to constant variable.
//   at <anonymous>:1:9
// (anonymous) @ VM2918:1Understand this error
Object.freeze(profile)
// {name: '하하', age: 12}
profile.name = "형돈"
// '형돈'
profile
// {name: '하하', age: 12}