- [ ] Why would you use class component over function components (removing hooks from the question)?
    One would use class components mainly to have access to the React lifecycle methods and the power said methods offer over the program.
- [ ] Name three lifecycle methods and their purposes.
    Constructor - Really, this is only used if you want to initialize a state locally or use event handlers. It's the first lifecycle method called.
    Render - This one is the bread and butter of your React class-component. It returns react elements that typically show up on a webpage for the user to see. It is called immediately after the constructor.
    componentDidMount - This one is invoked right after the component gets inserted into React's component tree. Doing API calls here is a good idea.
- [ ] What is the purpose of a custom hook?
    It's effectively a single piece of code that we can easily invoke on any component to apply some effect. Like a dark mode.
- [ ] Why is it important to test our apps?
    To make sure that there aren't going to be any glaring issues when users begin interacting with the program. An inperformant, crashy website isn't a fun website.