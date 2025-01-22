# React useEffect setInterval Bug

This repository demonstrates a common bug in React applications involving the use of `setInterval` within the `useEffect` hook.  The bug arises from incorrect handling of closures and leads to unexpected behavior when the component is unmounted and remounted.

## Bug Description
The `MyComponent` attempts to increment a counter every second using `setInterval`. However, the closure created by the useEffect with an empty dependency array will capture the initial `setCount` method. Even after component unmount and remount, the component will update with the old count. 

## Solution
The solution involves using functional updates within `setCount` to ensure the component updates correctly. This ensures the correct state is accessed even after unmount and remount.