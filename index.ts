// Sample TypeScript code
console.log("Hello from Bun + TypeScript!");

// Example function with types
function greet(name: string, age: number): string {
  return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet("World", 4));

// Example async function
async function fetchData(): Promise<void> {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Run the async function
fetchData();
