function debounce<T extends (...args: any[]) => any>(cb: T, ms: number) {
  let timeout: null | NodeJS.Timeout = null;
  function debounced(...args: Parameters<T>) {
    if (typeof timeout === "number") {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;
      cb.apply(null, args);
    }, ms);
  }
  debounced.cancel = () => {
    if (typeof timeout !== "number") {
      return;
    }
    clearTimeout(timeout);
  };
  return debounced;
}
export default debounce;
