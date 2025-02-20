const IssueBook = require("../Models/IssuesBooks");

// Issue a book
exports.issueBook = async (req, res) => {
  try {
    const { bookId, bookName, memberId, memberName, startIssueDate, endIssueDate } = req.body;

    const newIssue = new IssueBook({
      bookID: bookId,
      bookName,
      memberID: memberId,
      memberName,
      issueDate: new Date(startIssueDate),
      returnDate: new Date(endIssueDate),
    });

    const savedIssue = await newIssue.save();
    res.status(201).json({ message: "Book issued successfully", issue: savedIssue });
  } catch (error) {
    console.error("Error issuing book:", error);
    res.status(500).json({ message: "Error issuing book", error });
  }
};

// Get all issued books
exports.displayIssuedBook = async (req, res) => {
  try {
    const issuedBooks = await IssueBook.find();
    res.status(200).json(issuedBooks);
  } catch (error) {
    console.error("Error fetching issued books:", error);
    res.status(500).json({ message: "Failed to fetch issued books", error: error.message });
  }
};

exports.deleteIssuedBook = async (req, res) => {
  try {
    const { id } = req.params; // Get the ID of the book to delete
    const deletedBook = await IssueBook.findByIdAndDelete(id); // Delete the book by ID
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book returned and deleted successfully" });
  } catch (error) {
    console.error("Error deleting book:", error);
    res.status(500).json({ message: "Error deleting book", error });
  }
};

exports.checkBookStatus = async (req, res) => {
  try {
    const { bookID } = req.params;
    const issuedBook = await IssueBook.findOne({ bookID });

    res.json({
      bookID,
      status: issuedBook ? "Not Available" : "Available",
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};