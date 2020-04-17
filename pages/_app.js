import { configureLanguage } from "../utils/language";

const App = props => {
  console.log("Our custom app!");

  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
};

App.getInitialProps = async ({ ctx }) => {
  const language = configureLanguage(ctx);

  console.log("language:", language);

  return {
    language
  };
};

export default App;
