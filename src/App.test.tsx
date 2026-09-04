import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("contains at least one img tag", () => {
    const { container } = render(<App />);

    // Selects all <img> tags in the rendered HTML
    const images = container.querySelectorAll("img");

    // Asserts that at least one <img> tag exists
    expect(images.length).toBeGreaterThanOrEqual(1);
  });
});
