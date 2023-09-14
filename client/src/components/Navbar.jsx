
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";
import UserMenuList from "./UserMenuList";
import { useState } from "react";
import { users } from "../utils/data";




const Navbar = () => {
  const user=users[1]

  const [isOpen, setIsOpen] = useState(false);
  console.log(user)
  const handleCloseNav = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <div className="relative bg-[#f7fdfd] z-50">
        <div className="container mx-auto flex items-center justify-between p-5">
          <div>
            <Link to="/" className="text-blue-500 font-bold text-xl">
              Job <span className="text-blue-600">Nestle</span>
            </Link>
          </div>
          <ul className="hidden lg:flex gap-10 text-base">
            <li>
              <Link to="/">Find Job</Link>
            </li>
            <li>
              <Link to="/">Companies</Link>
            </li>
            <li>
              <Link to="/">Upload Job</Link>
            </li>
            <li>
              <Link to="/">About Us</Link>
            </li>
          </ul>
          <div className=" lg:block">
            {!user?.token ? (
              <Link to="/user-auth">
                <CustomButton
                  title="Sign In"
                  containerStyles="text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600 "
                />
              </Link>
            ) : (
             <div>
              <UserMenuList user={user}/>
             </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
