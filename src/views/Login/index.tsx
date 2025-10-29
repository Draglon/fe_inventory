"use client";
import GuestLayout from "@/views/layouts/GuestLayout";
import LoginForm from "@/views/Login/Form";

const Login = () => {
  console.log("process.env: ", process.env.NEXT_PUBLIC_APP_URL);
  return (
    <GuestLayout>
      <LoginForm />
    </GuestLayout>
  );
};

export default Login;
