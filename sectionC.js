//  Async + Event Loop + Fetch (20 Marks)
// Write a script that:

// Logs “Start”
// Uses setTimeout with 0 ms to log “Timeout”
// Uses a Promise that resolves immediately to log “Promise resolved”
// Fetches https://jsonplaceholder.typicode.com/todos/1 and logs "Data fetched".
// Logs “End” at the end.

console.log("Start");

Promise.resolve().then(() => {
  async function fetcData() {
    try {
      const res = fetch("https://jsonplaceholder.typicode.com/todos/1");
      console.log("Data fetched");
    } catch (error) {
      console.log(error);
    }
  }

  setTimeout(() => {
    console.log("Timeout");
    fetcData();
    console.log("End");
  }, 0);
});


