import React from "react";
import { render } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { fetchColorApi as mockFetchColorApi } from "./fetchColorApi"

jest.mock("./fetchColorApi")
const colorList = {
  data: [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff",
      },
      id: 1,
    },
    {
      color: "red",
      code: {
        hex: "#f0f8ff",
      },
      id: 2,
    },
  ],
};

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockFetchColorApi.mockResolvedValueOnce(colorList);

  const { getByText } = render(<BubblePage />);
  const colors = getByText(/colors/i);
  expect(colors).toBeInTheDocument();

  const bubbles = getByText(/bubbles/i);
  expect(bubbles).toBeInTheDocument();
});
