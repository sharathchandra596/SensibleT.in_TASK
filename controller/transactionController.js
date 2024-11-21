import { Transaction } from "../MODELS/transactionModel.js"


export const addTransaction = async (req, res, next) => {
    try {
        const { amount, transaction_type, user } = req.body
        if (!amount || !transaction_type || !user) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const newtranc = await Transaction.create({ amount, transaction_type, user })
        return res.status(200).json({
            success: true,
            message: "Transaction added successfully",
            data: {
                transaction_id: newtranc._id,

                amount: newtranc.amount,

                transaction_type: newtranc.transaction_type,

                status: newtranc.status,

                user: newtranc.user,

                timestamp: newtranc.timestamp
            }
        })




    } catch (error) {
        console.log(error);
    }
}


export const gellAllTransactions = async (req, res, next) => {
    try {

        const allTransactions = await Transaction.find()
        res.status(200).json({
            success: true,
            data: allTransactions
        })

    } catch (error) {
        console.log(error);
    }
}

export const updateTransaction = async (req, res, next) => {
    try {

        const { id } = req.params
        const { amount, transaction_type, user, status } = req.body

        if (!amount || !transaction_type || !user || !status) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const updatedTransaction = await Transaction.findByIdAndUpdate(id, { amount, transaction_type, user, status }, { new: true })
        return res.status(200).json({
            success: true,
            message: "Transaction updated successfully",
            data:  {
                transaction_id: updatedTransaction._id,

                amount: updatedTransaction.amount,

                transaction_type: updatedTransaction.transaction_type,

                status: updatedTransaction.status,

                user: updatedTransaction.user,

                timestamp: updatedTransaction.timestamp
            }
        })

    } catch (error) {
        console.log(error);
    }
}

