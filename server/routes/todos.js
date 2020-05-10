const router = require("express").Router();
const auth = require("../middleware/auth");
let Todo = require("../models/todo.model");
//?    @route   GET users/
//?    @desc    Load todos
//?    @access  ?Private

router.post("/", async (req, res) => {
    try {
        const todos = await Todo.find({ userID: req.body.userID });
        if (!todos) throw Error("can't get todos or you dont have it yet");

        res.json(todos);
    } catch (e) {
        res.status(400).json(e.message);
    }
});
//?    @route   POST todos/
//?    @desc    Add todo
//?    @access  ?Private
router.post("/add", async (req, res) => {
    try {
        const { userID, title, description, hour, month, minute, day, year } = req.body;
        if (!userID) throw Error("no user");
        if (!title) throw Error("no titile");
        if (!hour) throw Error("no hour");
        if (!minute) throw Error("no minute");
        const newTodo = new Todo({
            userID,
            title,
            description,
            hour,
            minute,
            day,
            year,
            month,
            done: false,
        });
        const savedTodo = await newTodo.save();
        if (!savedTodo) throw Error("Something went wrong saving the Todo");
        res.status(200).json(savedTodo);
    } catch (e) {
        res.status(400).json(e.message);
    }
});
//?    @route   DELETE todos/:id
//?    @desc    delet Todo
//?    @access  ?Private

router.delete("/:id", async (req, res) => {
    try {
        const respond = await Todo.deleteOne({ _id: req.params.id });
        if (!respond) throw Error("Nie można tego usunąć");
        res.status(200).json(respond);
    } catch (e) {
        res.status(400).json(e.message);
    }
});
//?    @route   PATCH todos/:id
//?    @desc    delet Todo
//?    @access  ?Private

router.patch("/:id", async (req, res) => {
    const { title, description, hour, minute } = req.body;
    try {
        let todo = await Todo.findOneAndUpdate(
            { _id: req.params.id },
            { title, description, hour, minute }
        );
        if (!todo) throw Error("Nie można zmienić todo");

        res.status(200).json(todo);
    } catch (e) {
        res.status(400).json(e.message);
    }
});
//?    @route   PATCH todos/:id
//?    @desc    delet Todo
//?    @access  ?Private

router.patch("/check/:id", async (req, res) => {
    const { done } = req.body;
    try {
        let todo = await Todo.findOneAndUpdate({ _id: req.params.id }, { done });
        if (!todo) throw Error("Nie można zaznaczyc prawdopodobnie nie istnieje");
        res.status(200).json(todo);
    } catch (e) {
        res.status(400).json(e.message);
    }
});
module.exports = router;
