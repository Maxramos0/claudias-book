import { MEALS_ES, RECIPES_ES } from "./recipes-es";
import type { MealCard, Recipe } from "./recipes";

export type Locale = "en" | "es";

export function localizeRecipe(recipe: Recipe, locale: Locale): Recipe {
  if (locale === "en") return recipe;
  const es = RECIPES_ES[recipe.id];
  if (!es) return recipe;

  return {
    ...recipe,
    title: es.title,
    meta: recipe.meta?.map((m, i) => ({
      ...m,
      label: es.meta?.[i]?.label ?? m.label,
      value: es.meta?.[i]?.value ?? m.value,
    })),
    ingredients: recipe.ingredients.map((g, i) => ({
      label: es.ingredients[i]?.label ?? g.label,
      items: es.ingredients[i]?.items ?? g.items,
    })),
    steps: es.steps,
    note: es.note ?? recipe.note,
    scribbles: recipe.scribbles?.map((s, i) => ({
      ...s,
      text: es.scribbles?.[i] ?? s.text,
    })),
  };
}

export function localizeMeal(card: MealCard, locale: Locale): MealCard {
  if (locale === "en") return card;
  const es = MEALS_ES[card.id];
  if (!es) return card;
  return {
    ...card,
    items: es.items,
    aside: es.aside ?? card.aside,
  };
}
