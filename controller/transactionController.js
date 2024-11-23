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


export const gellAllTransactionsOfUser = async (req, res, next) => {
    try {
        const { id } = req.params

        const allTransactions = await Transaction.find({ user: id })

        const transformData = allTransactions.map((item) => ({
            transaction_id: item._id,
            amount: item.amount,
            transaction_type: item.transaction_type,
            status: item.status,
            timestamp: item.timestamp
        }))

        res.status(200).json({
            success: true,
            data: transformData
        })

    } catch (error) {
        console.log(error);
    }
}

export const updateTransaction = async (req, res, next) => {
    try {

        const { id } = req.params
        const { status } = req.body

        if (!status) {
            return res.status(400).json({
                success: false,
                message: "staus required"
            })
        }

        const updatedTransaction = await Transaction.findByIdAndUpdate(id, { status }, { new: true })
        return res.status(200).json({
            success: true,
            message: "Transaction updated successfully",
            data: {
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

export const gellTransactionDetails = async (req, res, next) => {
    try {
        const { id } = req.params
        const transaction = await Transaction.findById(id)
        return res.status(200).json({
            success: true,
            data:
            {
                transaction_id: transaction._id,

                amount: transaction.amount,

                transaction_type: transaction.transaction_type,

                    status: transaction.status,

                timestamp: transaction.timestamp
            }
        })
    } catch (error) {
        console.log(error);
    }
}