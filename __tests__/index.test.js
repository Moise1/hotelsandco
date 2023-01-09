import React from "react";
import { render, screen } from "@testing-library/react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { LearnMoreUpfront, Navbar } from "../components/Navbar";
import { AllRooms } from "../components/Rooms";
import { renderwithComp } from "../utils/handler";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe("Test Navbars", () => {
  it("renders texts on the upper navbar section", () => {
    render(<Navbar />);
    expect(screen.getByText("Hotels&Co")).toBeInTheDocument();
    expect(screen.getByText("Airbnb your home")).toBeInTheDocument();
  });
  it("shows price and learn more  text", () => {
    render(<LearnMoreUpfront />);
    expect(screen.getByText("Show total price upfront")).toBeInTheDocument();
    expect(screen.getByText("Learn more")).toBeInTheDocument();
  });
});

describe("Fetch all rooms", () => {
  it("Test rooms", async () => {
    const result = renderwithComp(<AllRooms/>)
    
  });
});
