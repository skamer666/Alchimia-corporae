function initScrollAnim(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.fade').forEach(function(el){el.classList.add('in');});
    return;
  }
  var obs=new IntersectionObserver(function(entries){
    entries.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');obs.unobserve(e.target);}});
  },{threshold:.08,rootMargin:'0px 0px -30px 0px'});
  document.querySelectorAll('.fade').forEach(function(el){obs.observe(el);});
}

function initNav(){
  window.addEventListener('scroll',function(){
    var nav=document.getElementById('nav');
    if(nav)nav.classList.toggle('scrolled',window.scrollY>30);
  });
}

document.addEventListener('DOMContentLoaded',function(){
  initScrollAnim();
  initNav();
});
