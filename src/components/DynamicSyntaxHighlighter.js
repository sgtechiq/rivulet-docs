"use client";

import dynamic from 'next/dynamic';

const SyntaxHighlighter = dynamic(
  () => import('react-syntax-highlighter').then((mod) => mod.Prism),
  { ssr: false }
);

const atomDark = dynamic(
  () => import('react-syntax-highlighter/dist/cjs/styles/prism').then((mod) => mod.atomDark),
  { ssr: false }
);

export { SyntaxHighlighter, atomDark };