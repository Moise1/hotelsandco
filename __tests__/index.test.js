import React from "react";
import { render, screen } from "@testing-library/react";
import { LearnMoreUpfront, Navbar } from "../components/Navbar";
import {Rooms } from "../components/Rooms";
import { renderwithComp } from "../utils/handler";


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

describe("Test room card",() => {
  it("Test rooms", async () => {
    renderwithComp(<Rooms />);
    expect(screen.queryByRole('button')).toBeNull()
    expect(screen.queryByRole('page')).toBeNull()
  });
});
