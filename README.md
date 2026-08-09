# 김어진 포트폴리오

PDF 포트폴리오의 콘텐츠를 바탕으로 구성한 Next.js 단일 페이지 포트폴리오입니다.

## 실행

```bash
pnpm install
pnpm dev
```

## 이미지 교체

프로젝트 이미지 슬롯은 `app/page.tsx`의 프로젝트 카드 내부에 있습니다. 이미지를 `public/images`에 넣은 뒤 슬롯의 `<div>`를 Next.js `<Image>`로 교체하면 됩니다.

- 그룹웨어: 홈 대시보드 또는 주요 서비스 화면, 권장 비율 16:10
- Poo Diary: 모바일 UI 또는 디바이스 목업, 권장 비율 16:10
- 자산 관리: ERD 또는 주요 관리 화면, 권장 비율 16:10

PDF 다운로드 파일은 `public/kim-eojin-portfolio.pdf`입니다.
