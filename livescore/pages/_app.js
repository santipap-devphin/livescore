import React from "react";
import App from "next/app";
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import "plyr/dist/plyr.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/globals.css'
import { ThemeProvider } from "styled-components"; 

const theme = {
  colors: {
    primary: "#C3C3C3", // gray
    primary_dark: "#606060", // gray dark
    secondary: "#707070",
    success: "#228B22",
    error: "#dc3545",
    black: "#363636",
    white: "#FFFFFF",
    gray: "#E3E3E3",
    gray_300: "#F2F2F2",
    light: "#F5F5F5"
  },
  breakpoints: {
    phone: "576px",
    tablet: "768px",
    desktop: "992px",
    monitor: "1200px",
  },
  devices: {
    phone: "(min-width: 576px)",
    tablet: "(min-width: 768px)",
    desktop: "(min-width: 992px)",
    monitor: "(min-width: 1200px)",
  },
};

class MyApp extends App {
  
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <Head>
          <meta charSet="utf-8" key="charset" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
            key="viewport"
          />
        </Head>
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
      </>
    );
  }
}

export default MyApp
