const advantages = [
  {
    header: "Великий досвід",
    text: "Займаюсь бджолярством дев'ять років.",
    svgHash: "star",
  },
  {
    header: "Натуральний мед",
    text: "Виготовляю мед без домішок.",
    svgHash: "smile",
  },
  {
    header: "Місце знаходження",
    text: "Пасіка знаходиться в екологічно чистому місті в далині від промислових зон (Черняхівський район Житомирської області).",
    svgHash: "tree",
  },
];

const boxType = {
  advantages: "advantage",
  comments: "comments",
};

const delivery = [
  {
    svgHash: "bike",
    text: "Доставка по м. Житомир безкоштовна",
  },
  {
    svgHash: "package",
    text: "Доставка по м. Житомир безкоштовна",
  },
];

const paymentMethod = [
  {
    svgHash: "money",
    text: "Готівкою",
  },
  {
    svgHash: "card",
    text: "Банківською картою",
  },
];

const PRODUCTS = {
  tool: [
    {
    objectId: 1,
    type: "tool",
    availability: true,
    name: "Вулик",
    price: 100,
    imageUrl: "www",
    description: "123",
  },
],
  item: [
    {
    objectId: 1,
    type: "item",
    availability: true,
    name: "Мед",
    price: 200,
    imageUrl: "www",
    description: "123",
  },
  ],
};

const mainTitle = {
  header: "Про мене",
  text: "Доброго дня, вітаю на моєму сайті. Мене звати Микола.",
};

export {
  paymentMethod,
  delivery,
  advantages,
  boxType,
  PRODUCTS,
  mainTitle,
};