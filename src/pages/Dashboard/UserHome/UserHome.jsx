import { useContext } from "react"
import { FaBell, FaCreditCard, FaSignOutAlt, FaStar, FaUser } from "react-icons/fa"
import { FiChevronRight, FiSettings } from "react-icons/fi"
import { AuthContext } from "../../../providers/AuthProviders"
import useCart from "../../../hooks/useCart";

export default function UserHome() {

  const { user } = useContext(AuthContext);
  console.log(user)

  const [cart] = useCart();
  const total = parseFloat(cart.reduce((sum, item) => item.price + sum, 0).toFixed(2));


  return (
    <div className="">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome back !</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Info Card */}
          <div className="card bg-base-100 drop-shadow-xl md:col-span-2">
            <div className="card-body">
              <div className="flex justify-between items-center">
                <h2 className="card-title">User Profile</h2>
                <button className="btn btn-ghost btn-square">
                  <FiSettings className="h-5 w-5" />
                </button>
              </div>
              <p className="text-base-content/60">Manage your account details</p>
              <div className="flex items-center space-x-4 mt-4">
                <img
                  src={user.photoURL}
                  alt="User avatar"
                  className="rounded-3xl w-[100px]"
                />
                <div>
                  <h2 className="text-2xl font-bold">{ user.displayName}</h2>
                  <p className="text-sm text-gray-600">{ user.email}</p>
                  <div className="mt-4 flex space-x-16">
                    <div>
                      <p className="text-lg  text-amber-600 font-semibold">Total Orders</p>
                      <p className="text-lg font-semibold">{ cart.length}</p>
                    </div>
                    <div>
                      <p className="text-lg  text-amber-600 font-semibold">Total Spent</p>
                      <p className="text-lg font-semibold">${total}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="card bg-base-100 drop-shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Quick Actions</h2>
              <div className="space-y-2">
                <button className="btn btn-outline w-full justify-start">
                  <FaUser className="mr-2 h-4 w-4" />
                  Edit Profile
                </button>
                <button className="btn btn-outline w-full justify-start">
                  <FaCreditCard className="mr-2 h-4 w-4" />
                  Payment Methods
                </button>
                <button className="btn btn-outline w-full justify-start">
                  <FaBell className="mr-2 h-4 w-4" />
                  Notifications
                </button>
                <button className="btn btn-outline w-full justify-start">
                  <FaSignOutAlt className="mr-2 h-4 w-4" />
                  Log Out
                </button>
              </div>
            </div>
          </div>

          {/* Recent Orders Card */}
          <div className="card bg-base-100 drop-shadow-xl md:col-span-2">
            <div className="card-body">
              <h2 className="card-title">Recent Orders</h2>
              <div className="space-y-4">
                {[
                  { id: 1, date: "2023-06-01", items: 3, total: "$45.99" },
                  { id: 2, date: "2023-05-28", items: 2, total: "$32.50" },
                  { id: 3, date: "2023-05-25", items: 4, total: "$67.80" },
                ].map((order) => (
                  <div key={order.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-amber-600">Order #{order.id}</p>
                      <p className="text-sm text-base-content/60">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{order.total}</p>
                      <p className="text-sm text-base-content/60">{order.items} items</p>
                    </div>
                    <FiChevronRight className="h-5 w-5 text-base-content/60" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Favorite Dishes Card */}
          <div className="card bg-base-100 drop-shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Favorite Dishes</h2>
              <div className="space-y-4">
                {[
                  { name: "Pizza", rating: 4.8 },
                  { name: "Chicken ", rating: 4.5 },
                  { name: "Caesar Salad", rating: 4.2 },
                ].map((dish, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">{dish.name}</p>
                      <div className="flex items-center">
                        <FaStar className="h-4 w-4 text-yellow-400" />
                        <span className="ml-1 text-sm text-base-content/60">{dish.rating}</span>
                      </div>
                    </div>
                    <button className="btn btn-success btn-xs text-white">Order Again</button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Loyalty Program Card */}
          <div className="card bg-base-100 drop-shadow-xl md:col-span-3">
            <div className="card-body">
              <h2 className="card-title">Loyalty Program</h2>
              <p className="text-base-content/60">You're 3 orders away from your next reward!</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
              </div>              <div className="mt-2 flex justify-between text-sm text-base-content/60">
                <span>0 orders</span>
                <span>10 orders</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}