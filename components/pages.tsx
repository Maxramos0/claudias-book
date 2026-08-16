"use client";

import { forwardRef, type CSSProperties, type ReactNode } from "react";
import { Icon } from "./Icons";
import { Scribble, Sticky } from "./Notes";
import { PAGE_OF } from "@/data/book";
import {
  MEAL_CARDS,
  RECIPES,
  SECTIONS,
  recipesBySection,
  type MealCard,
  type Recipe,
  type SectionId,
} from "@/data/recipes";

type SheetProps = {
  children: ReactNode;
  className?: string;
  density?: "hard" | "soft";
};

export const Sheet = forwardRef<HTMLDivElement, SheetProps>(
  function Sheet({ children, className = "", density }, ref) {
    return (
      <div ref={ref} className={`book-page ${className}`} data-density={density}>
        {children}
      </div>
    );
  },
);

/** Capa de imagen a sangre con velo por encima. */
function photo(src: string, veil: string): CSSProperties {
  return {
    backgroundImage: `${veil}, url("${src}")`,
    backgroundSize: "cover, cover",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat, no-repeat",
  };
}

const RECIPE_HERO: Record<SectionId, string> = {
  mains: "/images/cover-plate.webp",
  soups: "/images/magazine-ingredients.webp",
  sauces: "/images/magazine-ingredients.webp",
  salads: "/images/watercolor-kitchen.webp",
  sweets: "/images/luxury-dessert.webp",
};

function heroPos(id: string) {
  let n = 0;
  for (let i = 0; i < id.length; i += 1) n = (n + id.charCodeAt(i) * (i + 3)) % 97;
  return `${18 + (n % 64)}% ${22 + ((n * 5) % 48)}%`;
}

