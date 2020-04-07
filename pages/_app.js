const App = props => {
  console.log("Our custom app!");

  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

export default App;
