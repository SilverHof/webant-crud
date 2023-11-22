// TODO Interfaces
// **When to use interface
// ? Use interface for all object types where using type is not required
// ? Use interface when you want to take advantage of declaration merging

// ** OBJECT DESCRIBE
// ! priority in interface
interface UserInterface {
   name: string,
   age: number,
   isMarried?: boolean,
   [key: string]: any,
}

const user: UserInterface = {
   name: "John",
   age: 34,
}


// ** FUNCTION DESCRIBE 
// ! priority in type alias
interface SetUserInterface {
   (x: string, y: string): string,
}

const functionForInterface: SetUserInterface = (x: string, y: string): string => {
   return x + y;
}


// ** EXTEND
type DataType = {
   count: number,
   authors: (string | null)[],
}

interface DataInterface {
   url: string,
   result: "success" | "failed",
}

// ? interface extends interface
interface ResponseInterface extends DataInterface {
   data: (string)[]
}

// ? interface extends type alias
interface DataInterfaceType extends DataType {
   authors: (string)[]
}


// ** DECLARATION MERGING
// ! works only with interfaces
interface Point {
   x: number,
}

interface Point {
   y: number,
}

const point: Point = { x: 12, y: -14 }

   
// ** CLASS IMPLEMENTS
interface Task {
   name: string,              // property
   run(arg: any): void,       // method
   stop(arg: any): void,      // method
}

class AdminTask implements Task {
   name: string;
   constructor(name: string) {
      this.name = name;
   }

   run(arg: any): void {
      console.log(`Run the task with ${arg}`);
   }

   stop(arg: any): void {
      console.log(`Stop the task${arg}`);
   }
}