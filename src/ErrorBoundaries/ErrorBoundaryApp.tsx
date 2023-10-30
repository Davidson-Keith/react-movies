import ErrorBoundary from "./ErrorBoundary";
import DisplayGrade from "./DisplayGrade";
import React from "react";

export default function ErrorBoundaryApp() {
  const grades = [75, 95, -5, 55, 88];

  return (
    <>
      {grades.map((grade, index) =>
        <ErrorBoundary key={index} errorUI={<h3>There was an error displaying the grade</h3>}>
          <DisplayGrade grade={grade} />
        </ErrorBoundary>
      )}
    </>
  )
}
