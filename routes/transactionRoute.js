import exppress from "express"
import { addTransaction, gellAllTransactions, updateTransaction } from "../controller/transactionController.js";


const router= exppress.Router();


router.post("/create",addTransaction);
router.get("/all",gellAllTransactions);
router.put("/update/:id",updateTransaction);

export default router;