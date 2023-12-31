const { Router } = require("express");
const expenseRouter = require("./expenseRoutes");
const userRouter = require("./userRoutes");
const router = Router();

router.get("/", (req, res) => {
    res.send("Test route");
});
router.use("/user", userRouter);
router.use("/expense", expenseRouter);

module.exports = router;
