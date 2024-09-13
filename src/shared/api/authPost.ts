import { createEffect } from "effector"


export const authPostFx = createEffect(async (body: { [key: string]: string | number }) => {
    const data = await fetch('https://api.lettobet.dev.bet4skill.com/api/client-login',
        {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain',
                'Accept-Language': 'en-RU,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,he;q=0.6',
                // 'Cache-Control': 'no-cache',
                'Connection': 'keep-alive',
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(body)
        }).then((response) => response.ok ? response.json() : response.json().then((d) => Promise.reject(d)))
    return data
})

authPostFx.doneData.watch((data) => { console.log(data) })






//   --data-raw '{"login":"test_player_try","password":"test_player_try"}' \