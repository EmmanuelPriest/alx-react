## REACT PROPS
<strong>React Props(Properties)</strong> a way to pass data from one component to another. Props are essentially a means of communication between React components, allowing you to pass data down the component tree.<br>

<h2>Key things to know about React props:</h2>
<ol>
<li>Props are passed down from parent components to child components. In other words, a component can only receive props from its parent component.</li>

<li>Props are read-only. This means that once a component receives props, it cannot modify them directly. Instead, the component can use the props to determine how it should render itself.</li>

<li>Props can be any type of data: strings, numbers, objects, functions, etc. This makes props incredibly flexible and powerful.</li>

<li>You can define default props for a component by setting a <strong>`defaultProps`</strong> property on the component.</li>

<li>You can pass props to a component using <strong>JSX syntax.</strong> For example, <strong>`<MyComponent prop1={value1} prop2={value2} />`.</strong>

<li>In a class component, you can access props using the <strong>`this.props` object</strong>. In a functional component, you can access props as an argument to the function.</li>

<li>You can also destructure props to extract specific values. For example, function <strong>`MyComponent({ prop1, prop2 }) { ... }`</strong> would extract <strong><em>prop1</em></strong> and <strong><em>prop2</em></strong> from the props object.</li>
</ol>
