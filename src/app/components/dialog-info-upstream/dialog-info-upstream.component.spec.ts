import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../../app-routing.module';

import { DialogInfoUpstreamComponent } from './dialog-info-upstream.component';

describe('DialogInfoUpstreamComponent', () => {
    let component: DialogInfoUpstreamComponent;
    let fixture: ComponentFixture<DialogInfoUpstreamComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DialogInfoUpstreamComponent],
            providers: [


                {provide: Router, useValue: {}},
                {provide: MatDialog, useValue: {}},
                {provide: MAT_DIALOG_DATA, useValue: {}}
            ], imports: [
                CommonModule,
                HttpClientModule,
                AppRoutingModule,
                TranslateModule.forRoot(),
                ToastrModule.forRoot()
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DialogInfoUpstreamComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /*
it('should create', () => {
        expect(component).toBeTruthy();
    });
*/
});
