import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the book with the given id
  deleteBooks: function(id) {
    return axios.delete("/api/books/"+id);
  },
  // Saves a book to the database
  saveBooks: function(alertData) {
    console.log(alertData)
    return axios.post("/api/books", alertData);
  },
  
};
