import { render, screen } from '@testing-library/react';
import App from './App';

const renderApp = () => render(<App />);

describe("all sections are present", () => {
  test("renders title", () => {
    renderApp();
    const titleElement = screen.getByText(/Product Energy Star Rating/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders brand", () => {
    renderApp();
    const titleElement = screen.getByText(/Brand/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders product", () => {
    renderApp();
    const titleElement = screen.getByText(/Product/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders energy usage", () => {
    renderApp();
    const titleElement = screen.getByText(/Energy usage/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("renders product usage CO2 emissions", () => {
    renderApp();
    const titleElement = screen.getByText(/Product usage Co2 emissions/i);
    expect(titleElement).toBeInTheDocument();
  });
});

