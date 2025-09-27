import { fireEvent, render, screen } from "@testing-library/react";
import * as CountryContext from "../contexts/CountryContext";

import Search from "./Search";

// Mock useCountries context
const mockSetSearchQuery = vi.fn();

function renderWithContext({ searchQuery = "", darkMode = false } = {}) {
  vi.resetAllMocks();
  vi.spyOn(CountryContext, "useCountries").mockReturnValue({
    darkMode,
    searchQuery,
    setSearchQuery: mockSetSearchQuery,
  });
  return render(<Search />);
}

describe("Search component", () => {
  test("Cancel icon appears when input is not empty", () => {
    renderWithContext({ searchQuery: "Nigeria" });
    expect(screen.getByTestId("cancel-icon")).toBeInTheDocument();
  });

  test("Cancel icon does not appear when input is empty", () => {
    renderWithContext({ searchQuery: "" });
    expect(screen.queryByTestId("cancel-icon")).not.toBeInTheDocument();
  });

  test("Clicking cancel icon clears input", () => {
    renderWithContext({ searchQuery: "Kenya" });
    fireEvent.click(screen.getByTestId("cancel-icon"));
    expect(mockSetSearchQuery).toHaveBeenCalledWith("");
  });

  test("Dark mode styles are applied", () => {
    renderWithContext({ searchQuery: "", darkMode: true });
    const input = screen.getByPlaceholderText("Search for a country...");
    expect(input).toHaveClass("dark:bg-dark_blue");
    expect(input).toHaveClass("dark:text-white");
  });

  test("Light mode styles are applied", () => {
    renderWithContext({ searchQuery: "", darkMode: false });
    const input = screen.getByPlaceholderText("Search for a country...");
    expect(input).toHaveClass("bg-white");
    expect(input).toHaveClass("text-vd_blue");
  });
});
