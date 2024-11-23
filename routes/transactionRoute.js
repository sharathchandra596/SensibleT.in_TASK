import exppress from "express"
import { addTransaction, gellAllTransactionsOfUser, updateTransaction } from "../controller/transactionController.js";


const router= exppress.Router();


router.post("/create",addTransaction);
router.get("/all/:id",gellAllTransactionsOfUser);
router.put("/update/:id",updateTransaction);
router.get("/:id",gellTransactionDetails);

export default router;