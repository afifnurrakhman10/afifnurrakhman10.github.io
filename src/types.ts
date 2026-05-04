export type ViewType = 'overview' | 'profile' | 'chat' | 'info' | 'emergency' | 'homecare' | 'wellness';

export interface UserProfile {
  id: string;
  name: string;
  role: 'self' | 'family';
  avatar?: string;
  gender: 'Laki-laki' | 'Perempuan';
  age: number;
}

export interface HealthData {
  date: string;
  bloodPressure: string;
  heartRate: number;
  weight: number;
  glucose?: number;
}
