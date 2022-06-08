

  const tween = gsap.timeline({defaults:{ ease: "power2.out",duration:1,pause:true}})

  const tweenImg = gsap.timeline()

  const splitText = new SplitText('.header__title',{type:'chars'})

   const charsEls = splitText.chars

   tween.from('header',1,{
       x:'100%'
   }).from('.header__line',{
       y:'-100%'
   }).from('.header-nav',{
       opacity:0,
       y:-20,
       duration:.5
   }).staggerFrom(charsEls,.45,{
       y:-30,
       opacity:0,
       stagger:.1
   }).from('.header__star',.45,{
        opacity:0,
        stagger:.1
   }).from('.header__item-btn',{
       opacity:0,
       y:100
   },'-=.45')

   tweenImg.from('.header-img',1,{
    x:400,
    opacity:0,
    delay:2.5,
    skewX:-5
})  

   document.addEventListener('load',()=>{
       tween.paly()
       tweenImg.paly()
   })


   document.querySelector('.header__item-btn').addEventListener('click',()=>{
       tween.reverse()
       tweenImg.reverse()
   })