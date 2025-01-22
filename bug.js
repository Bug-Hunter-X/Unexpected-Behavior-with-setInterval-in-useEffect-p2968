```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly using a closure over the setCount function
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, []); // Empty dependency array

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}
```