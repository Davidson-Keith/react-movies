import React from "react";

export default function ProjectContent(props: projectContentProps) {
  return (
    <>
      <h2>Top Part</h2>
      {props.children}
      <h2>Bottom Part</h2>
      {props.otherPart}
    </>
  )

}

interface projectContentProps {
  children: React.ReactNode; // children is a special case in React
  otherPart: React.ReactNode;
}