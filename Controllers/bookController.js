const Book= require('../Models/Books');
const mongoose = require('mongoose');


exports.submitBook = async(req, res) =>{
    console.log("Request body:", req.body);

 const{
    
    bookID, bookName, bookclassificationNum, author, entryDate, category, publisher, publicationDate, totalPages, price, donationMedium, removeDate, other } =req.body;
    const newBook = new Book({ bookID, bookName, bookclassificationNum, author,entryDate, category, publisher, publicationDate, totalPages, price, donationMedium, removeDate, other  });

    try{
        const savedBook = await newBook.save();
        console.log("Book saved:", savedBook);
        res.status(201).send('Book submitted successfully');
    }
    catch(err){
        console.error("Error saving book:", err);
        res.status(500).send('Error submitting book.');
      }
};

exports.displayBook = async(req, res) =>{
    try{
        const books = await Book.find();
        res.json(books);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

// return book

exports.returndisplayBook = async(req, res) =>{
    try{
        const books = await Book.find();
        res.json(books);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

{/*exports.updateBook =async(req,res) =>{
    const{id } =req.params;
    const{ bookID, bookName, bookclassificationNum, author,entryDate, category, publisher, publicationDate, totalPages, price, donationMedium, removeDate, other}

}*/}
exports.updateBook = async (req, res) => {
    console.log('updateBook endpoint hit'); 
    const { id } = req.params; // Extract bookID from request parameters
    const {
        bookID,
        bookName,
        bookclassificationNum,
        author,
        entryDate,
        category,
        publisher,
        publicationDate,
        totalPages,
        price,
        donationMedium,
        removeDate,
        other,
    } = req.body; // Extract fields to update from request body

    const mongoose = require('mongoose');
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    try {
        const updatedBook = await Book.findByIdAndUpdate(
            id, // Find the book by id
            {   bookID,
                bookName,
                bookclassificationNum,
                author,
                entryDate,
                category,
                publisher,
                publicationDate,
                totalPages,
                price,
                donationMedium,
                removeDate,
                other,
            },
            { new: true, runValidators: true } // Return updated document and validate fields
        );

        if (!updatedBook) {
            return res.status(404).json({ message: "Book not found with the given ID: ${id}" });
        }

        res.status(200).json({ message: "Book updated successfully", book: updatedBook });
    } catch (err) {
        console.error("Error updating book:", err);
        res.status(500).json({ message: "Error updating book" });
    }
};

exports.deleteBookById = async (req, res) => {
    const { id } = req.params;

    // Validate ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }

    try {
        // Delete Book
        const deletedBook = await Book.findByIdAndDelete(id);

        // Handle case where the book is not found
        if (!deletedBook) {
            return res.status(404).json({ message: "Book not found" });
        }

        // Success response
        res.status(200).json({ message: "Book deleted successfully", book: deletedBook });
    } catch (error) {
        console.error("Error deleting book:", error);
        res.status(500).json({ message: "Failed to delete the book", error: error.message });
    }
};