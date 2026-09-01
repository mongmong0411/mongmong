# 시니어영어방문학습 홈페이지

React + Vite + Tailwind 기반의 홈페이지입니다. 기존 1차 시안(단일 `index.html`)을 대신해,
"다정한 서재의 편지" 디자인 컨셉으로 다시 만든 버전입니다. 디자인 배경은 `ideas.md`를 참고하세요.

## 개발 환경 실행

```bash
pnpm install
pnpm dev       # http://localhost:3000
```

## 빌드 / 배포용 서버

```bash
pnpm build     # client는 dist/public, server는 dist/index.js 로 빌드
pnpm start     # NODE_ENV=production node dist/index.js
```

`server/index.ts`는 빌드된 정적 파일을 서빙하는 단순 Express 서버입니다. 순수 정적 호스팅(예: Netlify, Vercel, GitHub Pages)에 올릴 경우 `dist/public` 폴더만 배포해도 됩니다.

## 반영 완료

- 브랜드명: 시니어영어방문학습 (유지)
- 상담 신청 접수 방식: 전화 / 방문 상담 2채널 (하단 상담 카드)
- 대표자 소개 문구, FAQ, 이용 방법, 통계 등 기존 기획 내용 반영
- 학습지·단어카드·히어로 이미지: 실제 사진 준비 전까지 사이트 톤에 맞춘 커스텀 SVG 일러스트로 대체
  (`client/src/components/BrandArt.tsx`의 `LogoMark` / `HeroIllustration` / `WorksheetIllustration` / `WordCardsIllustration`)

## 실제 오픈 전 교체할 부분

- 전화번호 (현재 미공개 — 확정되면 상담 CTA에 `tel:` 링크 연결 필요)
- 로고, 히어로, 방문 학습지, 영어단어카드 실제 사진 (`BrandArt.tsx`의 SVG 컴포넌트를 실제 이미지로 교체)
- 상담 신청 폼 실제 접수 연동 (현재는 화면 확인용 토스트 알림만 표시 — 문자/전화/폼 접수 서비스와 연결 필요)
- 사업자 정보 및 개인정보처리방침/이용약관 등 운영에 필요한 고지

## 프로젝트 구조

```
client/        # React 프론트엔드 (Vite)
  src/pages/Home.tsx        홈페이지 전체 구성
  src/components/BrandArt.tsx  로고·일러스트 SVG 플레이스홀더
  src/components/ui/*       shadcn/ui 컴포넌트
server/        # 정적 파일 서빙용 Express 서버
```
