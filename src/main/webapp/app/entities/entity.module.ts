import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LogobdTablaTrenesModule } from './tabla-trenes/tabla-trenes.module';
import { LogobdEstacionModule } from './estacion/estacion.module';
import { LogobdLineaModule } from './linea/linea.module';
import { LogobdEventoModule } from './evento/evento.module';
import { LogobdFechaModule } from './fecha/fecha.module';
import { LogobdTrenModule } from './tren/tren.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        LogobdTablaTrenesModule,
        LogobdEstacionModule,
        LogobdLineaModule,
        LogobdEventoModule,
        LogobdFechaModule,
        LogobdTrenModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LogobdEntityModule {}
