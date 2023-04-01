import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Scroll() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return <></>;
}
