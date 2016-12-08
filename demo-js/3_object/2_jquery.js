+function(){
  function JQ(){
    return {
      height: function(){
        console.log('height...')
      }
    }
  }
  JQ.ajax = function(){
    console.log('AJAX')
  }
  return JQ
}()
