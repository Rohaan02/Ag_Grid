import express from "express";
import cors from "cors";
import { rowsData } from "./Rows.js";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Endpoint for search
app.get("/search", (req, res) => {
  const searchTerm = req.query.q?.toLowerCase() || "";
  const filteredData = rowsData.filter(
    (row) =>
      row.name.toLowerCase().includes(searchTerm) ||
      row.id.toString().includes(searchTerm)||
      row.gender.toLowerCase().includes(searchTerm)||
      row.email.toLowerCase().includes(searchTerm)
  );
  res.json(filteredData);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
