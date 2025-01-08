import React, { useState } from 'react';

const menuCategories = [
  {
    name: 'Starters',
    items: [
      {
        name: 'Samosa Chaat',
        description: 'Crispy samosas topped with tangy tamarind chutney and yogurt',
        price: '₹60',
        image: 'https://masalaandchai.com/wp-content/uploads/2021/10/Samosa-Chaat-with-Chai.jpg'
      },
      {
        name: 'Aloo Tikki',
        description: 'Spiced potato patties served with chutneys',
        price: '₹60',
        image: 'https://www.funfoodfrolic.com/wp-content/uploads/2020/06/tikki-thumbnail.jpg'
      },
      {
        name: 'Dahi Puri',
        description: 'Crispy puris filled with yogurt, chutneys, and spices',
        price: '₹90',
        image: 'https://cdn3.foodviva.com/static-content/food-images/snacks-recipes/dahi-puri/dahi-puri.jpg'
      },
      {
        name: 'Vada Sambar',
        description: 'Ceispy vadas with sambar and coconut chutney',
        price: '₹120',
        image: 'https://vegecravings.com/wp-content/uploads/2018/02/Medu-Vada-Recipe-Step-By-Step-Instructions.jpg'
      },
      
    ]
  },
  {
    name: 'Main Courses',
    items: [
      {
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tender chicken pieces',
        price: '₹350',
        image: 'https://www.marionskitchen.com/wp-content/uploads/2024/02/20240212_MK_Easiest-Butter-Chicken-From-Scratch-8.webp'
      },
      {
        name: 'Hyderabadi Biryani',
        description: 'Aromatic basmati rice cooked with marinated meat and spices',
        price: '₹300',
        image: 'https://i.pinimg.com/originals/2c/ca/d5/2ccad553273808b29d4b05573eb5b7cb.jpg'
      },
      {
        name: 'Palak Paneer',
        description: 'Paneer cubes in a rich spinach gravy',
        price: '₹300',
        image: 'https://beextravegant.com/wp-content/uploads/2021/08/Palak-paneer-7-edited.jpg'
      },
      {
        name: 'Chole Bhature',
        description: 'Spicy chickpea curry served with deep-fried bread',
        price: '₹200',
        image: 'https://media.vogue.in/wp-content/uploads/2020/08/chole-bhature-recipe.jpg'
      },
     
    ]
  },
  {
    name: 'Desserts',
    items: [
      {
        name: 'Gulab Jamun',
        description: 'Soft milk-solid-based dumplings soaked in sugar syrup',
        price: '₹100',
        image: 'https://aartimadan.com/wp-content/uploads/2020/11/milk-powder-gulab-jamuns.jpg'
      },
      {
        name: 'Ras Malai',
        description: 'Cottage cheese dumplings in sweetened milk, flavored with cardamom',
        price: '₹120',
        image: 'https://madhurasrecipe.com/wp-content/uploads/2023/03/Rasmalai-Featured-Resized.jpg'
      },
      {
        name: 'Imarti Jalebi',
        description: 'Deep-fried spirals soaked in saffron-infused sugar syrup',
        price: '₹100',
        image: 'https://madhurmilanvns.com/admin/upload/other_images/1647342663.1484-965.jpg'
      },
      {
        name: 'Mataka Kheer',
        description: 'Rice pudding flavored with cardamom and garnished with nuts',
        price: '₹150',
        image: 'https://palatesdesire.com/wp-content/uploads/2022/01/matar-kheer-recipe@palates_Desire.jpg'
      }
    ]
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].name);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-12">Our Menu</h2>
        
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.name
                  ? 'bg-black text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {menuCategories
            .find((cat) => cat.name === activeCategory)
            ?.items.map((item) => (
              <div
                key={item.name}
                className="group relative overflow-hidden rounded-lg shadow-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <span className="text-lg">{item.price}</span>
                  </div>
                  <p className="text-gray-200 mt-2">{item.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
