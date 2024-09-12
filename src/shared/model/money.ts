import { createEvent, createStore } from "effector";


const plus = createEvent<number>();
const minus = createEvent<number>();

const $money = createStore(100)
    .on(plus, (state, payload) => state + payload)
    .on(minus, (state, payload) => state - payload)

export { plus, minus, $money }