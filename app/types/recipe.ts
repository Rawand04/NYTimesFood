export interface IRecipe {
  id: number;
  title: string;
  image: string;
  rating?: number;
  cuisine?: string;
  meal_type: string;
  duration?: string;
  userId: string;
}

export interface IWriters {
  title: string;
  image: string;
}

export interface ApiRecipe {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  rating: number;
  reviewCount: number;
  prepTimeMinutes: number;
  mealType: string;
  instructions: string;
}
