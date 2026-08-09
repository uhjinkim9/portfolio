# 김어진 포트폴리오

> 비즈니스 현장의 문제를 이해하고, 지속 가능한 시스템 구조로 풀어내는 백엔드 중심 풀스택 엔지니어입니다.

현업 담당자의 언어를 비즈니스 로직과 데이터 모델로 전환하는 과정부터 프론트엔드, API, 인프라 및 배포까지 제품의 전 과정을 경험해 왔습니다.

이 저장소는 주요 경험과 기술적 의사결정을 웹에서 읽기 좋은 케이스 스터디 형태로 정리한 개인 포트폴리오입니다.

### [포트폴리오 웹사이트 바로가기 →](https://portfolio.mercury-lab.uk)

[PDF 포트폴리오](./public/kim-eojin-portfolio.pdf) · [GitHub 프로필](https://github.com/uhjinkim9)

## 핵심 역량

- **도메인 분석:** 수기·엑셀 기반 업무와 현업 요구사항을 분석해 시스템 정책과 데이터 구조로 정제합니다.
- **아키텍처 설계:** 서비스 규모와 운영 환경을 고려해 확장 가능하면서도 현실적으로 유지할 수 있는 구조를 설계합니다.
- **0 to 1 실행:** 기획과 UI부터 API, 인프라 및 배포 파이프라인까지 제품의 전체 흐름을 주도적으로 완성합니다.

## 주요 프로젝트

### 사내 그룹웨어 플랫폼

조직 내 협업과 업무 관리를 위한 MSA 기반 그룹웨어 SaaS입니다.

- 과도하게 분리된 마이크로서비스를 재구성해 개발 환경 메모리 사용량 **34% 절감**
- RabbitMQ를 활용해 메인 API와 알림·메일 후처리 로직 분리
- 인사 담당자의 피드백을 근태·연차 비즈니스 로직과 REST API로 구현
- 외부 솔루션 공백에 대응해 Node.js·WebSocket 기반 메신저 MVP를 **3일 내 단독 구축**
- `development → stage → production` GitHub 브랜치 흐름과 환경별 반영 기준 정립
- Kubernetes 운영 배포까지 완료하고 자체 메일 인프라 구성

### Poo Diary

배변 상태와 음식·건강 패턴을 기록하는 모바일 웹 MVP입니다.

- Next.js와 NestJS 기반 프론트엔드·백엔드 구현
- pnpm Workspaces와 Turborepo를 활용한 모노레포 구성
- 공통 DTO와 타입을 `@poo-diary/shared` 패키지로 분리
- NHN Cloud의 k3s 환경에 GitHub Actions·ArgoCD 기반 GitOps 배포 파이프라인 구축
- Ingress, 커스텀 도메인 및 HTTPS 연결

[Poo Diary 서비스 방문하기](https://poo-diary.mercury-lab.uk)

### 사내 자산 관리 시스템

프로젝트별 엑셀에 흩어진 자산 정보를 하나의 시스템으로 통합한 사내 업무 시스템입니다.

- 관리 기준을 사용자에서 **자산 중심 데이터 모델**로 재설계
- 생성·할당·회수·수리·재할당으로 이어지는 자산 생애주기 정의
- 자산 이동 및 상태 변경 이력을 고유 키 기반으로 관리해 데이터 정합성 확보
- 렌탈 계약과 프로젝트 할당 기간을 연결해 비용 집계 자동화
- 요구사항 분석, 데이터 모델링 및 API 구현 전 과정 단독 수행

## 기술 스택

| 영역 | 기술 |
| --- | --- |
| Frontend | Next.js, React, TypeScript, Tailwind CSS, TanStack Query |
| Backend | NestJS, Node.js, Java, TypeORM |
| Database | MariaDB, PostgreSQL |
| Infra & DevOps | Docker, Kubernetes, k3s, RabbitMQ, Jenkins, ArgoCD, GitHub Actions, NHN Cloud |
| Collaboration | Git, GitHub, Figma, AI-assisted Development |

## 포트폴리오 웹 기술 구성

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- 정적 생성(SSG) 기반 프로젝트 상세 페이지
- 반응형 웹 UI
- Docker 기반 Next.js standalone 이미지
- GitHub Actions · GHCR · Helm · ArgoCD 기반 GitOps 배포

포트폴리오 웹사이트 자체는 별도의 백엔드나 데이터베이스 없이 정적으로 동작합니다.

## 배포 흐름

`main` 브랜치에 코드가 반영되면 컨테이너 이미지 빌드부터 Kubernetes 배포까지 자동으로 이어집니다.

```text
GitHub Push → GitHub Actions → GHCR → Helm values 갱신 → ArgoCD → Kubernetes
```

## 로컬 실행

Node.js 22.13 이상과 pnpm 11.16.0을 사용합니다.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

프로덕션 빌드:

```bash
pnpm build
pnpm start
```

## 연락처

- Email: [uhjinkim9@gmail.com](mailto:uhjinkim9@gmail.com)
- GitHub: [github.com/uhjinkim9](https://github.com/uhjinkim9)

---

좋은 시스템은 기술 선택보다 문제를 정확히 이해하는 것에서 시작한다고 생각합니다.