function IngredientItems({ items, cols }: { items: string[]; cols: boolean }) {
  return (
    <ul className={cols ? "ingredients cols" : "ingredients"}>
      {items.map((it) => (
        <li key={it}>
          <label
            onMouseDown={(e) => e.stopPropagation()}
            onPointerDown={(e) => e.stopPropagation()}
            onTouchStart={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
          >
            <input type="checkbox" />
            <span>{it}</span>
          </label>
        </li>
      ))}
    </ul>
  );
}

const TAB_TONE: Record<SectionId, string> = {
  mains: "",
  soups: "peach",
  sauces: "mint",
  salads: "lilac",
  sweets: "gold",
};

/* ─────────────────────────── portada ─────────────────────────── */

export const CoverFront = forwardRef<HTMLDivElement>(function CoverFront(_, ref) {
  return (
    <Sheet ref={ref} density="hard">
      <div
        className="inner reveal"
        style={{
          ...photo(
            "/images/cover-plate.webp",
            "linear-gradient(165deg, #fff8f0f2 0%, #ffeef4ea 42%, #f9e9fbf0 100%)",
          ),
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxShadow:
            "inset 0 0 0 1px #e4c59a66, inset 0 0 0 7px #fdf6ee, inset 0 0 0 8px #e4c59a4d",
        }}
      >
        <p className="eyebrow" style={{ letterSpacing: "0.42em" }}>
          A book from home
        </p>

        <h1 className="script" style={{ fontSize: "var(--t-h1)", marginTop: 14 }}>
          Claudia&apos;s
        </h1>

        <p
          className="display"
          style={{
            fontSize: "clamp(16px, 2.2vw, 26px)",
            letterSpacing: "0.34em",
            margin: "6px 0 0 0.34em",
            color: "var(--gold-deep)",
            fontWeight: 500,
          }}
        >
          RECIPES
        </p>

        <div className="drip" style={{ width: "62%", marginTop: 24 }} />

        <p className="hand" style={{ fontSize: 18, marginTop: 20, color: "var(--wine)" }}>
          {RECIPES.length} recipes, copied by hand
        </p>
      </div>
    </Sheet>
  );
});

/* ─────────────────────────── guardas ─────────────────────────── */

export const Endpaper = forwardRef<HTMLDivElement>(function Endpaper(_, ref) {
  return (
    <Sheet ref={ref}>
      <div
        className="inner reveal"
        style={{
          justifyContent: "flex-end",
          gap: 13,
          backgroundImage: `
            radial-gradient(circle at 18% 22%, #ffd6e3 0 9px, transparent 10px),
            radial-gradient(circle at 62% 12%, #ffe3c8 0 7px, transparent 8px),
            radial-gradient(circle at 84% 34%, #e2c2d2 0 8px, transparent 9px),
            radial-gradient(circle at 34% 56%, #cfeee2 0 6px, transparent 7px),
            linear-gradient(155deg, #fff3f7 0%, #fff8f0 48%, #f6eefb 100%)`,
          backgroundSize:
            "120px 120px, 120px 120px, 120px 120px, 120px 120px, cover",
        }}
      >
        <div className="grow" />
        <p className="script" style={{ fontSize: "clamp(28px, 4.4vw, 46px)" }}>
          For the kitchen
        </p>
        <p className="body" style={{ maxWidth: "30ch" }}>
          Copied from the notebook as they were written — flour stains and all.
        </p>
        <div className="drip" style={{ width: "44%", marginTop: 4 }} />
      </div>
    </Sheet>
  );
});

const DEDICATION =
  "Thank you for filling my days with love, unforgettable moments, and so many reasons to smile. This little gift was made with the same love with which you fill my life. I hope you enjoy every recipe as much as I enjoy sharing this life with you.";

export const Dedication = forwardRef<HTMLDivElement>(function Dedication(_, ref) {
  return (
    <Sheet ref={ref} className="paper">
      <div className="inner reveal dedication">
        <p className="eyebrow">For Claudia</p>
        <h2
          className="script"
          style={{ fontSize: "clamp(32px, 4.6vw, 48px)", margin: "8px 0 14px" }}
        >
          A little gift
        </h2>
        <div className="drip" style={{ width: "58%", marginBottom: 18 }} />
        <p className="dedication-text">{DEDICATION}</p>
        <div className="grow" />
        <Sticky rotate={-2.2}>with all my love</Sticky>
      </div>
    </Sheet>
  );
});

/* ─────────────────────────── índice ─────────────────────────── */

export const Contents = forwardRef<HTMLDivElement, { half: 0 | 1 }>(
  function Contents({ half }, ref) {
    const groups = half === 0 ? SECTIONS.slice(0, 2) : SECTIONS.slice(2);

    // Los números salen del manifiesto del libro, así nunca se desincronizan.
    const numbered = SECTIONS.map((s) => ({
      s,
      list: recipesBySection(s.id).map((r) => ({ r, n: PAGE_OF[r.id] })),
    }));

    return (
      <Sheet ref={ref} className="paper">
        <div className="inner reveal">
          {half === 0 ? (
            <>
              <p className="eyebrow">Contents</p>
              <h2
                className="display"
                style={{ fontSize: "var(--t-h3)", margin: "6px 0 9px" }}
              >
                What&apos;s inside
              </h2>
              <div className="drip" style={{ width: "100%", marginBottom: 11 }} />
            </>
          ) : (
            <div style={{ height: 4 }} />
          )}

          <div>
            {numbered
              .filter(({ s }) => groups.some((g) => g.id === s.id))
              .map(({ s, list }) => (
                <div className="toc-group" key={s.id}>
                  <div className="toc-head">
                    <b>{s.title}</b>
                    <i />
                  </div>
                  <ul className="toc">
                    {list.map(({ r, n }) => (
                      <li key={r.id}>
                        <i />
                        {r.title}
                        <span />
                        <b>{n}</b>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>

          <div className="grow" />

          {half === 1 && (
            <p className="hand" style={{ fontSize: 17 }}>
              …and at the back, the weekly menus.
            </p>
          )}
        </div>
      </Sheet>
    );
  },
);

/* ──────────────────── separador de capítulo ──────────────────── */

export const SectionDivider = forwardRef<HTMLDivElement, { id: SectionId; index: number }>(
  function SectionDivider({ id, index }, ref) {
    const s = SECTIONS.find((x) => x.id === id)!;
    const count = recipesBySection(id).length;

    return (
      <Sheet ref={ref} className="divider-page gold-frame">
        <div className="halo" aria-hidden="true" />
        <div className="inner reveal">
          <p className="eyebrow gold" style={{ letterSpacing: "0.4em" }}>
            {s.kicker}
          </p>
          <p className="chapter-no" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h2
            className="display shimmer"
            style={{ fontSize: "var(--t-h2)", letterSpacing: "0.02em" }}
          >
            {s.title}
          </h2>
          <p className="body" style={{ maxWidth: "26ch", marginTop: 12 }}>
            {s.blurb}
          </p>
          <p
            className="script"
            style={{ fontSize: 30, marginTop: 18, color: "var(--gold)" }}
          >
            {count} {count === 1 ? "recipe" : "recipes"}
          </p>
        </div>
      </Sheet>
    );
  },
);

/* ──────────────────── página de receta ──────────────────── */

export const RecipePage = forwardRef<HTMLDivElement, { recipe: Recipe; pageNo: number }>(
  function RecipePage({ recipe, pageNo }, ref) {
    const section = SECTIONS.find((s) => s.id === recipe.section)!;
    const tone = TAB_TONE[recipe.section];

    return (
      <Sheet ref={ref} className="paper">
        <span className={`tab-label ${tone}`}>{section.title}</span>

        <div className="inner reveal recipe-sheet">
          <div
            className="recipe-hero"
            style={
              {
                "--hero": `url("${RECIPE_HERO[recipe.section]}")`,
                "--hero-pos": heroPos(recipe.id),
              } as CSSProperties
            }
            aria-hidden="true"
          />

          <h2
            className="display"
            style={{ fontSize: "var(--t-h3)", margin: "0 0 10px", maxWidth: "18ch" }}
          >
            {recipe.title}
          </h2>

          {recipe.meta && (
            <div className="meta-row sep">
              {recipe.meta.map((m) => (
                <div className="meta" key={m.label}>
                  <span>
                    <Icon name={m.icon} />
                  </span>
                  <div>
                    <em>{m.label}</em>
                    <b>{m.value}</b>
                  </div>
                </div>
              ))}
            </div>
          )}

          <hr className="rule sep" />

          <div>
            {recipe.ingredients.map((g, i) => (
              <div className="ing-group" key={g.label ?? i}>
                {g.label ? (
                  <p className="ing-label">{g.label}</p>
                ) : (
                  <p className="ing-label">Ingredients</p>
                )}
                <IngredientItems items={g.items} cols={g.items.length > 3} />
              </div>
            ))}
          </div>

          <p className="fleuron sep">✦</p>

          <ol className="steps">
            {recipe.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>

          {recipe.note && (
            <>
              <div className="grow" />
              <Sticky>{recipe.note}</Sticky>
            </>
          )}

          {recipe.scribbles?.map((s, i) => (
            <Scribble
              key={`${s.text}-${i}`}
              variant={s.variant}
              rotate={s.rotate}
              className="scribble-float"
            >
              {s.text}
            </Scribble>
          ))}

          {!recipe.note && <div className="grow" />}
        </div>

        <span className="page-no">{pageNo}</span>
      </Sheet>
    );
  },
);

/* ──────────────────── separador de menús ──────────────────── */

export const MenuDivider = forwardRef<HTMLDivElement>(function MenuDivider(_, ref) {
  return (
    <Sheet ref={ref} className="gold-frame">
      <div className="menu-open">
        <div
          className="menu-open-photo"
          style={{
            ...photo(
              "/images/weekly-menus.png",
              "linear-gradient(180deg, #19001999 0%, #19001922 42%, #190019e8 100%)",
            ),
          }}
        />
        <article className="menu-open-note" aria-label="Handwritten note">
          <Scribble variant="marker" rotate={-1.8}>
            Remember this isn&apos;t a diet, Macaroni — it&apos;s just eating a little healthier.
          </Scribble>
        </article>
        <div className="menu-open-copy">
          <p className="eyebrow gold" style={{ letterSpacing: "0.4em" }}>
            Chapter six
          </p>
          <h2
            className="display shimmer"
            style={{ fontSize: "var(--t-h2)", margin: "8px 0 0" }}
          >
            Weekly menus
          </h2>
          <p className="body" style={{ color: "#dfb6b2cc", marginTop: 8, maxWidth: "26ch" }}>
            Pinned to the fridge — not a photocopy of the clipboard.
          </p>
        </div>
      </div>
    </Sheet>
  );
});

/* ──────────────────── página de tarjetas de menú ──────────────────── */

export const MealCardsPage = forwardRef<
  HTMLDivElement,
  { cards: MealCard[]; reminder?: boolean }
>(function MealCardsPage({ cards, reminder }, ref) {
    return (
      <Sheet ref={ref} className="paper">
        <div className="inner reveal menu-page">
          <p className="eyebrow">This week</p>
          <div className="menu-board">
            {cards.map((c, i) => (
              <article
                className={`clip clip-${c.tone} ${i % 2 === 0 ? "polaroid" : "split"}`}
                key={c.id}
                style={{ ["--tilt" as string]: i % 2 === 0 ? "-1.6deg" : "1.8deg" }}
              >
                <div
                  className="clip-shot"
                  style={{ backgroundImage: `url("${c.image}")` }}
                  aria-hidden="true"
                />
                <div className="clip-body">
                  <h3>
                    {c.kind} #{c.number}
                  </h3>
                  <ul>
                    {c.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                  {c.aside && (
                    <Scribble variant="marker" rotate={-2.2} className="clip-aside">
                      {c.aside}
                    </Scribble>
                  )}
                </div>
              </article>
            ))}
          </div>
          <div className="grow" />
          {reminder && (
            <Sticky rotate={-2.6} className="reminder">
              Toast the walnuts
              <br />
              5 min first. Changes everything.
            </Sticky>
          )}
        </div>
      </Sheet>
    );
  },
);

/* ─────────────────────── contraportada ─────────────────────── */

export const CoverBack = forwardRef<HTMLDivElement>(function CoverBack(_, ref) {
  return (
    <Sheet ref={ref} density="hard">
      <div
        className="inner reveal"
        style={{
          ...photo(
            "/images/cover-plate.webp",
            "linear-gradient(200deg, #fff8f0f5 0%, #ffeef4ee 50%, #f6eefbf5 100%)",
          ),
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          boxShadow:
            "inset 0 0 0 1px #e4c59a66, inset 0 0 0 7px #fdf6ee, inset 0 0 0 8px #e4c59a4d",
        }}
      >
        <div className="drip" style={{ width: "52%", marginBottom: 20 }} />
        <p className="script" style={{ fontSize: "clamp(36px, 5.4vw, 56px)" }}>
          Thank you
        </p>
        <p
          className="display"
          style={{
            letterSpacing: "0.3em",
            fontSize: 12,
            color: "var(--gold-deep)",
            margin: "13px 0 0 0.3em",
            fontWeight: 600,
          }}
        >
          CLAUDIA&apos;S RECIPES
        </p>
        <p className="hand" style={{ fontSize: 17, marginTop: 14 }}>
          made at home, slowly
        </p>
      </div>
    </Sheet>
  );
});

/* Las páginas decorativas del cuaderno ilustrado se mantienen como
   apertura del capítulo de dulces. */
export const WatercolorPage = forwardRef<HTMLDivElement>(function WatercolorPage(_, ref) {
  return (
    <Sheet ref={ref}>
      <div
        className="inner reveal"
        style={{
          ...photo(
            "/images/watercolor-kitchen.webp",
            "linear-gradient(95deg, #fdf6eef7 0%, #fdf6eec4 32%, #fdf6ee00 60%)",
          ),
        }}
      >
        <p className="eyebrow" style={{ color: "var(--wine)" }}>
          From the home notebook
        </p>
        <h2
          className="script"
          style={{ fontSize: "clamp(30px, 4.6vw, 50px)", margin: "8px 0 0" }}
        >
          Something
          <br />
          sweet
        </h2>
        <div className="drip" style={{ width: "56%", margin: "12px 0 0" }} />
      </div>
    </Sheet>
  );
});

export { MEAL_CARDS };
