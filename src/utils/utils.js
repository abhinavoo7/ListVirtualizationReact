/**
 * @description
 * Throttle a function so it only executes once every specified delay.
 * Useful for limiting the rate at which a function can fire, such as scroll or resize events.
 * @param {Function} func - The function to throttle.
 * @param {number} delay - The delay in milliseconds between allowed executions.
 * @returns {Function} A throttled version of the input function.
 */
export const throttle = (func, delay) => {
  let lastExecuted = 0;

  return (...args) => {
    const now = Date.now();

    if (now - lastExecuted >= delay) {
      lastExecuted = now;
      func(...args);
    }
  };
};
