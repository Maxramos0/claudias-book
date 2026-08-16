import { COPY } from "./copy";
import { localizeMeal, localizeRecipe, type Locale } from "./localize";
import {
  MEAL_CARDS,
  SECTIONS,
  recipesBySection,
  type MealCard,
  type Recipe,
  type SectionId,
} from "./recipes";

export type PageDesc =
  | { kind: "cover-front" }
  | { kind: "endpaper" }
  | { kind: "dedication" }
  | { kind: "watercolor" }
  | { kind: "contents"; half: 0 | 1 }
  | { kind: "divider"; section: SectionId; index: number }
  | { kind: "recipe"; recipe: Recipe }
  | { kind: "menu-divider" }
  | { kind: "meal-cards"; cards: MealCard[]; reminder?: boolean }
  | { kind: "cover-back" };

/** Agrupa de dos en dos para las páginas de fichas. */
function chunk<T>(list: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

function build(): PageDesc[] {
  const pages: PageDesc[] = [
    { kind: "cover-front" },
    { kind: "endpaper" },
    { kind: "dedication" },
    { kind: "watercolor" },
    // El índice ocupa las posiciones 3 y 4: con showCover eso las deja
    // enfrentadas en la misma apertura.
    { kind: "contents", half: 0 },
    { kind: "contents", half: 1 },
  ];

  SECTIONS.forEach((s, index) => {
    pages.push({ kind: "divider", section: s.id, index });
    for (const recipe of recipesBySection(s.id)) {
      pages.push({ kind: "recipe", recipe });
    }
  });

  pages.push({ kind: "menu-divider" });
  const menus = chunk(MEAL_CARDS, 2);
  menus.forEach((cards, i) => {
    pages.push({
      kind: "meal-cards",
      cards,
      reminder: i === menus.length - 1,
    });
  });
  pages.push({ kind: "cover-back" });

  return pages;
}

export const PAGES: PageDesc[] = build();

/** Índice real de cada receta dentro del libro, para el sumario y el folio. */
export const PAGE_OF: Record<string, number> = Object.fromEntries(
  PAGES.flatMap((p, i) => (p.kind === "recipe" ? [[p.recipe.id, i + 1]] : [])),
);

export function labelFor(
  p: PageDesc,
  locale: Locale = "en",
): { title: string; section: string } {
  const t = COPY[locale];
  switch (p.kind) {
    case "cover-front":
      return { title: "Claudia's Recipes", section: t.cover };
    case "endpaper":
      return { title: t.endpaperTitle, section: t.opening };
    case "dedication":
      return { title: t.dedicationTitle, section: t.dedicationSec };
    case "watercolor":
      return { title: t.somethingSweet.replace("\n", " "), section: t.opening };
    case "contents":
      return { title: t.whatsInside, section: `${t.contents} ${p.half + 1}/2` };
    case "divider": {
      const s = t.sections[p.section];
      return { title: s.title, section: s.kicker };
    }
    case "recipe": {
      const r = localizeRecipe(p.recipe, locale);
      return { title: r.title, section: t.sections[r.section].title };
    }
    case "menu-divider":
      return { title: t.weeklyMenus, section: t.chapterSix };
    case "meal-cards":
      return {
        title: p.cards
          .map((c) => `${t.mealKind[localizeMeal(c, locale).kind]} #${c.number}`)
          .join(" · "),
        section: t.menus,
      };
    case "cover-back":
      return { title: t.thankYou, section: t.theEnd };
  }
}

/** Primer índice de página de cada capítulo, para los saltos rápidos. */
export const CHAPTER_JUMPS: { id: string; label: string; page: number }[] = [
  { id: "toc", label: "Contents", page: PAGES.findIndex((p) => p.kind === "contents") },
  ...SECTIONS.map((s) => ({
    id: s.id,
    label: s.title,
    page: PAGES.findIndex((p) => p.kind === "divider" && p.section === s.id),
  })),
  {
    id: "menus",
    label: "Menus",
    page: PAGES.findIndex((p) => p.kind === "menu-divider"),
  },
];
