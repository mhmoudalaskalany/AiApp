import { OnInit } from '@angular/core';
import { HttpService } from 'core/services/http/http.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Shell } from './shell';


export abstract class BaseEditComponent implements OnInit  {

    constructor(protected route: ActivatedRoute) {}
    model: any = {};
    isNew = true;
    id: string;
    abstract get Service(): HttpService;
    get Route(): Router { return Shell.Injector.get(Router); }

    protected SubmitNew(): Observable<any> {
        return this.Service.postReq('Add', this.model);
    }
    protected SubmitUpdate(): Observable<any> {
        return this.Service.putReq('Update', this.model);
    }
    protected GetModelFromServer(id: any): Observable<any> {
        return this.Service.getHeaderReq('Get', id);
    }
    ngOnInit() {

    }


}
