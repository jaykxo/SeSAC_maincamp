class Monster {
  power = 50
  
  attack() {
      console.log("공격합니다!")
  }
}
// undefined
const 나의몬스터 = new Monster()
// undefined
나의몬스터.power
// 50
나의몬스터.attack()
// VM616:5 공격합니다!
class 슈퍼몬스터 extends Monster {
  run() {
      console.log("도망가자!!!")
  }

  // 오버라이딩
  attack() {
      console.log("슈퍼몬스터 필살기!")
  }
}
// undefined
const mymonster = new 슈퍼몬스터()
// undefined
mymonster.power
// 50
mymonster.run()
// VM1055:3 도망가자!!!
mymonster.attack()
// VM1055:8 슈퍼몬스터 필살기!