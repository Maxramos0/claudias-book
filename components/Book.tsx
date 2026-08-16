"use client";

import dynamic from "next/dynamic";
import { useLocale } from "@/lib/locale";

function Opening() {
  const { t } = useLocale();
  return (
    <main className="stage">
      <div className="loader">
        <p className="script">Claudia&apos;s</p>
        <p className="bar">
          <i />
        </p>
        <p className="eyebrow">{t.openingBook}</p>
      </div>
    </main>
  );
}

export const Book = dynamic(
  () => import("./BookInner").then((mod) => mod.BookInner),
  {
    ssr: false,
    loading: () => <Opening />,
  },
);
