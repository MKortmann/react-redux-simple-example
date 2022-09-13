# Simple Counter React Redux Example

This is a very basic project just to show the basics of react-redux to manage the store
It was a following along from this site: https://www.youtube.com/watch?v=CVpUuw9XSjY

# Redux

It is a state management tool that we can use in many different frameworks.
Is a central data store for all app data!
Any component can access data from it
Makes state management easy

## Parts/Cycle of redux

- Central Store: where the data is stored
- Subscription: components subscribe to changes / redux pass the data like props - to be able to get the changes made for itself or other component
- Dispatch action: components can dispatch actions to change any data in the store. So, action describe changes that we want to make
- Action: the action that is dispatched composed the type and the payload. Payload is any kind of data we want to pass along it
- Reducer: action is passed to reducer that update the state. Here is where the heavy lift is done.

## Advantages

- The store is imutable but you can change creating a complete new object. The REDUCER function is responsible to update it.
- It is a one way dataflow that is predictable and easy to test.

## Disadvantages

- too much boilerplate code
