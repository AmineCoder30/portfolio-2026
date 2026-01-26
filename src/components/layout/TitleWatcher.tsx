import { useEffect } from "react";

export default function TitleWatcher() {

  const titles = ["The fun isn’t over 👀","You’re not done yet 👀","Peek a little longer"]
  useEffect(() => {
    const originalTitle = document.title;

    const handleVisibility = () => {
      if (document.hidden) {
        document.title = titles[Math.floor(Math.random() * titles.length)];
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      document.title = originalTitle;
    };
  }, []);

  return null;
}
