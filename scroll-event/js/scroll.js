// 상태 진행 바 script

/*
조건 

----------------------------------------------------------------
----------------------------------------------------------------

함수 실행 시점:

'스크롤 시작할때부터' 
채워져야 함 (스크롤 안하면 안채워짐)

----------------------------------------------------------------
----------------------------------------------------------------

width 0%에서부터 점점 진행바가 채워짐


=> 어떻게 채울 것인가? 
% 계산하기

=> 스크롤을 내릴때마다 0% ~ 100% 까지 채워지는 거임


----------------------------------------------------------------
----------------------------------------------------------------

계산 방법

( 스크롤바 맨 위 대가리 위치값 / (전체 총 높이 - 보이는 화면 높이) ) * 100


*/




let progress = () => {

    //현재 스크롤 값을 저장하는 변수



    // 왜 document.body.scrollTop 하면 안되는지??


    /*


    최신 브라우저에서 스크롤 값을 계산하는 권장 방법은 
    document.documentElement.scrollTop을 사용하는 것입니다. 
    //---------------------------------------------------    
    이는 루트 요소(<html>)가 스크롤되는 요소이지 
    body 요소가 아닙니다.
    //---------------------------------------------------
    웹 페이지를 스크롤할 때 실제로 일어나는 일은 
    브라우저가 문서의 루트 요소(<html>)를 스크롤하는 것입니다. 
    <body> 요소는 단순히 루트 요소의 가시 영역을 채우고 있으며 
    독립적으로 움직이지 않습니다.
    //---------------------------------------------------
    이것이 최신 브라우저에서 스크롤 값을 계산하는 권장 방법이 
    document.documentElement.scrollTop을 사용하는 이유입니다. 
    루트 요소의 scrollTop 속성에 액세스하면 
    사용자가 페이지를 아래로 스크롤한 정도를 확인할 수 있습니다.
    //---------------------------------------------------
    -고마워 내친구 chatGPT야,,, 


     */


    // scrollHeight: 내부 높이(패딩 포함)
    // (스크롤바, 테두리, 마진 제외) 

    // clientHeight: 전체 높이 (마진 제외)
    
    // offsetHeight: 요소의 높이 (마진 제외)


    let scroll = document.documentElement.scrollTop;
    console.log('현재스크롤위치값'+scroll);

    let scrollHeight = document.documentElement.scrollHeight; // 전체높이 (5000px)

    let screenHeight = document.documentElement.clientHeight; // ' 현재 보고 있는' 화면(브라우저)높이 

    let st = scrollHeight - screenHeight; //전체-화면 높이 (5000px - 변화하는 화면 높이값)

    // console.log ('전체높이'+ scrollHeight);
    console.log ('화면높이'+ screenHeight);
    // console.log ('스크롤top(전체-화면)'+st);






    //백분율로 계산
    let percentage = (scroll / st) * 100;
    
    console.log(percentage);

    // width값을 가지고 있는 bar 클래스를 호출
    // width값+% 변화 입력
    document.getElementsByClassName('bar')[0].style.width = percentage + '%';


};

/* '스크롤 이벤트가 발생하면' 함수를 호출 */

window.addEventListener('scroll', () => progress());