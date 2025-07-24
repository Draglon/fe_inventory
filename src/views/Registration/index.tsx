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
    <>
      <h1>{t("Registration.title")}</h1>

      <Formik
        validationSchema={registrationSchema}
        onSubmit={onSubmit}
        initialValues={{
          email: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
            </Form.Group>
            <Button type="submit">{t("shared.signUp")}</Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Registration;
