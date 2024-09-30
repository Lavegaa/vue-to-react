# state

Client에서는 화면에 보여주는 많은 정보들을 관리해야합니다.
이때 react에서는 state라는 개념을 사용해서 화면에 보여주는 정보들을 관리합니다.

vue에서는 ref, reactive를 통해 관리하는 방식과 유사합니다.

react에서는 useState라는 hook을 통해 state를 관리합니다.
hook이란 react에서 상태관리, 생명주기 등을 관리할 수 있게 만든 함수입니다. 보통 use로 시작합니다.

### useState

useState는 기본적으로 getter, setter를 제공합니다.
이름은 정해진게 없으나, 보통 [stateName, setStateName]으로 사용합니다.
useState는 인자로 초기값을 받습니다.

또한 typescript에서는 [generic](https://www.typescriptlang.org/docs/handbook/2/generics.html)을 사용해서 타입을 정의할 수 있습니다.

```javascript
// vue
const state = reactive({
  count: 0,
});

const count = ref(0);
```

```
// react
// <number>는 generic을 사용해서 타입을 정의해주는 문법입니다.
const [count, setCount] = useState<number>(0);

// 객체의 경우 타입을 정의해주는 문법입니다.
const [objectCount, setObjectCount] = useState<{ count: number }>({
  count: 0,
});

or

interface ICount {
  count: number;
}

const [objectCount, setObjectCount] = useState<ICount>({
  count: 0,
});
```

### vue와 차이점

vue에서는 객체를 관리할 때 reactive를, 원시값을 관리할 때 ref를 사용합니다.
그러나 react에서는 둘 다 useState를 사용해서 관리합니다.

또한 vue에서는 직접 값을 수정할 수 있지만, react에서는 불변성을 유지한채 수정해야합니다.
이는 react의 데이터 변경 감지 방식이 vue의 반응성 시스템과 다르기 때문입니다.

react는 데이터가 변경될때마다 새로 랜더링됩니다. 이때 직접적으로 값의 변화를 확인하는게 아니고 참조값이 변경됐는지 확인합니다. 이를 위해 불변성을 유지하고, 새로운 객체를 생성해서 수정합니다.
(virtual dom에서 각 변수의 참조값이 변경되었는지 확인하고, 변경되었다면 랜더링합니다.)

```javascript
// vue
const state = reactive({
  count: 0,
});

state.count = 1;
```

```javascript
// react
const [count, setCount] = useState({
  count: 0,
});
// 새로운 객체를 생성해서 불변성을 유지한채로 수정해야합니다.
setCount({
  count: 1,
});
```
