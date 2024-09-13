import { createEvent, createStore } from "effector";
import { authPostFx } from "../api/authPost";


const open = createEvent();
const close = createEvent();

const $authModal = createStore(false)
    .on(open, () => true)
    .on(close, () => false)
    .on(authPostFx.doneData, () => false)


export { open, close, $authModal }  