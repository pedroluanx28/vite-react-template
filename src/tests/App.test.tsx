import { render, screen } from "@testing-library/react";
import { it, expect } from "vitest";

import { App } from "@/App.tsx";

it("should be show App", async () => {
	render(<App />);

	expect(screen.getByText("Ap")).toBeInTheDocument();
});
