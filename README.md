# lifeCycle

react에서도 vue처럼 라이프사이클을 사용할 수 있습니다.

useEffect라는 hook을 사용해서 라이프사이클을 사용할 수 있습니다.

```
// vue
<template>
  <div>{{ count }}</div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted, watch } from "vue";
  const count = ref(0);

  // 컴포넌트가 마운트될 때 실행됩니다.
  onMounted(() => {
    console.log("onMounted");
  });

  // 컴포넌트가 언마운트될 때 실행됩니다.
  onUnmounted(() => {
    console.log("onUnmounted");
  });

  // count가 업데이트될 때 실행됩니다.
  watch(count, (newValue, oldValue) => {
    console.log("count updated!", newValue);
  });
</script>

```

```
// react
import { useEffect } from "react";

// 컴포넌트가 마운트될 때 실행됩니다.
useEffect(() => {
  console.log("onMounted");
}, []);

// 컴포넌트가 언마운트될 때 실행됩니다.
useEffect(() => {
  return () => {
    console.log("onUnmounted");
  };
}, []);

// 컴포넌트가 업데이트될 때 실행됩니다.
useEffect(() => {
  console.log("count updated!", count);
}, [count]);
```

# api 호출

nodejs에서 가장 유명한 api 호출 라이브러리는 axios입니다.

```
yarn add axios
```

기존에 사용하던 api호출 패턴을 그대로 사용해서 호출합니다.

```javascript
const login = async () => {
  const response = await axios.post("http://localhost:3000/login", {
    username: "test",
    password: "test",
  });
  console.log(response);
};
```

또한 프록시를 사용하기 위해 다음과 같은 작업을 합니다.

```
// next.config.mjs 파일 수정
/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://project-vue.tobecon.co.kr/:path*",
      },
    ];
  },
};

export default nextConfig;
```
