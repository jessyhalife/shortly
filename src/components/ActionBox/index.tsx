import React from "react";
import api from "../../Link/api";
import { Link } from "../../Link/types";

import "./styles.css";

const ActionBox: React.FC = () => {
  const [links, setLinks] = React.useState<Link[]>([]);
  const [status, setStatus] = React.useState<"done" | "loading" | "error">(
    "done"
  );
  const [url, setUrl] = React.useState<string>("");
  const [error, setError] = React.useState<string>("");

  async function handleCreate(e: React.FormEvent<HTMLAnchorElement>) {
    e.preventDefault();
    if (url) {
      setStatus("loading");
      try {
        const res = await api.create(url);
        if (res) {
          setLinks([...links, { ...res, copied: false }]);
          setStatus("done");
          setUrl("");
        } else {
          throw new Error("Failed to create");
        }
      } catch (error) {
        setStatus("error");
        setError(error.message);
      }
    }
  }

  function copyToClipboard(
    e: React.FormEvent<HTMLAnchorElement>,
    code: Link["code"]
  ) {
    e.preventDefault();

    const found = links.find((link) => link.code === code);
    if (found) {
      navigator.clipboard.writeText(found?.short_link);
      setLinks((prev) =>
        prev.map((link) => {
          if (link.code === code) {
            return { ...link, copied: true };
          }
          return link;
        })
      );
    }
  }

  return (
    <section className="action__box">
      {status === "loading" && <h3>Creating link...</h3>}
      {status === "error" && <h3>{error || "Oops something went wrong"}</h3>}
      <div className="action__box__header">
        <input
          type="text"
          placeholder="Shorten a link here..."
          value={url}
          className={`${status === "loading" && "disabled"}`}
          onChange={({ target: { value } }) => setUrl(value)}
        />

        <a
          href=""
          className={`button__shorten ${status === "loading" && "disabled"}`}
          onClick={handleCreate}
        >
          Shorten It!
        </a>
      </div>
      <div className="action__box__links">
        <ul>
          {links?.map((link) => (
            <li key={link.code}>
              <p>{link.original_link}</p>
              <a href="#">{link.short_link}</a>

              <a
                href="#"
                className={`link__copy__button ${link.copied && "copied"}`}
                onClick={(e) => copyToClipboard(e, link.code)}
              >
                {link.copied ? "Copied" : "Copy"}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ActionBox;
