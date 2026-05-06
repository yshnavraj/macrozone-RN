import AsyncStorage from '@react-native-async-storage/async-storage';

export type Meal = {
   id: string;
   name: string;
   calories: number;
   protein: number;
   carbs: number;
   fat: number;
   createdAt: string;
}

const MEALS_KEY = 'meals';

export const getMeals = async (): Promise<Meal[]> => {
   const data = await AsyncStorage.getItem(MEALS_KEY);
   return data ? JSON.parse(data) : [];
}