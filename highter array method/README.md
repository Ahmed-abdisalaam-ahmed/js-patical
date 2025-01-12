The JavaScript array methods `forEach()`, `map()`, `filter()`, and `reduce()` are all used to iterate over arrays, but each has specific purposes and use cases. Here's an overview of their differences:

---

### 1. **`forEach()`**
- **Purpose**: To execute a provided function once for each array element.
- **Use Case**: When you need to perform a side effect (e.g., logging, modifying variables outside the array).
- **Returns**: `undefined` (it doesn’t return the array or a new array).
- **Modifies Original Array?**: No.
- **Example**:
  ```javascript
  const numbers = [1, 2, 3];
  numbers.forEach(num => console.log(num * 2)); 
  // Output: 2, 4, 6 (side effect: logs doubled values)
  ```

---

### 2. **`map()`**
- **Purpose**: To transform an array by applying a function to each element, creating a new array.
- **Use Case**: When you want a new array with modified elements.
- **Returns**: A new array.
- **Modifies Original Array?**: No.
- **Example**:
  ```javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // Output: [2, 4, 6]
  ```

---

### 3. **`filter()`**
- **Purpose**: To create a new array containing only elements that satisfy a condition (true for the callback function).
- **Use Case**: When you want a subset of the original array.
- **Returns**: A new array.
- **Modifies Original Array?**: No.
- **Example**:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const evens = numbers.filter(num => num % 2 === 0);
  console.log(evens); // Output: [2, 4]
  ```

---

### 4. **`reduce()`**
- **Purpose**: To reduce an array to a single value by applying a function cumulatively to array elements.
- **Use Case**: When you need a single output (e.g., sum, product, aggregated object).
- **Returns**: The accumulated value.
- **Modifies Original Array?**: No.
- **Example**:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum); // Output: 10
  ```

---

### Summary of Key Differences:

| Method    | Purpose                           | Return Value      | Modifies Original Array | Use Case                      |
|-----------|-----------------------------------|-------------------|-------------------------|-------------------------------|
| `forEach` | Executes a function for each item | `undefined`       | No                      | Side effects (e.g., logging) |
| `map`     | Transforms array elements         | New array         | No                      | Create a transformed array   |
| `filter`  | Filters elements based on a test | New array         | No                      | Extract a subset of the array|
| `reduce`  | Aggregates array elements         | Single value      | No                      | Compute cumulative results   |

Each method serves a unique purpose, and the choice depends on the task at hand. If you want transformations or filtering, use `map()` or `filter()`. For side effects, choose `forEach()`. For combining elements, `reduce()` is the best option.


**transalto to sommali**

Halkan waxaa ku jira turjumaadda af-soomaaliga ee farqiga u dhexeeya `forEach()`, `map()`, `filter()` iyo `reduce()`:

---

### 1. **`forEach()`**
- **Ujeeddo**: Si loogu fuliyo hawl kasta oo ku saabsan walxaha array-ga hal mar.
- **Isticmaalka**: Markaad rabto inaad fuliso hawlaha dibadda sida (qoraalka console-ka ama isbeddelka qiimaha dibadda).
- **Soo celinta**: `undefined` (kama soo celiso array cusub ama kii hore).
- **Wax Ka Bedelka Array-ga Asalka?**: Maya.
- **Tusaale**:
  ```javascript
  const numbers = [1, 2, 3];
  numbers.forEach(num => console.log(num * 2)); 
  // Soo saar: 2, 4, 6 (saameyn: ku qori console-ka qiimaha labanlaab)
  ```

---

### 2. **`map()`**
- **Ujeeddo**: Si loogu badalo array iyadoo hawl lagu qabanayo walxaha oo dhan, oo la abuuro array cusub.
- **Isticmaalka**: Markaad rabto inaad abuurto array cusub oo leh walxo la beddelay.
- **Soo celinta**: Array cusub.
- **Wax Ka Bedelka Array-ga Asalka?**: Maya.
- **Tusaale**:
  ```javascript
  const numbers = [1, 2, 3];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // Soo saar: [2, 4, 6]
  ```

---

### 3. **`filter()`**
- **Ujeeddo**: Si loo abuuro array cusub oo kaliya ka kooban walxaha shuruudaha buuxinaya (run u noqda hawsha callback-ka).
- **Isticmaalka**: Markaad rabto qayb ka mid ah array-ga.
- **Soo celinta**: Array cusub.
- **Wax Ka Bedelka Array-ga Asalka?**: Maya.
- **Tusaale**:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const evens = numbers.filter(num => num % 2 === 0);
  console.log(evens); // Soo saar: [2, 4]
  ```

---

### 4. **`reduce()`**
- **Ujeeddo**: Si loo yareeyo array-ga oo loo abuuro hal qiimo iyadoo lagu shaqeynayo walxaha array-ga si isdaba joog ah.
- **Isticmaalka**: Markaad rabto hal natiijo (tusaale: isku darka, isku celceliska, iwm).
- **Soo celinta**: Hal qiimo la soo ururiyey.
- **Wax Ka Bedelka Array-ga Asalka?**: Maya.
- **Tusaale**:
  ```javascript
  const numbers = [1, 2, 3, 4];
  const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(sum); // Soo saar: 10
  ```

---

### Jaantuska Farqiga U Dhexeeya:

| Habka      | Ujeeddo                          | Soo Celinta         | Wax Ka Bedelka Array-ga | Isticmaalka                  |
|------------|----------------------------------|---------------------|-------------------------|-----------------------------|
| `forEach`  | Fulinta hawl walba               | `undefined`         | Maya                    | Saamaynta dibadda (tusaale console-ka) |
| `map`      | Badalida walxaha array-ga        | Array cusub         | Maya                    | Abuur array la beddelay    |
| `filter`   | Kala saarida walxaha shuruud buuxiya | Array cusub         | Maya                    | Kala saar walxaha ku habboon |
| `reduce`   | Isku keenida walxaha array-ga    | Hal qiime            | Maya                    | Isku darka ama natiijooyin guud |

Hab kasta wuxuu leeyahay ujeeddo gaar ah, xulashadana waxay ku xiran tahay shaqada aad qabato. Haddii aad rabto bedelid ama kala saar, isticmaal `map()` ama `filter()`. Haddii aad rabto saameyn dibadda ah, dooro `forEach()`. Haddii aad rabto isku dar, `reduce()` ayaa ku habboon.