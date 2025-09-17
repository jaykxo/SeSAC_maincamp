class Profile {
  name = "명수"
  age = 12
  school() {
      console.log(this)
  }
}
// undefined
const profile = new Profile()
// undefined
profile.name
// '명수'
profile.school()
// VM2004:5 Profile {name: '명수', age: 12}