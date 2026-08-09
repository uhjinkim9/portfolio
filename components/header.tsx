"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["소개", "/#about"],
  ["프로젝트", "/#projects"],
  ["역량", "/#strengths"],
  ["연락처", "/#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-paper/90 backdrop-blur-xl">
      <div className="container-grid flex h-16 items-center justify-between">
        <a href="/#top" className="group flex items-center gap-3 font-black tracking-tight">
          <span className="grid size-7 place-items-center bg-ink text-xs text-white transition-colors group-hover:bg-ember">K</span>
          <span>KIM EOJIN</span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="transition-colors hover:text-ember">{label}</a>)}
        </nav>
        <button aria-label="메뉴 열기" className="md:hidden" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="container-grid flex flex-col border-t border-line py-4 md:hidden">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-line py-4 font-bold">{label}<ArrowUpRight size={16}/></a>)}
        </nav>
      )}
    </header>
  );
}
