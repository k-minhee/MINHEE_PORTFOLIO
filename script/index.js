/* 전체 화면 수직 마우스 휠 swiper */
const wrap = new Swiper('.wrap', {
    direction:'vertical',
    mousewheel:true,
    speed:1000,
    on: {
        slideChangeTransitionEnd: function () {
            for(let i of nav) i.classList.remove('active')
            nav[this.activeIndex].classList.add('active')
            setTimeout(() => {
                ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
            }, 0);
        }
    },
})

/* 헤더 영역 각각 카테고리 누르면 해당 영역으로 스크롤 */
const nav = document.querySelectorAll('nav a')
const slides = document.querySelectorAll('.wrap > .swiper-wrapper > .swiper-slide')

nav[0].addEventListener('click',function(e){
    e.preventDefault();
    wrap.slideTo(1, 1000);
    setTimeout(() => {
        ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
    }, 0);
})
nav[1].addEventListener('click',function(e){
    e.preventDefault();
    wrap.slideTo(2, 1000);
    setTimeout(() => {
        ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
    }, 0);
})
nav[2].addEventListener('click',function(e){
    e.preventDefault();
    wrap.slideTo(4, 1000);
    setTimeout(() => {
        ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
    }, 0);
})

/* nav.forEach((t, i)=>{ //header-nav click event
    t.addEventListener('click',function(e){
        e.preventDefault();
        wrap.slideTo(i+1, 1000); //클릭한 메뉴와 동일한 index번째 슬라이드로 1초동안 이동
        setTimeout(() => {
            ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
        }, 0);
    })
}) */