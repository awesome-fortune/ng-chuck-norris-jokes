import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { JokesApiEffects } from './jokes-api.effects';

describe('JokesApiEffects', () => {
  let actions$: Observable<any>;
  let effects: JokesApiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        JokesApiEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(JokesApiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
