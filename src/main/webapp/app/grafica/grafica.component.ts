import { Component, OnInit } from '@angular/core';
import { LogobdEntityModule} from '../entities/entity.module';
import {Subscription} from 'rxjs/Rx';
import {TablaTrenesService} from '../entities/tabla-trenes/tabla-trenes.service';
import {JhiAlertService, JhiEventManager} from 'ng-jhipster';
import {TablaTrenes} from '../entities/tabla-trenes/tabla-trenes.model';
import {Principal, ResponseWrapper} from '../shared';

@Component({
    selector: 'jhi-grafica',
    templateUrl: './grafica.component.html',
    providers: [LogobdEntityModule],
    styles: []
})
export class GraficaComponent { // lineChart

    tablaTrenes: TablaTrenes[];

    public lineChartData: Array<any> = [
        {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
        {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
        {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
    ];
    public lineChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';

    constructor(
        private tablaTrenesService: TablaTrenesService,
        private jhiAlertService: JhiAlertService) {
    }

    loadAll() {
        this.tablaTrenesService.query().subscribe(
            (res: ResponseWrapper) => {
                this.tablaTrenes = res.json;
            },
            (res: ResponseWrapper) => this.onError(res.json)
        );
    }
    private onError(error) {
        this.jhiAlertService.error(error.message, null, null);
    }

    public randomize(): void {
        const _lineChartData: Array<any> = new Array(this.lineChartData.length);
        for (let i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
            for (let j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    }

    // events
    public chartClicked(e: any): void {
        console.log(e);
    }

    public chartHovered(e: any): void {
        console.log(e);
    }

}
