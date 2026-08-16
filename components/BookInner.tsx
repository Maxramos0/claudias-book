"use client";

import HTMLFlipBook from "react-pageflip";
import { useCallback, useEffect, useRef, useState } from "react";
import { CHAPTER_JUMPS, PAGES, PAGE_OF, labelFor } from "@/data/book";
import type { Copy } from "@/data/copy";
import type { SectionId } from "@/data/recipes";
import { useLocale, type Locale } from "@/lib/locale";
import {
  Contents,
  CoverBack,
  CoverFront,
  Dedication,
  Endpaper,
  MealCardsPage,
  MenuDivider,
  RecipePage,
  SectionDivider,
  WatercolorPage,
} from "./pages";
import { Atmosphere } from "./Atmosphere";

/* Confeti: posiciones y ritmos fijos para que no bailen entre renders. */
const SPRINKLES = [
  { top: "12%", left: "7%", s: 11, c: "#ef9db4", d: 17, delay: 0, kind: "" },
  { top: "26%", left: "91%", s: 9, c: "#c9a8e0", d: 21, delay: 1.4, kind: "pill" },
  { top: "68%", left: "4%", s: 8, c: "#f8bfa0", d: 19, delay: 0.6, kind: "ring" },
  { top: "80%", left: "88%", s: 12, c: "#a5d9c6", d: 23, delay: 2.1, kind: "" },
  { top: "8%", left: "62%", s: 7, c: "#e4c59a", d: 16, delay: 1.1, kind: "ring" },
  { top: "46%", left: "95%", s: 10, c: "#ef9db4", d: 24, delay: 0.3, kind: "pill" },
  { top: "88%", left: "34%", s: 8, c: "#c9a8e0", d: 18, delay: 1.8, kind: "" },
  { top: "18%", left: "26%", s: 9, c: "#f8bfa0", d: 22, delay: 2.6, kind: "pill" },
  { top: "58%", left: "12%", s: 7, c: "#e4c59a", d: 20, delay: 0.9, kind: "" },
  { top: "36%", left: "80%", s: 8, c: "#a5d9c6", d: 25, delay: 1.6, kind: "ring" },
  { top: "72%", left: "52%", s: 10, c: "#ef9db4", d: 19, delay: 0.4, kind: "pill" },
  { top: "14%", left: "48%", s: 6, c: "#c9a8e0", d: 15, delay: 2.2, kind: "" },
  { top: "54%", left: "72%", s: 9, c: "#f8bfa0", d: 21, delay: 1.2, kind: "ring" },
  { top: "92%", left: "16%", s: 7, c: "#e4c59a", d: 17, delay: 0.7, kind: "pill" },
];

function jumpLabel(id: string, t: Copy) {
  if (id === "toc") return t.jumps.toc;
  if (id === "menus") return t.jumps.menus;
  return t.sections[id as SectionId].title;
}

function LangToggle() {
  const { locale, setLocale, t } = useLocale();
  const pick = (next: Locale) => () => setLocale(next);

  return (
    <div className="lang" role="group" aria-label={t.langLabel}>
      <button type="button" aria-pressed={locale === "en"} onClick={pick("en")}>
        EN
      </button>
      <button type="button" aria-pressed={locale === "es"} onClick={pick("es")}>
        ES
      </button>
    </div>
  );
}

const FLIP_MS = 680;
const RIFFLE_MS = 88;

type FlipApi = NonNullable<ReturnType<HTMLFlipBook["pageFlip"]>>;

function armClicks(api: FlipApi, fast: boolean) {
  const s = api.getSettings?.();
  if (!s) return;
  s.disableFlipByClick = false;
  s.flippingTime = fast ? RIFFLE_MS : FLIP_MS;
}

function lockClicks(api: FlipApi) {
  const s = api.getSettings?.();
  if (!s) return;
  s.disableFlipByClick = true;
  s.flippingTime = FLIP_MS;
}

