1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

 A - filter, map, and forEach. object.assign

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

 A - when someone interacts with an application actions are created(from events) which are then passed into reducers which are used to update state. The store is what holds the application's state.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

 A - Application state differs from component state because props can be passed with the connect function to avoid prop drilling.     Application state should be used when the application is or has the potential to expand while Component state should be used     for small apps.

1.  What is middleware?

 A - middleware are functions that take in actions before they are passed to the reducers.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

 A - redux-thunk allows us to use dispatch and asyncronous function calls

1.  Which `react-redux` method links up our `components` with our `redux store`?

 A - the connect() method