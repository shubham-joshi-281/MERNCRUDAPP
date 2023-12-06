import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center w-[100vw] h-[10vh] mx-auto px-5 bg-black text-white ">
      <div className="text-2xl">
        <Link to="/">CRUD APP .</Link>
      </div>
      <ul className="flex justify-center items-center gap-5 text-lg">
        <Link to="/">Home</Link> ||
        <Link to="/register">Register</Link>
      </ul>
    </header>
  );
};

export default Header;
