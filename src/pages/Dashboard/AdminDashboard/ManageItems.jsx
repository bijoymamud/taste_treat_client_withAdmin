
const ManageItems = () => {

    const allItems = [
        {
            id: 1,
            name: 'In-Betweener',
            description: 'Bigger and better than Just-A-Beginner, with cheddar cheese and diced ham.',
            image: 'https://d3iiunu4hwm6x4.cloudfront.net/images/transforms/Menu-Items/_menuItemTransformWebp/3614/HAP_Web-Menu_Salads_In-Betweener.webp',
            price: 15

        },
        {
            id: 2,
            name: 'Chicken Bacon Ranch',
            description: 'Grilled chicken breast cooked with bacon and mozzarella, topped with lettuce, tomato.',
            image: 'https://png.pngtree.com/png-vector/20240710/ourmid/pngtree-burger-with-floating-ingredient-png-image_13054386.png',
            price: 8

        },
        {
            id: 3,
            name: 'In-Betweener',
            description: 'Bigger and better than Just-A-Beginner, with cheddar cheese and diced ham.',
            image: 'https://d3iiunu4hwm6x4.cloudfront.net/images/transforms/Menu-Items/_menuItemTransformWebp/3614/HAP_Web-Menu_Salads_In-Betweener.webp',
            price: 12

        },
        {
            id: 4,
            name: 'In-Betweener',
            description: 'Bigger and better than Just-A-Beginner, with cheddar cheese and diced ham.',
            image: 'https://d3iiunu4hwm6x4.cloudfront.net/images/transforms/Menu-Items/_menuItemTransformWebp/3614/HAP_Web-Menu_Salads_In-Betweener.webp',
            price: 15

        },
        {
            id: 5,
            name: 'In-Betweener',
            description: 'Bigger and better than Just-A-Beginner, with cheddar cheese and diced ham.',
            image: 'https://d3iiunu4hwm6x4.cloudfront.net/images/transforms/Menu-Items/_menuItemTransformWebp/3614/HAP_Web-Menu_Salads_In-Betweener.webp',
            price: 10

        },
    ];

  return (
    <section>
          <h1 className="px-5 text-2xl font-bold pb-5">Manage Items :</h1>

          <div className="grid grid-cols-3 gap-5 p-5">
              {
                  allItems.map((item) => <div key={item.id}>
                      <div className="card bg-base-100  drop-shadow-xl">
                            <figure>
                              <img
                                    className="h-[160px] mt-2"
                                    src={item.image}
                                    alt="item img" />
                            </figure>
                    <div className="px-5 pt-10 pb-5">
                            <h2 className="card-title">
                            {item.name}
                            </h2>
                              <p className="text-sm text-gray-500">{ item.description}</p>
                    <div className="card-actions justify-end">
                  
    </div>
  </div>
</div>
                  </div>)
              }
          </div>
          
    </section>
  )
}

export default ManageItems
