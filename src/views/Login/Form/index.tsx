"use client";
import { useTranslations, useLocale } from "next-intl";
import { Form } from "react-bootstrap";
import * as formik from "formik";

import { useRouter } from "@/i18n/navigation";
import { ordersRoute } from "@/lib/routes";
import loginSchema from "@/lib/yupLocalised/schemas/login";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import fetchAuth from "@/store/auth/operations/fetchAuth";
import { isLoadingSelector } from "@/store/auth/selectors";
import Button from "@/views/shared/bootstrap/Button";

type FieldsProps = {
  email: string;
  password: string;
};

const Login = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(isLoadingSelector);
  const { Formik } = formik;

  const onSubmit = async (values: FieldsProps) => {
    const data = await dispatch(fetchAuth(values));
    if ("token" in data.payload) {
      localStorage.setItem("token", data.payload.token);
      router.push(ordersRoute, { locale });
    }
  };

  return (
    <div className="login mx-auto">
      <h1 className="login__title text-center">{t("Login.title")}</h1>
      <Formik
        validationSchema={loginSchema}
        onSubmit={onSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form className="from login__form" noValidate onSubmit={handleSubmit}>
            <Form.Group className="from__field">
              <Form.Label className="from__label">
                {t("shared.email")}
              </Form.Label>
              <Form.Control
                className="from__input"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
            </Form.Group>
            <Form.Group className="from__field">
              <Form.Label className="from__label">
                {t("shared.password")}
              </Form.Label>
              <Form.Control
                className="from__input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
            </Form.Group>
            <Button type="submit" disabled={isLoading} className="w-full">
              {t("shared.logIn")}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
