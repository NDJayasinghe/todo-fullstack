import "@testing-library/jest-dom";
import axios from "axios";

// Mock axios for tests to prevent real network calls
vi.mock("axios");

// Provide default mock implementations
axios.get.mockResolvedValue({ data: [] });
axios.post.mockResolvedValue({ data: {} });
axios.patch.mockResolvedValue({ data: {} });