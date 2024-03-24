import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema({
  BookName: {
    type: String,
    required: true,
  },
  AuthorName: {
    type: String,
    required: true,
  },
  Genre: {
    type: String,
    required: true,
    // enum:[
    //     "Fantasy",
    //     "Science Fiction",
    //     "Mystery",
    //     "Thriller",
    //     "Horror",
    //     "Romance",
    //     "Historical Fiction",
    //     "Biography",
    //     "Memoir",
    //     "Self-Help",
    //     "Cookbook",
    //     "Travel",
    //     "Poetry",
    //     "Graphic Novel",
    //     "Young Adult",
    //     "Children's",
    //     "Classic",
    //     "Nonfiction",
    //     "Dystopian",
    //     "Adventure"
    // ]
  },
});

export const Book = mongoose.model("Book", bookSchema);
