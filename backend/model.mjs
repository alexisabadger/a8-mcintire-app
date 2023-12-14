// Models for the Pieces Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'SOURCE: db.once open - 500' });
    } else  {
        console.log('Success: db opened successfully');
    }
});


// SCHEMA: Define the collection's schema.
const pieceSchema = mongoose.Schema({
    brand:    { type: String, required: true },
    category:     { type: String, required: true },
    color: { type: String, required: true },
    quantity: { type: Number, required: true },
    datePurchased: { type: Date, required: true }
});


// Compile the model from the schema
// by defining the collection name "clothing".
const piece = mongoose.model('Piece', pieceSchema);


// CREATE model *****************************************
const createPiece = async (brand, category, color, quantity, datePurchased) => {
    const newPiece = new piece({ //try new word
        brand: brand, 
        category: category, 
        color: color,
        quantity: quantity,
        datePurchased: datePurchased
    });
    return newPiece.save();
}

// PAM NOTE: consider not using the word type

// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrievePieces = async () => {
    console.log('retrievePieces');
    const query = piece.find();
    console.log(query);
    return query.exec();
}


// RETRIEVE by ID
const retrievePieceByID = async (_id) => {
    const query = piece.findById({_id: _id});
    return query.exec();
}


// DELETE model based on _id  *****************************************
const deletePieceById = async (_id) => {
    const result = await piece.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updatePiece = async (_id, brand, category, color, quantity, datePurchased) => {
    const result = await piece.replaceOne({_id: _id }, {
        brand: brand,
        category: category,
        color: color,
        quantity: quantity,
        datePurchased: datePurchased
    });
    return { 
        _id: _id, 
        brand: brand,
        category: category,
        color: color,
        quantity: quantity,
        datePurchased: datePurchased
    }
}


// EXPORT the variables for use in the controller file.
export {    createPiece, 
            retrievePieces, 
            retrievePieceByID, 
            updatePiece, 
            deletePieceById 
        }
