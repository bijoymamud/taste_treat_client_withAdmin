import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProviders';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(result => {
        const user = result.user;
        console.log(user);

        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Loged In",
          showConfirmButton: false,
          timer: 1500
        });

      })
    navigate(from, { replace: true });

  }

  return (
    <section>
      <Helmet>
        <title>Taste Treasure | Login</title>
      </Helmet>

      <div className='container md:flex items-center justify-evenly  gap-10  md:pt-40'>

        <div className='md:w-2/6'>
          <img src='https://i.ibb.co/jDMz1bj/login-page-banner.png' alt='' />

        </div>
        <div className="w-full max-w-md p-8 space-y-3 rounded-xl  dark:text-gray-100" bis_skin_checked="1">
          <h1 className="text-2xl text-black font-bold text-center">Login</h1>

          <form onSubmit={handleLogin} noValidate="" action="" className="space-y-6">
            <div className="space-y-1 text-sm" bis_skin_checked="1">
              <label htmlFor="username" className="block dark:text-gray-400">Username</label>
              <input type="email" name="email" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md border dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
            </div>

            <div className="space-y-1 text-sm" bis_skin_checked="1">
              <label htmlFor="password" className="block dark:text-gray-400">Password</label>
              <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border  dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
              <div className="flex justify-end text-xs dark:text-gray-400" bis_skin_checked="1">
                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
              </div>
            </div>

         
            <button className="block w-full  p-3 text-center rounded-sm dark:text-white hover:bg-violet-700 text-white bg-violet-600">Sign in</button>
          </form>

          <div className="flex items-center pt-4 space-x-1" bis_skin_checked="1">
            <div className="flex-1 h-px sm:w-16 dark:bg-gray-700" bis_skin_checked="1"></div>
            <p className="px-3 text-sm dark:text-black">Login with social accounts</p>
            <div className="flex-1 h-px sm:w-16 bg-gray-700" bis_skin_checked="1"></div>
          </div>
          <div className="flex justify-center space-x-4" bis_skin_checked="1">
            {/* <button aria-label="Log in with Google" className="p-3 rounded-sm">
              <FcGoogle className='text-gray-400 text-3xl' />
            </button> */}
            <SocialLogin />

          </div>
          <p className="text-sm text-center sm:px-6 dark:text-gray-400">Don't have an account?
            <Link to="/register" rel="noopener noreferrer" href="#" className=" font-extrabold ms-2  dark:text-gray-500">Sign up</Link>
          </p>
        </div>
      </div>

    </section>
  );
};

export default Login;