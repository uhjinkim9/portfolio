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
    team: "2–3명",
    role: "기획 · 아키텍처 · 풀스택 · DevOps",
    metric: "11→10",
    metricLabel: "서비스 재구성으로 개발 환경 메모리 절감",
    description:
      "분산된 협업과 업무 관리 기능을 하나의 서비스로 통합했습니다. 서비스 경계를 재정의하고 RabbitMQ 비동기 처리, 근태·연차 자동 연동, GitOps 가오픈 배포까지 전 과정을 주도했습니다.",
    tags: [
      "Next.js",
      "NestJS",
      "TypeORM",
      "MariaDB",
      "RabbitMQ",
      "Kubernetes",
      "Jenkins",
    ],
    heroImage: "/images/gw-screen-design.png",
    summary:
      "분산된 협업과 업무 관리 기능을 하나의 서비스로 통합하도록 설계한 MSA 기반 그룹웨어 플랫폼입니다. 메일·전자결재·게시판 등 기본 기능에 근태·연차 프로세스를 연동하고, 필요한 솔루션의 공백에는 직접 MVP를 구축하며 구조 설계부터 배포까지 전 과정을 주도했습니다.",
    sections: [
      {
        eyebrow: "Context",
        title: "확장 가능한 그룹웨어를 처음부터 설계하다",
        body: [
          "메일, 게시판, 전자결재, 캘린더, 근태 등 서로 다른 업무 도메인을 하나의 플랫폼 안에서 일관되게 제공해야 했습니다.",
          "기업별 데이터와 권한이 분리되는 멀티 테넌시 구조를 기반으로, 개발자에게는 찾기 쉬운 코드 구조를, 사용자에게는 학습이 적은 인터페이스를 목표로 삼았습니다.",
        ],
        bullets: [
          "기획·설계·개발 리드 및 타사 서비스 분석을 통한 화면·기능 설계",
          "Next.js·NestJS와 API Gateway 중심 MSA 구조",
          "React Native 모바일 앱 AI 활용 0→1 구축",
        ],
        image: {
          src: "/images/gw-screen-layout.png",
          alt: "그룹웨어 초기 화면 레이아웃",
          caption: "초기 홈 대시보드 화면 기획",
        },
      },
      {
        eyebrow: "Problem 01",
        title: "이벤트 처리 모듈과 발행 모듈을 분리하다",
        body: [
          "낮은 결합도를 목표로 11개의 마이크로서비스를 구성했지만 개발 중 OutOfMemory와 CPU 사용량 증가로 기동이 멈추는 현상이 발생했습니다.",
          "자원 모니터링과 로그를 확인한 뒤 유사 도메인 한 쌍을 통합해 서비스 수를 11개에서 10개로 조정하고, 서비스 구성과 DB 커넥션 구조를 함께 리팩터링했습니다. 낮은 결합도와 현실적으로 활용 가능한 자원의 한계를 함께 고려해야 한다는 점을 배웠습니다.",
        ],
        bullets: [
          "유사 도메인 통합과 서비스 경계 재정의",
          "서비스 구성 및 DB 커넥션 구조 점검·리팩터링",
          "개발 환경의 메모리 부담과 응답 지연 완화",
        ],
        image: {
          src: "/images/gw-architecture.png",
          alt: "그룹웨어 MSA 아키텍처",
          caption: "리소스 최적화 이후 서비스 아키텍처",
        },
      },
      {
        eyebrow: "Problem 02",
        title: "메인 요청과 후처리 이벤트의 생명주기를 분리하다",
        body: [
          "메인 기능 트랜잭션에 푸시 알림과 메일 발송 로직이 동기적으로 묶여 있어 연동 지연이나 실패가 핵심 기능의 오류로 전파되고, 긴 발송 로직을 함수마다 재작성하는 중복이 발생했습니다.",
          "Kafka와 RabbitMQ를 비교한 뒤 대규모 스트리밍보다 이벤트 라우팅이 중요한 프로젝트 특성에 맞춰 RabbitMQ를 선택했습니다. 각 서비스에는 이벤트 발행 모듈을, Notification 서비스에는 처리 모듈을 구성했습니다.",
        ],
        bullets: [
          "이벤트 발행 모듈과 처리 모듈 분리",
          "메인 API를 막지 않는 비동기 후처리",
          "팀 공통 이벤트 발행 규칙과 재사용 구조 정립",
        ],
      },
      {
        eyebrow: "Domain",
        title: "인사 담당자와 협업해 근태·연차 프로세스를 자동 연동하다",
        body: [
          "메일·전자결재·게시판에 더해 근태와 연차 업무를 하나의 플랫폼에서 처리할 수 있도록 인사 담당자와 협업했습니다.",
          "연차·반차 반영 방식, 연차 차감 기준과 근태 인정 범위의 기본 규칙 및 예외 조건을 정리하고, 복잡한 예외를 흡수하는 정책 생성 프로세스와 비즈니스 로직을 설계했습니다. 프로세스에 따라 근태·연차 데이터가 그룹웨어에 자동 반영되도록 구현했습니다.",
        ],
        bullets: [
          "인사 담당자 피드백 기반 요구사항 도출",
          "연차·반차 및 근태 인정 범위의 기본·예외 규칙 정리",
          "복잡한 예외 조건을 흡수하는 정책 생성 프로세스 설계",
          "반복 수동 업무를 줄이는 그룹웨어 자동 연동",
        ],
      },
      {
        eyebrow: "0 to 1",
        title: "외부 솔루션의 공백을 AI 활용 메신저 MVP로 대응하다",
        body: [
          "외부 메신저 솔루션 도입이 어려워져 사내 실시간 소통 기능을 별도로 마련해야 했습니다.",
          "그룹웨어 안에서의 위치와 사용 흐름을 먼저 정하고 1:1 채팅, 파일 첨부, 클립보드 이미지 붙여넣기를 MVP 범위로 정의했습니다. AI 도구를 활용해 Node.js와 WebSocket 기반 기능을 구현하고 3일 안에 필요한 범위의 MVP를 완성했습니다.",
        ],
        bullets: [
          "그룹웨어 내 메신저 화면 위치와 사용 흐름 설계",
          "1:1 채팅·파일 첨부·클립보드 이미지 붙여넣기 구현",
          "Node.js·WebSocket 기반 실시간 메신저 MVP",
          "AI 도구를 활용해 3일 만에 요구사항 구현",
        ],
      },
      {
        eyebrow: "Cowork",
        title: "AI를 쓰는 팀의 코드 정합성을 문서로 지키다",
        body: [
          "AI 도구 활용이 늘면서 팀원마다 다른 코드 패턴과 중복 함수·컴포넌트가 생성되기 시작했습니다.",
          "폴더 구조, 컴포넌트 재사용 기준, API 호출 패턴과 커밋 규칙을 주제별 Markdown 문서로 명문화하고, 관련 문서의 경로와 참조 순서를 안내하는 인덱스를 구성했습니다. 프롬프트에는 인덱스 번호를 전달해 AI가 필요한 문서만 선택적으로 참고하도록 했습니다.",
        ],
        bullets: [
          "주제별 가이드와 문서 경로를 체계화한 인덱스 구조",
          "프롬프트 내 인덱스 기반 선택적 문서 참조",
          "코드 패턴 일관성 확보와 중복 생성 억제",
          "불필요한 컨텍스트 로딩을 줄여 토큰 사용 효율 개선",
        ],
      },
      {
        eyebrow: "Delivery",
        title: "인프라팀 가이드를 바탕으로 GitOps 배포와 가오픈까지",
        body: [
          "완료된 기능이 검증 단계를 거쳐 가오픈 환경에 안정적으로 반영되도록 GitHub 브랜치 흐름을 정리했습니다.",
          "인프라팀이 제공한 가이드에 따라 Helm 차트 기반 GitOps 배포 구성을 작성하고, development에서 통합한 기능을 stage에서 검증한 뒤 production에 반영했습니다. 브랜치 merge 후 Jenkins에서 빌드·이미지를 푸시하고 ArgoCD가 배포하는 흐름을 시스템에 적용했습니다.",
        ],
        bullets: [
          "방화벽 등 기반 인프라 설정을 인프라팀과 협업",
          "인프라팀 가이드에 따른 Helm 기반 GitOps 배포 구성",
          "development → stage → production 브랜치 전략",
          "AI 기반 오류 검증을 활용한 Kubernetes 가오픈 배포",
        ],
      },
    ],
    outcomes: [
      { value: "11→10", label: "서비스 경계 재정의" },
      { value: "3일", label: "메신저 MVP 0→1 구축" },
      { value: "GitOps", label: "Kubernetes 가오픈 배포" },
    ],
  },
  {
    slug: "asset-management",
    no: "02",
    kind: "Solo Enterprise",
    title: "사내 자산 관리 시스템",
    subtitle: "엑셀 프로세스를 자산 중심 시스템으로",
    period: "2024.09 — 2025.02",
    team: "1명",
    role: "요구 분석 · 데이터 모델링 · API · 운영",
    metric: "100%",
    metricLabel: "자산 데이터 정합성",
    description:
      "프로젝트별 엑셀에 흩어진 자산 정보를 통합하고, 관리 기준을 사용자에서 자산 중심으로 전환했습니다. 현업 담당자 요구사항 기반으로 데이터 모델링과 API 구현을 수행했습니다.",
    tags: ["Java", "전자정부프레임워크", "React", "MariaDB", "MyBatis"],
    heroImage: "/images/asset-management-masked.png",
    heroCaption:
      "사내 시스템 화면으로, 보안을 위해 일부 정보와 식별 요소를 마스킹 처리했습니다.",
    summary:
      "입사 후 가장 먼저 맡은 업무입니다. 프로젝트별 엑셀에 흩어진 자산 정보를 하나의 시스템으로 통합하고, 현업 인터뷰부터 데이터 모델링과 API 구현까지 단독 수행하며 업무 언어를 추적 가능한 자산 생애주기로 변환했습니다.",
    sections: [
      {
        eyebrow: "Context",
        title: "엑셀의 행 사이에서 사라지는 자산 이력",
        body: [
          "보유 자산 현황, 렌탈 자산 현황, 프로젝트별 자산 비용 등 여러 엑셀 파일에 자산을 수기로 나눠 관리하고 있어 총무 담당자가 실제 자산의 이동 이력을 추적하기 어려웠습니다.",
          "누락된 데이터와 파일별로 상이한 작성 기준 때문에 프로젝트별 비용 집계에도 반복적인 확인 작업이 필요했습니다.",
        ],
        bullets: [
          "자산 이동·유휴 이력 추적 불가",
          "수기 입력 오류와 데이터 누락",
          "프로젝트별 비용 집계 공수 증가",
        ],
      },
      {
        eyebrow: "Modeling",
        title: "관리의 기준을 사용자에서 자산으로 전환하다",
        body: [
          "사용자가 무엇을 보유했는지 기록하는 방식에서 자산 한 개가 어떤 상태와 위치를 거쳤는지 추적하는 모델로 관점을 전환했습니다.",
          "생성 → 할당 → 회수 → 수리 → 재할당으로 이어지는 생애주기를 정의하고 모든 상태 변화를 자산 고유 키에 연결했습니다.",
        ],
        bullets: [
          "자산 고유 키 기반 이력 관리",
          "상태 변경과 이동 이력 분리",
          "인사 모듈 연계를 통한 입·퇴사 자산 처리 자동화",
        ],
        image: {
          src: "/images/asset-erd.png",
          alt: "자산 관리 시스템 ERD",
          caption: "자산과 이동 이력을 중심으로 재설계한 데이터 모델",
        },
      },
      {
        eyebrow: "Automation",
        title: "자산 흐름이 비용 계산으로 자연스럽게 이어지도록",
        body: [
          "자산 렌탈 계약과 프로젝트 할당 기간을 연결해 프로젝트별 비용이 자동으로 집계되도록 구현했습니다.",
          "임직원별 보유 자산 조회와 이동·퇴사 프로세스를 연동해 별도의 엑셀 대조 없이 시스템 안에서 현황을 확인할 수 있게 했습니다.",
        ],
        bullets: [
          "프로젝트별 렌탈 비용 자동 집계",
          "임직원 보유 자산 실시간 조회",
          "수기 대조와 중복 입력 제거",
        ],
      },
    ],
    outcomes: [
      { value: "100%", label: "자산 데이터 정합성" },
      { value: "6개월", label: "분석부터 구축까지" },
      { value: "1인", label: "전 과정 단독 수행" },
    ],
  },
  {
    slug: "poo-diary",
    no: "03",
    kind: "Solo MVP",
    title: "Poo Diary",
    subtitle: "식생활과 배변 패턴의 상관관계를 추적하는 PWA",
    period: "2026.08 — 운영 중",
    team: "1명",
    role: "기획 · 아키텍처 · 풀스택 · DevOps",
    metric: "OIDC",
    metricLabel: "점진적 통합 계정 전환",
    description:
      "배변 상태와 음식·컨디션 기록을 연결해 건강 패턴을 돌아보는 모바일 PWA입니다. VOC로 분석 기능을 확장하고 Keycloak 통합 로그인과 NHN Cloud GitOps 배포 환경을 구축했습니다.",
    tags: [
      "Next.js",
      "TanStack Query",
      "NestJS",
      "PostgreSQL",
      "GitHub Actions",
      "GHCR",
      "ArgoCD",
      "Turborepo",
      "k3s",
    ],
    heroImage: "/images/poo-diary.jpeg",
    liveUrl: "https://poo-diary.mercury-lab.uk",
    summary:
      "배변 상태와 음식·컨디션 기록을 바탕으로 건강 패턴을 돌아볼 수 있는 귀여운 디자인의 모바일 중심 PWA입니다. 애플리케이션 구현을 넘어 VOC 기반 분석 기능, Keycloak 통합 로그인, NHN Cloud k3s의 GitOps 배포까지 직접 구성했습니다.",
    sections: [
      {
        eyebrow: "Goal",
        title: "건강 기록을 부담 없이 남기는 모바일 MVP",
        body: [
          "매일 반복되는 건강 신호를 간편하게 기록하고, 음식과 배변 상태의 연관성을 추적할 수 있도록 설계했습니다.",
          "설치 장벽을 낮추기 위해 네이티브 앱 대신 PWA를 선택하고 모바일 화면에서 빠르게 기록하는 흐름에 집중했습니다.",
        ],
        bullets: [
          "모바일 중심 기록 경험",
          "PWA 설치 및 홈 화면 진입",
          "일·주·월·전체 기간별 통계와 패턴 분석",
        ],
        image: {
          src: "/images/poo-diary-input.png",
          alt: "Poo Diary 기록 입력 화면",
          caption: "배변 상태와 식단을 간편하게 남기는 기록 입력 화면",
        },
      },
      {
        eyebrow: "VOC",
        title: "지인 VOC를 기록 항목과 조건별 분석으로 연결하다",
        body: [
          "MVP를 지인에게 공유한 뒤 먹은 메뉴를 더 구체적으로 기록하고 싶고, 생리·과식·수면 여부도 함께 확인하고 싶다는 의견을 받았습니다.",
          "구체 메뉴와 생활 조건을 기록 항목에 추가하고, 단순 항목 추가를 넘어 통계 범위를 확장했습니다. 충분한 표본이 있는 조건만 분석해 결과의 과도한 해석을 방지했습니다.",
        ],
        bullets: [
          "VOC 기반 구체 메뉴 입력과 생활 조건 기록 추가",
          "식품별 평균 브리스톨 스케일·통증 비율 및 빈출 메뉴 분석",
          "생리 일차·수면·과식 여부에 따른 배변 상태 비교",
          "최소 표본 수를 충족한 조건만 분석",
        ],
      },
      {
        eyebrow: "Identity Migration",
        title: "Device ID 사용자를 통합 계정으로 점진적으로 전환하다",
        body: [
          "초기 MVP는 가입 없이 사용할 수 있도록 Device ID로 사용자를 식별했지만, 기기가 바뀌면 기존 기록에 접근하기 어렵고 여러 기기에서 같은 데이터를 이용할 수 없었습니다.",
          "개인 도메인의 Keycloak 기반 통합 로그인 앱을 배포하고 Device ID 세션과 OIDC 계정 로그인을 병행했습니다. 사용자가 연결을 선택한 경우에만 기존 기록을 통합 계정에 연결하고, 실패 시 기존 데이터와 이용 흐름을 유지하도록 구성했습니다.",
        ],
        bullets: [
          "Device ID 세션과 Keycloak(OIDC) 통합 계정 병행",
          "사용자 동의 시 기존 기록을 통합 계정에 연결",
          "Fallback 시 기존 데이터와 이용 흐름 유지",
        ],
      },
      {
        eyebrow: "Delivery",
        title: "NHN Cloud에서 배포 파이프라인을 직접 구성하다",
        body: [
          "NHN Cloud Compute 인스턴스에 k3s 환경을 구성하고, GitHub Actions에서 컨테이너 이미지를 빌드한 뒤 GHCR에 푸시하고 ArgoCD가 변경 사항을 배포하도록 연결했습니다.",
          "Ingress와 Cloudflare 커스텀 도메인을 연결하고 cert-manager로 Let's Encrypt SSL/TLS 인증서의 자동 발급과 갱신 체계를 구축했습니다.",
        ],
        bullets: [
          "NHN Cloud Compute 내 k3s 인프라 환경",
          "GitHub Actions 컨테이너 이미지 빌드 및 GHCR 푸시",
          "ArgoCD 기반 GitOps 자동 배포",
          "Ingress·cert-manager 기반 HTTPS 인증서 자동화",
        ],
      },
    ],
    outcomes: [
      { value: "OIDC", label: "Keycloak 통합 인증" },
      { value: "VOC", label: "조건별 건강 패턴 분석" },
      { value: "GitOps", label: "k3s 자동 배포·HTTPS" },
    ],
  },
];

