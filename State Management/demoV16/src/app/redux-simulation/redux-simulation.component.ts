import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redux-simulation',
  templateUrl: './redux-simulation.component.html',
  styleUrls: ['./redux-simulation.component.css'],
})
export class ReduxSimulationComponent implements OnInit {
  ngOnInit(): void {
    this.demoTest();
  }

  demoTest() {
    // Redux => Design Pattern => Single source of truth - State
    // how we change ? - not directly, we use dispatch
    // reducer captures the action and does something

    //Synchronous simulation of redux pattern
    //type of the state
    interface AppState {
      str: string;
      obj: any;
      bool: boolean;
    }

    const initialState: AppState = {
      str: '',
      obj: null,
      bool: false,
    };

    //Actions
    const EVENT_ONE = 'EVENT_1';
    const EVENT_TWO = 'EVENT_2';
    const EVENT_THREE = 'EVENT_3';

    //reducer
    function reducer(state: AppState, action: any) {
      // return acc + curr;
      switch (action.type) {
        case EVENT_ONE:
          return { ...state, str: action.value };
        case EVENT_TWO:
          return { ...state, obj: action.value };
        case EVENT_THREE:
          return { ...state, bool: action.value };
        default:
          return state;
      }
    }

    //combine events with reducer and initial state
    const actionCollection = [
      { type: EVENT_ONE, value: 'test123' },
      { type: EVENT_TWO, value: { name: 'Pesho', age: 21 } },
      { type: EVENT_THREE, value: true },
    ];

    const result = actionCollection.reduce(reducer, initialState);
    // console.log(result);
  }
}
