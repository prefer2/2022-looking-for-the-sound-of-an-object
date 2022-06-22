type MenuType = {
  icon: string;
  price: number;
};

type MenusType = { [index: string]: MenuType };
type RecipeType = { [index: string]: Array<string> };

const menus: MenusType = {
  에스프레소: { icon: "☕️", price: 3000 },
  아메리카노: { icon: "☕️", price: 4100 },
  카페라떼: { icon: "☕️", price: 4500 },
  우유: { icon: "🥛", price: 3500 },
  콜라: { icon: "🥤", price: 2000 },
  사이다: { icon: "🥤", price: 1800 },
};

const recipes: RecipeType = {
  에스프레소: ["🥤 컵 나옴", "☕️ 에스프레소 나옴"],
  아메리카노: ["🥤 컵 나옴", "☕️ 에스프레소 나옴", "💧 물 나옴"],
  카페라떼: ["🥤 컵 나옴", "☕️ 에스프레소 나옴", "🥛 우유 나옴"],
  우유: ["🥤 컵 나옴", "🥛 우유 나옴"],
  콜라: ["🥤 콜라 나옴"],
  사이다: ["🥤 사이다 나옴"],
};

export { menus, recipes };
