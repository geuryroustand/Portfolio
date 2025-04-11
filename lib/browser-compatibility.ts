// This file contains polyfills and compatibility helpers

// Check if we're in the browser environment
const isBrowser = typeof window !== "undefined"

// Intersection Observer polyfill
export const ensureIntersectionObserver = async () => {
  if (isBrowser && !("IntersectionObserver" in window)) {
    await import("intersection-observer")
  }
}

// Smooth scroll polyfill
export const ensureSmoothScroll = async () => {
  if (isBrowser && !("scrollBehavior" in document.documentElement.style)) {
    await import("smoothscroll-polyfill").then((module) => {
      module.default.polyfill()
    })
  }
}

// Initialize all polyfills
export const initPolyfills = async () => {
  await Promise.all([ensureIntersectionObserver(), ensureSmoothScroll()])
}
