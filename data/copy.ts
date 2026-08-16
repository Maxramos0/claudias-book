import type { SectionId } from "./recipes";

export type Copy = {
  openingBook: string;
  coverKicker: string;
  recipesWord: string;
  recipesCount: (n: number) => string;
  endpaperTitle: string;
  endpaperBody: string;
  dedicationEyebrow: string;
  dedicationTitle: string;
  dedication: string;
  withAllMyLove: string;
  contents: string;
  whatsInside: string;
  weeklyMenusNote: string;
  ingredients: string;
  chapterSix: string;
  weeklyMenus: string;
  menusBlurb: string;
  thisWeek: string;
  macaroni: string;
  walnutLine1: string;
  walnutLine2: string;
  thankYou: string;
  madeAtHome: string;
  fromNotebook: string;
  somethingSweet: string;
  dragCorner: string;
  swipePage: string;
  prev: string;
  next: string;
  jump: string;
  chapter: string;
  cover: string;
  opening: string;
  dedicationSec: string;
  theEnd: string;
  menus: string;
  recipe: string;
  recipes: string;
  langLabel: string;
  nav: string;
  sections: Record<
    SectionId,
    { title: string; kicker: string; blurb: string }
  >;
  jumps: { toc: string; menus: string };
  mealKind: { Breakfast: string; Lunch: string; Supper: string };
};

export const COPY: Record<"en" | "es", Copy> = {
  en: {
    openingBook: "Opening the book",
    coverKicker: "A book from home",
    recipesWord: "RECIPES",
    recipesCount: (n) => `${n} recipes, copied by hand`,
    endpaperTitle: "For the kitchen",
    endpaperBody:
      "Copied from the notebook as they were written — flour stains and all.",
    dedicationEyebrow: "For Claudia",
    dedicationTitle: "A little gift",
    dedication:
      "Thank you for filling my days with love, unforgettable moments, and so many reasons to smile. This little gift was made with the same love with which you fill my life. I hope you enjoy every recipe as much as I enjoy sharing this life with you.",
    withAllMyLove: "with all my love",
    contents: "Contents",
    whatsInside: "What's inside",
    weeklyMenusNote: "…and at the back, the weekly menus.",
    ingredients: "Ingredients",
    chapterSix: "Chapter six",
    weeklyMenus: "Weekly menus",
    menusBlurb: "Pinned to the fridge — not a photocopy of the clipboard.",
    thisWeek: "This week",
    macaroni:
      "Remember this isn't a diet, Macaroni — it's just eating a little healthier.",
    walnutLine1: "Toast the walnuts",
    walnutLine2: "5 min first. Changes everything.",
    thankYou: "Thank you",
    madeAtHome: "made at home, slowly",
    fromNotebook: "From the home notebook",
    somethingSweet: "Something\nsweet",
    dragCorner: "drag the corner",
    swipePage: "swipe the page",
    prev: "Previous page",
    next: "Next page",
    jump: "Jump to chapter",
    chapter: "Chapter",
    cover: "Cover",
    opening: "Opening",
    dedicationSec: "Dedication",
    theEnd: "The end",
    menus: "Menus",
    recipe: "recipe",
    recipes: "recipes",
    langLabel: "Language",
    nav: "Book navigation",
    sections: {
      mains: {
        title: "Mains",
        kicker: "Chapter one",
        blurb: "What goes on the table when you are really hungry.",
      },
      soups: {
        title: "Soups",
        kicker: "Chapter two",
        blurb: "Big pots, low heat, and patience.",
      },
      sauces: {
        title: "Sauces",
        kicker: "Chapter three",
        blurb: "The thing that makes anything taste like something.",
      },
      salads: {
        title: "Salads",
        kicker: "Chapter four",
        blurb: "Fresh, with something a little sweet in there.",
      },
      sweets: {
        title: "Sweets",
        kicker: "Chapter five",
        blurb: "The happy ending — and weekday snacks.",
      },
    },
    jumps: { toc: "Contents", menus: "Menus" },
    mealKind: { Breakfast: "Breakfast", Lunch: "Lunch", Supper: "Supper" },
  },
  es: {
    openingBook: "Abriendo el libro",
    coverKicker: "Un libro de casa",
    recipesWord: "RECETAS",
    recipesCount: (n) => `${n} recetas, copiadas a mano`,
    endpaperTitle: "Para la cocina",
    endpaperBody:
      "Copiado del cuaderno tal como estaba escrito — manchas de harina y todo.",
    dedicationEyebrow: "Para Claudia",
    dedicationTitle: "Un pequeño regalo",
    dedication:
      "Gracias por llenar mis días de amor, momentos inolvidables y tantas razones para sonreír. Este pequeño regalo se hizo con el mismo amor con el que tú llenas mi vida. Espero que disfrutes cada receta tanto como yo disfruto compartir esta vida contigo.",
    withAllMyLove: "con todo mi amor",
    contents: "Índice",
    whatsInside: "Qué hay dentro",
    weeklyMenusNote: "…y al final, los menús de la semana.",
    ingredients: "Ingredientes",
    chapterSix: "Capítulo seis",
    weeklyMenus: "Menús semanales",
    menusBlurb: "Pegado en el refrigerador — no es una fotocopia de la tabla.",
    thisWeek: "Esta semana",
    macaroni:
      "Recuerda que esto no es una dieta, Macaroni — es solo comer un poco más sano.",
    walnutLine1: "Tuesta las nueces",
    walnutLine2: "5 min primero. Cambia todo.",
    thankYou: "Gracias",
    madeAtHome: "hecho en casa, con calma",
    fromNotebook: "Del cuaderno de casa",
    somethingSweet: "Algo\ndulce",
    dragCorner: "arrastra la esquina",
    swipePage: "desliza la hoja",
    prev: "Página anterior",
    next: "Página siguiente",
    jump: "Saltar a capítulo",
    chapter: "Capítulo",
    cover: "Portada",
    opening: "Apertura",
    dedicationSec: "Dedicatoria",
    theEnd: "El final",
    menus: "Menús",
    recipe: "receta",
    recipes: "recetas",
    langLabel: "Idioma",
    nav: "Navegación del libro",
    sections: {
      mains: {
        title: "Platos fuertes",
        kicker: "Capítulo uno",
        blurb: "Lo que llega a la mesa cuando de verdad hay hambre.",
      },
      soups: {
        title: "Sopas",
        kicker: "Capítulo dos",
        blurb: "Ollas grandes, fuego bajo y paciencia.",
      },
      sauces: {
        title: "Salsas",
        kicker: "Capítulo tres",
        blurb: "Lo que hace que cualquier cosa sepa a algo.",
      },
      salads: {
        title: "Ensaladas",
        kicker: "Capítulo cuatro",
        blurb: "Frescas, con un toque dulce.",
      },
      sweets: {
        title: "Dulces",
        kicker: "Capítulo cinco",
        blurb: "El final feliz — y los antojos entre semana.",
      },
    },
    jumps: { toc: "Índice", menus: "Menús" },
    mealKind: { Breakfast: "Desayuno", Lunch: "Comida", Supper: "Cena" },
  },
};
