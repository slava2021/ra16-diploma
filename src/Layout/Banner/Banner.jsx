import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <img
        src="/src/img/banner.jpg"
        className="img-fluid"
        alt="К весне готовы!"
        width="100%"
      />
      <h2 className="banner-header">К весне готовы!</h2>
    </div>
  );
}
