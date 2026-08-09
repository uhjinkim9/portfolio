import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Database,
  Github,
  Layers3,
  Mail,
  ServerCog,
  Sparkles,
} from "lucide-react";
import { Header } from "@/components/header";
import { projects } from "@/lib/projects";

const skills = [
  "Next.js",
  "React",
  "NestJS",
  "TypeScript",
  "TypeORM",
  "MariaDB",
  "RabbitMQ",
  "Docker",
  "Kubernetes",
  "Jenkins",
];

export default function Home() {
  return (
    <main id="top" className="overflow-hidden">
      <Header />
      <section className="relative min-h-[760px] border-b border-line pt-16 lg:min-h-screen">
        <div className="absolute inset-y-0 right-0 hidden w-[38%] border-l border-line fine-grid lg:block" />
        <div className="container-grid relative grid min-h-[calc(100vh-64px)] items-center py-20 lg:grid-cols-[1fr_360px] lg:gap-20">
          <div>
            <div className="eyebrow mb-9">Full-stack Engineer · Seoul</div>
            <h1 className="max-w-5xl text-[clamp(2.65rem,6.8vw,6.65rem)] font-black leading-[.94] tracking-[-.055em]">
              문제를 읽고,
              <br />
              <span className="text-ember">구조로 답합니다.</span>
            </h1>
            <p className="mt-9 max-w-2xl text-lg font-medium leading-8 text-black/65 md:text-xl">
              비즈니스 도메인을 정밀한 시스템 구조로 풀어내고,
              <br className="hidden sm:block" /> 기획부터 DevOps까지 제품의 전
              과정을 책임지는 김어진입니다.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="flex items-center gap-3 bg-ink px-6 py-4 text-sm font-bold text-white transition hover:bg-ember"
              >
                프로젝트 보기 <ArrowDown size={17} />
              </a>
            </div>
          </div>
          <aside className="mt-16 border-t-2 border-ink lg:mt-0">
            {[
              ["LATEST", "그룹웨어 SaaS 운영 배포 완료"],
              ["FOCUS", "Architecture · DX · DevOps"],
              ["EMAIL", "uhjinkim9@gmail.com"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="grid grid-cols-[72px_1fr] gap-5 border-b border-line py-5"
              >
                <span className="text-[10px] font-black tracking-widest text-ember">
                  {k}
                </span>
                <span className="text-sm font-bold">{v}</span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section
        id="about"
        className="border-b border-line bg-ink py-24 text-white md:py-32"
      >
        <div className="container-grid grid gap-16 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <div className="eyebrow">About</div>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
              좋은 코드는 현실의 문제를 정확하게 이해하는 데서 시작된다고
              믿습니다.
            </p>
          </div>
          <div>
            <p className="text-[1.6rem] font-bold leading-[1.45] tracking-tight md:text-[2.55rem] md:leading-[1.35]">
              사용자의 언어를 <span className="text-ember">데이터 모델</span>로,
              <br />
              복잡한 흐름을 <span className="text-ember">단단한 아키텍처</span>
              로 바꿉니다.
            </p>
            <div className="mt-16 grid gap-px bg-white/15 sm:grid-cols-3">
              {[
                ["3", "주요 구축 프로젝트"],
                ["0 → 1", "기획부터 운영까지"],
                ["Full", "Frontend to DevOps"],
              ].map(([n, t]) => (
                <div key={t} className="bg-ink py-7 sm:px-6">
                  <strong className="block text-3xl text-ember">{n}</strong>
                  <span className="mt-2 block text-sm text-white/50">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 md:py-32">
        <div className="container-grid">
          <div className="mb-14 flex items-end justify-between border-b border-ink pb-5">
            <div>
              <div className="eyebrow">Selected Work</div>
              <h2 className="mt-4 text-[1.9rem] font-black tracking-tight md:text-[3.2rem]">
                프로젝트
              </h2>
            </div>
            <span className="hidden text-sm font-bold text-black/40 sm:block">
              2024 — 2026
            </span>
          </div>
          <div className="space-y-20 md:space-y-28">
            {projects.map((p, i) => (
              <article
                key={p.no}
                className="project-card grid gap-8 lg:grid-cols-12 lg:gap-12"
              >
                <div
                  className={`relative overflow-hidden border border-line bg-white p-5 sm:p-10 lg:col-span-7 ${i % 2 ? "lg:order-2" : ""}`}
                >
                  <div className="absolute left-0 top-0 z-10 bg-ember px-4 py-2 text-xs font-black text-white">
                    {p.no}
                  </div>
                  <Link href={`/projects/${p.slug}`} className="project-image relative block aspect-[16/10] bg-paper fine-grid">
                    {p.heroImage ? <Image src={p.heroImage} alt={`${p.title} 대표 이미지`} fill className="object-contain p-4" sizes="(max-width: 1024px) 100vw, 58vw"/> : <div className="grid size-full place-items-center"><span className="border border-black/15 bg-paper px-5 py-3 text-xs font-black text-black/40">PROJECT CASE STUDY</span></div>}
                  </Link>
                </div>
                <div
                  className={`flex flex-col justify-center lg:col-span-5 ${i % 2 ? "lg:order-1" : ""}`}
                >
                  <p className="text-xs font-black uppercase tracking-[.14em] text-ember">
                    {p.kind} · {p.period}
                  </p>
                  <h3 className="mt-4 text-[1.6rem] font-black tracking-tight md:text-[2.65rem]">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[.95rem] font-bold text-black/50 md:text-base">
                    {p.subtitle}
                  </p>
                  <div className="my-7 border-y border-line py-5">
                    <strong className="text-3xl font-black text-ember">
                      {p.metric}
                    </strong>
                    <span className="ml-3 text-sm font-bold text-black/50">
                      {p.metricLabel}
                    </span>
                  </div>
                  <p className="leading-7 text-black/65">{p.description}</p>
                  <div className="mt-7 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-line bg-white px-3 py-2 text-xs font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${p.slug}`} className="mt-7 inline-flex items-center gap-2 self-start text-sm font-black underline decoration-ember decoration-2 underline-offset-4">프로젝트 자세히 보기 <ArrowUpRight size={16} /></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="strengths"
        className="border-y border-line bg-white py-24 md:py-32"
      >
        <div className="container-grid">
          <div className="eyebrow">Key Competencies</div>
          <h2 className="mt-5 max-w-3xl text-[1.9rem] font-black tracking-tight md:text-[3.2rem]">
            끝까지 만드는 개발자의 세 가지 힘
          </h2>
          <div className="mt-16 grid border-l border-t border-line md:grid-cols-3">
            {[
              [
                Database,
                "01",
                "도메인 분석력",
                "엑셀과 수기 업무 속 현업의 페인 포인트를 읽고, 비즈니스 규칙을 데이터 구조로 정제합니다.",
              ],
              [
                Layers3,
                "02",
                "아키텍처 설계",
                "서비스 규모와 팀의 현실을 함께 고려해 확장 가능하면서도 운영 가능한 구조를 선택합니다.",
              ],
              [
                ServerCog,
                "03",
                "주도적 실행력",
                "UI/UX 설계부터 API, 배포 자동화와 운영 환경까지 제품의 전 생애주기를 완주합니다.",
              ],
            ].map(([Icon, no, title, desc]) => {
              const C = Icon as typeof Database;
              return (
                <div
                  key={String(no)}
                  className="border-b border-r border-line p-8 md:p-10"
                >
                  <div className="flex items-center justify-between">
                    <C className="text-ember" size={30} />
                    <span className="text-xs font-black text-black/30">
                      {String(no)}
                    </span>
                  </div>
                  <h3 className="mt-16 text-2xl font-black">{String(title)}</h3>
                  <p className="mt-4 text-sm leading-7 text-black/55">
                    {String(desc)}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-4">
            {skills.map((skill, i) => (
              <span
                key={skill}
                className={`text-sm font-black ${i < 6 ? "text-ink" : "text-black/35"}`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative bg-ember py-24 text-white md:py-32"
      >
        <Sparkles
          className="absolute right-[8%] top-16 hidden opacity-30 md:block"
          size={80}
        />
        <div className="container-grid">
          <p className="text-xs font-black uppercase tracking-[.16em]">
            Let&apos;s build something solid.
          </p>
          <h2 className="mt-8 max-w-5xl text-[1.9rem] font-black leading-[1.18] tracking-tight md:text-[3.8rem]">
            함께 풀어낼 문제가 있다면,
            <br />
            이야기를 들려주세요.
          </h2>
          <div className="mt-14 flex flex-wrap gap-4">
            <a
              href="mailto:uhjinkim9@gmail.com"
              className="flex items-center gap-3 bg-ink px-6 py-4 font-bold"
            >
              <Mail size={18} /> 이메일 보내기
            </a>
            <a
              href="https://github.com/uhjinkim9"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 border border-white/60 px-6 py-4 font-bold"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </section>
      <footer className="bg-ink py-7 text-white">
        <div className="container-grid flex flex-col justify-between gap-3 text-xs text-white/40 sm:flex-row">
          <span>© 2026 Kim Eojin. All rights reserved.</span>
          <span>Built with Next.js & TypeScript</span>
        </div>
      </footer>
    </main>
  );
}
