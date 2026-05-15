var express = require('express');
var router = express.Router();
const Task = require('../models/Task');

const API_KEY = "123456";


router.use((req, res, next) => {

    const apiKey = req.headers.authorization;

    if (apiKey !== API_KEY) {
        return res.status(401).json({
            message: 'Unauthorized - Invalid API Key'
        });
    }

    next();

});


router.get('/getTasks', async (req, res) => {

    try {

        const tasks = await Task.find();

        res.status(200).json(tasks);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


router.post('/addTask', async (req, res) => {

    const { name, description, duedate } = req.body;

    if (!name || !description || !duedate) {
        return res.status(400).json({
            message: 'Missing required fields'
        });
    }

    try {

        const newTask = new Task({
            name,
            description,
            duedate
        });

        await newTask.save();

        res.status(200).json({
            message: 'Task added successfully',
            task: newTask
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


router.delete('/removeTask/:id', async (req, res) => {

    try {

        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) {
            return res.status(400).json({
                message: 'Task not found'
            });
        }

        res.status(200).json({
            message: 'Task deleted'
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;