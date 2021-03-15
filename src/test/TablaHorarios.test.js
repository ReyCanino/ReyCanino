import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import TablaHorarios from '../components/TablaHorarios';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Cambio email', () => {
  var horarios = [{
    id: 1,
    horaini: "fecha ejemplo",
    horafin: "fecha ejemplo"
  },
  {
    id: 2,
    horaini: "fecha ejemplo",
    horafin: "fecha ejemplo"
  }, {
    id: 3,
    horaini: "fecha ejemplo",
    horafin: "fecha ejemplo"
  }
  ]
  act(() => {
    render(<TablaHorarios horarios={horarios} />, container);
  });
})
