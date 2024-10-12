import { Link } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../hooks/useMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Button from "../../../components/Button/Button";


const PopularMenu = () => {
  const [menu] = useMenu();

  const popular = menu.filter(infoDessert => infoDessert.category === "popular")
  // console.log("this is popular menu", popular);




  return (
    <section className="pb-10">

      <SectionTitle subHeading={"Check it Out"}
        heading={"FROM OUR MENU"}>
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-5 my-20">
        {
          popular.map((singleItem) => <MenuItems

            key={singleItem._id}
            singleItem={singleItem}

          ></MenuItems>)
        }
      </div>
      

      <Link to='/order/salad'>
        <Button  value={ 'View Full Menu'} />
      </Link>
      

    </section>
  );
};

export default PopularMenu;