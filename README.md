# vue to react

nextjs를 사용해서 vue로 만든 프로젝트를 react로 만들어보는 실습을 진행합니다.
[react에서 recommend하는 setup방법](https://react.dev/learn/start-a-new-react-project#production-grade-react-frameworks)이 nextjs입니다.
기본적으로 SSR을 지원하는 프레임워크이나, SSR의 기능 이외에도 폴더를 기반으로 하는 라우팅을 지원해줘서 react에서 주로 사용하는 [router라이브러리](https://reactrouter.com/en/main)를 사용하지 않는다는 장점도 있습니다.

setup을 위해 [nextjs에서 지원하는 cli명령어](https://reactrouter.com/en/main)를 사용합니다.

```bash
npx create-next-app@latest

What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for `next dev`?  No / Yes
Would you like to customize the import alias (`@/*` by default)? No / Yes
What import alias would you like configured? @/*
```

결과적으로 main에 있는 프로젝트가 만들어집니다.

# 참고사항

[yarn](https://yarnpkg.com/)을 설치하시면 좀 더 편하게 node의 패키지들을 사용할 수 있습니다.
yarn은 병렬설치, 캐싱 등등 npm을 대안해서 만들었습니다.

```
npm install yarn --global

yarn --version
1.22.22
```

# 기본 제공 README.md

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
