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

  return (
    <div className="form-area">
      <Formik
        initialValues={props.stateValues}
        onSubmit={(data, { setSubmitting }) => {}}
      >
        {({ values, isSubmitting }) => (
          <Form className={props.containerClass}>{props.inputs}</Form>
        )}
      </Formik>
    </div>
  );
}

export default CreateForm;
