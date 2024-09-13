import { createEffect } from "effector"

export const authCookieFx = createEffect(async () => {
    const data = await fetch('https://api.lettobet.dev.bet4skill.com/api/auth/me', { credentials: 'include' })
        .then((response) => response.ok ? response.json() : response.json().then((data) => Promise.reject(data)))
    return data
})

authCookieFx.fail.watch(() => { document.cookie = 'connect.sid=0; max-age=0' })