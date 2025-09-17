this
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
window.console.log()
// undefined
window.alert("example")
// undefined
const profile = {
  name: "명수",
  age: 12,
  school: function () {
    console.log(this)
  },
};
// undefined
profile.school()
// VM1733:5 {name: '명수', age: 12, school: ƒ}
this
// Window {0: Window, window: Window, self: Window, document: document, name: '', location: Location, …}
