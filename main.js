(function(){
  var h6=document.querySelector('.wrap>header>h6')
  var time=new Date();
  h6.innerHTML='※今天是 '+time.getFullYear()+'年'+time.getMonth()+'月'+time.getDate()+'日'+' 好象已经过了哦！※'
})();
