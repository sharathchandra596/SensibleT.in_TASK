import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
    amount: {
      type: mongoose.Types.Decimal128, 
      required: true,
      
    },
    transaction_type: {
      type: String,
      enum: ['DEPOSIT', 'WITHDRAWAL'], 
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId, // Reference to the User model
      ref: 'User',
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now(), 
    },
    status: {
      type: String,
      enum: ['PENDING', 'COMPLETED', 'FAILED'], // Restrict values to these statuses
      default: 'PENDING',
    },
  },{timestamps:true});

 export  const Transaction = mongoose.model('Transaction', transactionSchema);
  