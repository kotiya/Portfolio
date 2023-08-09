import React from "react";

/**
 * Pre component
 * @param {Object} props - Component props
 * @param {boolean} props.load - Flag to determine if preloader should be displayed
 * @returns {JSX.Element} - Preloader component
 */
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
}

export default Pre;

/**
 * Explanation:
 * The Pre component is a functional component that renders a preloader.
 * It takes a single prop called "load" which is a boolean flag to determine if the preloader should be displayed.
 * If the "load" prop is true, the preloader is displayed by setting the id of the div element to "preloader".
 * If the "load" prop is false, the preloader is hidden by setting the id of the div element to "preloader-none".
 * The component is exported as the default export of the file, making it available for use in other files.
 */