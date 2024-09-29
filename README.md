# JSX

react에서는 markup을 하기위해서 html을 사용할 때 JSX라는 javascript 확장 문법을 사용합니다.

이는 javascript안에서 html을 사용할 수 있도록 해줍니다.

```javascript
const element = <div>hello world!</div>;
```

다음과 같이 활용할 수 있습니다.

```javascript
// vuejs
<script setup>
import { ref } from 'vue'

// component logic
// declare some reactive state here.
</script>

<template>
  <h1>hello world!</h1>
</template>
```

```javascript
// reactjs
import React from "react";

const Page = () => {
  // component logic
  // declare some reactive state here.
  return <h1>hello world!</h1>;
};
```

# JSX 기본 문법

## 1. 항상 single root element를 반환해야합니다.

예를들면

```javascript
const Page = () => {
  // component logic
  // declare some reactive state here.
  return (
    <h1>This is wrong!</h1>
    <h2>return single element</h2>
  );
};
```

위와 같은 컴포넌트는 h1, h2 2개의 태그를 반환하고 있기때문에 하나로 묶어서 반환해줘야 합니다.

```javascript
const Page = () => {
  // component logic
  // declare some reactive state here.
  return (
    <div>
      <h1>Use div to make single element</h1>
      <h2>return single element</h2>
    </div>
  );
};
```

또는 [Fragment](https://react.dev/reference/react/Fragment)라는 빈 tag를 사용해서 감싸줄 수 있습니다.

```javascript
const Page = () => {
  // Fragment => <></>
  return (
    <>
      <h1>Use Fragment to make single element</h1>
      <h2>return single element</h2>
    </>
  );
};
```

## 2. 변수를 사용하고 싶으면 중괄호{ }를 사용합니다.

```javascript
// vuejs
<script setup>
import { ref } from 'vue'

const name = ref('Cudy')
</script>

<template>
  <h1>Hello</h1>
  <h1>My name is {{ name }}</h1>
</template>
```

```javascript
// reactjs
const Page = () => {
  const name = "Cudy";
  return (
    <>
      <h1>Hello</h1>
      <h2>My name is {name}</h2>
    </>
  );
};
```
