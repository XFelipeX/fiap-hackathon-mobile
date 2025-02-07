export interface Days {
  day: string;
  classes: Discipline[];
}

export interface Discipline {
  id:string;
  description: string;
  teacherId: string;
}