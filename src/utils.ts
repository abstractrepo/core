export function withFallback<T>(main: T | undefined, fallback: T) {
  if (typeof main === "undefined") {
    return fallback;
  }

  return main;
}
