const Book= require('../models/Books');

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
