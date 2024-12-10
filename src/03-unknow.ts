let anyVar: any;

anyVar = true;
anyVar = undefined;
anyVar = null;
anyVar = 10;
anyVar = 'Hello';
anyVar = [];
anyVar = {};

anyVar.toUpperCase(); // No error

let unknowVar: unknown;
unknowVar = true;
unknowVar = undefined;
unknowVar = null;
unknowVar = 10;
unknowVar = 'Hello';
unknowVar = [];
unknowVar = {};

// unknowVar.toUpperCase(); // Error: Property 'toUpperCase' does not exist on type 'unknown'.

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase(); // No error
}


// let isNew: boolean = unknowVar; // Error: Object is of type 'unknown'.

if (typeof unknowVar === 'boolean') {
  let isNew: boolean = unknowVar; // No error
}
