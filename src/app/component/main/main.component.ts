// #5)

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { DarkModeState } from 'src/app/state/darkmode/darkmode.state';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers/app-state';
import { selectDarkMode } from 'src/app/reducers/darkmode/darkmode.reducer';
import { DarkModeToggle } from 'src/app/action/darkmode/darkmode.actions';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  // Criar um darkmode observable
  private darkModeObservable: Observable<DarkModeState>;

  // Injetar store no componente
  constructor(private store: Store<AppState>) {}
  
  ngOnInit(): void {
    // Inicializar observable
    this.darkModeObservable = this.store.pipe(select('dark'));
  }

  darkModeToggle(){
    // Dar dispatch Action criada ateriormente passando como parâmetro o inverso do estado desejado 
    let dark = selectDarkMode(this.store);
        
    this.store.dispatch(DarkModeToggle(dark));
  }
}


