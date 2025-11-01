import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Search({ pagePostion }) {
  const [textInput, setTextInput] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef("");

  let className =
    pagePostion === "catalog"
      ? "catalog-search-form"
      : "header-controls-search-form";
  // Main function fo query search
  function actionsSearch() {
    if (isSearchOpen && textInput !== "" && pagePostion === "header") {
      // console.log(pagePostion);
      setTimeout(() => {
        navigate(`/catalog?q=${encodeURIComponent(textInput.trim())}`);
        setTextInput("");
      }, 500);
      setIsSearchOpen(false);
      formRef.current.classList.add("invisible");
    } else if (pagePostion === "catalog") {
      // add some functions
    } else {
      setIsSearchOpen(false);
      formRef.current.classList.add("invisible");
    }
  }

  // Add function for handle form actiopns
  function handleClick() {
    actionsSearch();
  }

  function handleChange(e) {
    setTextInput(e.target.value);
    // console.log("handleChange: ", textInput);
  }

  function handleClickOpen() {
    formRef.current.classList.remove("invisible");
    formRef.current.querySelector("#search").focus();
    setIsSearchOpen(true);
  }

  function handleClickClose() {
    formRef.current.classList.add("invisible");
    setIsSearchOpen(false);
  }

  function handleOnKeyDwon(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      handleClick();
    }
    if (e.key === "Escape") {
      handleClickClose();
    }
  }

  return (
    <>
      {pagePostion === "header" ? (
        <div
          data-id="search-expander"
          className="header-controls-pic header-controls-search"
          onClick={isSearchOpen ? handleClick : handleClickOpen}
        ></div>
      ) : (
        ""
      )}

      <form
        ref={formRef}
        className={`${className} form-inline ${
          pagePostion === "catalog" ? "" : "invisible"
        }`}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          id="search"
          value={textInput}
          className="form-control"
          placeholder="Поиск"
          onChange={handleChange}
          onKeyDown={handleOnKeyDwon}
        />
      </form>
    </>
  );
}
