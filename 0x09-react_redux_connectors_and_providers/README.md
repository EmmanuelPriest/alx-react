## REACT REDUX CONNECTORS AND PROVIDERS
<strong>React Redux</strong> is a popular library that provides a predictable state container for managing the state of a React application. It allows you to centralize your application state and efficiently propagate changes to your components.
<br>
React Redux uses two main components for connecting your React components to the <strong><em>Redux store: Connectors and Providers.</em></strong>
<br>
<strong>Connectors:</strong><br>
Connectors are higher-order components (HOCs) provided by React Redux. They allow you to connect your React components to the Redux store and specify which parts of the state should be accessible to the component.
<br>
The <strong>connect function</strong> is used to create a connector. It takes two optional parameters: <strong><em>mapStateToProps and mapDispatchToProps.</em></strong>
<br>
<ul>
<li><strong>mapStateToProps:</strong> <br>This function allows you to specify which parts of the Redux state should be mapped to the component's props. It receives the entire state as an argument and returns an object containing the specific props you want to pass to the component.</li>

<li><strong>mapDispatchToProps:</strong> <br>This function allows you to specify which actions or action creators should be mapped to the component's props. It can be an object of action creators or a function that receives the dispatch function and returns an object with action creators.</li>
</ul>
<br>
By wrapping your component with the connector, you can access the state and dispatch actions as props within your component. Whenever the state changes, the connector will automatically update your component.
<br>
<strong>Providers:</strong><br>
Providers are React components provided by React Redux that allow you to make the Redux store available to your entire application. The Provider component is responsible for passing the store as a prop to all the connected components.
<br>To use the Provider, you need to wrap your root component with it and provide the Redux store as a prop. This allows all the nested components to access the store and connect to it using the connectors.
