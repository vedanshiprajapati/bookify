import { asyncHandler } from "../utils/asyncHandler.js";
import { Book } from "../models/book.model.js";

const AddBooks = asyncHandler(async (req, res) => {
  const { bookName, author, genre } = req.body;

  // Create a new book instance
  const newBook = new Book({ name: bookName, author, genre });

  try {
    // Save the book to the database
    const savedBook = await newBook.save();

    // Return a success response
    res
      .status(201)
      .json({ message: "Book added successfully", book: savedBook });
  } catch (error) {
    // Handle errors
    console.error("Error adding book:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

export { AddBooks };
