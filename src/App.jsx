import "./App.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";
import { About } from "./pages/About/index.jsx";
import { Contact } from "./pages/Contact/index.jsx";
import { SignUp } from "./pages/Signup/index.jsx";
import { SignIn } from "./pages/Signin/index.jsx";
import { UserProvider } from "./contexts/UserContext.jsx";
import { ForgotPassword } from "./pages/ForgotPassword/index.jsx";
import { ResetPassword } from "./pages/ResetPassword/index.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/forgot_password" element={<ForgotPassword />} />
        <Route path="/reset_password" element={<ResetPassword />} />
      </Route>
    )
  );

  return (
    <div className="App">
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  );
};

const Root = () => {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default App;
