import { Component, OnInit, OnDestroy } from '@angular/core';
import {Subscription} from 'rxjs/Rx';
import {TablaTrenesService} from '../../entities/tabla-trenes';

import {TablaTrenes } from '../../entities/tabla-trenes/tabla-trenes.model';
import {Principal, ResponseWrapper} from '../../shared';
import {LogobdEntityModule} from '../../entities/entity.module';
import {TrenListaService} from '../../entities/tren/tren.lista.service';

import { ActivatedRoute, Router } from '@angular/router';

import { JhiEventManager, JhiParseLinks, JhiPaginationUtil, JhiAlertService } from 'ng-jhipster';

import { ITEMS_PER_PAGE } from '../../shared';
import {Tren} from '../../entities/tren/tren.model';

@Component({
    selector: 'jhi-footer',
    templateUrl: './footer.component.html',
    providers: []
})
export class FooterComponent implements OnInit, OnDestroy  {

    public tablaTrenes: TablaTrenes[];
    public listaTren: Tren[];
    currentAccount: any;
    eventSubscriber: Subscription;

   constructor(
        private trenListaService: TrenListaService,
        private tablaTrenesService: TablaTrenesService,
        private jhiAlertService: JhiAlertService,
        private eventManager: JhiEventManager,
        private principal: Principal) {
    }

    loadAll() {
        this.tablaTrenesService.query().subscribe(
            (res: ResponseWrapper) => {
                this.tablaTrenes = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }

    loadLista() {
       return this.trenListaService.trens;
    }
    ngOnInit() {
        this.loadAll();
        this.principal.identity().then((account) => {
            this.currentAccount = account;
        });
        this.registerChangeInTablaTrenes();
        this.trenListaService.ngOnInit()
    }

        trackId(index: number, item: TablaTrenes) {
        return item.id;
    }
    registerChangeInTablaTrenes() {
        this.eventSubscriber = this.eventManager.subscribe('tablaTrenesListModification', (response) => this.loadAll());
    }

    ngOnDestroy() {
        this.eventManager.destroy(this.eventSubscriber);
    }

    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }
}
