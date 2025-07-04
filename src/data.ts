import {Food} from './app/share/models/Food';
import {Tag} from './app/share/models/Tag';

export const sample_foods: Food[] =[{
    id: '1',
    name: 'Pizza Margherita',
    price: 8.99,
    tags: ['italian', 'vegetarian', 'cheesy'],
    favorite: true,
    stars: 4.5,
    imageUrl: 'assets/hamburguesa.jpg',
    origins: ['Italy'],
    cookTime: '30 minutes'
  },
  {
    id: '2',
    name: 'Sushi Roll',
    price: 12.5,
    tags: ['japanese', 'seafood', 'healthy'],
    favorite: false,
    stars: 4.8,
    imageUrl: 'assets/hamburguesa.jpg',
    origins: ['Japan'],
    cookTime: '25 minutes'
  },
  {
    id: '3',
    name: 'Tacos al Pastor',
    price: 6.99,
    tags: ['mexican', 'spicy', 'street-food'],
    favorite: true,
    stars: 4.3,
    imageUrl: 'assets/hamburguesa.jpg',
    origins: ['Mexico'],
    cookTime: '15 minutes'
  },
  {
    id: '4',
    name: 'Cheeseburger',
    price: 9.5,
    tags: ['american', 'fast-food', 'beef'],
    favorite: true,
    stars: 4.7,
    imageUrl: '/assets/hamburguesa.jpg',
    origins: ['United States'],
    cookTime: '20 minutes'
  },
  {
    id: '5',
    name: 'Pad Thai',
    price: 10.75,
    tags: ['thai', 'noodles', 'peanut'],
    favorite: false,
    stars: 4.6,
    imageUrl: '/assets/hamburguesa.jpg',
    origins: ['Thailand'],
    cookTime: '30 minutes'
  }
]; 

export const sample_tags: Tag[] = [
  { name: "thai", count: Math.floor(Math.random() * 100) },
  { name: "noodles", count: Math.ceil(Math.random() * 100) },
  { name: "peanut", count: Math.round(Math.random() * 100) },
  { name: "american", count: Math.floor(Math.random() * 100) },
  { name: "fast-food", count: Math.ceil(Math.random() * 100) },
  { name: "beef", count: Math.round(Math.random() * 100) },
  { name: "mexican", count: Math.floor(Math.random() * 100) },
  { name: "spicy", count: Math.ceil(Math.random() * 100) },
  { name: "street-food", count: Math.round(Math.random() * 100) },
  { name: "japanese", count: Math.floor(Math.random() * 100) },
  { name: "seafood", count: Math.ceil(Math.random() * 100) },
  { name: "healthy", count: Math.round(Math.random() * 100) },
  { name: "italian", count: Math.floor(Math.random() * 100) },
  { name: "vegetarian", count: Math.ceil(Math.random() * 100) },
  { name: "cheesy", count: Math.round(Math.random() * 100) }
];
