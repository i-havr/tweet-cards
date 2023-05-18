import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { App } from "../App/App.styled";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <App>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Footer />
    </App>
  );
}
