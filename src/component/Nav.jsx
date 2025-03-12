import { NavLink } from "react-router";
import { useAuth } from "../store";

export default function Nav() {
     const {user} = useAuth()
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <NavLink to="/" className="font-bold text-3xl">
          DUMMY STORE
        </NavLink>

        <div className="flex gap-4 items-center">
          {user?.isAuthenticated ? (
            <>
              <details className="dropdown">
                <summary className="btn m-1">{`Hoe ${user?.data?.firstName}`}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                  <li>
                    <NavLink to="/profile">Profile</NavLink>
                  </li>
                  <li>
                    <NavLink to="/order">Orders</NavLink>
                  </li>
                  <li>
                    <NavLink to="/order">Logout</NavLink>
                  </li>
                </ul>
              </details>
            </>
          ) : (
            <NavLink to="/login">
              <button className="btn btn-ghost">
                <i className="ri-user-3-line text-xl"></i>
                MY ACCOUNT
              </button>
            </NavLink>
          )}

          <NavLink to="/cart">
            <button className="btn btn-ghost">
              <i className="ri-shopping-cart-line text-xl"></i>
              CART
            </button>
          </NavLink>
          <NavLink to="/">
            <button className="btn btn-ghost">
              <i className="ri-search-line text-xl"></i>
              search
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
