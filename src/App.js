import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestrauntMenu from "./components/RestrauntMenu.js";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Profile from "./components/Profile.js";
import Shimmer from "./components/Shimmer.js";


//lazy loading
const InstaMart = lazy(() => import("./components/InstaMart.js"))
const About = lazy(() => import("./components/About.js"))



const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: <Suspense fallback={<Shimmer />}><About /></Suspense>,
                children: [
                    {
                        path: "profile",
                        element: <Profile />
                    },
                ]
            },
            {
                path: "/restraunt/:id",
                element: <RestrauntMenu />
            },
            {
                path: "/instamart",
                element: <Suspense fallback={<Shimmer />} ><InstaMart /></Suspense>
            },
        ],
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
