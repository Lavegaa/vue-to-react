# state를 사용해서 todo 아이템 만들기

```javascript
// vue
<template>
  <div>
    <h1>{{ todo.title }}</h1>
    <h2 v-if="todo.done">완료</h2>
    <h2 v-else>미완료</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const todo = ref({
  id: 0,
  title: 'react 공부',
  done: false,
});

</script>
```

# 새로운 문법

### 조건부 랜더링

react에서 조건에 따라 랜더링을 해줘야 할때는 삼항연산자를 주로 사용합니다.

```javascript
<h2>{todo.done ? "완료" : "미완료"}</h2>
```
