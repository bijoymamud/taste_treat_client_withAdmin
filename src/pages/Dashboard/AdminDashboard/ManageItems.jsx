import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { RiHeartAddFill } from "react-icons/ri";
import { useState } from "react";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [allItems, setAllItems] = useState([
    {
      id: 1,
      name: 'In-Betweener',
      description: 'Bigger and better than Just-A-Beginner, with cheddar cheese and diced ham.',
      image: 'https://d3iiunu4hwm6x4.cloudfront.net/images/transforms/Menu-Items/_menuItemTransformWebp/3614/HAP_Web-Menu_Salads_In-Betweener.webp',
      price: 15,
      category: 'Salad',
    },
    {
      id: 2,
      name: 'Chicken Bacon Ranch',
      description: 'Grilled chicken breast cooked with bacon and mozzarella, topped with lettuce, tomato.',
      image: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
      price: 18,
      category: 'Dessert',
    },
    {
      id: 3,
      name: 'Valtori Pizza',
      description: 'Bigger and better than Just-A-Beginner, with cheddar cheese and diced ham.',
      image: 'https://valtoripizzakitchen.com/wp-content/uploads/2021/03/pizzeria-template-menu-pizza-img.png',
      price: 12,
      category: 'Pizza',
    },
    {
      id: 4,
      name: 'Soupy Noodles',
      description: 'Bigger and better than Just-A-Beginner, with cheddar cheese and diced ham.',
      image: 'https://purepng.com/public/uploads/large/soupy-noodles-vfk.png',
      price: 15,
      category: 'Soup',
    },
    {
      id: 5,
      name: 'Cold Drinks',
      description: 'Bigger and better than Just-A-Beginner, with cheddar cheese and diced ham.',
      image: 'https://img.pikbest.com/png-images/20240515/coca-cola-red-drinks-splash-_10565257.png!sw800',
      price: 10,
      category: 'Drinks',
    },
  ]);

  const deleteItem = (id) => {
    const updatedItems = allItems.filter((item) => item.id !== id);
    setAllItems(updatedItems);
  };

  return (
    <section>
      <h1 className="px-5 text-2xl font-bold pb-5">Manage Items:</h1>

      <div className="grid grid-cols-3 gap-5 p-5">
        {allItems.map((item) => (
          <div key={item.id}>
            <div className="card bg-base-100 drop-shadow-xl relative">
              <div className="absolute top-2 right-2 flex flex-col gap-3 items-end ">
                <RiHeartAddFill
                            className="text-xl hover:text-green-600 cursor-pointer" />
                        
                <FaTrashAlt
                  className="cursor-pointer text-red-600"
                  onClick={() => deleteItem(item.id)}/>
                        
                 
                  <Link to="/dashboard/editItems">
                        <FaPencilAlt className="cursor-pointer" />
                      </Link>

                
                        
              </div>
              <figure>
                <img
                  className="h-[160px] mt-2  object-cover"
                  src={item.image}
                  alt="item img"
                />
              </figure>
                 <div className="px-3 pt-10 pb-5">
                     <div className="flex justify-between pb-2"> 
                        <h2 className="card-title">{item.name}</h2>
                        <h2 className="card-title text-amber-600">${item.price}</h2>

                        </div>
                <p className="text-sm text-gray-500">{item.description}</p>
                <p className="mt-3 text-sm font-extrabold">
                  Category:{' '}
                  <span className="text-amber-600 font-semibold">
                    {item.category}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ManageItems;
