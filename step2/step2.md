# #2

2019.02.20

## 프로젝트 시작시 하는 일

- Component 디자인
  - 내가 만들어야 하는 Component 에 대한 구분
  - 각각의 기능, 사이즈 등을 정리
  - 여기서는 Movie_app 에 필요한 Component 를 정리함
    - List Component
      - 전체 리스트 출력될 부분
      - Movie Component 가 내용으로 담김
    - Movie Component
      - 개별 영화 정보 담기
      - 제목, 내용, 평점 등
    - Poster Component
      - 개별 영화의 포스터 담기

- 가장 큰 Component를 APP.js 부분에 담음

## TIP

- VScode 에서 ReactJS 파일 저장시 포멧이 깨질 경우
  - Ctrl + K M 을 누르면 포멧언어 변경 가능
  - javascript react 로 변경하면 저장하면 됨

## JSX

- React Component 를 만들 때 사용하는 언어

---

- 각각의 컴포넌트에 각각 function 이 있음
- 모든 컴포넌트에는 render function 이 있음
- render 부분이 view 부분이라 생각하면 됨
- public\index.html 에 html 파일이 있음
- index.html - index.js - app.js 형태로 연결되어 있음
- react : UI 라이브러리
- reactDOM: React 를 웹사이트로 출력(render) 해주는 기능
- reactNative: React 를 모바일 앱으로 출력해주는 기능

Component needs render, return, JSX