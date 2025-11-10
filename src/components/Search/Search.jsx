import { useRef, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { pathQuery } from "../../config";
import { useActions } from "../../Hooks/useActions";
import { useCatalog } from "../../Hooks/useCatalog";

export default function Search({ pagePostion }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();
  const formRef = useRef("");
  const { catalog } = useCatalog();
  const [searchParams, setSearhParams] = useSearchParams();
  const [localQueryInput, setLocalQueryInput] = useState("");
  const { getCatalogProducts, setSearchQuery } = useActions();
  const searchText = searchParams.has("q") ? searchParams.get("q") : "";

  useEffect(() => {
    setLocalQueryInput(searchText);
  }, [searchText]);

  let className =
    pagePostion === "catalog"
      ? "catalog-search-form"
      : "header-controls-search-form";

  const fetchSettings = {
    path: pathQuery.all,
    categoryId: catalog.categoryId,
    offset: 0,
    q: localQueryInput,
  };

  // Функция поиска в Header, отображает поле поске и скрывает, устанвливает get запрос и направляет в раздел каталог
  function actionSearch() {
    if (isSearchOpen && localQueryInput && pagePostion === "header") {
      // console.log("localQueryInput: ", localQueryInput);
      searchParams.set("q", localQueryInput);
      setTimeout(() => {
        navigate(`/catalog?q=${encodeURIComponent(localQueryInput.trim())}`);
      }, 500);
      setIsSearchOpen(false);
      formRef.current.classList.add("invisible");
      setSearchQuery(localQueryInput);
      getCatalogProducts(fetchSettings);
    } else {
      setIsSearchOpen(false);
      formRef.current.classList.add("invisible");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLocalQueryInput(localQueryInput);
    setSearchQuery(localQueryInput);
    getCatalogProducts(fetchSettings);
  }

  // Add function for handle form actiopns
  function handleClick() {
    actionSearch();
  }

  function handleChange(e) {
    setSearhParams({ q: e.target.value });
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
    if (e.key === "Enter" && pagePostion === "header") {
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
        onSubmit={handleSubmit}
      >
        <input
          id="search"
          value={localQueryInput}
          className="form-control"
          placeholder="Поиск"
          onChange={handleChange}
          onKeyDown={handleOnKeyDwon}
        />
      </form>
    </>
  );
}
