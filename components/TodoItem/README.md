# 실습

아래 vue코드를 참고해서 react코드에 todo toggle 기능을 추가하세요.

```javascript
// vue
<template>
  <div>
    <h1 @click="handleClick">{{ todo.title }}</h1>
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

const handleClick = () => {
  todo.value.done = !todo.value.done;
};
</script>
```
