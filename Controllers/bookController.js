const Book= require('../models/Books');

exports.submitBook = async(req, res) =>{
 const{
    bookID,bookName,bookclassificationNum,author,publisher,publicationDate,totalPages,price,donationMedium,removeDate,other } =req.body;
    const newBook = new Book({bookID,bookName,bookclassificationNum,author,publisher,publicationDate,totalPages,price,donationMedium,removeDate,other })

    try{
        await newBook.save();
        res.status(201).send('Book submitted successfully');
    }
    catch(err){
        res.status(500).send('Error submitting post.');
      }
};
