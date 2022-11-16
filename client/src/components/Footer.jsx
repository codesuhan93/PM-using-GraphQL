import aglogo from "./assets/aglogo.png";

export default function Footer() {
  return (
    <div className="navbar bg-light mb-100 p-0">
      <div className="container d-flex justify-content-end">
        <a
          className="navbar-brand"
          href="https://www.appsgenii.com/"
          target="_blank"
        >
          <div className="d-flex">
            <img src={aglogo} alt="logo" className="mr-2" />
            <div>Contact us </div>
          </div>
        </a>
      </div>
    </div>
  );
}
