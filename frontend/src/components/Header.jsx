import { FaSearch, FaBuilding } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser } = useSelector((state) => state.user);
  // const handleClick = () => {
  //   console.log("user is", currentUser);
  // };
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTerm = urlParams.get("searchTerm");
    if (searchTerm) {
      setSearchTerm(searchTerm);
    }
  }, [location.search]);

  return (
    <header className="bg-black shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap items-center">
            <FaBuilding className="text-indigo-200" />
            <span className="text-indigo-500">Proprty </span>
            <span className="text-indigo-700"> Listing</span>
          </h1>
        </Link>
        <form
          onSubmit={handleSubmit}
          className="bg-indigo-100 p-3 rounded-lg flex items-center"
        >
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <button>
            <FaSearch className="text-indigo-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-indigo-100 hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-indigo-100 hover:underline cursor-pointer">
              Contact us
            </li>
          </Link>
          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-7 w-7"
                src={currentUser.avatar}
                alt="profile"
                referrerPolicy="no-referrer"
              />
            ) : (
              <li className="sm:inline text-indigo-100 hover:underline cursor-pointer">
                Sign In
              </li>
              
            )}
          </Link>
          
        </ul>
      </div>
    </header>
  );
}
