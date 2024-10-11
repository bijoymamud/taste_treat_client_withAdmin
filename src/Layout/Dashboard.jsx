import { FaCalendar, FaUtensils, FaWallet } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdLibraryBooks, MdManageAccounts, MdManageSearch, MdOutlineManageHistory } from "react-icons/md";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { RiHome2Fill, RiShoppingCart2Fill } from "react-icons/ri";
import { Link, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";

const Dashboard = () => {

  // const [cart] = useCart();


  //todo
  const isAdmin = true;

  return (
    <section>
      <div className="drawer lg:drawer-open bg-[#D1A054]">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center bg-white">
          <Outlet />
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4  w-80 min-h-full  font-medium text-black ">
            {/* Sidebar content here */}

            {
              isAdmin ? <>

                <li className="mb-1"><Link to="/dashboard/adminhome" ><HiOutlineHomeModern className="text-lg font-bold text-black" />Admin Home</Link></li>
                
                <li className="mb-1"><Link to="/dashboard/addItems"><FaUtensils className="text-lg font-bold text-black" />Add Items</Link></li>

                <li className="mb-1"><Link to="/dashboard/manageItems"><MdManageSearch className="text-lg font-bold text-black" /> Manage Items</Link></li>
                
                <li className="mb-1"><Link to="/dashboard/allUsers"><MdManageAccounts className="text-lg font-bold text-black" />All Users</Link></li>


              </> :


                <> <li className="mb-1"><Link to="/dashboard/userhome"><HiOutlineHomeModern className="text-lg" />User Home</Link></li>
                  <li className="mb-1"><Link to="/dashboard/mycart"><RiShoppingCart2Fill className="text-lg" />My Cart</Link></li>
                  <li className="mb-1"><Link><FaCalendar className="text-lg" />Reservations</Link></li>
                  <li className="mb-1"><Link><FaWallet className="text-lg" />Payment History</Link></li></>
            }





            <div className="divider my-10"></div>

            <li className="mb-1"><Link to="/"><HiOutlineHomeModern className="text-lg" />Home</Link></li>
            <li className="mb-1"><Link to="/ourMenu"><IoMenu className="text-lg" />Menu</Link></li>
            <li><Link to="/order/salad"><MdLibraryBooks className="text-lg" />Order Food</Link></li>

          </ul>

        </div>
      </div>
    </section>
  );
};

export default Dashboard;