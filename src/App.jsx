import './App.css';
import MenuList from './components/MenuList';

const foodItems = [
  {
    itemName: "Caesar's Salad",
    description: "The original Caesar's Salad recipe",
    foodImage: 'https://bit.ly/2GJFu5W',
    price: 12,
    isFavorite: false
  },
  {
    itemName: 'Spaghetti Carbonara',
    description: "Better than your nonna's! All local and fresh ingredients",
    foodImage: 'https://bit.ly/2GBnz1n',
    price: 15,
    isFavorite: false
  },
  {
    itemName: 'Grilled Whole Fish',
    description: 'Fish of the day, grilled whole with a side of vegetables',
    foodImage: 'https://bit.ly/3d6iKsJ',
    price: 20,
    isFavorite: false
  },
  {
    itemName: 'Steak Florentine',
    description: 'Meat!',
    foodImage: 'https://fr.wikipedia.org/wiki/Bifteck_%C3%A0_la_florentine#/media/Fichier:Bistecca_alla_fiorentina-01.jpg',
    price: 30,
    isFavorite: false
  }
];

const App = () => {
  return (
    <div className="body">
      <h1>Wild Restaurant Menu</h1>
      <MenuList foodItems={foodItems} />
    </div>
  );
};

export default App;
