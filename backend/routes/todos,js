const express = require("express")
const router = express.Router()
const Todo = require("../schema/Todo")

// =============================
// CREATE TODO
// =============================
router.post("/", async (req, res, next) => {
  try {
    const todo = await Todo.create({
      text: req.body.text
    })

    res.json(todo)
  } catch (err) {
    next(err)
  }
})


// =============================
// READ ALL TODOS
// =============================
router.get("/", async (req, res, next) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 })
    res.json(todos)
  } catch (err) {
    next(err)
  }
})


// =============================
// TOGGLE COMPLETE
// =============================
router.patch("/:id/toggle", async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id)

    if (!todo) return res.status(404).send("Not found")

    todo.completed = !todo.completed
    await todo.save()

    res.json(todo)
  } catch (err) {
    next(err)
  }
})


// =============================
// DELETE ONE TODO
// =============================
router.delete("/:id", async (req, res, next) => {
  try {
    await Todo.findByIdAndDelete(req.params.id)
    res.send("Deleted")
  } catch (err) {
    next(err)
  }
})


// =============================
// DELETE COMPLETED TODOS
// =============================
router.delete("/completed/all", async (req, res, next) => {
  try {
    const result = await Todo.deleteMany({ completed: true })
    res.json({ deleted: result.deletedCount })
  } catch (err) {
    next(err)
  }
})

module.exports = router
