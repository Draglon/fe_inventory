"use client";
import { useTranslations, useLocale } from "next-intl";
import { Form } from "react-bootstrap";
import { Formik } from "formik";

import useFormSubmit from "@/hooks/shared/form/useFormSubmit";
import { useRouter } from "@/i18n/navigation";
import loginSchema from "@/lib/yupLocalised/schemas/login";
import { useAppSelector } from "@/store/hooks";
import fetchAuth from "@/store/auth/operations/fetchAuth";
import { isLoadingSelector } from "@/store/auth/selectors";
import Button from "@/views/shared/bootstrap/Button";

const LoginForm = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const isLoading = useAppSelector(isLoadingSelector);
  const onSubmit = useFormSubmit(fetchAuth, { locale, router });

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
              <Form.Label className="from__label" htmlFor="email">
                {t("shared.email")}
              </Form.Label>
              <Form.Control
                className="from__input"
                id="email"
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
                data-testid="emailInput"
              />
            </Form.Group>
            <Form.Group className="from__field">
              <Form.Label className="from__label" htmlFor="password">
                {t("shared.password")}
              </Form.Label>
              <Form.Control
                className="from__input"
                id="password"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                data-testid="passwordInput"
              />
            </Form.Group>
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full"
              data-testid="submitButton"
            >
              {t("shared.logIn")}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