export const otherExperiences = [
  {
    no: "A",
    kind: "Solo Product · 2026.09",
    title: "공유 가계부",
    description:
      "가계를 워크스페이스 단위로 구성해 구성원이 수입과 지출을 함께 관리하는 웹 애플리케이션입니다. 결제수단·카테고리별 지출 등록과 리포트를 구현했으며, 실제 사용을 통해 신용카드 할인·적립 조건에 대응하는 방법을 검증하고 있습니다.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Workspace"],
    href: "https://household-budget.mercury-lab.uk/",
    hrefLabel: "서비스 바로가기",
  },
  {
    no: "B",
    kind: "Identity · 2026.09",
    title: "OIDC",
    description:
      "개인 프로젝트를 Mercury Lab으로 브랜딩하고 Keycloak 기반 중앙 인증 체계를 설계했습니다. Realm·Client·Scope·Audience·Role 구조와 Authorization Code + PKCE 기반 BFF 인증, HttpOnly 쿠키 토큰 갱신 및 기존 계정의 단계적 전환을 1차 구현했습니다.",
    tags: ["Keycloak", "OIDC", "PKCE", "BFF", "HttpOnly Cookie"],
    href: undefined,
    hrefLabel: undefined,
  },
  {
    no: "C",
    kind: "NPM Library · 2026.09",
    title: "캘린더 라이브러리",
    description:
      "반응형 UI와 반복 일정·다중 캘린더 보기를 지원하는 TypeScript 기반 React 라이브러리 calendar-mercury-lab을 제작해 npm에 배포했습니다. 한국 공휴일 API 연동을 지원하고 공유 가계부 일정 화면에 직접 적용했습니다.",
    tags: ["React", "TypeScript", "npm", "Korean Holidays"],
    href: "https://www.npmjs.com/package/calendar-mercury-lab",
    hrefLabel: "npm 패키지 바로가기",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
