import { IMenuItem } from "@/interfaces/menu";

export const MENU_ITEMS: IMenuItem[] = [
  {
    id: "requests",
    title: "Заявки",
    href: "/reg-requests",
    addNewHref: "/add-reg-requests",
  },
  {
    id: "groups",
    title: "Группы",
    href: "/groups",
    addNewHref: "/add-groups",
  },
  {
    id: "subjects",
    title: "Предметы",
    href: "/subjects",
    addNewHref: "/add-subjects",
  },
];
