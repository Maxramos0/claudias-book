/**
 * Transcription of Claudia's notebook.
 * English is the source of truth; Spanish lives in recipes-es.ts.
 * Times are only those the recipe itself mentions.
 */

export type IngredientGroup = {
  /** Encabezado del bloque ("Sauce:", "Seasonings:"…). Sin él, es la lista principal. */
  label?: string;
  items: string[];
};

export type Recipe = {
  id: string;
  title: string;
  section: SectionId;
  /** Datos que la receta menciona explícitamente. Nunca inventados. */
  meta?: { label: string; value: string; icon: IconName }[];
  ingredients: IngredientGroup[];
  steps: string[];
  /** Yellow taped post-it. */
  note?: string;
  /** Ballpoint / marker asides, like the original notebook. */
  scribbles?: { text: string; variant?: "pen" | "marker"; rotate?: number }[];
};

export type IconName = "clock" | "oven" | "plate" | "pan" | "snow";

export type SectionId = "mains" | "soups" | "sauces" | "salads" | "sweets";

export const SECTIONS: {
  id: SectionId;
  title: string;
  kicker: string;
  blurb: string;
  accent: string;
}[] = [
  {
    id: "mains",
    title: "Mains",
    kicker: "Chapter one",
    blurb: "What goes on the table when you are really hungry.",
    accent: "var(--wine)",
  },
  {
    id: "soups",
    title: "Soups",
    kicker: "Chapter two",
    blurb: "Big pots, low heat, and patience.",
    accent: "var(--mauve)",
  },
  {
    id: "sauces",
    title: "Sauces",
    kicker: "Chapter three",
    blurb: "The thing that makes anything taste like something.",
    accent: "var(--plum)",
  },
  {
    id: "salads",
    title: "Salads",
    kicker: "Chapter four",
    blurb: "Fresh, with something a little sweet in there.",
    accent: "var(--mauve)",
  },
  {
    id: "sweets",
    title: "Sweets",
    kicker: "Chapter five",
    blurb: "The happy ending — and weekday snacks.",
    accent: "var(--wine)",
  },
];

