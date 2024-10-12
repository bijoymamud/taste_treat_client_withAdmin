const Button = ({ value }) => {
    return (
      <div>
        <button
          type="submit"
          className="relative hover:text-white group flex justify-center items-center mx-auto gap-2 shadow-lg text-lg bg-gradient-to-bl from-[#fceabb] to-[#f8b500] backdrop-blur-md lg:font-semibold isolation-auto px-4 py-2 overflow-hidden border-2 rounded-xl font-extrabold"
        >
          {value}
          <svg
            className="w-8 h-8 justify-end group-hover:rotate-90 text-gray-50  duration-300 ease-linear rounded-full hover:rounded-full  border-2 border-gray-700 group-hover:border-2 group-hover:border-white p-2 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-gray-700  group-hover:fill-white"
            ></path>
          </svg>
          <span className="absolute inset-0 w-0 transition-all duration-700 group-hover:w-full bg-emerald-500 rounded-xl text-white  -z-10"></span>
        </button>
      </div>
    );
  };
  
  export default Button;
  