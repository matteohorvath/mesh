import { useConfig } from "@/lib/config";
import { useEffect } from "react";
const Utterances = ({ issueTerm, layout }) => {
  const BLOG = useConfig();

  useEffect(() => {
    const script = document.createElement("script");
    const anchor = document.getElementById("comments");
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", true);
    script.setAttribute("repo", BLOG.comment.utterancesConfig.repo);
    script.setAttribute("issue-term", issueTerm);
    script.setAttribute("theme", "github-dark");
    anchor.appendChild(script);
    return () => {
      anchor.innerHTML = "";
    };
  });
  return (
    <>
      <div
        id="comments"
        className={layout && layout === "fullWidth" ? "" : "md:-ml-16"}
      >
        <div className="utterances-frame"></div>
      </div>
    </>
  );
};

export default Utterances;
