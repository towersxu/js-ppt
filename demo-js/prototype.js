function B(){
  this.name = 'b'
}
B.prototype.grades = '小学'
var b = new B()
console.log(b.__proto__ == B.prototype) // true
console.log(b.grades) // 小学
console.log(b.constructor === B) // true
