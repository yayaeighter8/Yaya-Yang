

export interface Medication {
  id: string;
  name: string;
  time: string;
  taken: boolean;
  type: 'morning' | 'noon' | 'evening' | 'night';
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isThinking?: boolean;
}

export interface WeatherData {
  location: string;
  temp?: string;
  condition?: string;
  advice?: string;
}

export interface WeatherOutfit {
  location: string;
  temp: string;     // e.g. "26°C"
  weather: string;  // e.g. "多雲"
  items: string[];  // e.g. ["tshirt", "jacket"]
  shortAdvice: string; // e.g. "舒適涼爽"
}

export type TabView = 'daily' | 'tools' | 'notes' | 'secretary';

export interface TransportQuery {
  type: 'TRA' | 'MRT' | 'BUS';
  start: string;
  end: string;
}

export interface Note {
  id: string;
  title: string;
  content: string;
  date: string; // ISO string or formatted date string
  timestamp: number;
}

export interface TransportItem {
  type: string;       // e.g., 區間快, 自強
  trainCode: string;  // e.g., 1007
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: string;
}

export interface ExerciseItem {
  id: string;
  type: string;
  minutes: number;
}

export interface DailyRecord {
  date: string;       // YYYY-MM-DD
  water: number;      // cc
  medsTaken: number;  // count
  medsTotal: number;  // count
  exercises?: ExerciseItem[]; // Array of exercises
  exerciseType?: string; // Legacy support
  exerciseMinutes?: number; // Legacy support
  isRestDay?: boolean;
}

export interface FoodItem {
  name: string;
  rating: string;
  mustEat: string[];
  reason: string;
  imageUrl?: string; 
  address?: string;
}

export interface HoroscopeData {
  overall_score: number; // 1-5
  love_score: number;    // 1-5
  work_score: number;    // 1-5
  wealth_score: number;  // 1-5
  lucky_color: string;
  brief_advice: string;
}

export interface WeightRecord {
  date: string; // MM/DD
  fullDate: string; // YYYY-MM-DD for sorting
  weight: number;
  bodyFat?: number; // %
  bmr?: number; // kcal
}

export interface TarotData {
  cardName: string; // e.g. "愚者"
  orientation: 'Upright' | 'Reversed'; // 正位 or 逆位
  meaning: string;
  advice: string;
}