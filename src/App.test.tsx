import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App Component", () => {
  it("renders the heading correctly", () => {
    render(<App />);

    // Checks if the text "Vite + React" rendered by default exists in the DOM
    expect(screen.getByText(/Vite \+ React/i)).toBeInTheDocument();
  });
});
