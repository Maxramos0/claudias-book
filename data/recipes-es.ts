/** Overlay en español. Las recetas base viven en inglés en recipes.ts. */

export type RecipeEs = {
  title: string;
  meta?: { label: string; value: string }[];
  ingredients: { label?: string; items: string[] }[];
  steps: string[];
  note?: string;
  scribbles?: string[];
};

export type MealEs = {
  items: string[];
  aside?: string;
};

export const RECIPES_ES: Record<string, RecipeEs> = {
  meatloaf: {
    title: "Pastel de carne",
    meta: [{ label: "Horno", value: "1 hora" }],
    ingredients: [
      {
        items: [
          "1 kg de carne molida",
          "1 huevo",
          "2 papas",
          "2–3 zanahorias",
          "1 lata de crema de tomate",
          "Migas de galleta, al gusto",
          "Queso rallado, al gusto",
        ],
      },
    ],
    steps: [
      "Sazona la carne y mézclala con el huevo y las migas.",
      "Engrasa un refractario y extiende la mitad de la carne en el fondo.",
      "Extiende el queso encima.",
      "Agrega el resto de la carne arriba y «sella» los bordes.",
      "Pica las verduras y colócalas alrededor.",
      "Vierte la crema de tomate y hornea 1 hora.",
    ],
    scribbles: ["¡cierra los bordes!!"],
  },
  "sweet-bbq-chicken": {
    title: "Pollo BBQ dulce",
    meta: [{ label: "Horno", value: "30–40 min" }],
    ingredients: [
      {
        items: ["Pechugas de pollo", "1 cebolla", "2 pimientos", "1 paquete de tocino"],
      },
      {
        label: "Salsa",
        items: [
          "½ litro de jugo de piña",
          "1 botella pequeña de salsa BBQ",
          "3–4 limones",
          "¼ de botella de aderezo italiano",
        ],
      },
    ],
    steps: [
      "Pica el pollo, el tocino y las verduras y colócalos en un refractario.",
      "Mezcla la salsa y vierte encima.",
      "Hornea 30–40 min.",
    ],
    scribbles: ["salsa → sobre todo"],
  },
  "chicken-fettucini-alfredo": {
    title: "Fetuccini Alfredo con pollo",
    ingredients: [
      {
        items: [
          "Pechugas de pollo",
          "1 cebolla",
          "1 bolsa de fetuccini",
          "Perejil en hojuelas, al gusto",
        ],
      },
      {
        label: "Salsa",
        items: [
          "½ taza de mantequilla",
          "½ litro de crema",
          "Pimienta, al gusto",
          "Ajo en polvo, al gusto",
          "½ taza de queso rallado",
        ],
      },
    ],
    steps: [
      "Pica el pollo y la cebolla y fríe.",
      "Sazona al gusto.",
      "Cuece la pasta, mezcla la salsa y junta todo.",
    ],
  },
  "pollo-mexicana": {
    title: "Pollo a la mexicana",
    ingredients: [
      {
        items: [
          "Pechugas de pollo",
          "Pimienta, al gusto",
          "Ajo en polvo, al gusto",
        ],
      },
      {
        label: "Salsa",
        items: [
          "1 taza de crema",
          "1 lata de elote",
          "1 cebolla",
          "2 pimientos",
          "½ cdita de paprika",
          "½ cdita de pimienta de Cayena",
          "½ cdita de sal",
          "1 cdita de consomé de pollo",
        ],
      },
    ],
    steps: [
      "Sazona el pollo con pimienta y ajo en polvo y reserva.",
      "Pica la cebolla y los pimientos y sofríe.",
      "Mezcla la cebolla y los pimientos con el resto de ingredientes y lleva a hervor.",
      "Fríe el pollo y vierte la salsa encima.",
    ],
  },
  lasagna: {
    title: "Lasaña",
    meta: [{ label: "Horno", value: "20–30 min" }],
    ingredients: [
      {
        items: [
          "1 caja de láminas de lasaña",
          "1 kg de carne molida",
          "1 cajita de salsa / puré de tomate",
        ],
      },
      {
        label: "Mezcla de queso",
        items: [
          "1 litro de requesón",
          "½ taza de queso parmesano",
          "1 huevo",
          "1 cda de perejil en hojuelas",
          "½ cdita de pimienta",
          "1 taza de queso rallado",
        ],
      },
    ],
    steps: [
      "Mezcla la carne con la salsa de tomate, sazona y cocina.",
      "Prepara la mezcla de queso.",
      "Cuece las láminas y arma capas con carne y queso.",
      "Cubre con más queso y hornea 20–30 min.",
    ],
  },
  "tomato-shrimp": {
    title: "Camarones en tomate",
    ingredients: [
      {
        items: [
          "1 kg de camarón",
          "2 cajitas de salsa / puré de tomate",
          "1 litro de jugo de tomate",
          "1 cebolla",
          "1 jalapeño",
          "1 manojo de cilantro",
        ],
      },
    ],
    steps: [
      "Cocina el camarón y reserva.",
      "Pica la cebolla, el jalapeño y el cilantro y sofríe.",
      "Junta todo y calienta.",
    ],
  },
  meatballs: {
    title: "Albóndigas",
    ingredients: [
      {
        items: [
          "1 kg de carne molida",
          "½ taza de pan molido",
          "½ taza de leche",
          "2 cditas de sal",
          "2 cditas de pimienta",
          "2 cditas de salsa de soya",
          "1 cebolla",
          "1 huevo",
        ],
      },
    ],
    steps: ["Pica la cebolla y mezcla todo.", "Forma bolitas y fríe."],
  },
  "poppy-seed-chicken": {
    title: "Pollo con semillas de amapola",
    meta: [{ label: "Horno", value: "20–30 min" }],
    ingredients: [
      {
        items: [
          "Pechugas de pollo",
          "3 paquetes de galletas",
          "1½ barras de mantequilla",
          "Semilla de amapola, opcional",
        ],
      },
      {
        label: "Salsa",
        items: [
          "2 latas de crema de champiñones y pollo",
          "1 taza de crema",
          "1 cdita de vinagre",
          "1 lata de elote",
        ],
      },
    ],
    steps: [
      "Pica el pollo y fríe.",
      "Mezcla los ingredientes de la salsa.",
      "Derrite la mantequilla y mézclala con las galletas trituradas.",
      "Arma capas en el refractario: abajo el pollo, en medio la salsa, arriba las migas.",
      "Agrega las semillas encima y hornea 20–30 min.",
    ],
  },
  "beer-batter-fish": {
    title: "Pescado empanizado con cerveza",
    ingredients: [
      {
        items: [
          "Filetes de tilapia",
          "2 tazas de harina",
          "1 cdita de sal",
          "1 cdita de pimienta",
          "1 cda de ajo en polvo",
          "1 cda de paprika",
          "2 cditas de sal de sazón",
          "1 huevo",
          "1 lata de cerveza",
        ],
      },
    ],
    steps: [
      "Mezcla 1 taza de harina con los sazonadores.",
      "Agrega el huevo y la cerveza.",
      "Pasa el pescado por la otra taza de harina, mételo al batido y fríe.",
    ],
  },
  "tropical-shrimp": {
    title: "Camarones tropicales",
    ingredients: [
      {
        items: [
          "1 paquete de camarón",
          "1 cebolla morada",
          "1 taza de jugo de limón",
          "Sal, al gusto",
          "Pimienta, al gusto",
          "3 mangos",
          "2 pepinos",
          "2 tazas de jugo de tomate",
          "Salsa inglesa, al gusto",
          "Jugo Maggi, al gusto",
        ],
      },
    ],
    steps: ["Cocina el camarón.", "Pica las verduras y mezcla todo."],
  },
  "shepherds-pie": {
    title: "Pastel de pastor",
    meta: [{ label: "Horno", value: "20–30 min" }],
    ingredients: [
      {
        items: [
          "1 kg de carne molida",
          "½ cebolla",
          "2 zanahorias",
          "1 lata de chícharos",
          "1 lata de caldo de res",
          "1 cajita de puré de tomate",
          "3 papas",
          "Leche, al gusto",
          "Mantequilla, al gusto",
        ],
      },
    ],
    steps: [
      "Pica las verduras y cocina la carne.",
      "Mezcla con los chícharos, el caldo y el puré.",
      "Cocina las papas y haz un puré con leche y mantequilla.",
      "Extiende la carne en el fondo del refractario, cubre con las papas y hornea 20–30 min.",
    ],
    note: "Agrega queso rallado si quieres.",
    scribbles: ["queso arriba si quieres"],
  },
  "sopa-toscana": {
    title: "Sopa toscana",
    ingredients: [
      {
        items: [
          "10 tazas de agua",
          "4 papas",
          "1 salchicha",
          "1 paquete de tocino",
          "2 dientes de ajo",
          "2 paquetes de sazón Goya de pollo",
          "2 tazas de crema",
          "1 cebolla",
          "1 manojo de espinaca",
        ],
      },
      {
        label: "Sazonadores",
        items: [
          "3 cdas de consomé de pollo",
          "8 hojas de laurel",
          "3 anís estrella",
          "10 granos de pimienta",
          "2 ramas de canela",
          "2 cdas de perejil en hojuelas",
          "2 clavos",
        ],
      },
    ],
    steps: [
      "Pica las papas y la salchicha y mézclalas con el agua.",
      "Pica la cebolla y el tocino, sofríe y agrégalos al agua.",
      "Agrega los sazonadores y lleva a hervor.",
    ],
  },
  "tortilla-soup": {
    title: "Sopa de tortilla",
    ingredients: [
      {
        items: [
          "Pechugas de pollo",
          "3 litros de agua",
          "1 litro de jugo de tomate",
          "2 latas de elote",
          "2 tomates",
          "3 jalapeños",
          "1 cebolla",
          "2 dientes de ajo",
        ],
      },
      {
        label: "Sazonadores",
        items: [
          "3 hojas de laurel",
          "1 cdita de comino",
          "1 cdita de sal",
          "1 cdita de chile en polvo",
          "2 cditas de consomé de pollo",
          "2 cditas de consomé de tomate",
        ],
      },
    ],
    steps: [
      "Pica el pollo y agrégalo al agua.",
      "Agrega el jugo de tomate, el elote y los tomates.",
      "Pica la cebolla, los jalapeños y el ajo y sofríe.",
      "Agrega las especias y junta todo.",
    ],
  },
  "garlic-butter-sauce": {
    title: "Salsa de ajo y mantequilla",
    ingredients: [
      {
        items: [
          "4 cdas de mantequilla derretida",
          "4 dientes de ajo",
          "½ limón",
          "1 cda de perejil en hojuelas",
          "½ cdita de paprika",
          "1 cda de queso parmesano",
        ],
      },
    ],
    steps: ["Mezcla todo y sirve sobre pollo o pescado."],
    scribbles: ["también pescado →"],
  },
  "jalapeno-salsa": {
    title: "Salsa de jalapeño",
    ingredients: [
      {
        items: [
          "6 jalapeños",
          "1 manojo de cilantro",
          "2 cebollas",
          "½ litro de crema",
          "¾ taza de mayonesa",
          "Sal, al gusto",
          "Ajo en polvo, al gusto",
        ],
      },
    ],
    steps: [
      "Pica las cebollas, 4 jalapeños sin semillas y 2 con semillas, y sofríe.",
      "Agrega el resto de los ingredientes a la licuadora.",
      "Junta todo y calienta una vez en la estufa.",
    ],
  },
  "avacado-cream-sauce": {
    title: "Salsa cremosa de aguacate",
    ingredients: [
      {
        items: [
          "1 aguacate",
          "1 manojo de cilantro",
          "1 jalapeño",
          "2 dientes de ajo",
          "2–3 limones",
          "1 taza de yogurt natural",
          "3 cdas de aceite vegetal",
          "3 cdas de agua",
          "Sal, al gusto",
        ],
      },
    ],
    steps: ["Quita las semillas del jalapeño y licúa todo."],
  },
  "honey-garlic-sauce": {
    title: "Salsa de miel y ajo",
    ingredients: [
      {
        items: [
          "¾ taza de miel",
          "3 cdas de salsa de soya",
          "½ cdita de jengibre molido",
          "3 dientes de ajo",
          "½ cdita de hojuelas de chile",
          "⅓ taza de agua",
          "2 cdas de maicena",
        ],
      },
    ],
    steps: ["Mezcla todo y calienta."],
    scribbles: ["espesa al enfriar"],
  },
  "strawberry-salad": {
    title: "Ensalada de fresa",
    ingredients: [
      {
        items: [
          "2 manojos de lechuga romana",
          "1 caja de fresas",
          "½ taza de almendras",
          "¼ de cebolla morada",
          "1 cda de chía / semillas de amapola",
        ],
      },
      {
        label: "Salsa",
        items: ["2 cdas de vinagre", "⅓ taza de azúcar", "½ taza de mayonesa"],
      },
    ],
    steps: ["Mezcla los ingredientes de la ensalada.", "Mezcla la salsa y vierte encima."],
  },
  "chicken-bacon-salad": {
    title: "«Ensalada» de pollo y tocino",
    ingredients: [
      {
        items: [
          "Pechugas de pollo",
          "1 paquete de tocino",
          "1 taza de crema agria",
          "1 taza de queso rallado",
          "3 cdas de mayonesa",
          "1 taza de crema",
          "Sal, al gusto",
          "Pimienta, al gusto",
        ],
      },
    ],
    steps: [
      "Pica el pollo y el tocino y fríe.",
      "Mezcla todo con el resto de los ingredientes.",
    ],
  },
  "banana-bread": {
    title: "Pan de plátano",
    meta: [{ label: "Horno", value: "1 hora" }],
    ingredients: [
      {
        items: [
          "¼ taza de mantequilla",
          "2 huevos",
          "1 taza de azúcar",
          "1½ tazas de harina",
          "1 cdita de bicarbonato",
          "4 plátanos",
          "1 cdita de sal",
        ],
      },
    ],
    steps: ["Derrite la mantequilla, mezcla todo y hornea 1 hora."],
    scribbles: ["¡plátanos maduros!!"],
  },
  "mini-waffles": {
    title: "Mini waffles",
    meta: [{ label: "Rinde", value: "≈ 8 waffles" }],
    ingredients: [
      {
        items: [
          "1 taza de harina",
          "1 cda de azúcar",
          "2 cditas de polvo para hornear",
          "¼ cdita de sal",
          "1 huevo",
          "1 taza de leche",
          "2 cdas de aceite vegetal",
        ],
      },
    ],
    steps: ["Mezcla todo."],
    note: "Rinde aprox. 8 waffles.",
    scribbles: ["no mezcles de más"],
  },
  "carrot-cake": {
    title: "Pastel de zanahoria",
    meta: [{ label: "Horno", value: "1 hora" }],
    ingredients: [
      {
        items: [
          "4 tazas de zanahoria rallada",
          "1½ tazas de aceite vegetal",
          "1 lata de piña en cubos",
          "2 tazas de azúcar",
          "3 tazas de harina",
          "4 huevos",
          "1 cdita de bicarbonato",
          "1 cdita de canela",
          "¼ cdita de sal",
        ],
      },
    ],
    steps: ["Mezcla todo y hornea 1 hora."],
  },
  "chocolate-cones": {
    title: "Conos de chocolate",
    ingredients: [
      {
        items: [
          "1 taza de leche",
          "1 taza de mantequilla",
          "2 tazas de azúcar",
          "½ taza de cocoa",
          "½ cdita de sal",
          "2 tazas de harina",
          "1 cdita de vainilla",
          "Conos para helado",
        ],
      },
    ],
    steps: [
      "Derrite la mantequilla, mezcla todo y lleva a hervor.",
      "Vierte en los conos y deja asentar.",
    ],
  },
  pancakes: {
    title: "Hotcakes",
    meta: [{ label: "Rinde", value: "≈ 10 hotcakes" }],
    ingredients: [
      {
        items: [
          "1¼ tazas de harina",
          "1 cda de azúcar",
          "¼ cdita de canela",
          "1 cda de polvo para hornear",
          "¼ cdita de sal",
          "2 huevos",
          "1 taza de leche",
          "4 cdas de mantequilla",
          "1 cdita de vainilla",
          "⅓ taza de chispas de chocolate, opcional",
        ],
      },
    ],
    steps: ["Derrite la mantequilla y mezcla todo."],
    note: "Rinde aprox. 10 hotcakes.",
    scribbles: ["al gusto — chispas opcionales"],
  },
  "date-squares": {
    title: "Cuadritos de dátil",
    meta: [
      { label: "Horno", value: "1 hora" },
      { label: "Enfriar", value: "4 horas" },
    ],
    ingredients: [
      {
        label: "Crocante",
        items: [
          "4 tazas de avena",
          "2 tazas de harina",
          "1½ tazas de azúcar morena",
          "1 cdita de polvo para hornear",
          "1½ tazas de mantequilla",
        ],
      },
      {
        label: "Relleno",
        items: [
          "4 tazas de dátiles picados",
          "2 tazas de agua",
          "7 limones",
          "5 cditas de azúcar morena",
          "1 cdita de bicarbonato",
        ],
      },
    ],
    steps: [
      "Derrite la mantequilla, mezcla el crocante y extiende la mitad en el fondo del refractario.",
      "Mezcla el relleno, lleva a hervor, extiende sobre el crocante y cubre con el resto.",
      "Hornea 1 hora y deja enfriar 4 horas.",
    ],
  },
  "chocolate-chip-cookies": {
    title: "Galletas con chispas de chocolate",
    meta: [{ label: "Horno", value: "8–10 min" }],
    ingredients: [
      {
        items: [
          "2 huevos",
          "1 taza de mantequilla",
          "1 taza de azúcar morena",
          "½ taza de azúcar",
          "1 taza de chispas de chocolate",
          "1 cdita de vainilla",
          "1 cdita de bicarbonato",
          "1 cdita de sal",
          "2¼ tazas de harina",
        ],
      },
    ],
    steps: ["Derrite la mantequilla y mezcla todo.", "Hornea cada tanda 8–10 min."],
  },
};

