import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white p-4 flex justify-between">
      <h1 className="text-3xl font-bold">My Website</h1>
      <nav className="flex gap-4">
        <Link
          className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
          href="/"
        >
          Home
        </Link>
        <Link
          className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
          href="/about"
        >
          About
        </Link>
        <Link
          className="bg-gray-800 px-4 py-2 rounded-md hover:bg-gray-700"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
