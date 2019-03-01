# removeAllBeforeFirst(value, array):void

Removes everything before first instance of `value` in `array`.

# removeAllBeforeLast(value, array): void

Removes everything before last instance of `value` in `array`.

For both, the parameter `value` cannot be an object.  It can be an array.


## Examples
```
let arr = [5, 10, 15, [20,22], 10, 50, [20,22], 60];  
removeAllBeforeFirst([20,22], arr);  
// arr is now [[20,22],10,50,[20,22],60]  

let arr = [5, 10, 15, [20,22], 10, 50, [20,22], 60]; 
removeAllBeforeLast([20,22], arr);  
// arr is now [[20,22], 60]  
```

## Installation
`npm i  @writetome51/array-remove-all-before`


## Loading
```
// if using TypeScript:
import {removeAllBeforeFirst, removeAllBeforeLast}  from '@writetome51/array-remove-all-before';
// if using ES5 JavaScript:
var removeAllBeforeFirst = 
	require('@writetome51/array-remove-all-before').removeAllBeforeFirst;
var removeAllBeforeLast = 
	require('@writetome51/array-remove-all-before').removeAllBeforeLast;
```