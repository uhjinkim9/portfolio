import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return { title: `${project.title} | 김어진`, description: project.description };
}

export default function ProjectDetail({ params }: Props) {
  const project = getProject(params.slug);
  if (!project) notFound();
  const index = projects.findIndex(({ slug }) => slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="min-h-screen bg-paper">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-paper/90 backdrop-blur-xl">
        <div className="container-grid flex h-16 items-center justify-between">
          <Link href="/#projects" className="flex items-center gap-2 text-sm font-black transition hover:text-ember"><ArrowLeft size={17}/> 프로젝트 목록</Link>
          <span className="text-xs font-black tracking-[.16em] text-black/35">CASE STUDY {project.no}</span>
        </div>
      </nav>

      <header className="border-b border-line pt-16">
        <div className="container-grid grid gap-14 py-20 lg:grid-cols-[1fr_340px] lg:py-28">
          <div>
            <div className="eyebrow">{project.kind}</div>
            <h1 className="mt-7 max-w-4xl text-[clamp(2.55rem,5.95vw,5.5rem)] font-black leading-[.98] tracking-[-.045em]">{project.title}</h1>
            <p className="mt-7 max-w-3xl text-[1.05rem] font-bold leading-8 text-black/50 md:text-[1.275rem]">{project.subtitle}</p>
          </div>
          <dl className="self-end border-t-2 border-ink">
            {[["기간", project.period], ["규모", project.team], ["역할", project.role]].map(([term, value]) => <div key={term} className="grid grid-cols-[60px_1fr] border-b border-line py-4 text-sm"><dt className="font-black text-ember">{term}</dt><dd className="font-bold">{value}</dd></div>)}
          </dl>
        </div>
      </header>

      <section className="bg-ink py-20 text-white md:py-28">
        <div className="container-grid grid gap-12 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
          <p className="text-[1.275rem] font-bold leading-[1.6] tracking-tight md:text-[1.9rem]">{project.summary}</p>
          <div><strong className="block text-6xl font-black text-ember">{project.metric}</strong><span className="mt-2 block text-sm font-bold text-white/50">{project.metricLabel}</span></div>
        </div>
      </section>

      {project.heroImage && (
        <section className="container-grid py-16 md:py-24">
          <div className="relative aspect-[16/8.5] overflow-hidden border border-line bg-white p-5 md:p-10">
            <Image src={project.heroImage} alt={`${project.title} 대표 이미지`} fill priority className="object-contain p-5 md:p-10" sizes="(max-width: 1280px) 100vw, 1240px" />
          </div>
        </section>
      )}

      <div className="container-grid pb-24 md:pb-36">
        {project.sections.map((section, i) => (
          <section key={section.eyebrow} className="grid gap-8 border-t border-ink py-16 lg:grid-cols-12 lg:gap-12 md:py-24">
            <div className="lg:col-span-3"><span className="text-xs font-black uppercase tracking-[.16em] text-ember">{String(i + 1).padStart(2, "0")} · {section.eyebrow}</span></div>
            <div className="lg:col-span-9">
              <h2 className="max-w-4xl text-[1.6rem] font-black leading-tight tracking-tight md:text-[2.65rem]">{section.title}</h2>
              <div className="mt-8 grid gap-5 text-base leading-8 text-black/65 md:text-lg">{section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
              {section.bullets && <ul className="mt-9 grid gap-3 border-l-2 border-ember pl-6">{section.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 font-bold"><Check className="mt-1 shrink-0 text-ember" size={17}/>{bullet}</li>)}</ul>}
              {section.image && <figure className="mt-12"><div className="relative aspect-[16/10] overflow-hidden border border-line bg-white"><Image src={section.image.src} alt={section.image.alt} fill className="object-contain p-4 md:p-8" sizes="(max-width: 1024px) 100vw, 75vw"/></div><figcaption className="mt-3 text-xs font-bold text-black/40">{section.image.caption}</figcaption></figure>}
            </div>
          </section>
        ))}

        <section className="border-t border-ink py-16 md:py-24">
          <div className="eyebrow">Outcome</div><h2 className="mt-5 text-[1.6rem] font-black md:text-[2.65rem]">결과로 남은 것</h2>
          <div className="mt-12 grid gap-px bg-line sm:grid-cols-3">{project.outcomes.map((outcome) => <div key={outcome.label} className="bg-white p-7 md:p-9"><strong className="text-4xl font-black text-ember">{outcome.value}</strong><span className="mt-3 block text-sm font-bold text-black/50">{outcome.label}</span></div>)}</div>
          <div className="mt-8 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="border border-line bg-white px-3 py-2 text-xs font-bold">{tag}</span>)}</div>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 bg-ink px-6 py-4 text-sm font-black text-white transition hover:bg-ember">서비스 방문하기 <ArrowUpRight size={17}/></a>}
        </section>
      </div>

      <Link href={`/projects/${next.slug}`} className="group block border-t border-line bg-white py-16 transition hover:bg-ember hover:text-white md:py-24">
        <div className="container-grid flex items-end justify-between gap-8"><div><span className="text-xs font-black uppercase tracking-[.16em] opacity-50">Next project</span><h2 className="mt-4 text-[1.6rem] font-black tracking-tight md:text-[3.2rem]">{next.title}</h2></div><ArrowRight className="shrink-0 transition-transform group-hover:translate-x-2" size={40}/></div>
      </Link>
    </main>
  );
}
