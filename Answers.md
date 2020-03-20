- [ ] What problem does the context API help solve?

	context API offers us a global state (without redux) and helps us to avoid prop drilling

- [ ] In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

	`actions` actions contain information for the reducer, which tells it what to do to our state
	`reducers` receives actions and updates state according to the rules we set up
	`store` contains all of our state and passes it to components that call for it
	
	The store is known as this because it contains all of the state for our application, making it a single source

- [ ] What is the difference between Application state and Component state? When would be a good time to use one over the other?

	application state is global state, we would use this when passing state to multiple components
	
	component state is state local to that component only, we would use this when we don't need that state anywhere else in the application

- [ ] Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

	redux-thunk is middleware which intercepts actions and can modify them, send a different action in response, stop them, or let them through unchanged before sending them to the reducer. this also allows us to perform async operations with redux.
	

- [ ] What is your favorite state management system you've learned and this sprint? Please explain why!

	i used context in this sprint to get more practice with it, and while i'm warming up to it i think i still prefer redux. it feels more 'solid' and confident, perhaps because of the reducer and being able to tell it what to do exactly.