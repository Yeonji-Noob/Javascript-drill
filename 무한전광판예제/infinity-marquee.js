
// 전광판효과를 만들어보자(개고생)


/*HTML다읽고나서 DOM트리읽고나서 로딩*/
/* 대충 이미지나 CSS같은거 불러오기 전부터 실행되도록 한다는 의미임 */ 
document.addEventListener('DOMContentLoaded', () => {


  // 상수1. 전체 컨테이너(.wrap 영역)
  const containerElem = document.getElementById('container');

  /* 상수2. 브라우저 왼쪽 끝에서부터 
    컨테이너까지 계산함 */
    // getBoundingClientRect() 사진 참고
  const containerLeft = containerElem.getBoundingClientRect().left;

  /* 상수3. text 한뭉치 */
  const listElem = document.getElementById('text');

  /* 변수1. 연산을 도와주는 빈 변수 (변하는왼쪽값) 
    (나는 이걸 대충 빈 바구니라고 하겠음)*/  
  let currentLeftValue = 0;



  /* 0.01초마다 한번씩 
  무한루프함수를 실행할거임 */
  window.setInterval(animationLoop, 10);


  // 무한루프 함수
  
  /* 무한루프 원리 :
  맨 앞의 li가 left값이 줄어들면서 
  일정 기준에 도달하면 
  계속 맨 뒤로 강제로 이동시킬것*/

  function animationLoop() {


    /* 함수 안의 상수 1. 첫번째 text 뭉텅이 */
    const firstListItem = listElem.querySelector('.text-item:first-child');

    /* 함수 안의 변수 1. 브라우저 맨 왼쪽부터 text뭉텅이 길이 끝까지 */
    // getBoundingClientRect() 사진 참고
    let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;


    /* text뭉텅이가 왼쪽으로 자꾸 가면서,
    컨테이너 모서리에 도달하면 
    
    빈 바구니 변수를 -1로 재할당 해주고
    맨 뒤로 li를 보내주세요*/

    if(rightSideOfFirstItem == containerLeft){
      currentLeftValue = -1;
      listElem.appendChild(firstListItem);
    }

    /* text 한뭉치를 marginLeft 계속 -1씩 */
    listElem.style.marginLeft = `${currentLeftValue}px`;
    currentLeftValue--;
    // currentLeftValue = currentLeftValue - 1
    
    
  }
});