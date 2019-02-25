# #6

2019.02.23~24

## Ajax

- Asynchronous JavaScript and XML
  - 자바스크립트와 XML 을 사용한 비동기적 웹 개발 기법
  - XML 뿐만 아니라 JSON, HTML, 일반 TEXT 등도 사용 가능
  - JSON: JavaScript Object Notation
    - JS Object 스타일로 데이터를 저장해서 전달함

## Promise

- *A promise is an object that may produce a single value some time in the future*
- 비동기 조작의 최종 완료나 실패를 표현해주는 객체
- 특징
  - **Asynchronous Programming**
    - 비동기 프로그래밍: 각각의 일이 각각의 속도에 따라 다르게 진행
    - 동기 프로그래밍의 경우 한 일이 끝날때까지 다른 일이 모두 멈추게 됨
  - **State 확인 가능**
    - Pending(대기) : 비동기 처리 로직이 아직 완료되지 않은 상태
    - Fulfilled(이행) : 비동기 처리가 완료되어 프로미스가 결과 값을 반환해준 상태
    - Rejected(실패) : 비동기 처리가 실패하거나 오류가 발생한 상태

## Async/Await

- Callback hell : fetch().then() 에서 .then 이 계속 길어지면서 길을 잃게 됨
- callback hell 을 빠져나올 수 있는 방법

## 출처

- [자바스크립트 Promise 쉽게 이해하기](https://joshua1988.github.io/web-development/javascript/promise-for-beginners/)