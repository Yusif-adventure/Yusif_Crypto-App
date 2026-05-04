import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Cryptocurrencies from "../pages/Cryptocurrencies/Cryptocurrencies";
import { individualsRoutes } from "../pages/Individuals/individualsRoutes";
import { businessesRoutes } from "../pages/Businesses/businessesRoutes";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import Profile, { profileLoader } from "../pages/Profile/Profile";
import Institutions from "../pages/Institutions/Institutions";
import Developers from "../pages/Developers/Developers";
import Company from "../pages/Company/Company";
import CryptoDetails, { cryptoDetailsLoader } from "../pages/CryptoDetails/CryptoDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "cryptocurrencies", element: <Cryptocurrencies /> },
      { path: "price/:symbol", element: <CryptoDetails />, loader: cryptoDetailsLoader },
      { path: "signup", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
      { path: "profile", element: <Profile />, loader: profileLoader },
      { path: "institutions", element: <Institutions /> },
      { path: "developers", element: <Developers /> },
      { path: "company", element: <Company /> },
      ...individualsRoutes,
      ...businessesRoutes,
    ],
  },
]);

export default router;

