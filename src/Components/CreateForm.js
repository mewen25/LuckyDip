import React from "react";
import { Formik, Field, Form } from "formik";
import { TextField } from "@material-ui/core";

import "./purchaseOrder.css";

function CreateForm(props) {
  // const inputs = props.fields.map((field) => {
  //   return (
  //     <Field name={field.name} label={field.label} as={TextField} />
  //   )
  // })
  console.log("CHILDREN", props.children, "INPUTS", props);

  return (
    <Formik
      initialValues={props.stateValues}
      onSubmit={(data, { setSubmitting }) => {}}
    >
      {({ values, isSubmitting }) => (
        <Form className={props.containerClass}>
          {/* {props.inputs} */ props.children}
          {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
        </Form>
      )}
    </Formik>
  );
}

export default CreateForm;
