# router

nextjs의 [app router](https://nextjs.org/docs/app/building-your-application/routing) 를 사용합니다.

기본적으로 app폴더 하위에 폴더를 만들어서 라우팅을 정의합니다.
![image](https://github.com/user-attachments/assets/48730249-64e1-4d5c-aab2-dcc78993f72e)

각 폴더에는 page.js가 들어가있어야하고, 해당 페이지를 랜더링하게 됩니다.
![image](https://github.com/user-attachments/assets/d3a2f978-256e-462f-bb3e-69db214417ce)

app router에서는 사전에 정의된 파일명을 사용함으로써 특별한 구조를 사용할 수 있습니다.
![image](https://github.com/user-attachments/assets/942c1ed2-eacc-46cc-a5ce-502e3b7248f8)

# 실습

hello페이지에 layout.tsx를 추가해서 가운데 정렬을 시켜보세요.

주어진 hello.css를 사용하면 됩니다. 작성하신 layout의 최상단에 import해주시면 됩니다.

```javascript
import "./hello.css";
```

| 참고사항 - react에서는 class대신 className을 사용합니다.

```javascript
<div className="container"></div>
```
