# props

컴포넌트를 만들다 보면 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달해야 하는 경우가 있습니다. 이때 사용하는 것이 props입니다.

vue에서 사용하는 v-bind와 같은 개념입니다.

```javascript
// vue
<template>
  <TodoItem :todo="todo" />
</template>

// TodoItem.vue
<script setup>
const props = defineProps({
  todo: String
})
</script>
<template>
  // logical or (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Logical_OR)
  // nullish coalescaing operator (https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
  <h2>{{ todo || 'No props passed yet' }}</h2>
  <h2>{{ todo ?? 'No props passed yet' }}</h2>
</template>
```

```javascript
// react
<TodoItem todo={todo} />;

// TodoItem.tsx
import React from "react";

interface TodoItemProps {
  todo: string;
}

// props를 받아오는 방법 -> 파라미터로 받아오기
// props에 대한 interface를 만들어서 파라미터로 받아올때 정의해줍니다.
const TodoItem = ({ todo }: TodoItemProps) => {
  return <h2>{todo || "No props passed yet"}</h2>;
};

export default TodoItem;
```

# 반복문

vue에서는 v-for를 사용하여 반복문을 사용할 수 있습니다.

react에서는 [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)을 사용하여 반복문을 사용할 수 있습니다.

```javascript
// vue
<template>
  <TodoItem v-for="item in items" :key="item.id" :todo="item.title" />
</template>
```

```javascript
// react
export default function TodoList() {
  const todos = [
    { id: 1, title: "Todo 1" },
    { id: 2, title: "Todo 2" },
    { id: 3, title: "Todo 3" },
  ];

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo.title} />
      ))}
    </div>
  );
}
```

### 반복문 사용 시 주의사항

반복문을 사용 시 item에 꼭 고유한 값의 key를 넣어주세요.
key를 통해 update, delete 등의 작업을 할 때 참조하게 됩니다.
index를 사용하는 것보다는 고유한 값을 사용하는 것이 좋습니다.
참고: [React Docs - Why does React need keys](https://react.dev/learn/rendering-lists#why-does-react-need-keys)
