// TODO Types

// ** when to use types?
// ? Use type when defining an alias for primitive types (string, boolean, number, bigint, symbol, etc)
// ? Use type when defining tuple types
// ? Use type when defining a union
// ? Use type when defining function types
// ? Use type when trying to overload functions on object via composition
// ? Use type when needing to take advantage of mapped types

// ** PRIMITIVE ALIAS
// ! only type alias
type FirstName = string;
type Phone = number;
type haveKids = boolean;
type NotDefined = undefined;
type Null = null;
type Bigint = bigint;
type Sybmol = symbol;

interface PremitiveParameters {
   firstName: FirstName,
   phone: Phone,
   haveKids: isMarried,
   notDefined: NotDefined,
   null: Null,
   bigint: Bigint,
   symbol: Symbol,
}


// ** TUPLE
// ! only type alias
type TupleForType = [number, string];
const TupleType: TupleForType = [12, "John"];


// ** UNION TYPES
// ! only type alias
type UnionType = number | string | boolean;
let unionTypeValue: UnionType;
unionTypeValue = 124;
unionTypeValue = "dude";
unionTypeValue = true;


// ** OBJECT DESCRIBE
// ! priority in interfaces
type UserType = {
   name: string,
   age: number,
}

const someUser: UserType = { name: "John", age: 32 };


// ** FUNCTION DESCRIBE
// ! priority in type aliases
type setUserType = (x: number, y: number) => number;
const functionType: setUserType = (x: number, y: number): number => {
   return x + y;
}

// ** EXTEND 
type DataTypes = {
   count: number,
   authors: (string | null)[],
}

interface DataInterface {
   url: string,
   result: "success" | "failed",
}
   
// ? type alias extends type alias
type ResponseTypes = DataTypes & { data: (string)[] }
const someData1: ResponseTypes = {
   count: 32,
   authors: ["Rowling", "Tolkien", null],
   data: ["The Hobbit", "Harry Potter"],
}

// ? type alias extends interface
type DataTypeInterface = DataInterface & { headers: { name: string, CORS: string }}

const someData2: DataTypeInterface = {
   url: "***.com",
   result: "success",
   headers: {
      name: "OREO",
      CORS: "some cors"
   }
}