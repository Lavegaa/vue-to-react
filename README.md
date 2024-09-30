# event

JSX에서 event를 사용할때는 camelCase를 사용해야합니다. 또한 class 대신 className을 사용해야합니다.
기존 html에서 사용중인 이벤트 이름과 겹치지 않게 하기위해서 입니다.

```javascript
// vue
<template>
      <button @click="removeTodo(todo)">X</button>
</template>

<script setup>
  function removeTodo(todo) {
    todos.value = todos.value.filter((t) => t !== todo)
  }
</script>
```

```javascript
// react
const removeTodo = () => {
  setTodos(todos.filter((t) => t !== todo));
};

<button onClick={handleClick}>X</button>;
```

# change event

vue에서는 v-model을 사용해서 양방향 바인딩 및 input 컨트롤을 쉽게 할 수 있습니다.
그러나 react에서는 이벤트를 사용해서 값을 제어해야합니다.

```javascript
// vue
<script setup>
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <input v-model="text" placeholder="Type here">
  <p>{{ text }}</p>
</template>
```

```javascript
// react
import { useState } from "react";

function App() {
  const [text, setText] = useState < string > "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type here"
      />
      <p>{text}</p>
    </div>
  );
}

export default App;
```

### inline style

스타일 또한 camelCase를 사용해야합니다. 또한 객체 형태로 사용해야합니다.

```javascript
// vue
<template>
  <div :style="styleObject">Hello World</div>
</template>

<script setup>
const styleObject = {
  color: 'red',
  fontSize: '16px',
}
</script>
```

```javascript
// react
const styleObject = {
  color: 'red',
  fontSize: '16px',
}

<div style={styleObject}>Hello World</div>
```
