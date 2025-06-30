"use client";
import { useTranslations } from "next-intl";

import GuestLayout from "@/views/layouts/GuestLayout";

const Login = () => {
  const t = useTranslations("Login");

  return (
    <GuestLayout>
      <h1>{t("title")}</h1>
    </GuestLayout>
  );
};
export default Login;
