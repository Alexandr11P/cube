import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GamePage } from "../pages/game/ui";



const router = createBrowserRouter([
    {
        path: "/",
        element: <GamePage />,
    },
]);

function Router() {
    return (
        <RouterProvider router={router} />
    )
}

export { Router }