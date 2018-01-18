import './vendor.ts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ng2-webstorage';
import { ChartsModule } from 'ng2-charts';

import { LogobdSharedModule, UserRouteAccessService } from './shared';
import { LogobdHomeModule } from './home/home.module';
import { LogobdAdminModule } from './admin/admin.module';
import { LogobdAccountModule } from './account/account.module';
import { LogobdEntityModule } from './entities/entity.module';

import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    LayoutRoutingModule,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ErrorComponent
} from './layouts';

import { GraficaComponent } from './grafica/grafica.component';
import { TrenListaService} from './entities/tren/tren.lista.service';

@NgModule({
    imports: [
        BrowserModule,
        LayoutRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        LogobdSharedModule,
        LogobdHomeModule,
        LogobdAdminModule,
        LogobdAccountModule,
        LogobdEntityModule,
        ChartsModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        FooterComponent,
        GraficaComponent
    ],
    providers: [
        ProfileService,
        TrenListaService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class LogobdAppModule {}
