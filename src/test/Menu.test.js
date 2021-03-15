import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Menu from "../components/Menu";

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

it("Botones del menu", () => {
    act(() => {
        render(<Menu />, container);
    });
    var button = document.querySelector("#menuButton");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    button = document.querySelector("#botonVolver");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    button = document.querySelector("#botonHome");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });
    button = document.querySelector("#botonLogin");

    act(() => {
        button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

});