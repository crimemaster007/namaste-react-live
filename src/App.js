import React, { lazy, Suspense, useState } from "react";
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
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
import Cart from "./components/Cart.js";



//lazy loading
const InstaMart = lazy(() => import("./components/InstaMart.js"))
const About = lazy(() => import("./components/About.js"))



const AppLayout = () => {

    const [user, setUser] = useState({
        name: "Tushar Kumar Singh",
        email: "prachand9211@gmail.com"
    });


    

    return (

        <Provider store={store}>
            <UserContext.Provider value={{
                user: user,
                setUser: setUser,
            }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </Provider>
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
            {
                path: "/cart",
                element: <Cart />
            },
        ],
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)
