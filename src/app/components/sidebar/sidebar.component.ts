import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
  group?: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Estatisticas",
    icon: "icon-chart-pie-36",
    class: "",
  },
  {
    path: "/cliente",
    title: "Cliente",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/produto",
    title: "Produto",
    icon: "icon-bag-16",
    class: ""
  },
  {
    path: "/venda",
    title: "Venda",
    icon: "icon-basket-simple",
    class: "",
    group: "",
  },
  {
    path: "/fornecedores",
    title: "Fornecedores",
    icon: "icon-single-copy-04",
    class: "",
  },
  // {
  //   path: "/icons",
  //   title: "Icons",
  //   icon: "icon-atom",
  //   class: ""
  // },
  // {
  //   path: "/maps",
  //   title: "Maps",
  //   rtlTitle: "خرائط",
  //   icon: "icon-pin",
  //   class: "" },
  // {
  //   path: "/notifications",
  //   title: "Notifications",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

  // {
  //   path: "/user",
  //   title: "User Profile",
  //   rtlTitle: "ملف تعريفي للمستخدم",
  //   icon: "icon-single-02",
  //   class: ""
  // },
  // {
  //   path: "/tables",
  //   title: "Table List",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-puzzle-10",
  //   class: ""
  // },
  // {
  //   path: "/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  // {
  //   path: "/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  public styleInvisible: string = `display: none;`;

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }

  public toggleVisible(elementsGroup: string): void{
    document.getElementById(elementsGroup).style.display = document.getElementById(elementsGroup).style.display == "none"? "block" : "none";
  }
}
