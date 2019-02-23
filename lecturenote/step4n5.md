# #4 & #5

2019.02.21

## state

- React Component 안에 있는 Object
- State 가 바뀔 때마다 Render 가 재실행된다
- State 를 바꿀 때는 직접 접근하면 안됨 : setState 를 사용해서 변경해야 함
- state 와 componentDidMount를 같이 사용하면 infinite scroll 같은 것도 만들 수 있음
  - 기존 데이터에 합쳐서 추가할 땐 아래 코드 필요함

  ```js
  ...this.state
  ```

- Loading State
  - API 에서 정보를 받아와서 state 를 업데이트 하려면 사용

## TIP

- reactJS 사용시 함수 앞에 _ 사용
  - 내가 만든 함수임을 알아볼 수 있도록

- Arrow Function

---

- stateless functional component : dumb component
- 위와 같은 component 는 class 로 만들지 말고 function 으로 만들어야 함
  - 이렇게 됬을 경우 생명주기 사용 불가능
  - state 를 받기만 하는 경우에 만드는 것으로 생각됨
