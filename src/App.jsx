import "./App.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/Home/index.jsx";
import { About } from "./pages/About/index.jsx";
import { Contact } from "./pages/Contact/index.jsx";
<<<<<<< HEAD
import SignUp from "./components/SignUp/SignUp.jsx";
=======
import LoginForm from "./components/Login/Login.jsx";
>>>>>>> origin/fend-submain-chk

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
<<<<<<< HEAD
        <Route path="/signup" element={<SignUp />} />
=======
        <Route path="/login" element={<LoginForm />}></Route>
>>>>>>> origin/fend-submain-chk
      </Route>
    )
  );

  return (
    <Theme
      appearance="dark"
      accentColor="tomato"
      grayColor="mauve"
      radius="large"
    >
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </Theme>
  );
};

const Root = () => {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/product">Product</Link>
      </div>

      <div>
        <Outlet />
<<<<<<< HEAD
        <SignUp />
=======
        <LoginForm />
>>>>>>> origin/fend-submain-chk
      </div>
    </>
  );
};

export default App;
