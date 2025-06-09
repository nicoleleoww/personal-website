import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinkClass = (path) =>
    `font-semibold hover:text-purple-400 transition duration-200 ${
      location.pathname === path ? 'text-purple-400' : ''
    }`;

  return (
    <nav className="w-full bg-[#0f0f1b] text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Logo / Name on left */}
      <Link to="/" className="text-xl font-bold hover:text-purple-400 transition-colors duration-200 cursor-pointer">
        NL
      </Link>

      {/* Nav Links on right */}
      <div className="space-x-8 text-sm sm:text-base">
        <Link to="/" className={navLinkClass('/')}>
          Home
        </Link>
        <Link to="/experiences" className={navLinkClass('/experiences')}>
          Experiences
        </Link>
        <Link to="/projects" className={navLinkClass('/projects')}>
          Projects
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
