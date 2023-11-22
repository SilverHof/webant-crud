export class Person {
   // ** CLASS PROPERTIES

   firstName: string;
   lastName: string;


   // ** access modificators
   // ? public modifier allows accessible from all locations. Default parameter for property
   // ? private modifier only accessible within class
   // ? protected modifier is protected and only accessible within class and its subclasses
   // ? readonly modifier is a read-only property

   public address: string;
   private passport: string;
   protected snils: string;
   readonly inn: string;

   // ** default properties
   private height: number = 189;
   private weight: number = 89;


   // ** CONSTRUCTOR
   // ? constructor method is a special method of a class for creating and initializing an object instance of that class

   constructor(
      firstName: string,
      lastName: string,
      address: string,
      passport: string,
      snils: string,
      inn: string
   ) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.passport = passport;
      this.snils = snils;
      this.inn = inn;
   }

   // ** METHODS
   speak() {
      console.log(`I am ${this.firstName} ${this.lastName}`);
   }

   walk() {
      console.log('Go forward!');
   }

   run() {
      console.log(`Run ${this.firstName}, Run`);
   }

   parameters() {
      console.log(`My heigth is ${this.height} and weight is ${this.weight}`);
      
   }

   // ** GETTERS
   public get getFirstName() {
      return this.firstName;
   }

   public get getLastName() {
      return this.lastName;
   }

   public get getAddress() {
      return this.address;
   }

   public get getPassport() {
      return this.passport;
   }

   public get getSnils() {
      return this.snils;
   }

   public get getInn() {
      return this.inn;
   }

   // ** SETTERS
   public set setFirstName(newFirstName: string) {
      this.firstName = newFirstName;
   }

   public set setLastName(newLastName: string) {
      this.lastName = newLastName;
   }

   public set setAddress(newAddress: string) {
      this.address = newAddress;
   }

   public set setPassport(newPassport: string) {
      this.passport = newPassport;
   }

   public set setSnils(newSnils: string) {
      this.snils = newSnils;
   }

   // ! Cannot assign to 'inn' because it is a read-only property
   // public set setInn(newInn: string) {    
   //    this.inn = newInn;
   // }
}

// ** CLASS HAVE A FUNCTION TYPE


export class PersonMinimize {
   // ** minimization of class properties
   // ? syntax:  
   // ? modifier valueName: someType

   constructor(
      public name: string,
      public age: number,
      private passport: string = "3223 153253"
   ) {

   }

   speak() {
      console.log(`I am ${this.name}, my passport info is ${this.passport}`);
   }

   public get getFirstName() {
      return this.name;
   }

   public set setFirstName(newName: string) {
      this.name = newName;
   }
}


export class PersonInheritance {
   private _firstName: string;
   private _lastName: string;
   private _age: number;

   static nationality: string = "Russian";
   
   constructor(
      _firstName: string,
      _lastName: string,
      _age: number,
   ) {
      this._firstName = _firstName;
      this._lastName = _lastName;
      this._age = _age;
   }

   static sayNationality() {
      console.log(`I am ${this.nationality}`);
   }

   // ** METHODS
   public walk(): void {
      console.log('Now I am walking');
   }

   private circulateBlood(): void {
      console.log('Circulate blood');
   }

   // ** GETTERS
   public get getFirstName() {
      return this._firstName;
   }

   public get getLastName() {
      return this._lastName;
   }

   public get getAge() {
      return this._age;
   }

   // ** SETTERS
   public set setFirstName(newFirstName: string) {
      this._firstName = newFirstName;
   }

   public set setLastName(newLastName: string) {
      this._lastName = newLastName;
   } 

   public set setAge(newAge: number) {
      this._age = newAge;
   }
}

export class Employee extends PersonInheritance {
   private _snils: string;
   private _inn: string;
   private _passport: string;

   constructor(
      _firstName: string, 
      _lastName: string, 
      _age: number, 
      _snils: string, 
      _inn: string, 
      _passport: string
   ) 
   {
      super(_firstName, _lastName, _age);
      this._snils = _snils;
      this._inn = _inn;
      this._passport = _passport; 
   }
   
   // ** METHODS
   public work(): void {
      console.log('Now I am working');
   }

   // ** GETTERS
   public get getSnils() {
      return this._snils;
   }

   public get getInn() {
      return this._inn;
   }

   public get getPassport() {
      return this._passport;
   }

   // ** SETTERS
   public set setSnils(newSnils: string) {
      this._snils = newSnils;
   }

   public set setInn(newInn: string) {
      this._inn = newInn;
   }

   public set setPassport(newPassport: string) {
      this._passport = newPassport;
   }
}

export class Developer extends Employee {
   private _level: "junior" | "middle" | "senior" | "team-lead";
   private _languange: "JavaScript" | "TypeScript" | "Python" | "Golang" | "C++" | "Java" | "Kotlin";
   private _experience: "less 1 year" | "1-3 years" | "3-6 years" | "more than 6 years";

   constructor(
      _firstName: string, 
      _lastName: string, 
      _age: number, 
      _snils: string, 
      _inn: string, 
      _passport: string, 
      _level: "junior" | "middle" | "senior" | "team-lead", 
      _language: "JavaScript" | "TypeScript" | "Python" | "Golang" | "C++" | "Java" | "Kotlin", 
      _experience: "less 1 year" | "1-3 years" | "3-6 years" | "more than 6 years"
   ) 
   {
      super(_firstName, _lastName, _age, _snils, _inn, _passport);
      this._level = _level;
      this._languange = _language;
      this._experience = _experience;
   }

   // ** METHODS
   public programming(): void {
      console.log('Now I am programming');
   }

   // ** GETTERS
   public get getLevel() {
      return this._level;
   }

   public get getLanguage() {
      return this._languange;
   }

   public get getExperience() {
      return this._experience;
   }

   // ** SETTERS
   public set setLevel(newLevel: "junior" | "middle" | "senior" | "team-lead") {
      this._level = newLevel;
   }

   public set setLanguange(newLanguange: "JavaScript" | "TypeScript" | "Python" | "Golang" | "C++" | "Java" | "Kotlin") {
      this._languange = newLanguange;
   }

   public set setExperience(newExperience: "less 1 year" | "1-3 years" | "3-6 years" | "more than 6 years") {
      this._experience = newExperience;
   }
}


export abstract class CarAbstract {
   constructor(private model: string, private year: number) {
      
   }

   abstract showSpeed(): void;
   abstract showGaz(): void;
}

export class BMW extends CarAbstract {
   currentSpeed: number;
   currentGaz: number
   constructor(model: string, year: number, currentSpeed: number, currentGaz: number) {
      super(model, year);
      this.currentSpeed = currentSpeed;
      this.currentGaz = currentGaz;
   }

   showSpeed(): void {
      console.log(`Current speed - ${this.currentSpeed}`);
   }

   showGaz(): void {
      console.log(`Current gaz - ${this.currentGaz}`);
   }
}