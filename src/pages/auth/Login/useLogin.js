import { fetchLogin } from "@/api/actions.js";
import HttpClient from "../../../common/api/httpClient.js";
import { useAuthContext } from "../../../context/useAuthContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "sonner";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { saveUserInfo } from "@/store/actions/GeneralActions.js";

export default function useLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { isAuthenticated, saveSession } = useAuthContext();
  const dispatch = useDispatch()

  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  const schemaResolver = yup.object().shape({
    phone_number: yup
      .string()
      .matches(phoneRegex, "Invalid phone")
      .required("Phone is required"),
    password: yup.string().required("Please enter Password"),
  });
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schemaResolver),
    defaultValues: {
      phone_number: "7857941818",
      password: "nikeet@12345",
    },
  });
  // const redirectUrl = useMemo(() => (location.state?.from.pathname, location.pathname ?? "/"), [location.state]);
  const redirectUrl = searchParams.get("next") ?? "/departments"; // here we will add our home page in else part and in if part other url will come from which we redirected
  const login = handleSubmit(async function (values) {
    setLoading(true);
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await fetchLogin(values)
      // const res = await HttpClient.post(
      //   "https://physically-calm-hermit.ngrok-free.app/login/",
      //   values
      //   // config
      // );
      if (res.data.access) {
        saveSession({
          access: res.data.access,
          refresh: res.data.refresh,
        });
        toast.success("Successfully logged in. Redirecting....", {
          position: "top-right",
          duration: 3000,
        });
        dispatch(saveUserInfo(values.phone_number))
        navigate(redirectUrl);
      }
    } catch (e) {
      if (e.response?.data?.error) {
        toast.error(e.response?.data?.error, {
          position: "top-right",
          duration: 2000,
        });
      }
    } finally {
      setLoading(false);
    }
  });
  return {
    loading,
    login,
    redirectUrl,
    isAuthenticated,
    control,
  };
}