export const MEALS_ES: Record<string, MealEs> = {
  "breakfast-1": {
    items: [
      "Sándwich de huevo con 1 tira de tocino",
      "1 cdita de mayonesa",
      "Fruta — 1 plátano, 1 puñado de melón, 1 puñado de papaya",
      "1 tazón pequeño de yogurt con miel, granola y azúcar",
    ],
  },
  "breakfast-2": {
    items: [
      "Sándwich con bistec, pollo, atún o jamón",
      "1 cdita de mayonesa",
      "½ aguacate",
      "Un poco de champiñones de lado",
      "Fruta igual que el #1",
    ],
  },
  "lunch-1": {
    aside:
      "Recuerda que esto no es una dieta, Macaroni — es solo comer un poco más sano.",
    items: [
      "1 puñado de res, frita en aceite vegetal",
      "1 taza de verduras al vapor",
      "1½ tazas de frijoles",
      "½ aguacate",
      "3 tortillas de maíz",
    ],
  },
  "lunch-2": {
    items: [
      "1½ filetes de pescado, fritos en aceite vegetal",
      "1 taza de brócoli",
      "1 taza de otra verdura",
      "½ aguacate",
      "¼ taza de arroz",
    ],
  },
  "lunch-3": {
    items: [
      "1 puñado de pollo, frito en aceite vegetal",
      "1 taza de verduras al vapor",
      "½ papa, frita en aceite vegetal",
      "½ pimiento, frito en aceite vegetal",
      "½ aguacate",
      "2 tortillas de maíz",
    ],
  },
  "supper-1": {
    items: [
      "1 puñado de pollo, cocido y deshebrado",
      "3 tostadas",
      "3 cdas de crema (1 por tostada)",
      "Salsa (opcional)",
      "Lechuga",
    ],
  },
  "supper-2": {
    items: [
      "2 filetes de cerdo",
      "1 puñado de queso panela",
      "2 tortillas de maíz",
      "½ aguacate",
      "Ensalada de lechuga y pepino",
      "Vinagreta o aceite de oliva (opcional)",
      "½ manzana",
    ],
  },
};
