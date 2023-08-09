// This function is used to report web vitals
const reportWebVitals = onPerfEntry => {
  // Check if onPerfEntry is a function
  if (onPerfEntry && onPerfEntry instanceof Function) {
    // Import the web-vitals library and get the necessary functions
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Call the getCLS function and pass the onPerfEntry function as a parameter
      getCLS(onPerfEntry);
      // Call the getFID function and pass the onPerfEntry function as a parameter
      getFID(onPerfEntry);
      // Call the getFCP function and pass the onPerfEntry function as a parameter
      getFCP(onPerfEntry);
      // Call the getLCP function and pass the onPerfEntry function as a parameter
      getLCP(onPerfEntry);
      // Call the getTTFB function and pass the onPerfEntry function as a parameter
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