export const RECIPES: Recipe[] = [
  /* ─────────────────────── platos fuertes ─────────────────────── */
  {
    id: "meatloaf",
    title: "Meatloaf",
    section: "mains",
    meta: [{ label: "Oven", value: "1 hour", icon: "oven" }],
    ingredients: [
      {
        items: [
          "1 kg ground beef",
          "1 egg",
          "2 potatoes",
          "2–3 carrots",
          "1 can cream of tomato",
          "Cracker crumbs, to taste",
          "Cheese, shredded, to taste",
        ],
      },
    ],
    steps: [
      "Season beef and mix with egg, crumbs.",
      "Grease casserole dish and spread half of beef on bottom.",
      "Spread cheese on top.",
      'Add remaining beef on top and "seal" shut.',
      "Chop vegetables and spread around.",
      "Pour over cream of tomato and bake for 1 hour.",
    ],
    scribbles: [{ text: "seal the edges!!", rotate: -4 }],
  },
  {
    id: "sweet-bbq-chicken",
    title: "Sweet BBQ Chicken",
    section: "mains",
    meta: [{ label: "Oven", value: "30–40 min", icon: "oven" }],
    ingredients: [
      {
        items: ["Chicken breasts", "1 onion", "2 bell peppers", "1 pack bacon"],
      },
      {
        label: "Sauce",
        items: [
          "½ liter pineapple juice",
          "1 small bottle BBQ sauce",
          "3–4 lemons",
          "¼ bottle Italian dressing",
        ],
      },
    ],
    steps: [
      "Chop chicken, bacon and vegetables and spread in casserole dish.",
      "Mix sauce and pour over.",
      "Bake for 30–40 min.",
    ],
    scribbles: [{ text: "sauce → over everything", rotate: 2.2 }],
  },
  {
    id: "chicken-fettucini-alfredo",
    title: "Chicken Fettuccine Alfredo",
    section: "mains",
    ingredients: [
      {
        items: [
          "Chicken breasts",
          "1 onion",
          "1 bag fettuccine noodles",
          "Parsley flakes, to taste",
        ],
      },
      {
        label: "Sauce",
        items: [
          "½ cup butter",
          "½ liter cream",
          "Pepper, to taste",
          "Garlic powder, to taste",
          "½ cup cheese, shredded",
        ],
      },
    ],
    steps: [
      "Chop chicken and onion and fry.",
      "Season to taste.",
      "Boil noodles, mix sauce and mix all together.",
    ],
  },
  {
    id: "pollo-mexicana",
    title: "Mexican Chicken",
    section: "mains",
    ingredients: [
      {
        items: [
          "Chicken breasts",
          "Pepper, to taste",
          "Garlic powder, to taste",
        ],
      },
      {
        label: "Sauce",
        items: [
          "1 cup cream",
          "1 can corn",
          "1 onion",
          "2 bell peppers",
          "½ tsp paprika",
          "½ tsp cayenne pepper",
          "½ tsp salt",
          "1 tsp chicken bouillon",
        ],
      },
    ],
    steps: [
      "Season chicken with pepper and garlic powder and set aside.",
      "Chop onion and bell peppers and sauté.",
      "Mix onion and peppers with rest of ingredients and bring to a boil.",
      "Fry chicken and pour sauce over.",
    ],
  },
  {
    id: "lasagna",
    title: "Lasagna",
    section: "mains",
    meta: [{ label: "Oven", value: "20–30 min", icon: "oven" }],
    ingredients: [
      {
        items: [
          "1 box lasagna noodles",
          "1 kg ground beef",
          "1 small box tomato sauce/puree",
        ],
      },
      {
        label: "Cheese mixture",
        items: [
          "1 liter cottage cheese",
          "½ cup parmesan cheese",
          "1 egg",
          "1 tbsp parsley flakes",
          "½ tsp pepper",
          "1 cup cheese, shredded",
        ],
      },
    ],
    steps: [
      "Mix beef with tomato sauce and season as desired, cook.",
      "Mix cheese mixture.",
      "Boil noodles and layer with beef and cheese.",
      "Top with additional cheese and bake for 20–30 min.",
    ],
  },
  {
    id: "tomato-shrimp",
    title: "Tomato Shrimp",
    section: "mains",
    ingredients: [
      {
        items: [
          "1 kg shrimp",
          "2 small boxes tomato sauce/puree",
          "1 liter tomato juice",
          "1 onion",
          "1 jalapeño",
          "1 bunch cilantro",
        ],
      },
    ],
    steps: [
      "Cook shrimp and set aside.",
      "Chop onion, jalapeño and cilantro and sauté.",
      "Mix all together and heat up.",
    ],
  },
  {
    id: "meatballs",
    title: "Meatballs",
    section: "mains",
    ingredients: [
      {
        items: [
          "1 kg ground beef",
          "½ cup bread crumbs",
          "½ cup milk",
          "2 tsp salt",
          "2 tsp pepper",
          "2 tsp soy sauce",
          "1 onion",
          "1 egg",
        ],
      },
    ],
    steps: ["Chop onion and mix all together.", "Form into balls and fry."],
  },
  {
    id: "poppy-seed-chicken",
    title: "Poppy Seed Chicken",
    section: "mains",
    meta: [{ label: "Oven", value: "20–30 min", icon: "oven" }],
    ingredients: [
      {
        items: [
          "Chicken breasts",
          "3 packs crackers",
          "1½ sticks butter",
          "Poppy seed, optional",
        ],
      },
      {
        label: "Sauce",
        items: [
          "2 cans cream of mushroom & chicken",
          "1 cup cream",
          "1 tsp vinegar",
          "1 can corn",
        ],
      },
    ],
    steps: [
      "Chop chicken and fry.",
      "Mix sauce ingredients.",
      "Melt butter and mix with crushed crackers.",
      "Layer in casserole dish: bottom — chicken, middle — sauce, top — crumbs.",
      "Add seeds on top and bake for 20–30 min.",
    ],
  },
  {
    id: "beer-batter-fish",
    title: "Beer Batter Fish",
    section: "mains",
    ingredients: [
      {
        items: [
          "Tilapia fillets",
          "2 cups flour",
          "1 tsp salt",
          "1 tsp pepper",
          "1 tbsp garlic powder",
          "1 tbsp paprika",
          "2 tsp seasoning salt",
          "1 egg",
          "1 can beer",
        ],
      },
    ],
    steps: [
      "Mix 1 cup flour with seasonings.",
      "Add in egg and beer.",
      "Coat fish in other cup of flour, dip in batter and fry.",
    ],
  },
  {
    id: "tropical-shrimp",
    title: "Tropical Shrimp",
    section: "mains",
    ingredients: [
      {
        items: [
          "1 pack shrimp",
          "1 red onion",
          "1 cup lemon juice",
          "Salt, to taste",
          "Pepper, to taste",
          "3 mangos",
          "2 cucumbers",
          "2 cups tomato juice",
          "Worcestershire sauce, to taste",
          "Maggi seasoning, to taste",
        ],
      },
    ],
    steps: ["Cook shrimp.", "Chop vegetables and mix all together."],
  },
  {
    id: "shepherds-pie",
    title: "Shepherd's Pie",
    section: "mains",
    meta: [{ label: "Oven", value: "20–30 min", icon: "oven" }],
    ingredients: [
      {
        items: [
          "1 kg ground beef",
          "½ onion",
          "2 carrots",
          "1 can peas",
          "1 can beef broth",
          "1 small box tomato puree",
          "3 potatoes",
          "Milk, to taste",
          "Butter, to taste",
        ],
      },
    ],
    steps: [
      "Chop vegetables and cook beef.",
      "Mix with peas, broth and puree.",
      "Cook potatoes and mash with milk and butter.",
      "Spread beef on bottom of casserole dish, top with potatoes and bake for 20–30 min.",
    ],
    note: "Add shredded cheese if desired.",
    scribbles: [{ text: "cheese on top if you want", rotate: -3.1 }],
  },

  /* ─────────────────────────── sopas ─────────────────────────── */
  {
    id: "sopa-toscana",
    title: "Tuscan Soup",
    section: "soups",
    ingredients: [
      {
        items: [
          "10 cups water",
          "4 potatoes",
          "1 sausage",
          "1 pack bacon",
          "2 cloves garlic",
          '2 packs Goya chicken seasoning',
          "2 cups cream",
          "1 onion",
          "1 bunch spinach",
        ],
      },
      {
        label: "Seasonings",
        items: [
          "3 tbsp chicken bouillon",
          "8 bay leaves",
          "3 star anise",
          "10 peppercorns",
          "2 cinnamon sticks",
          "2 tbsp parsley flakes",
          "2 cloves",
        ],
      },
    ],
    steps: [
      "Chop potatoes and sausage and mix with water.",
      "Chop onion and bacon, sauté and add to water.",
      "Add seasonings and bring to a boil.",
    ],
  },
  {
    id: "tortilla-soup",
    title: "Tortilla Soup",
    section: "soups",
    ingredients: [
      {
        items: [
          "Chicken breasts",
          "3 liters water",
          "1 liter tomato juice",
          "2 cans corn",
          "2 tomatoes",
          "3 jalapeños",
          "1 onion",
          "2 cloves garlic",
        ],
      },
      {
        label: "Seasonings",
        items: [
          "3 bay leaves",
          "1 tsp cumin",
          "1 tsp salt",
          "1 tsp chili powder",
          "2 tsp chicken bouillon",
          "2 tsp tomato bouillon",
        ],
      },
    ],
    steps: [
      "Chop chicken and add to water.",
      "Add tomato juice, corn and tomatoes.",
      "Chop onion, jalapeños and garlic and sauté.",
      "Add spices and mix all together.",
    ],
  },

  /* ────────────────────────── salsas ────────────────────────── */
  {
    id: "garlic-butter-sauce",
    title: "Garlic Butter Sauce",
    section: "sauces",
    ingredients: [
      {
        items: [
          "4 tbsp butter, melted",
          "4 cloves garlic",
          "½ lemon",
          "1 tbsp parsley flakes",
          "½ tsp paprika",
          "1 tbsp parmesan cheese",
        ],
      },
    ],
    steps: ["Mix all together and serve over chicken or fish."],
    scribbles: [{ text: "fish too →", variant: "marker", rotate: 3.4 }],
  },
  {
    id: "jalapeno-salsa",
    title: "Jalapeño Salsa",
    section: "sauces",
    ingredients: [
      {
        items: [
          "6 jalapeños",
          "1 bunch cilantro",
          "2 onions",
          "½ liter cream",
          "¾ cup mayonnaise",
          "Salt, to taste",
          "Garlic powder, to taste",
        ],
      },
    ],
    steps: [
      "Chop onions, 4 jalapeños without seeds and 2 with seeds and sauté.",
      "Add remaining ingredients to a blender.",
      "Mix all together and heat up once on stove.",
    ],
  },
  {
    id: "avacado-cream-sauce",
    title: "Avocado Cream Sauce",
    section: "sauces",
    ingredients: [
      {
        items: [
          "1 avocado",
          "1 bunch cilantro",
          "1 jalapeño",
          "2 cloves garlic",
          "2–3 lemons",
          "1 cup plain yogurt",
          "3 tbsp vegetable oil",
          "3 tbsp water",
          "Salt, to taste",
        ],
      },
    ],
    steps: ["Remove seeds from jalapeño and blend all together."],
  },
  {
    id: "honey-garlic-sauce",
    title: "Honey Garlic Sauce",
    section: "sauces",
    ingredients: [
      {
        items: [
          "¾ cup honey",
          "3 tbsp soy sauce",
          "½ tsp ground ginger",
          "3 cloves garlic",
          "½ tsp chili flakes",
          "⅓ cup water",
          "2 tbsp corn starch",
        ],
      },
    ],
    steps: ["Mix all together and heat up."],
    scribbles: [{ text: "thickens as it cools", rotate: -2.8 }],
  },

  /* ───────────────────────── ensaladas ───────────────────────── */
  {
    id: "strawberry-salad",
    title: "Strawberry Salad",
    section: "salads",
    ingredients: [
      {
        items: [
          "2 bunches romaine lettuce",
          "1 box strawberries",
          "½ cup almonds",
          "¼ red onion",
          "1 tbsp chia / poppy seeds",
        ],
      },
      {
        label: "Sauce",
        items: ["2 tbsp vinegar", "⅓ cup sugar", "½ cup mayonnaise"],
      },
    ],
    steps: ["Mix salad ingredients together.", "Mix sauce and pour over."],
  },
  {
    id: "chicken-bacon-salad",
    title: 'Chicken & Bacon "Salad"',
    section: "salads",
    ingredients: [
      {
        items: [
          "Chicken breasts",
          "1 pack bacon",
          "1 cup sour cream",
          "1 cup cheese, shredded",
          "3 tbsp mayonnaise",
          "1 cup cream",
          "Salt, to taste",
          "Pepper, to taste",
        ],
      },
    ],
    steps: [
      "Chop chicken & bacon and fry.",
      "Mix all together with remaining ingredients.",
    ],
  },

  /* ─────────────────────────── dulces ─────────────────────────── */
  {
    id: "banana-bread",
    title: "Banana Bread",
    section: "sweets",
    meta: [{ label: "Oven", value: "1 hour", icon: "oven" }],
    ingredients: [
      {
        items: [
          "¼ cup butter",
          "2 eggs",
          "1 cup sugar",
          "1½ cups flour",
          "1 tsp baking soda",
          "4 bananas",
          "1 tsp salt",
        ],
      },
    ],
    steps: ["Melt butter, mix all together and bake for 1 hour."],
    scribbles: [{ text: "ripe bananas!!", variant: "marker", rotate: -5 }],
  },
  {
    id: "mini-waffles",
    title: "Mini Waffles",
    section: "sweets",
    meta: [{ label: "Yield", value: "≈ 8 waffles", icon: "plate" }],
    ingredients: [
      {
        items: [
          "1 cup flour",
          "1 tbsp sugar",
          "2 tsp baking powder",
          "¼ tsp salt",
          "1 egg",
          "1 cup milk",
          "2 tbsp vegetable oil",
        ],
      },
    ],
    steps: ["Mix all together."],
    note: "Makes approx. 8 waffles.",
    scribbles: [{ text: "don't overmix", rotate: 1.8 }],
  },
  {
    id: "carrot-cake",
    title: "Carrot Cake",
    section: "sweets",
    meta: [{ label: "Oven", value: "1 hour", icon: "oven" }],
    ingredients: [
      {
        items: [
          "4 cups carrots, shredded",
          "1½ cups vegetable oil",
          "1 can pineapple cubes",
          "2 cups sugar",
          "3 cups flour",
          "4 eggs",
          "1 tsp baking soda",
          "1 tsp cinnamon",
          "¼ tsp salt",
        ],
      },
    ],
    steps: ["Mix all together and bake for 1 hour."],
  },
  {
    id: "chocolate-cones",
    title: "Chocolate Cones",
    section: "sweets",
    ingredients: [
      {
        items: [
          "1 cup milk",
          "1 cup butter",
          "2 cups sugar",
          "½ cup cocoa",
          "½ tsp salt",
          "2 cups flour",
          "1 tsp vanilla",
          "Ice cream cones",
        ],
      },
    ],
    steps: [
      "Melt butter, mix all together and bring to a boil.",
      "Pour into cones and let settle.",
    ],
  },
  {
    id: "pancakes",
    title: "Pancakes",
    section: "sweets",
    meta: [{ label: "Yield", value: "≈ 10 pancakes", icon: "plate" }],
    ingredients: [
      {
        items: [
          "1¼ cups flour",
          "1 tbsp sugar",
          "¼ tsp cinnamon",
          "1 tbsp baking powder",
          "¼ tsp salt",
          "2 eggs",
          "1 cup milk",
          "4 tbsp butter",
          "1 tsp vanilla",
          "⅓ cup chocolate chips, optional",
        ],
      },
    ],
    steps: ["Melt butter and mix all together."],
    note: "Makes approx. 10 pancakes.",
    scribbles: [{ text: "to taste — chips optional", rotate: -2.6 }],
  },
  {
    id: "date-squares",
    title: "Date Squares",
    section: "sweets",
    meta: [
      { label: "Oven", value: "1 hour", icon: "oven" },
      { label: "Chill", value: "4 hours", icon: "snow" },
    ],
    ingredients: [
      {
        label: "Crisp",
        items: [
          "4 cups oats",
          "2 cups flour",
          "1½ cups brown sugar",
          "1 tsp baking powder",
          "1½ cups butter",
        ],
      },
      {
        label: "Filling",
        items: [
          "4 cups dates, chopped",
          "2 cups water",
          "7 lemons",
          "5 tsp brown sugar",
          "1 tsp baking soda",
        ],
      },
    ],
    steps: [
      "Melt butter and mix crisp ingredients together; spread half on bottom of casserole dish.",
      "Mix filling ingredients, bring to a boil, spread on top of crisp and cover with remaining crisp.",
      "Bake for 1 hour and cool for 4 hours.",
    ],
  },
  {
    id: "chocolate-chip-cookies",
    title: "Chocolate Chip Cookies",
    section: "sweets",
    meta: [{ label: "Oven", value: "8–10 min", icon: "oven" }],
    ingredients: [
      {
        items: [
          "2 eggs",
          "1 cup butter",
          "1 cup brown sugar",
          "½ cup sugar",
          "1 cup chocolate chips",
          "1 tsp vanilla",
          "1 tsp baking soda",
          "1 tsp salt",
          "2¼ cups flour",
        ],
      },
    ],
    steps: ["Melt butter and mix all together.", "Bake each batch for 8–10 min."],
  },
];

