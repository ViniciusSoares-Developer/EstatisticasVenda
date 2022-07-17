import { Routes } from "@angular/router";
import { GraficoClienteComponent } from "../../pages/cliente-pages/grafico-cliente/grafico-cliente.component";
import { FornecedoresComponent } from "../../pages/fornecedores/fornecedores.component";
import { VendaComponent } from "../../pages/venda/venda.component";

import { CadastroClienteComponent } from "../../pages/cliente-pages/cadastro-cliente/cadastro-cliente.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { CadastroProdutoComponent } from "../../pages/produto-pages/cadastro-produto/cadastro-produto.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { UserComponent } from "../../pages/user/user.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "cliente", component: CadastroClienteComponent },
  { path: "produto", component: CadastroProdutoComponent },
  { path: "cliente/grafico", component: GraficoClienteComponent },
  { path: "fornecedores", component: FornecedoresComponent },
  { path: "venda", component: VendaComponent },
  // { path: "rtl", component: RtlComponent }
];
