"use client";
import { useTranslations } from "next-intl";

import GuestLayout from "@/views/layouts/GuestLayout";

const Login = () => {
  const t = useTranslations();

  return (
    <GuestLayout>
      <h1>{t("Login.title")}</h1>
    </GuestLayout>
  );
};

export default Login;
