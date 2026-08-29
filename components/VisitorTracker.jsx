"use client";

import { useEffect } from "react";

// Fires a POST to /api/visit only when the visitor arrived from outside
// (empty referrer = direct link / bookmark / shared URL, or external domain).
// sessionStorage prevents double-counting if the user refreshes or
// navigates away and back within the same browser tab session.
const VisitorTracker = () => {
  useEffect(() => {
    if (sessionStorage.getItem("visit_counted")) return;

    const referrer = document.referrer;
    const isExternal =
      !referrer || !referrer.startsWith(window.location.origin);

    if (isExternal) {
      fetch("/api/visit", { method: "POST" })
        .then(() => sessionStorage.setItem("visit_counted", "1"))
        .catch(() => {});
    }
  }, []);

  return null;
};

export default VisitorTracker;
