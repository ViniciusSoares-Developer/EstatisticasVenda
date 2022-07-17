import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { CadastroClienteComponent } from "../../pages/cliente-pages/cadastro-cliente/cadastro-cliente.component";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { UserComponent } from "../../pages/user/user.component";
import { AdminLayoutRoutes } from "./admin-layout.routing";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { GraficoClienteComponent } from "../../pages/cliente-pages/grafico-cliente/grafico-cliente.component";
import { FornecedoresComponent } from "../../pages/fornecedores/fornecedores.component";
import { CadastroProdutoComponent } from "../../pages/produto-pages/cadastro-produto/cadastro-produto.component";
import { VendaComponent } from "../../pages/venda/venda.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TablesComponent,
    IconsComponent,
    TypographyComponent,
    NotificationsComponent,
    MapComponent,
    CadastroClienteComponent,
    CadastroProdutoComponent,
    GraficoClienteComponent,
    VendaComponent,
    FornecedoresComponent,
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
