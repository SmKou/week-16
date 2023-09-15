# Week 16

By: Stella Marie

Week 16 of Epicodus: Help queue demo project done in different JS frameworks.

## Description

Help queue is a ticket manager for Epicodus students to report issues to their teachers. Consists of CRUD functionality for tickets. Each version of Help Queue is based on the original project modified from the Epicodus lessons on LearnHowToProgram to use Typescript. All other versions from the first are scaffolded using Vite.

**Frameworks**
- React
- Svelte
- SvelteKit
- Vue

### Typescript Notes

Refer [AWS: Typescript Best Practices](https://docs.aws.amazon.com/prescriptive-guidance/latest/best-practices-cdk-typescript-iac/typescript-best-practices.html)
- Destructure on properties
- Define standard naming conventions
- Don't use var keyword
- Consider using ESLint and Prettier
- Use access modifiers

**Describe data**
```ts
type Result = "success" | "failure"
function verify(result: Result) {
    return result === 'success' ? "Passed" : "Failed"
}
```

**Use enums**
Enum: Set of named constants
```ts
enum Direction {
    Up = 1, // No init = 0
    Down    // auto-incremented,
    Right = getValue()  // uninitialized must be first
}
enum Directions {
    Up = "UP",
    Yes = 1
}
```
- Considered constant if:
  - First member in enum
  - Has no initializer
  - Preceding member(s): numeric constant(s)

Access:
```ts
enum UserResponse { No = 0, Yes = 1 }
function respond(recipient: string, message: UserResponse): void {...}
respond("Princess Peach", UserResponse.Yes)
```

**Use interfaces**
```ts
interface Props {
    name: string,
    region: string,
    ...
}
interface ExtendedProps extends Props {
    firstName: string,
    lastName: string
}
```

**Use abstract factories**
Refer [Abstract Factories in Typescript](https://refactoring.guru/design-patterns/abstract-factory/typescript/example)
```ts
interface AbstractFactory {
    createProductA(): AbstractProductA,
    createProductB(): AbstractProductB
}
class ConcreteFactory implements AbstractFactory {
    public createProductA(): AbstractProductA {
        return new ConcreteProductA();
    }
    public createProductB(): AbstractProductB {
        return new ConcreteProductB();
    }
}
```

Refer [Do's and Don'ts](https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
1.  DO NOT: use object types of primitives: Number, String, Boolean, Symbol, Object
    DO: use primitives: number, string, boolean, symbol
2.  DO NOT: use generic type without its type parameter
3.  DO NOT: use any as a type
    DO: use any if migrating from Javascript to Typescript, or unknown if uncertain
4.  DO NOT: use any as return type for ignored callback value
    DO: use void ```() => void```
5.  DO NOT: use optional parameters in callbacks unless necessary
```ts
interface Fetcher {
    getObj(done: (data: unknown, elapsedTime?: number) => void):void;
}
// should be
interface Fetcher {
    getObj(done (data: unknown, elapsedTime: number) => void): void;
}
```
Continue reading another time...

## Complete Setup

- Navigate to project repo
- Either fork or clone project
- Install dependencies: ```npm i```
- Either use ```npm run start``` to run build and launch the dev server, or use ```npm run view``` to run build and launch the preview server

## Known Bugs

**React TS**
- Change reusable form: edit form requires filled fields
- Reorganize buttons, handlers and values
- No data validation (enables empty field submission)

Please report any issues in using the apps included in this project.

## **License**

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Sm Kou