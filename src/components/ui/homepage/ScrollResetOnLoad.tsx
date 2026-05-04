"use client";

import { useEffect } from "react";

export default function ScrollResetOnLoad() {
  useEffect(() => {
    const previous = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    return () => {
      window.history.scrollRestoration = previous;
    };
  }, []);

  return null;
}
