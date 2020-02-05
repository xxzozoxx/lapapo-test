import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <div className="app-header">
        <nav>
          <Link to="/">
            <img src="/imgs/lapapo-logo-tran.png" className="left" />
          </Link>
          <ul className="left">
            <Link to="/shop">
              <li>Shop</li>
            </Link>
            <Link to="/community">
              <li>Community</li>
            </Link>
            <Link to="/pre-loved">
              <li>Pre-Loved</li>
            </Link>
            <Link to="/disability-shop">
              <li>Start Selling</li>
            </Link>
          </ul>
          <SearchForm />
          <ul className="right">
            <Link to="/my-account">
              <li>Login/Register</li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
export default Header;
const SearchForm = () => {
  return (
    <>
      <form onSubmit={e => e.preventDefault()}>
        <input type="search" />
      </form>
    </>
  );
};
