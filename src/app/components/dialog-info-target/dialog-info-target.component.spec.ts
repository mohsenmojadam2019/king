import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from '../../app-routing.module';

import { DialogInfoTargetComponent } from './dialog-info-target.component';

describe('DialogInfoTargetComponent', () => {
    let component: DialogInfoTargetComponent;
    let fixture: ComponentFixture<DialogInfoTargetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [DialogInfoTargetComponent],
            providers: [


                {provide: Router, useValue: {}},
                {provide: MatDialog, useValue: {}},
                {provide: MAT_DIALOG_DATA, useValue: 'a#b'}
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
        fixture = TestBed.createComponent(DialogInfoTargetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /*
it('should create', () => {
        expect(component).toBeTruthy();
    });
*/
});
