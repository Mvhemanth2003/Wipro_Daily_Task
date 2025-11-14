
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const BookSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  author: Yup.string().required("Author is required"),
  price: Yup.number()
    .typeError("Price must be a number")
    .required("Price is required")
});

const AddBookForm = ({ store, onClose }) => {
  const initialValues = { title: "", author: "", price: "" };

  return (
    <div className="card border-0 shadow-sm p-4 mb-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold text-primary mb-0">Add New Book</h5>
        <button className="btn btn-sm btn-outline-danger" onClick={onClose}>
          ✖ Close
        </button>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={BookSchema}
        onSubmit={(values, { resetForm, setSubmitting, setStatus }) => {
          setStatus(null);
          setSubmitting(true);

          const newBook = {
            title: values.title,
            author: values.author,
            price: Number(values.price)
          };

          store
            .addBook(newBook)
            .then(() => {
              resetForm();
              setSubmitting(false);
              setStatus({ success: "✅ Book added successfully!" });
            })
            .catch((err) => {
              setSubmitting(false);
              setStatus({ error: err.message || "Failed to add book" });
            });
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <div className="mb-3">
              <label className="form-label">Book Title</label>
              <Field name="title" className="form-control" />
              <ErrorMessage name="title" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label">Author</label>
              <Field name="author" className="form-control" />
              <ErrorMessage name="author" component="div" className="text-danger small" />
            </div>

            <div className="mb-3">
              <label className="form-label">Price (₹)</label>
              <Field name="price" className="form-control" />
              <ErrorMessage name="price" component="div" className="text-danger small" />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Adding..." : "Add Book"}
            </button>

            {status?.success && (
              <div className="text-success small mt-2">{status.success}</div>
            )}
            {status?.error && (
              <div className="text-danger small mt-2">{status.error}</div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};






export default AddBookForm;