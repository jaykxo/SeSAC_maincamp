const profile1 = {
  name: "명수",
  age: 12,
  hobby: {
      hobby1: "호통치기",
      hobby2: "디제잉연습"
  }
}
// undefined
const profile2 = { ...profile1 }
// undefined
profile2.hobby.hobby1 = "황진이춤"
// '황진이춤'
profile1.hobby.hobby1
// '황진이춤'
const qqq = JSON.stringify(profile1)
// undefined
qqq
// '{"name":"명수","age":12,"hobby":{"hobby1":"황진이춤","hobby2":"디제잉연습"}}'
const profile3 = JSON.parse(qqq)
// undefined
profile3.hobby.hobby2 = "할명수출연"
// '할명수출연'
profile1.hobby.hobby2
// '디제잉연습'
const profile4 = structuredClone(profile1)
// undefined