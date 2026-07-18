// blog-nav.js — shared nav behavior for blog articles
(function(){
  var nav=document.getElementById('nav');
  var ham=document.getElementById('ham');
  var mob=document.getElementById('mob');

  // Scroll shadow
  if(nav){
    window.addEventListener('scroll',function(){
      nav.classList.toggle('scrolled',window.scrollY>20);
    },{passive:true});
  }

  // Hamburger menu
  if(ham&&mob){
    ham.addEventListener('click',function(){
      mob.classList.toggle('open');
      ham.setAttribute('aria-expanded',mob.classList.contains('open'));
    });
    // Close on outside click
    document.addEventListener('click',function(e){
      if(!nav.contains(e.target)&&!mob.contains(e.target)){
        mob.classList.remove('open');
      }
    });
  }
})();
