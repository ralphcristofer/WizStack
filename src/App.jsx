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
import SignUp from "./components/SignUp/SignUp.jsx";
import LoginForm from "./components/Login/Login.jsx";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginForm />}></Route>
      </Route>
    )
  )
  
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
        <Outlet />
        {/* <SignUp />
        <LoginForm /> */}
      </div>
    </>
  );
};

export default App;