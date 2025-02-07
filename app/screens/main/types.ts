export interface Teacher{
  id:string;
  name:string;
  email:string;
  subjects:string[];
  tel:string;
  code:string;
  birthDay:Date;
}

export interface Lesson{
  id:string;
  timeDate:Date;
  subject:string;
  teacherId:string;
  status:string;
  files:string[];
  code:string;
}