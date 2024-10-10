import React from "react";

const OrdersTable = () => {
  return (
    <div className="py-10">
      <div className="flex justify-between items-center mb-4 p-4">
        <h2 className="text-lg font-semibold">Recent Orders</h2>
      </div>
      
      <div className="pl-4"> {/* Added max width and centered the table */}
        <table className="table w-full">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-200">
              <th>Order ID</th>
              <th>Date</th>
              <th>Product</th>
              <th>Customer Name</th>
            
              <th >Phone No.</th>
              <th>Address</th>
              <th>Payment Type</th>
              <th >Status</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            <tr>
              <td className="text-xs">#RB5625</td>
              <td className="text-xs">29/4/2024</td>
              <td><img className="w-[60px]" src="https://t3.ftcdn.net/jpg/00/51/21/24/360_F_51212489_T5VPYoaeyKQc3XShEjJAn5Xng6DbBjLV.jpg" alt="salad" /></td>
              <td className="text-xs">Anna M. Hines</td>
              <td className="text-xs ">(+1)1564-261</td>
              <td className="text-xs">Burr Ridge/Illinois</td>
              <td className="text-xs">Credit Card</td>
              <td className="text-xs"><span className="badge badge-success text-xs text-gray-100">Completed</span></td>
            </tr>
            <tr>
              <td className="text-xs">#RB9652</td>
              <td className="text-xs">25/3/2024</td>
              <td><img className="w-[60px]" src="https://static.vecteezy.com/system/resources/thumbnails/029/091/208/small/watercolor-summer-drinks-clipart-set-on-transparent-background-ai-generated-png.png" alt="drinks" /></td>
              <td className="text-xs">JH. Fritsche</td>
              <td className="text-xs">(+2)1179-759</td>
              <td className="text-xs">SULLIVAN/Kentucky</td>
              <td>Credit Card</td>
              <td><span className="badge badge-success text-gray-100 text-xs">Completed</span></td>
            </tr>
            <tr>
              <td className="text-xs">#RB5984</td>
              <td className="text-xs">25/8/2024</td>
              <td><img className="w-[60px]" src="https://www.pizzaromaplus.com/images/hero-5-img.png" alt="Pizza" /></td>
              <td className="text-xs">Peter T. Smith</td>
              <td className="text-xs">(+33)5187-93</td>
              <td className="text-xs">Yreka/California</td>
              <td className="text-xs">Pay Pal</td>
              <td><span className="badge badge-success text-xs text-gray-100">Completed</span></td>
            </tr>
            <tr>
              <td className="text-xs">#RB3625</td>
              <td className="text-xs">21/10/2024</td>
              <td><img className="w-[60px]" src="https://www.pngarts.com/files/1/Ice-Cream-Desserts-Transparent-Background-PNG.png" alt="dessert" /></td>
              <td className="text-xs">Emmanuel J. </td>
              <td className="text-xs">(+3)3353-637</td>
              <td className="text-xs">Atlanta/Georgia</td>
              <td className="text-xs">Pay Pal</td>
              <td><span className="badge badge-warning  text-xs">Processing</span></td>
            </tr>
            <tr>
              <td className="text-xs">#RB8652</td>
              <td className="text-xs">18/9/2024</td>
              <td><img className="w-[60px]" src="https://pngimg.com/uploads/soup/soup_PNG71.png" alt="soups" /></td>
              <td className="text-xs">William J. Cook</td>
              <td className="text-xs">(+9)5446-150</td>
              <td className="text-xs">Rosenberg/Texas</td>
              <td className="text-xs">Credit Card</td>
              <td><span className="badge badge-warning  text-xs">Processing</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersTable;
