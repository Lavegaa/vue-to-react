# router

nextjs의 [app router](https://nextjs.org/docs/app/building-your-application/routing) 를 사용합니다.

기본적으로 app폴더 하위에 폴더를 만들어서 라우팅을 정의합니다.
![image](https://github.com/user-attachments/assets/48730249-64e1-4d5c-aab2-dcc78993f72e)

각 폴더에는 page.js가 들어가있어야하고, 해당 페이지를 랜더링하게 됩니다.
![image](https://github.com/user-attachments/assets/d3a2f978-256e-462f-bb3e-69db214417ce)

app router에서는 사전에 정의된 파일명을 사용함으로써 특별한 구조를 사용할 수 있습니다.
![image](https://github.com/user-attachments/assets/942c1ed2-eacc-46cc-a5ce-502e3b7248f8)

### dynamic routes

https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes

id, slug등등을 활용해 페이지를 동적으로 랜더링 할 수 있습니다.
dynamic routes를 사용하기 위해서는 대괄호로 폴더를 만들어주면 됩니다. (app/hello/[name])
dynamic하게 넘겨준 변수명은 추후 설명하게될 params라는 props로 넘어갑니다.
props는 vue의 v-bind와 같은 개념입니다.

hello페이지에서 이름을 입력하고, 값을 저장해 페이지를 이동시키는 과정은 추후에 설명을 드리겠습니다.

# 실습

root의 layout(app\layout.tsx)을 참고해서 hello페이지에 layout.tsx를 추가해보세요.

주어진 hello.css를 사용해서 가운데 정렬을 시켜보세요.

css는 작성하신 layout의 최상단에 import해주시면 됩니다.

```javascript
import "./hello.css";
```

| 참고사항 - react에서는 class대신 className을 사용합니다.

```javascript
<div className="container"></div>
```