/* ───────────────────── tarjetas de menú ───────────────────── */

export type MealCard = {
  id: string;
  kind: "Breakfast" | "Lunch" | "Supper";
  number: number;
  items: string[];
  tone: "amber" | "lime" | "sky";
  image: string;
  /** Optional marker note written on the card. */
  aside?: string;
};

export const MEAL_CARDS: MealCard[] = [
  {
    id: "breakfast-1",
    kind: "Breakfast",
    number: 1,
    tone: "amber",
    image: "/images/menu-breakfast.png",
    items: [
      "Egg sandwich with 1 strip bacon",
      "1 tsp mayonnaise",
      "Fruit — 1 banana, 1 handful melon, 1 handful papaya",
      "1 small bowl yogurt with honey, granola, sugar",
    ],
  },
  {
    id: "breakfast-2",
    kind: "Breakfast",
    number: 2,
    tone: "amber",
    image: "/images/menu-breakfast.png",
    items: [
      "Sandwich with steak, chicken, tuna or ham",
      "1 tsp mayonnaise",
      "½ avocado",
      "Small side of mushrooms",
      "Fruit same as #1",
    ],
  },
  {
    id: "lunch-1",
    kind: "Lunch",
    number: 1,
    tone: "lime",
    image: "/images/menu-lunch.png",
    aside:
      "Remember this isn't a diet, Macaroni — it's just eating a little healthier.",
    items: [
      "1 handful beef, fried in vegetable oil",
      "1 cup steamed veggies",
      "1½ cup beans",
      "½ avocado",
      "3 corn tortillas",
    ],
  },
  {
    id: "lunch-2",
    kind: "Lunch",
    number: 2,
    tone: "lime",
    image: "/images/menu-lunch.png",
    items: [
      "1½ fillets of fish, fried in vegetable oil",
      "1 cup of broccoli",
      "1 cup of other veggie",
      "½ avocado",
      "¼ cup rice",
    ],
  },
  {
    id: "lunch-3",
    kind: "Lunch",
    number: 3,
    tone: "lime",
    image: "/images/menu-lunch.png",
    items: [
      "1 handful chicken, fried in vegetable oil",
      "1 cup steamed veggies",
      "½ potato, fried in vegetable oil",
      "½ bell pepper, fried in vegetable oil",
      "½ avocado",
      "2 corn tortillas",
    ],
  },
  {
    id: "supper-1",
    kind: "Supper",
    number: 1,
    tone: "sky",
    image: "/images/menu-supper.png",
    items: [
      "1 handful chicken, cooked & shredded",
      "3 tostadas",
      "3 tbsp cream (1 per tostada)",
      "Salsa (optional)",
      "Lettuce",
    ],
  },
  {
    id: "supper-2",
    kind: "Supper",
    number: 2,
    tone: "sky",
    image: "/images/menu-supper.png",
    items: [
      "2 pork fillets",
      "1 handful of panela cheese",
      "2 corn tortillas",
      "½ avocado",
      "Lettuce & cucumber salad",
      "Vinaigrette or olive oil (optional)",
      "½ apple",
    ],
  },
];

export const recipesBySection = (id: SectionId) =>
  RECIPES.filter((r) => r.section === id);
