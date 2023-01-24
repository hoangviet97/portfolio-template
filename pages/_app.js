import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import "../styles/globals.css";
import Sidebar from "../components/sidebar/Sidebar";
import FullNav from "../components/navigation/FullNav";

function MyApp({ Component, pageProps }) {
  const data = useContext(AppContext);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add(data.theme);
  }, []);

  return (
    <>
      <FullNav />
      <Sidebar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
