import "./LoadMore.css";

export default function LoadMore({ handleLoadMore }) {
  return (
    <div className="text-center">
      <button className="btn btn-outline-primary" onClick={handleLoadMore}>
        Загрузить ещё
      </button>
    </div>
  );
}
