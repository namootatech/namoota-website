---
title: TypeScript & React Interview Notes (Simple English)
date: '2026-03-05'
author: 'Ayabonga Qwabi'
excerpt: Easy-English revision notes for TypeScript and React interviews, with clear examples and a quick checklist.
image: 'https://images.pexels.com/photos/14553713/pexels-photo-14553713.jpeg?cs=srgb&dl=pexels-bibekghosh-14553713.jpg&fm=jpg'
---

### What is TypeScript?

- TypeScript is a typed superset of JavaScript.
- Its a multi paradigm language that supports both functional and obect oriented programming
- It adds types to JavaScript (e.g., number, string, boolean, custom shapes).
- It helps catch errors before running the code (at compile time).
- It compiles back to JavaScript so browsers can understand it.

### Why TypeScript?

- Helps avoid bugs by checking code while you write it.
- Makes big projects easier to manage.
- Gives better developer tools: autocompletion, IntelliSense.
- Works well with modern frameworks like React, Angular, etc.

### Benefits of TypeScript

- Type safety (fewer runtime errors).
- Readability: Code is easier to understand.
- Refactoring: Safer to change code in large projects.
- Better tooling: autocomplete, hints, docs in editor.
- Scalability: Teams can work together more easily.

### Nominal Typing vs Structural Typing

- Nominal typing (like Java, C#): Two types are the same only if they have the same declared name.
- Structural typing (TypeScript): Two types are the same if they have the same structure/shape, even if their names are different.

Example:

```tsx
// Structural typing example
interface Person {
  name: string;
}
interface User {
  name: string;
}

let p: Person = { name: 'Aya' };
let u: User = p; // ✅ Works in TypeScript because shape is the same
```

### Difference Between Type and Interface

- Interface
  - Describes the shape of an object or class.
  - Can be merged (declaration merging).
  - Often used for objects and classes.
- Type
  - Can describe objects, unions, intersections, primitives.
  - More flexible, supports conditional types.
  - Cannot be merged.

Rule of thumb: Use interface for objects/classes, type for advanced use cases.

### Accessor Methods

- Special methods in classes: get and set.
- Used to control access to private variables.

Example:

```tsx
class Person {
  private _age: number = 0;

  get age() {
    return this._age;
  }

  set age(value: number) {
    if (value >= 0) this._age = value;
  }
}
```

### What is a Generic?

- A way to create reusable code that works with any type.
- Keeps type safety.

Example:

```tsx
function identity<T>(value: T): T {
  return value;
}

identity<string>('hello');
identity<number>(42);
```

### Utility Types (Examples)

- Partial<T> -> makes all properties optional.
- Pick<T, K> -> pick only some properties.
- Omit<T, K> -> exclude some properties.
- Readonly<T> -> makes properties read-only.

### any vs unknown vs never

- any: disables type checking (unsafe).
- unknown: safer than any, must check before use.
- never: type that never happens (like a function that always throws).

### Decorators

- Special functions you attach to classes or methods with @.
- Add extra behavior (like metadata or logging).
- Still experimental in TypeScript.

Example:

```tsx
function Log(target: any, property: string) {
  console.log(`Property ${property} was accessed.`);
}

class Example {
  @Log
  name!: string;
}
```

---

## 🔹 React

### React Virtual DOM

- Virtual DOM is a copy of the real DOM kept in memory.
- When state changes, React updates the virtual DOM first.
- React compares the new virtual DOM with the old one (diffing).
- Only the parts that changed are updated in the real DOM.
- This makes React fast.

### Functional vs Class Components

- Functional: simple functions, use hooks to handle state and lifecycle.
- Class: older style, extend React.Component and use lifecycle methods.
- Today, functional components are preferred.

### Props vs State

- Props: inputs from parent, read-only.
- State: internal data inside a component, can change with user actions.

### Controlled vs Uncontrolled Components

- Controlled: form inputs are controlled by React state.
- Uncontrolled: form inputs are handled by the DOM (using refs).

### Hooks

- useState: manage state inside functional components.
- useEffect: run side effects (e.g., fetch data, timers).
- useContext: share state without prop drilling.
- useReducer: manage complex state with reducer functions.

### Lifting State Up

- Moving state to a common parent so multiple children can share it.
- Parent passes state down via props.

### Context API vs Redux

- Both used for global state.
- Context API: simple, built into React, good for small apps.
- Redux: more structured (actions, reducers, middleware), good for big apps.

### Keys in React

- Unique IDs used when rendering lists.
- Help React track items between renders.

### Error Boundaries

- Special components that catch errors in child components.
- Prevent whole app from crashing.
- Implemented with componentDidCatch and getDerivedStateFromError.

### Performance Optimization in React

- Code splitting & lazy loading.
- React.memo, useMemo, useCallback.
- Avoid unnecessary re-renders.
- Virtualize long lists.

### React Types

- Element types: JSX elements like <div> or custom components.
- Component types: FunctionComponent (FC), ClassComponent.
- Props types: Define what props a component expects.
- Event types: e.g., React.MouseEvent, React.ChangeEvent.

---

## Quick Revision Checklist

- TypeScript = typed superset of JS.
- Benefits = safer, better tooling, easier teamwork.
- Structural typing = by shape, not by name.
- Type vs Interface = merging vs flexibility.
- Accessors = get/set methods in classes.
- Generics = reusable code with type safety.
- any vs unknown vs never = safety levels.
- Decorators = metadata functions with @.
- React Virtual DOM = fast updates using diffing.
- Props vs State = external vs internal data.
- Controlled vs Uncontrolled = React state vs DOM state.
- Hooks = state, effects, context, reducer.
- Context vs Redux = simple vs powerful.
- Keys = help React track list items.
- Error Boundaries = catch errors, fallback UI.
- Optimizations = memoization, lazy load, virtualization.

---
