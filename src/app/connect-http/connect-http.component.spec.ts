import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectHttpComponent } from './connect-http.component';

describe('ConnectHttpComponent', () => {
  let component: ConnectHttpComponent;
  let fixture: ComponentFixture<ConnectHttpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectHttpComponent]
    });
    fixture = TestBed.createComponent(ConnectHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
