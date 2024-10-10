
import { useQuery } from "@tanstack/react-query";
import { useContext} from "react";
import { AuthContext } from "../providers/AuthProviders";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem('access-token');
  
  console.log('User:', user);
  console.log('Token:', token);

  const { refetch, data: carts = [], isLoading } = useQuery({
    queryKey: ['carts', user?.email],
    enabled: !!user && !!token, 
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      return res.json();
    }
  });

  return [carts, refetch, isLoading];
};
export default useCart;


  
//   const [carts, setCart] = useState([]);
//   const {user} = useAuth()

//   useEffect(() => {
//     fetch(`http://localhost:5000/carts?email=${user?.email}`)
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         setCart(data)
//     })
//   }, [user])
  
//   return[carts]


// }

// export default useCart;