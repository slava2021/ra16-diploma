import { useRef, useState } from "react";
export default function Search({ pagePostion }) {
  const [textInput, setTextInput] = useState("");
  const divRef = useRef(null);
  let className =
    pagePostion === "catalog"
      ? "catalog-search-form"
      : "header-controls-search-form";

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleClick() {
    if (divRef.current.classList.contains("invisible")) {
      divRef.current.classList.remove("invisible");
      divRef.current.querySelector("#search").focus();
    } else {
      divRef.current.classList.add("invisible");
    }
  }

  return (
    <>
      {pagePostion === "header" ? (
        <div
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
          onClick={handleClick}
        ></div>
      ) : (
        ""
      )}

      <form
        ref={divRef}
        className={`${className} form-inline`}
        onSubmit={handleSubmit}
      >
        <input
          id="search"
          value={textInput}
          className="form-control"
          placeholder="Поиск"
          onChange={(e) => setTextInput(e.target.value)}
        />
      </form>
    </>
  );
}
