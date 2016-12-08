(function(window){
  var JQ = function (){
    return new JQ.fn.init();
  }
  JQ.fn = JQ.prototype = {
    init: function(){
      return this
    }
  }
  JQ.fn.init.prototype = JQ.fn;
  JQ.prototype.height = function(){
    console.log("计算高度")
  }
  JQ.ajax = function(){
    console.log('发起ajax请求...')
  }
  window.jq = $$ = JQ
})(window);
jq().height()
jq.ajax()
