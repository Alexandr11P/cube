import { createEvent, createStore } from "effector";
import { authPostFx } from "../api/authPost";
import { authCookieFx } from "../api/authCookie";


const singIn = createEvent();
const leave = createEvent();

const $auth = createStore(true)
    .on(singIn, () => true)
    .on(leave, () => false)
    .on(authPostFx.doneData, () => true)
    .on(authCookieFx.doneData, () => true)

export { singIn, leave, $auth }
