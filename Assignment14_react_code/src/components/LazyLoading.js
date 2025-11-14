import React, { Suspense, useState } from "react";

const CourseDetails = React.lazy(() => import("./CourseDetails"));
const InstructorProfile = React.lazy(() => import("./InstructorProfile"));

export default function LazyLoading() {
  const [showCourse, setShowCourse] = useState(false);
  const [showInstructor, setShowInstructor] = useState(false);

  return (
    <div>
      <h2>Lazy Loading & Code Splitting</h2>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setShowCourse(true)}>View Course Details</button>
        <button onClick={() => setShowInstructor(true)} style={{ marginLeft: "10px" }}>
          View Instructor Profile
        </button>
      </div>

      <Suspense fallback={<div className="spinner-border text-primary" role="status"></div>}>
        {showCourse && <CourseDetails />}
        {showInstructor && <InstructorProfile />}
      </Suspense>
    </div>
  );
}

