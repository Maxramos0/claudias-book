"use client";

import { forwardRef, type CSSProperties, type ReactNode } from "react";
import { Icon } from "./Icons";
import { Scribble, Sticky } from "./Notes";
import { PAGE_OF } from "@/data/book";
import { localizeMeal, localizeRecipe } from "@/data/localize";
import { useLocale } from "@/lib/locale";
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
  const { t } = useLocale();
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
          {t.coverKicker}
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
          {t.recipesWord}
        </p>

        <div className="drip" style={{ width: "62%", marginTop: 24 }} />

        <p className="hand" style={{ fontSize: 18, marginTop: 20, color: "var(--wine)" }}>
          {t.recipesCount(RECIPES.length)}
        </p>
      </div>
    </Sheet>
  );
});

/* ─────────────────────────── guardas ─────────────────────────── */

export const Endpaper = forwardRef<HTMLDivElement>(function Endpaper(_, ref) {
  const { t } = useLocale();
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
          {t.endpaperTitle}
        </p>
        <p className="body" style={{ maxWidth: "30ch" }}>
          {t.endpaperBody}
        </p>
        <div className="drip" style={{ width: "44%", marginTop: 4 }} />
      </div>
    </Sheet>
  );
});

export const Dedication = forwardRef<HTMLDivElement>(function Dedication(_, ref) {
  const { t } = useLocale();
  return (
    <Sheet ref={ref} className="paper">
      <div className="inner reveal dedication">
        <p className="eyebrow">{t.dedicationEyebrow}</p>
        <h2
          className="script"
          style={{ fontSize: "clamp(32px, 4.6vw, 48px)", margin: "8px 0 14px" }}
        >
          {t.dedicationTitle}
        </h2>
        <div className="drip" style={{ width: "58%", marginBottom: 18 }} />
        <p className="dedication-text">{t.dedication}</p>
        <div className="grow" />
        <Sticky rotate={-2.2}>{t.withAllMyLove}</Sticky>
      </div>
    </Sheet>
  );
});

/* ─────────────────────────── índice ─────────────────────────── */

export const Contents = forwardRef<HTMLDivElement, { half: 0 | 1 }>(
  function Contents({ half }, ref) {
    const { locale, t } = useLocale();
    const groups = half === 0 ? SECTIONS.slice(0, 2) : SECTIONS.slice(2);

    const numbered = SECTIONS.map((s) => ({
      s,
      list: recipesBySection(s.id).map((r) => ({
        r: localizeRecipe(r, locale),
        n: PAGE_OF[r.id],
      })),
    }));

    return (
      <Sheet ref={ref} className="paper">
        <div className="inner reveal">
          {half === 0 ? (
            <>
              <p className="eyebrow">{t.contents}</p>
              <h2
                className="display"
                style={{ fontSize: "var(--t-h3)", margin: "6px 0 9px" }}
              >
                {t.whatsInside}
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
                    <b>{t.sections[s.id].title}</b>
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
              {t.weeklyMenusNote}
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
    const { t } = useLocale();
    const s = t.sections[id];
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
            {count} {count === 1 ? t.recipe : t.recipes}
          </p>
        </div>
      </Sheet>
    );
  },
);

/* ──────────────────── página de receta ──────────────────── */

export const RecipePage = forwardRef<HTMLDivElement, { recipe: Recipe; pageNo: number }>(
  function RecipePage({ recipe, pageNo }, ref) {
    const { locale, t } = useLocale();
    const r = localizeRecipe(recipe, locale);
    const tone = TAB_TONE[recipe.section];

    return (
      <Sheet ref={ref} className="paper">
        <span className={`tab-label ${tone}`}>{t.sections[recipe.section].title}</span>

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
            {r.title}
          </h2>

          {r.meta && (
            <div className="meta-row sep">
              {r.meta.map((m) => (
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
            {r.ingredients.map((g, i) => (
              <div className="ing-group" key={g.label ?? i}>
                {g.label ? (
                  <p className="ing-label">{g.label}</p>
                ) : (
                  <p className="ing-label">{t.ingredients}</p>
                )}
                <IngredientItems items={g.items} cols={g.items.length > 3} />
              </div>
            ))}
          </div>

          <p className="fleuron sep">✦</p>

          <ol className="steps">
            {r.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>

          {r.note && (
            <>
              <div className="grow" />
              <Sticky>{r.note}</Sticky>
            </>
          )}

          {r.scribbles?.map((s, i) => (
            <Scribble
              key={`${s.text}-${i}`}
              variant={s.variant}
              rotate={s.rotate}
              className="scribble-float"
            >
              {s.text}
            </Scribble>
          ))}

          {!r.note && <div className="grow" />}
        </div>

        <span className="page-no">{pageNo}</span>
      </Sheet>
    );
  },
);

/* ──────────────────── separador de menús ──────────────────── */

export const MenuDivider = forwardRef<HTMLDivElement>(function MenuDivider(_, ref) {
  const { t } = useLocale();
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
            {t.macaroni}
          </Scribble>
        </article>
        <div className="menu-open-copy">
          <p className="eyebrow gold" style={{ letterSpacing: "0.4em" }}>
            {t.chapterSix}
          </p>
          <h2
            className="display shimmer"
            style={{ fontSize: "var(--t-h2)", margin: "8px 0 0" }}
          >
            {t.weeklyMenus}
          </h2>
          <p className="body" style={{ color: "#dfb6b2cc", marginTop: 8, maxWidth: "26ch" }}>
            {t.menusBlurb}
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
    const { locale, t } = useLocale();
    return (
      <Sheet ref={ref} className="paper">
        <div className="inner reveal menu-page">
          <p className="eyebrow">{t.thisWeek}</p>
          <div className="menu-board">
            {cards.map((raw, i) => {
              const c = localizeMeal(raw, locale);
              return (
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
                    {t.mealKind[c.kind]} #{c.number}
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
              );
            })}
          </div>
          <div className="grow" />
          {reminder && (
            <Sticky rotate={-2.6} className="reminder">
              {t.walnutLine1}
              <br />
              {t.walnutLine2}
            </Sticky>
          )}
        </div>
      </Sheet>
    );
  },
);

/* ─────────────────────── contraportada ─────────────────────── */

export const CoverBack = forwardRef<HTMLDivElement>(function CoverBack(_, ref) {
  const { t } = useLocale();
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
          {t.thankYou}
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
          {t.madeAtHome}
        </p>
      </div>
    </Sheet>
  );
});

/* Las páginas decorativas del cuaderno ilustrado se mantienen como
   apertura del capítulo de dulces. */
export const WatercolorPage = forwardRef<HTMLDivElement>(function WatercolorPage(_, ref) {
  const { t } = useLocale();
  const [sweetA, sweetB] = t.somethingSweet.split("\n");
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
          {t.fromNotebook}
        </p>
        <h2
          className="script"
          style={{ fontSize: "clamp(30px, 4.6vw, 50px)", margin: "8px 0 0" }}
        >
          {sweetA}
          <br />
          {sweetB}
        </h2>
        <div className="drip" style={{ width: "56%", margin: "12px 0 0" }} />
      </div>
    </Sheet>
  );
});

export { MEAL_CARDS };
