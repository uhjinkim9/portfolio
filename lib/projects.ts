export type ProjectSection = {
  eyebrow: string;
  title: string;
  body: string[];
  bullets?: string[];
  image?: { src: string; alt: string; caption: string };
};

export type Project = {
  slug: string;
  no: string;
  kind: string;
  title: string;
  subtitle: string;
  period: string;
  team: string;
  role: string;
  metric: string;
  metricLabel: string;
  description: string;
  tags: string[];
  heroImage?: string;
  heroCaption?: string;
  liveUrl?: string;
  summary: string;
  sections: ProjectSection[];
  outcomes: { value: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "groupware",
    no: "01",
    kind: "Enterprise Platform",
    title: "사내 그룹웨어 플랫폼",
    subtitle: "MSA 기반 그룹웨어 플랫폼 설계부터 배포까지",
    period: "2025.03 — 2026.08",
    team: "3명",
    role: "기획 · 아키텍처 · 풀스택 · DevOps",
    metric: "34%",
    metricLabel: "개발 환경 메모리 절감",
    description: "11개 마이크로서비스의 현실적인 리소스 문제를 분석해 유사 도메인을 통합하고, RabbitMQ 비동기 이벤트 구조로 메인 API와 후처리를 분리했습니다.",
    tags: ["Next.js", "NestJS", "TypeORM", "MariaDB", "RabbitMQ", "Kubernetes", "Jenkins"],
    heroImage: "/images/gw-screen-design.png",
    summary: "분산된 협업과 업무 관리 기능을 하나의 서비스로 통합하도록 설계한 MSA 기반 그룹웨어 플랫폼입니다. 메일·전자결재·게시판 등 기본 기능에 근태·연차 프로세스를 연동하고, 필요한 솔루션의 공백에는 직접 MVP를 구축하며 구조 설계부터 배포까지 전 과정을 주도했습니다.",
    sections: [
      {
        eyebrow: "Context",
        title: "확장 가능한 그룹웨어를 처음부터 설계하다",
        body: ["메일, 게시판, 전자결재, 캘린더, 근태 등 서로 다른 업무 도메인을 하나의 플랫폼 안에서 일관되게 제공해야 했습니다.", "기업별 데이터와 권한이 분리되는 멀티 테넌시 구조를 기반으로, 개발자에게는 찾기 쉬운 코드 구조를, 사용자에게는 학습이 적은 인터페이스를 목표로 삼았습니다."],
        bullets: ["기획·설계·개발 전반 총괄", "Next.js App Router의 URL·폴더·메뉴 구조 1:1 정렬", "React Native 모바일 앱 0→1 구축"],
        image: { src: "/images/gw-screen-layout.png", alt: "그룹웨어 초기 화면 레이아웃", caption: "초기 홈 대시보드 화면 기획" },
      },
      {
        eyebrow: "Problem 01",
        title: "이론적으로 좋은 분리가 현실에서는 과부하가 되었다",
        body: ["낮은 결합도를 목표로 11개의 마이크로서비스를 구성했지만 개발 환경에서 OutOfMemory와 CPU 사용량 급증이 발생했습니다.", "자원 모니터링과 로그 분석 결과, 서비스마다 생성되는 Node 인스턴스와 DB 커넥션 풀이 제한된 개발 환경의 자원을 과도하게 사용하고 있었습니다."],
        bullets: ["유사 도메인 통합과 서비스 경계 재정의", "중복 모듈 및 커넥션 구조 리팩터링", "메모리 사용량 100% → 66% 절감, 응답 지연 해소"],
        image: { src: "/images/gw-architecture.png", alt: "그룹웨어 MSA 아키텍처", caption: "리소스 최적화 이후 서비스 아키텍처" },
      },
      {
        eyebrow: "Problem 02",
        title: "메인 요청과 후처리 이벤트의 생명주기를 분리하다",
        body: ["알림과 메일 후처리가 메인 트랜잭션에 묶여 외부 연동 지연이나 실패가 핵심 기능의 오류로 전파됐습니다.", "Kafka와 RabbitMQ를 비교한 뒤 대규모 스트리밍보다 이벤트 라우팅이 중요한 프로젝트 특성에 맞춰 RabbitMQ를 선택했습니다."],
        bullets: ["이벤트 발행 모듈과 처리 모듈 분리", "메인 API를 막지 않는 비동기 후처리", "팀 공통 이벤트 발행 규칙과 재사용 구조 정립"],
      },
      {
        eyebrow: "Domain",
        title: "인사 담당자와 협업해 근태·연차 프로세스를 자동 연동하다",
        body: ["기본 그룹웨어 기능인 메일·전자결재·게시판에 더해, 근태와 연차 업무를 하나의 플랫폼에서 처리할 수 있도록 인사 담당자와 협업했습니다.", "현업 피드백을 바탕으로 연차·반차 반영 방식, 연차 차감 기준과 근태 인정 범위 등의 기본 규칙 및 예외 조건을 정리했습니다. 정제한 정책을 비즈니스 로직과 REST API에 반영해 근태·연차 프로세스가 그룹웨어에 자동으로 연동되도록 구현했습니다."],
        bullets: ["인사 담당자 피드백 기반 부서 간 요구사항 조율", "연차·반차 반영 및 근태 인정 범위의 기본·예외 규칙 정리", "근태·연차 비즈니스 로직과 REST API 구현", "기본 규칙과 예외 규칙을 시스템에 반영해 반복 업무 축소"],
      },
      {
        eyebrow: "0 to 1",
        title: "외부 솔루션의 공백을 3일 메신저 MVP로 대응하다",
        body: ["외부 메신저 솔루션을 도입하기 어려워지면서 사내 실시간 소통 기능을 별도로 마련해야 하는 상황이 발생했습니다.", "필수 기능의 범위를 먼저 정의하고 Node.js와 WebSocket을 활용해 설계부터 구현까지 단독으로 진행했습니다. 3일 안에 사용할 수 있는 MVP를 구축해 업무 공백을 줄이고, 이후 알림과 메시징 기능을 확장할 수 있는 기반을 마련했습니다."],
        bullets: ["핵심 기능 중심의 MVP 범위 설정", "Node.js·WebSocket 기반 실시간 통신 구현", "설계부터 개발까지 3일 내 단독 구축", "알림·메시징 기능의 확장 기반 마련"],
      },
      {
        eyebrow: "Delivery",
        title: "운영 환경 배포와 가오픈을 위한 브랜치 관리 체계를 정립하다",
        body: ["개발이 완료된 기능이 검증 단계를 거쳐 가오픈 환경에 안정적으로 반영될 수 있도록 GitHub 브랜치 흐름을 정리했습니다.", "development에서 기능을 통합하고 stage에서 배포 전 검증을 거친 뒤 production으로 반영하는 기준을 수립했습니다. 프로젝트 마무리 단계에서는 Kubernetes 운영 환경에 서비스를 배포하고 가오픈까지 진행했습니다."],
        bullets: ["development → stage → production 브랜치 흐름 정립", "환경별 검증과 배포 반영 기준 명문화", "Kubernetes 운영 환경 배포 및 가오픈", "개발부터 가오픈까지 전 과정 마무리"],
      },
      {
        eyebrow: "Process",
        title: "AI를 쓰는 팀의 코드 정합성을 문서로 지키다",
        body: ["AI 도구 활용이 늘면서 팀원마다 다른 코드 패턴과 중복 함수·컴포넌트가 생성되기 시작했습니다.", "폴더 구조, 컴포넌트 재사용 기준, API 호출 패턴과 커밋 규칙을 Markdown 가이드로 명문화해 AI가 읽는 컨텍스트까지 팀의 개발 규칙으로 만들었습니다."],
        bullets: ["코드 작성 패턴 일관성 확보", "불필요한 중복 생성 억제", "리팩터링과 리뷰 공수 단축"],
      },
    ],
    outcomes: [{ value: "34%", label: "개발 환경 메모리 절감" }, { value: "3일", label: "메신저 MVP 단독 구축" }, { value: "0→1", label: "기획부터 배포·가오픈까지 주도" }],
  },
  {
    slug: "poo-diary",
    no: "02",
    kind: "Solo MVP",
    title: "Poo Diary",
    subtitle: "배변 상태와 음식·건강 패턴을 기록하는 PWA",
    period: "2026.08",
    team: "1명",
    role: "기획 · 디자인 · 풀스택 · 인프라",
    metric: "GitOps",
    metricLabel: "배포 파이프라인 직접 구축",
    description: "배변 상태와 음식 기록을 연결하는 모바일 웹 MVP입니다. 애플리케이션 구현뿐 아니라 NHN Cloud의 k3s 환경과 GitOps 배포 파이프라인을 직접 구성해 실제 서비스로 배포했습니다.",
    tags: ["Next.js 14", "NestJS", "TanStack Query", "PWA", "PostgreSQL", "Turborepo", "k3s"],
    heroImage: "/images/poo-diary.jpeg",
    liveUrl: "https://poo-diary.mercury-lab.uk",
    summary: "배변 상태와 음식 기록을 남기고 건강 패턴을 돌아볼 수 있는 모바일 중심 웹 MVP입니다. 프론트엔드와 API 개발에 그치지 않고, NHN Cloud 인프라에서 빌드부터 배포까지 이어지는 파이프라인을 직접 구성했습니다.",
    sections: [
      { eyebrow: "Goal", title: "건강 기록을 부담 없이 남기는 모바일 MVP", body: ["매일 반복되는 건강 신호를 간편하게 기록하고, 음식과 상태의 관계를 나중에 돌아볼 수 있도록 설계했습니다.", "설치 장벽을 낮추기 위해 네이티브 앱 대신 PWA를 선택하고 모바일 화면에서 빠르게 기록하는 흐름에 집중했습니다."], bullets: ["모바일 중심 기록 경험", "PWA 설치 및 홈 화면 진입", "일별 기록과 패턴 탐색"], image: { src: "/images/poo-diary-input.png", alt: "Poo Diary 기록 입력 화면", caption: "배변 상태와 식단을 간편하게 남기는 기록 입력 화면" } },
      { eyebrow: "Architecture", title: "작은 제품에도 경계가 분명한 구조를 적용하다", body: ["Next.js와 NestJS 애플리케이션을 pnpm Workspace와 Turborepo로 묶고 공통 타입은 @poo-diary/shared 패키지에서 관리했습니다.", "프론트엔드의 서버 상태는 TanStack Query로 관리하고 PostgreSQL과 TypeORM으로 기록 데이터의 일관성을 확보했습니다."], bullets: ["프론트·백엔드·공유 타입 모노레포", "TanStack Query 기반 서버 상태 관리", "NestJS·TypeORM·PostgreSQL 데이터 계층"] },
      { eyebrow: "Delivery", title: "NHN Cloud에서 배포 파이프라인을 직접 구성하다", body: ["NHN Cloud Compute 인스턴스에 k3s 환경을 구성하고, GitHub Actions에서 컨테이너 이미지를 빌드한 뒤 ArgoCD가 변경 사항을 배포하도록 연결했습니다.", "Ingress와 커스텀 도메인, HTTPS를 설정해 코드 변경부터 실제 서비스 반영까지 이어지는 배포 흐름을 직접 경험했습니다."], bullets: ["NHN Cloud Compute · k3s 환경 구성", "GitHub Actions 이미지 빌드", "ArgoCD 기반 GitOps 배포", "Ingress · Custom Domain · HTTPS 연결"] },
    ],
    outcomes: [{ value: "GitOps", label: "빌드·배포 파이프라인 구성" }, { value: "PWA", label: "설치 가능한 모바일 웹 MVP" }, { value: "1인", label: "애플리케이션과 인프라 구축" }],
  },
  {
    slug: "asset-management",
    no: "03",
    kind: "Solo Enterprise",
    title: "사내 자산 관리 시스템",
    subtitle: "엑셀 프로세스를 자산 중심 시스템으로",
    period: "2024.09 — 2025.02",
    team: "1명",
    role: "요구 분석 · 데이터 모델링 · API · 운영",
    metric: "100%",
    metricLabel: "데이터 정합성 확보",
    description: "현업의 수기 프로세스를 분석해 관리 기준을 사용자에서 자산 중심으로 재설계했습니다. 이동·회수·수리 이력과 프로젝트 비용 정산을 하나의 사이클로 연결했습니다.",
    tags: ["Java", "전자정부프레임워크", "React", "MariaDB", "Domain Modeling"],
    heroImage: "/images/asset-management-masked.png",
    heroCaption: "사내 시스템 화면으로, 보안을 위해 일부 정보와 식별 요소를 마스킹 처리했습니다.",
    summary: "프로젝트별 엑셀에 흩어진 자산 정보를 하나의 시스템으로 통합했습니다. 현업 인터뷰부터 데이터 모델링, API 구현까지 단독 수행하며 업무 언어를 추적 가능한 자산 생애주기로 변환했습니다.",
    sections: [
      { eyebrow: "Context", title: "엑셀의 행 사이에서 사라지는 자산 이력", body: ["총무 담당자가 프로젝트별 엑셀 파일에 자산을 수기 입력해 이동과 유휴 이력을 이어서 보기 어려웠습니다.", "누락된 데이터와 서로 다른 작성 기준 때문에 프로젝트별 비용 집계에도 반복적인 확인 작업이 필요했습니다."], bullets: ["자산 이동·유휴 이력 추적 불가", "수기 입력 오류와 데이터 누락", "프로젝트별 비용 집계 공수 증가"] },
      { eyebrow: "Modeling", title: "관리의 기준을 사용자에서 자산으로 전환하다", body: ["사용자가 무엇을 보유했는지 기록하는 방식에서 자산 한 개가 어떤 상태와 위치를 거쳤는지 추적하는 모델로 기준을 바꿨습니다.", "생성 → 할당 → 회수 → 수리 → 재할당으로 이어지는 생애주기를 정의하고 모든 상태 변화를 자산 고유 키에 연결했습니다."], bullets: ["자산 고유 키 기반 이력 관리", "상태 변경과 이동 이력 분리", "인사 모듈과 입·퇴사 프로세스 연계"], image: { src: "/images/asset-erd.png", alt: "자산 관리 시스템 ERD", caption: "자산과 이동 이력을 중심으로 재설계한 데이터 모델" } },
      { eyebrow: "Automation", title: "자산 흐름이 비용 계산으로 자연스럽게 이어지도록", body: ["자산 렌탈 계약과 프로젝트 할당 기간을 연결해 프로젝트별 비용이 자동으로 집계되도록 구현했습니다.", "임직원별 보유 자산 조회와 이동·퇴사 프로세스를 연동해 별도의 엑셀 대조 없이 시스템 안에서 현황을 확인할 수 있게 했습니다."], bullets: ["프로젝트별 렌탈 비용 자동 집계", "임직원 보유 자산 실시간 조회", "수기 대조와 중복 입력 제거"] },
    ],
    outcomes: [{ value: "100%", label: "자산 데이터 정합성" }, { value: "6개월", label: "분석부터 구축까지" }, { value: "1인", label: "전 과정 단독 수행" }],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
