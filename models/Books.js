const mongoose = require('mongoose');

const bookSchema =new mongoose.Schema(
    {
    bookID:{
        type: String,
        required: true
    },
    bookName:{
        type: String,
        required: true
    },
    bookclassificationNum:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    entryDate:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    publisher:{
        type: String,
        required: true
    },
    publicationDate:{
        type: String,
        required: true
    },
    totalPages:{
        type: String,
        required: true
    },
    price:{
        type: String,
        required: true
    },
    donationMedium:{
        type: String,
        required: true
    },
    removeDate:{
        type: String,
        required: false
    },
    other:{
        type: String,
        required: false
    }
    },
    { timestamps: true }// This option enables automatic management of createdAt and updatedAt fields
);
bookSchema.statics.deleterecord=function(id){
    return this.findByIdAndDelete(id).exec();
};

const Book =mongoose.model('Book', bookSchema);

module.exports=Book;