import React from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import {
  Email,
  Error,
  Form as Wrapper,
  Label,
  Section,
  Send,
  Strong,
  Input,
  Text,
  TextArea
} from "./styles";
import { useOnScreen } from "../../../hooks/";
import Title from "../../common/title";
import Button from "../../common/button";
interface contactSourceI {
  link: string;
  text: string;
  email: string;
}
interface contactI {
  contactSource: contactSourceI;
  pragraph: string;
}
interface propsI {
  contact: contactI;
}

const Contact = ({
  contact: {
    contactSource: { link, email }
  }
}: propsI) => {
  const [statusCode, setStatusCode] = React.useState<number | undefined>();
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Please enter a valid email!")
      .required("Email is required"),
    message: Yup.string().required("message is required")
  });
  const {
    errors,
    values,
    touched,
    handleChange,
    handleBlur,
    handleSubmit
  } = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      message: ""
    },
    validationSchema,
    onSubmit: () => {
      fetch("https://public.herotofu.com/v1/490b2d00-4e9b-11ed-8970-6943e4ac8982", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(values)
      }).then((res) => setStatusCode(res.status));
    }
  });
  const [isVisible, ref] = useOnScreen({
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.3
  });
  return (
    <Section id="contact" className="px-[2rem] md:px-[1rem] pt-[4.5rem]">
      <div className="mx-auto w-full max-w-[50rem] ">
        <Title isVisible={isVisible} className="w-fit mx-auto" ref={ref}>
          Contact Me
        </Title>
        <Wrapper
          isVisible={isVisible}
          ref={ref}
          action="https://formsubmit.co/455e550f85f6a23e8191f90a4df86f42"
          method="POST"
          onSubmit={handleSubmit}
          className="max-w-[70rem] "
        >
          <Strong className="text-color-primary dark:text-color-white">
            Feel free to email me via{" "}
            <Email href={link} target={link} className="text-color-secondary">
              {email}
            </Email>
          </Strong>
          <Text className="text-color-primary dark:text-color-white">
            Or fill the contact form down bellow.
          </Text>
          <Label className="text-color-primary dark:text-color-white">
            Full name:
          </Label>
          <Input
            type="text"
            name="fullName"
            error={errors.fullName && touched.fullName}
            aria-label="full name"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.fullName}
            className="text-color-primary bg-transparent dark:text-color-white border-[1px] border-solid  border-color-secondary"
            required
          />
          {errors.fullName && touched.fullName ? (
            <Error>{errors.fullName}</Error>
          ) : null}
          <Label className="text-color-primary dark:text-color-white">
            Your Email:
          </Label>
          <Input
            type="email"
            name="email"
            error={errors.email && touched.email}
            aria-label="email"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.email}
            className="text-color-primary bg-transparent dark:text-color-white border-[1px] border-solid  border-color-secondary"
            required
          />
          {errors.email && touched.email ? <Error>{errors.email}</Error> : null}
          <Label className="text-color-primary dark:text-color-white">
            Message:
          </Label>
          <TextArea
            name="message"
            error={errors.message && touched.message}
            aria-label="message"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.message}
            className="text-color-primary bg-transparent dark:text-color-white border-[1px] border-solid  border-color-secondary"
            required
          />
          {errors.message && touched.message ? (
            <Error>{errors.message}</Error>
          ) : null}
          {statusCode === 200 ? (
            <p className="text-color-secondary text-[1.1rem] mb-[1.5rem]">
              The email is sent successfully
            </p>
          ) : statusCode === undefined ? (
            ""
          ) : (
            <p className="text-color-error text-[1.1rem] mb-[1.5rem]">
              unfortunately, an error happened
            </p>
          )}
          <Button
            className="self-center justify-self-center py-[10px]"
            type="submit"
            onClick={handleSubmit}
          >
            send
          </Button>
        </Wrapper>
      </div>
    </Section>
  );
};

export default Contact;
