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
    /* e.preventDefault(); */
    wrap.slideTo(2, 1000);
    setTimeout(() => {
        ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
    }, 0);
})
nav[2].addEventListener('click',function(e){
    /* e.preventDefault(); */
    wrap.slideTo(4, 1000);
    setTimeout(() => {
        ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
    }, 0);
})


/* 프로젝트 */
const popup_bg = document.querySelector('.popup_bg')
const bannerProject = document.querySelectorAll('.more_design .banner img')
const snsProject = document.querySelectorAll('.more_design .sns img')
const designProject = document.querySelectorAll('.more_design .sns_detail img')

popup_bg.style.display = 'none'/* 팝업 초반 숨기기 */

for(let i of snsProject){/* 상세디자인 클릭 시 팝업 출력 JS */
    i.addEventListener('click',function(){
        popup_bg.style.display = 'flex'
        popup_bg.children[0].scrollTo(0,0);
        popup_bg.children[0].style.width = '700px';/* SNS 팝업 출력 크기 */
        popup_bg.children[0].style.height = '800px';
        popup_bg.children[0].children[0].src = i.src;
    })
}
for(let i of designProject){/* 상세디자인 클릭 시 팝업 출력 JS */
    i.addEventListener('click',function(){
        popup_bg.style.display = 'flex'
        popup_bg.children[0].scrollTo(0,0);
        popup_bg.children[0].style.width = '700px';/* SNS,상세디자인 팝업 출력 크기 */
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