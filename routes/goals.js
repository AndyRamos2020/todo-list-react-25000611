var express = require('express');
var router = express.Router();
const Goal = require('../models/Goal');

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

router.get('/getGoals', async (req, res) => {

    try {

        const goals = await Goal.find();

        res.status(200).json(goals);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


router.post('/addGoal', async (req, res) => {

    const { name, description, duedate } = req.body;

    if (!name || !description || !duedate) {
        return res.status(400).json({
            message: 'Missing required fields'
        });
    }

    try {

        const newGoal = new Goal({
            name,
            description,
            duedate
        });

        await newGoal.save();

        res.status(200).json({
            message: 'Goal added successfully',
            goal: newGoal
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


router.delete('/removeGoal/:id', async (req, res) => {

    try {

        const deletedGoal = await Goal.findByIdAndDelete(req.params.id);

        if (!deletedGoal) {
            return res.status(400).json({
                message: 'Goal not found'
            });
        }

        res.status(200).json({
            message: 'Goal deleted'
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;