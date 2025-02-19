const IssueBook = require("../Models/IssuesBooks");

const issueBook = async (req, res) => {
  try {
    const {
      bookId,
      bookName,
      memberId,
      memberName,
      startIssueDate,
      endIssueDate,
    } = req.body;

    const newIssue = new IssueBook({
      bookID: bookId,
      bookName,
      memberID: memberId,
      memberName,
      issueDate: new Date(startIssueDate), // convert string to Date
      returnDate: new Date(endIssueDate),
    });

    const savedIssue = await newIssue.save();
    res
      .status(201)
      .json({ message: "Book issued successfully", issue: savedIssue });
  } catch (error) {
    console.error("Error issuing book:", error);
    res.status(500).json({ message: "Error issuing book", error });
  }
};

module.exports = {
  issueBook,
};
