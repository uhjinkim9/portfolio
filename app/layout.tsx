import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "김어진 | Full-stack Engineer",
  description:
    "비즈니스 도메인을 시스템 구조로 풀어내는 풀스택 개발자 김어진의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={noto.variable}>{children}</body>
    </html>
  );
}
