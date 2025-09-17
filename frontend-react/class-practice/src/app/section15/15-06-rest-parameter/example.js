const profile = {
  name: "명수",
  age: 12,
  school: "무도초등학교"
}
// undefined
delete profile.school
// true
profile
// {name: '명수', age: 12}
const profile = {
  name: "명수",
  age: 12,
  school: "무도초등학교"
}
// undefined
profile
// {name: '명수', age: 12, school: '무도초등학교'}
const { school, ...banana } = profile
// undefined
banana
// {name: '명수', age: 12}
profile
// {name: '명수', age: 12, school: '무도초등학교'}