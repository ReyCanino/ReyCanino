import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { fireEvent } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import AddSchedule from '../components/AddSchedule';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    container.id = "root"
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("General", () => {
    act(() => {
        render(<AddSchedule />, container);
    });
    var button = document.querySelector("#addSchedule");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    var input = document.querySelector("#dueDate");
    fireEvent.change(input, { target: { value: '1999-06-11' } })

    input = document.querySelector("#times");
    fireEvent.change(input, { target: { value: '23' } })

    input = document.querySelector("#time");
    fireEvent.change(input, { target: { value: '22:00' } })

    input = document.querySelector("#timeF");
    fireEvent.change(input, { target: { value: '23:00' } })

    input = document.querySelector("#servicio");
    fireEvent.change(input, { target: { value: 'Peluqueria' } })

    input = document.querySelector("#tipoRepeticion");
    fireEvent.change(input, { target: { value: 'Unica' } })

    button = document.querySelector("#agregar");
    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

});


it("Horas malas", () => {
    act(() => {
        render(<AddSchedule />, container);
    });
    var button = document.querySelector("#addSchedule");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    var input = document.querySelector("#time");
    fireEvent.change(input, { target: { value: '22:00' } })

    input = document.querySelector("#timeF");
    fireEvent.change(input, { target: { value: '21:00' } })

});