import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/signin" className="hover:text-gray-200">Login</Link>
          <Link to="/signup" className="hover:text-gray-200">Signup</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
