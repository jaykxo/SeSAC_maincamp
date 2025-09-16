const profile1 = {
  name: "명수",
  age: 12
}
// undefined
const profile2 = { ...profile1 }
// undefined
profile2.name = "준하"
// '준하'
profile2
// {name: '준하', age: 12}
profile1
// {name: '명수', age: 12}