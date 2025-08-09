"use client";
import { useTranslations, useLocale } from "next-intl";
import { Form } from "react-bootstrap";
import * as formik from "formik";

import { useRouter } from "@/i18n/navigation";
import { loginRoute } from "@/lib/routes";
import registrationSchema from "@/lib/yupLocalised/schemas/registration";
import fetchRegister from "@/store/auth/operations/fetchRegister";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Button from "@/views/shared/bootstrap/Button";

type FieldsProps = {
  email: string;
  password: string;
};

const Registration = () => {
  const t = useTranslations();
  const locale = useLocale();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { Formik } = formik;

  const onSubmit = async (values: FieldsProps) => {
    const data = await dispatch(fetchRegister(values));

    if (!data.payload) {
      return alert("Не удалось зарегистрироваться");
    }

    if ("token" in data.payload) {
      localStorage.setItem("token", data.payload.token);
      router.push(loginRoute, { locale });
    }
  };

  return (
    <div className="signup mx-auto">
      <h1 className="signup__title text-center">{t("Registration.title")}</h1>

      <Formik
        validationSchema={registrationSchema}
        onSubmit={onSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            className="from signup__form"
            noValidate
            onSubmit={handleSubmit}
          >
            <Form.Group className="from__field">
              <Form.Label className="from__label">Email</Form.Label>
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
              <Form.Label className="from__label">Password</Form.Label>
              <Form.Control
                className="from__input"
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
            </Form.Group>
            <Button type="submit" className="w-full">
              {t("shared.signUp")}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Registration;
