import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import LoginForm from '../components/LoginForm';

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
  act(() => {
    render(<LoginForm />, container);
  });
  var input = document.querySelector("#user");
  fireEvent.change(input, { target: { value: '23' } })
  expect(input.value).toBe('23')
})

it('Cambio password', () => {
  act(() => {
    render(<LoginForm />, container);
  });
  var input = document.querySelector("#pwd");
  fireEvent.change(input, { target: { value: '23' } })
})

it('Ingresar', () => {
  act(() => {
    render(<LoginForm />, container);
  });

  var input = document.querySelector("#user");
  fireEvent.change(input, { target: { value: 'test@test.com' } })
  input = document.querySelector("#pwd");
  fireEvent.change(input, { target: { value: '1234' } })
  var button = document.querySelector("#botonIngresar");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
})

it('Ingresar error', () => {
  act(() => {
    render(<LoginForm />, container);
  });

  var input = document.querySelector("#user");
  fireEvent.change(input, { target: { value: 'test@test.com' } })
  input = document.querySelector("#pwd");
  fireEvent.change(input, { target: { value: '123' } })
  var button = document.querySelector("#botonIngresar");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
})

it('Registrarse', () => {
  act(() => {
    render(<LoginForm />, container);
  });
  var button = document.querySelector("#botonRegistrarse");

  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
})
