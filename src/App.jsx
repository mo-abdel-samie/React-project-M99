import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import { useRoutes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import LoginPage from "./Pages/Login/LoginPage";
import NotFound from "./Pages/NotFound/NotFound";
import PrivetRoute from "./Components/PrivetRoute";
import AdminProfile from "./Pages/AdminProfile/AdminProfile";

function App() {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/admin",
      children: [
        {
          path: "login",
          element: <LoginPage />,
        },
        {
          element: <PrivetRoute />,
          children: [
            {
              path: "profile",
              element: <AdminProfile />,
            },
          ],
        },
      ],
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return <MantineProvider>{routes}</MantineProvider>;
}

export default App;
