var getJSONP = function(url, callback){
  var name = 'aaa'
  window[name] = callback;
  var hm = document.createElement('script')
  hm.src = url + '?callback='+name
  var s = document.getElementsByTagName('body')[0]
  s.appendChild(hm)
}
getJSONP('http://api.asilu.com/weather/',function(res){
  console.log(res)
})
