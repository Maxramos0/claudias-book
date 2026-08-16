"use client";

import dynamic from "next/dynamic";

export const Book = dynamic(
  () => import("./BookInner").then((mod) => mod.BookInner),
  {
    ssr: false,
    loading: () => (
      <main className="stage">
        <div className="loader">
          <p className="script">Claudia&apos;s</p>
          <p className="bar">
            <i />
          </p>
          <p className="eyebrow">Opening the book</p>
        </div>
      </main>
    ),
  },
);
