export function withFallback<T>(main: T | undefined, fallback: T) {
  if (typeof main === 'undefined') {
    return fallback
  }

  return main
}

export function toArray<T>(contain: T | T[]) {
  if (!Array.isArray(contain)) {
    return [contain]
  }

  return [...contain]
}

export interface GlobalRuntime {
  node: 'node'
}
