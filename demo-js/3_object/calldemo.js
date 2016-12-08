function A(){
  var fn = arguments[0]
  var a = Array.prototype.slice.call(arguments,1) // 因为arguments是类数组，不支持array.slice()这种方法
  console.log(arguments)
  fn.apply(null, a)
}

A(function(a,b){
  console.log(a+b)
},2,3)

A(function(a){
  console.log(a)
},2)
