import React from 'react';
import Container from '../container';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b">
      <Container designs="flex justify-between">
        <div className="flex gap-10 items-center">
          <Link to={"/"} className="font-bold text-xl md:text-2xl">Tripster</Link>
          <nav className="flex gap-5 items-center">
            <Link to={'/'}>Hotels</Link>
            <Link to={'/'} className="max-md:hidden">
              Popular
            </Link>
            <Link to={'/create'}>Create</Link>
          </nav>
        </div>

        <div className="flex gap-2 items-center">
          <button className="border border-blue-500 rounded-full py-1 px-5 max-md:hidden">
            Sign Up
          </button>
          <button className="bg-blue-500 text-white rounded-full py-1 px-5 ">Sign In</button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
