import { useFormik } from "formik";
import * as Yup from "yup";
import { useBooking } from "../context/BookingContext";
import { postBooking } from "../api/api";

const useBookingForm = () => {
  const { addBooking } = useBooking();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      destination: "",
      travellers: 1,
      startDate: "",
      notes: ""
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string().required("Phone is required"),
      destination: Yup.string().required("Destination is required"),
      travellers: Yup.number().min(1).required("Number of travellers required"),
      startDate: Yup.date().required("Start date is required")
    }),
    onSubmit: async (values, { resetForm }) => {
  try {
    await postBooking(values);   
    addBooking(values);          

    alert("🎉 Booking submitted successfully!");
    resetForm();
    
  } catch (error) {
    console.error("Error saving booking:", error);
    alert("Something went wrong while saving your booking.");
  }
}
  });

  return formik;
};

export default useBookingForm;