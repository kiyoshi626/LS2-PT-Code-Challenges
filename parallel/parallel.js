<<<<<<< HEAD
=======

>>>>>>> upstream/master
/* Implement the function parallel:
 *
 * Parallel has two parameters, an array of asynchronous functions (tasks) and a callback.
 * Each of the tasks takes a callback and invokes that callback when complete.
 *
 * The callback passed to parallel is then performed on the results of the callbacks of the tasks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to parallel.
 *
 * Once all the callbacks of the tasks are returned, parallel should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * parallel([
 *  function(callback){
 *    setTimeout(function(){
 *      callback('one');
 *    }, 200);
 *  },
 *  function(callback){
 *    setTimeout(function(){
 *      callback('two');
 *    }, 100);
 *  }
 * ],
 *  // optional callback
 *  (results) => {
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
      console.log(results); // ['one', 'two']
 * });
 *
 *
<<<<<<< HEAD
 */

const parallel = (functions, cb) => {
    // create an array, call it values
    // get length of functions (should be an array)
    // functions.forEach (func, i) => {
      // func((value) => {
        // values[i] = value;
        // length of function--;
        // if (length of function === 0) cb(values);
      // });
    // }
    const values = [];
    let remaining = functions.length;
    functions.forEach((func, i) => {
      func((value) => {
        values[i] = value;
        remaining--;
        if (remaining === 0) cb(values);
      });
    });
  };
  
  parallel([
   function(callback){
     setTimeout(function(){
       callback('one');
     }, 200);
   },
   function(callback){
     setTimeout(function(){
       callback('two');
     }, 100);
   }
  ],
   // optional callback
   (results) => {
     // the results array will equal ['one','two'] even though
     // the second function had a shorter timeout.
     console.log(results); // ['one', 'two']
  });
=======
 */
>>>>>>> upstream/master
