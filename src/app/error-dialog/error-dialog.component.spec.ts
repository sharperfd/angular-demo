
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { InjectionToken } from '@angular/core';
import { ErrorDialogComponent } from './error-dialog.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ErrorDialogComponent', () => {
  let component: ErrorDialogComponent;
  let fixture: ComponentFixture<ErrorDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorDialogComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: InjectionToken, useValue: {} },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
