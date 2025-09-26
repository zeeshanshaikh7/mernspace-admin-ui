import "@testing-library/jest-dom";
import { beforeEach, vi } from "vitest";

beforeEach(() => {
  const matchMediaMock = vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), 
    removeListener: vi.fn(), 
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
  const getComputedStyleMock = vi.fn().mockImplementation(() => ({
    getPropertyValue: () => "",
  }));
  vi.stubGlobal("getComputedStyle", getComputedStyleMock);
  vi.stubGlobal("matchMedia", matchMediaMock);
});
