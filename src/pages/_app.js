import { Component } from "react";
import "../styles/about.css";
import "../styles/index.css";
import "../styles/posts.css";

export default class MyApp extends Component {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
