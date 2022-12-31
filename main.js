(function(){
  var h6=document.querySelector('.wrap>header>h6')
  var time=new Date();
  h6.innerHTML='※今天是 '+time.getFullYear()+'年'+time.getMonth()+'月'+time.getDate()+'日'+' 好象已经过了哦！※'

   var count = 0;
    var maxTop = document.body.scrollHeight - innerHeight;
    function autoScroll() {
      count >= maxTop ? clearInterval(timer) : document.body.scrollTop = count++;
    }
    var timer = setInterval(autoScroll, 100);
    document.addEventListener('touchstart', function() {
      clearInterval(timer);
    });

    document.addEventListener('touchend', function() {
      timer = setInterval(function() {
        if (count == document.body.scrollTop) {
          clearInterval(timer);
          if (!count || count >= maxTop) return;
          timer = setInterval(autoScroll, 100);
          autoScroll();
        }
        count = document.body.scrollTop;
      }, 100);
    });
})();
