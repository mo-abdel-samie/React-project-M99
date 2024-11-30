import { useFormik } from "formik";
import { object, string } from "yup";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useCookie from "react-use-cookie";

const AuthContext = createContext({
  logout: () => {},
  loginFormik: {},
  isAuth: 0,
  user: {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [userToken, setUserToken, removeUserToken] = useCookie(
    "user-token",
    undefined
  );
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const loginFormik = useFormik({
    validateOnMount: true,
    initialValues: {
      username: "emilys",
      password: "emilyspass",
    },
    validationSchema: object({
      username: string().required(),
      password: string().min(8, "Min length 8 char").required(),
    }),
    onSubmit: (values) => {
      login(values);
    },
  });

  useEffect(() => {
    if (userToken !== undefined) {
      axios
        .get("https://dummyjson.com/auth/me", {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        })
        .then((res) => {
          console.log("User check: ", res);
          setUser(res.data);
          setIsAuth(true);
          navigate("/admin/profile", { replace: true });
        })
        .catch((err) => {
          setIsAuth(false);
          removeUserToken();
          navigate("/admin/login");
        });
    }

    // console.log("token", userToken["user-token"]);
  }, []);

  const logout = () => {
    removeUserToken();
    setIsAuth(false);
    navigate("/admin/login");
  };

  const login = (values) => {
    axios
      .post("https://dummyjson.com/auth/login", values)
      .then((res) => {
        setUserToken(res.data.accessToken, {
          secure: true,
          days: 1,
          path: "/",
        });
        setUser(res.data);
        setIsAuth(true);
        navigate("/admin/profile", { replace: true });

        console.log(res);
      })
      .catch(({ response }) => {
        console.log(response.data.message);
      });

    loginFormik.resetForm();
  };

  return (
    <AuthContext.Provider value={{ loginFormik, isAuth, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};