function renderPage(p: (typeof PAGES)[number], i: number) {
  switch (p.kind) {
    case "cover-front":
      return <CoverFront key={i} />;
    case "endpaper":
      return <Endpaper key={i} />;
    case "dedication":
      return <Dedication key={i} />;
    case "watercolor":
      return <WatercolorPage key={i} />;
    case "contents":
      return <Contents key={i} half={p.half} />;
    case "divider":
      return <SectionDivider key={i} id={p.section} index={p.index} />;
    case "recipe":
      return <RecipePage key={i} recipe={p.recipe} pageNo={PAGE_OF[p.recipe.id]} />;
    case "menu-divider":
      return <MenuDivider key={i} />;
    case "meal-cards":
      return <MealCardsPage key={i} cards={p.cards} reminder={p.reminder} />;
    case "cover-back":
      return <CoverBack key={i} />;
  }
}

export function BookInner() {
  const bookRef = useRef<HTMLFlipBook>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const jumpTarget = useRef<number | null>(null);
  const jumpDir = useRef<"fwd" | "back" | null>(null);
  const [page, setPage] = useState(0);
  const [riffle, setRiffle] = useState(false);
  const { locale, t } = useLocale();

  const stopRiffle = useCallback((api?: FlipApi | null) => {
    jumpTarget.current = null;
    jumpDir.current = null;
    setRiffle(false);
    if (api) lockClicks(api);
  }, []);

  const stepToward = useCallback((api: FlipApi, target: number) => {
    const current = api.getCurrentPageIndex();
    if (current === target) {
      stopRiffle(api);
      return;
    }
    armClicks(api, true);
    if (current < target) api.flipNext();
    else api.flipPrev();
  }, [stopRiffle]);

  const flip = useCallback((dir: "prev" | "next") => {
    const api = bookRef.current?.pageFlip();
    if (!api || jumpTarget.current != null) return;
    armClicks(api, false);
    if (dir === "prev") api.flipPrev();
    else api.flipNext();
    queueMicrotask(() => lockClicks(api));
  }, []);

  const goTo = useCallback(
    (target: number) => {
      const api = bookRef.current?.pageFlip();
      if (!api) return;
      const current = api.getCurrentPageIndex();
      if (target < 0 || target === current) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        api.turnToPage(target);
        setPage(target);
        return;
      }

      const already = jumpTarget.current != null;
      jumpTarget.current = target;
      jumpDir.current = target > current ? "fwd" : "back";
      setRiffle(true);
      if (!already) stepToward(api, target);
    },
    [stepToward],
  );

  const onFlip = useCallback((e: { data: number }) => {
    setPage(e.data);
  }, []);

  const onChangeState = useCallback(
    (e: { data: "user_fold" | "fold_corner" | "flipping" | "read" }) => {
      if (e.data !== "read") return;
      const target = jumpTarget.current;
      if (target == null) return;
      const api = bookRef.current?.pageFlip();
      if (!api) return;

      const current = api.getCurrentPageIndex();
      const arrived =
        current === target ||
        (jumpDir.current === "fwd" && current >= target) ||
        (jumpDir.current === "back" && current <= target);

      if (arrived) {
        if (current !== target) {
          api.turnToPage(target);
          setPage(target);
        }
        stopRiffle(api);
        return;
      }
      stepToward(api, target);
    },
    [stepToward, stopRiffle],
  );

  useEffect(() => {
    const root = wrapRef.current;
    if (!root) return;

    const blockFlip = (e: Event) => {
      const t = e.target as HTMLElement | null;
      if (t?.closest("a, button, input, label, select, textarea")) {
        e.stopPropagation();
      }
    };

    const types = ["mousedown", "mouseup", "click", "touchstart", "touchend", "pointerdown", "pointerup"] as const;
    for (const type of types) root.addEventListener(type, blockFlip, true);
    return () => {
      for (const type of types) root.removeEventListener(type, blockFlip, true);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const apply = () => {
      const touch = mq.matches || navigator.maxTouchPoints > 0;
      document.documentElement.classList.toggle("is-touch", touch);
    };
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT")) return;

      if (e.key === "ArrowLeft") flip("prev");
      else if (e.key === "ArrowRight" || e.key === " ") flip("next");
      else if (e.key === "Home") goTo(0);
      else if (e.key === "End") goTo(PAGES.length - 1);
      else return;
      e.preventDefault();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [flip, goTo]);

  useEffect(() => {
    stopRiffle(bookRef.current?.pageFlip());
  }, [locale, stopRiffle]);

  useEffect(() => {
    if (!riffle) return;
    const id = window.setTimeout(() => {
      const api = bookRef.current?.pageFlip();
      const target = jumpTarget.current;
      if (api && target != null) {
        api.turnToPage(target);
        setPage(target);
      }
      stopRiffle(api);
    }, 9000);
    return () => window.clearTimeout(id);
  }, [riffle, stopRiffle]);

  const current = labelFor(PAGES[page] ?? PAGES[0], locale);
  const progress = (page / (PAGES.length - 1)) * 100;

  // El capítulo activo es el último salto que ya hemos pasado.
  const activeJump = [...CHAPTER_JUMPS]
    .reverse()
    .find((j) => j.page >= 0 && page >= j.page);

  return (
    <main className="stage">
      <Atmosphere />
      <div className="sprinkles" aria-hidden="true">
        {SPRINKLES.map((p, i) => (
          <i
            key={i}
            className={p.kind}
            style={
              {
                top: p.top,
                left: p.left,
                "--s": `${p.s}px`,
                "--c": p.c,
                "--d": `${p.d}s`,
                "--delay": `${p.delay}s`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <header className="masthead">
        <span className="mark">Claudia&apos;s</span>
        <span className="sep" />
        <span className="tip tip-mouse">
          <kbd>←</kbd>
          <kbd>→</kbd>
          {t.dragCorner}
        </span>
        <span className="tip tip-touch">{t.swipePage}</span>
        <LangToggle />
      </header>

      <div className="book-scene">
        <div className="book-wrap" ref={wrapRef} data-riffle={riffle || undefined}>
          <HTMLFlipBook
            ref={bookRef}
            key={locale}
            startPage={page}
            width={470}
            height={660}
            size="stretch"
            /* Por debajo de este ancho por hoja la librería pasa a una sola
               página: dos hojas de 280px en tablet quedan ilegibles. */
            minWidth={330}
            maxWidth={640}
            minHeight={400}
            maxHeight={900}
            drawShadow
            showCover
            flippingTime={FLIP_MS}
            usePortrait
            startZIndex={3}
            maxShadowOpacity={0.2}
            showPageCorners
            swipeDistance={26}
            useMouseEvents
            disableFlipByClick
            mobileScrollSupport
            className="the-book"
            onFlip={onFlip}
            onChangeState={onChangeState}
          >
            {PAGES.map(renderPage)}
          </HTMLFlipBook>
          <div className="spine" aria-hidden="true" />
        </div>
      </div>

      <nav className="controls" aria-label={t.nav} data-riffle={riffle || undefined} aria-busy={riffle}>
        <button
          type="button"
          className="nav-btn"
          disabled={page <= 0}
          onClick={() => flip("prev")}
          aria-label={t.prev}
        >
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
            <path
              d="M15 5 8 12l7 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <span className="folio" aria-live="polite">
          <b>{current.title}</b>
          <small>
            {current.section} · {page + 1}/{PAGES.length}
          </small>
        </span>

        <label className="jump">
          <span className="sr-only">{t.jump}</span>
          <select
            aria-label={t.jump}
            value={activeJump?.id ?? ""}
            onChange={(e) => {
              const next = CHAPTER_JUMPS.find((j) => j.id === e.target.value);
              if (next && next.page >= 0) goTo(next.page);
            }}
          >
            <option value="" disabled>
              {t.chapter}
            </option>
            {CHAPTER_JUMPS.filter((j) => j.page >= 0).map((j) => (
              <option key={j.id} value={j.id}>
                {jumpLabel(j.id, t)}
              </option>
            ))}
          </select>
        </label>

        <span className="chips">
          {CHAPTER_JUMPS.filter((j) => j.page >= 0).map((j) => (
            <button
              key={j.id}
              type="button"
              aria-current={activeJump?.id === j.id}
              onClick={() => goTo(j.page)}
            >
              {jumpLabel(j.id, t)}
            </button>
          ))}
        </span>

        <button
          type="button"
          className="nav-btn"
          disabled={page >= PAGES.length - 1}
          onClick={() => flip("next")}
          aria-label={t.next}
        >
          <svg viewBox="0 0 24 24" width="17" height="17" fill="none" aria-hidden="true">
            <path
              d="m9 5 7 7-7 7"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <span className="progress" aria-hidden="true">
          <i style={{ width: `${progress}%` }} />
        </span>
      </nav>
    </main>
  );
}
