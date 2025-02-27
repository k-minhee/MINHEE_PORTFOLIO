/* 전체 화면 수직 마우스 휠 swiper */
const wrap = new Swiper('.wrap', {
    direction:'vertical',
    mousewheel:true,
    speed:1000,
    on: {
        slideChangeTransitionEnd: function () {
            for(let i of nav) i.classList.remove('active')
            /* nav[this.activeIndex].classList.add('active') */
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

/* 프로젝트 */
const popup_bg = document.querySelector('.popup_bg')
const bannerProject = document.querySelectorAll('#project2 .banner img')
const designProject = document.querySelectorAll('#project2 .snsDetail img')

popup_bg.style.display = 'none'/* 팝업 초반 숨기기 */

for(let i of designProject){/* SNS디자인, 상세디자인 클릭 시 팝업 출력 JS */
    i.addEventListener('click',function(){
        popup_bg.style.display = 'flex'
        popup_bg.children[0].scrollTo(0,0);
        popup_bg.children[0].style.width = '800px';/* SNS,상세디자인 팝업 출력 크기 */
        popup_bg.children[0].style.height = '800px';
        popup_bg.children[0].children[0].src = i.src;
        wrap.mousewheel.disable();/* 마우스 휠 막기 */
    })
}
for(let i of bannerProject){/* 배너디자인 클릭 시 팝업 출력 JS */
    i.addEventListener('click',function(){
        popup_bg.style.display = 'flex'
        popup_bg.children[0].style.width = '1000px';/* 배너디자인 팝업 출력 크기 */
        popup_bg.children[0].style.height = 'max-content';
        popup_bg.children[0].children[0].src = i.src;
        wrap.mousewheel.disable();/* 마우스 휠 막기 */
    })
}
/* 팝업 클릭 시 숨기기 */
popup_bg.addEventListener('click',()=>{ popup_bg.style.display = 'none'; wrap.mousewheel.enable(); })/* 마우스 휠 풀기 */

/* 웹디자인 프로젝트 소개 */
const webslide = new Swiper('#project1 .web', {
    autoplay:{delay:2000,},
    loop:true,
    scrollbar: {
        el: "#project1 .swiper-scrollbar",
    },
})
/* 배너디자인 프로젝트 소개 */
const designslide1 = new Swiper('#project2 .design1', {
    /* autoplay:{delay:0, desableOnInteraction: false,}, */
    speed:4000,
    loop:true,
    slidesPerView:3,
    spaceBetween:10,
})
/* SNS디자인 프로젝트 소개 */
const designslide2 = new Swiper('#project2 .design2', {
    autoplay:{delay:0, desableOnInteraction: false, },
    speed:6000,
    loop:true,
    slidesPerView:4,
    spaceBetween:10,
})
/* 상세디자인 프로젝트 소개 */
const designslide3 = new Swiper('#project2 .design3', {
    autoplay:{delay:3000,},
    // effect:'fade',
    loop:true,
    slidesPerView:2,
    spaceBetween:10,
    pagination:{
        el:'#project2 .swiper-pagination',
        type:'bullets',
    },
})