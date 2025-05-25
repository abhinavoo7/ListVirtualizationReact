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