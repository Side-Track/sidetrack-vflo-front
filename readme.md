# VFLO FRONTEND

![VFLO](/doc/img/vflo-icon.png)

VFLO는 미연시와 같은 슬라이드형 컨텐츠를 웹으로 제작할 수 있는 서비스입니다.  
본 Repository는 해당 프로젝트의 "에디터" 및 "관리자"를 위한 프론트엔드 작업공간입니다.

## Milestone

1. Authentication 페이지 구성
2. Editor Dashboard 및 User Setting 구성
3. (예정) Story
4. (예정) Community

## What it use

- Typescript React (CRA) : Create-react-app v5.0.0 으로 구성하였으며 추가로 웹팩 세팅이 필요한 경우 `craco` 를 이용해 세팅합니다.
- Styled-Components : CSS-in-JS가 기본 스타일 방식입니다. v5.3.3으로 구성하였습니다.
- Tailwind.css : UI를 빠르게 구성할 수 있도록 도와줍니다. v3.0.18을 사용하고 있으며, 사용방식은 [여기서](https://tailwindcss.com/) 확인이 가능합니다.
- Twin.macro : styled-component 내부에 tailwind.css의 클래스를 `@apply`를 통해 사용할 수 있도록 세팅하였습니다.

## How to run?

1. 먼저 `node -v` 를 통해 현재 노드 버전이 16.13.1 이상인지 확인합니다.
2. `npm install --save` 를 통해 dependencies 를 다운받습니다.
3. `.env` 파일 을 생성하여 환경을 설정합니다. (`.env.sample` 참고)
4. `npm run start` 를 통해 실행하게 되면 `http://localhost:3000/` 에서 확인 할 수 있습니다.
