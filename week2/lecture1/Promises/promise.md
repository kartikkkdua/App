
# JavaScript Promises 📦

JavaScript **Promises** are powerful for managing asynchronous operations like API calls, file loading, and time delays. They act as placeholders for values that become available in the future.

## 📌 Promise States

- **Pending**: Initial state, operation is ongoing.  
- **Fulfilled**: Operation completed successfully.  
- **Rejected**: Operation failed with an error.

---

## 🔰 Basic Promise Example

```javascript
let checkEven = new Promise((resolve, reject) => {
    let number = 4;
    if (number % 2 === 0) resolve("The number is even!");
    else reject("The number is odd!");
});

checkEven
    .then((message) => console.log(message)) // On success
    .catch((error) => console.error(error)); // On failure
```

> ⚠️ `resolve` and `reject` are function names, not keywords.

---

## 🔧 Promise Syntax

```javascript
let promise = new Promise((resolve, reject) => {
    // Perform async operation
    if (operationSuccessful) {
        resolve("Task successful");
    } else {
        reject("Task failed");
    }
});
```

---

## 🚀 Advanced Promise Methods & Patterns

### 1. `Promise.all()`

Waits for all promises to resolve. If any fails, it rejects immediately.

```javascript
Promise.all([
    Promise.resolve("Task 1 completed"),
    Promise.resolve("Task 2 completed"),
    Promise.reject("Task 3 failed")
])
.then((results) => console.log(results))
.catch((error) => console.error(error));
```

**Output:**

```
Task 3 failed
```

---

### 2. `Promise.allSettled()`

Waits for all promises to settle (fulfilled or rejected).

```javascript
Promise.allSettled([
    Promise.resolve("Task 1 completed"),
    Promise.reject("Task 2 failed"),
    Promise.resolve("Task 3 completed")
])
.then((results) => console.log(results));
```

**Output:**

```javascript
[
  { status: 'fulfilled', value: 'Task 1 completed' },
  { status: 'rejected', reason: 'Task 2 failed' },
  { status: 'fulfilled', value: 'Task 3 completed' }
]
```

---

### 3. `Promise.race()`

Resolves/rejects as soon as the **first** promise settles.

```javascript
Promise.race([
    new Promise((resolve) =>
        setTimeout(() => resolve("Task 1 finished"), 1000)),
    new Promise((resolve) =>
        setTimeout(() => resolve("Task 2 finished"), 500))
])
.then((result) => console.log(result));
```

**Output:**

```
Task 2 finished
```

---

### 4. `Promise.any()`

Resolves as soon as **any** promise fulfills. If all fail, rejects with `AggregateError`.

```javascript
Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
.then((result) => console.log(result))
.catch((error) => console.error(error));
```

**Output:**

```
Task 2 completed
```

---

### 5. `Promise.resolve()`

Returns a resolved Promise with a given value.

```javascript
Promise.resolve("Immediate success")
    .then((value) => console.log(value));
```

**Output:**

```
Immediate success
```

---

### 6. `Promise.reject()`

Returns a rejected Promise with a given reason.

```javascript
Promise.reject("Immediate failure")
    .catch((error) => console.error(error));
```

**Output:**

```
Immediate failure
```

---

### 7. `Promise.finally()`

Runs code regardless of the promise outcome—ideal for cleanup operations.

```javascript
Promise.resolve("Task completed")
    .then((result) => console.log(result))
    .catch((error) => console.error(error))
    .finally(() => console.log("Cleanup completed"));
```

**Output:**

```
Task completed  
Cleanup completed
```

---

### 8. Chaining with `then()`

Pass results from one step to the next:

```javascript
Promise.resolve(5)
    .then((value) => value * 2) // 10
    .then((value) => value + 3) // 13
    .then((finalValue) => console.log(finalValue));
```

**Output:**

```
13
```

---

### 9. Sequential Execution with `reduce()`

Ensures async tasks execute **in order**.

```javascript
let tasks = [1, 2, 3];
tasks.reduce((prevPromise, current) => {
    return prevPromise.then(() => {
        return new Promise((resolve) => {
            console.log(`Processing task ${current}`);
            setTimeout(resolve, 500); // Simulate delay
        });
    });
}, Promise.resolve());
```

**Output:**

```
Processing task 1  
Processing task 2  
Processing task 3
```

---

### 10. Dynamic Promise Creation

Create Promises based on runtime logic.

```javascript
function asyncTask(taskName) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${taskName} completed`), 1000);
    });
}

asyncTask("Download File")
    .then((result) => console.log(result));
```

**Output:**

```
Download File completed
```

---

## ✅ Conclusion

JavaScript Promises are essential for handling asynchronous flows in a clean and scalable way. Mastering these methods and patterns helps in building responsive, non-blocking applications.
