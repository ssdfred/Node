const Task = require('../model/task');
const controller = {};



controller.getAll = (req, res) => {
    Task.find()
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.send(err));
};

controller.store = (req, res) => {
    const task_data = {
        title: req.body.title,
        description: req.body.description,
        //ajouter la date du moment
        start_date: new Date() ,
        //ajouter la date du moment 
        end_date: new Date() ,
        done: req.body.done
    }

   Task.create(task_data)
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.send(err));
};

controller.update = (req, res) => {
    const task_data = {}
    if (req.body.title != undefined) task_data.title = req.body.title
    if (req.body.description != undefined) task_data.description = req.body.description
    if (req.body.start_date != undefined) task_data.start_date = req.body.start_date
    if (req.body.end_date != undefined) task_data.end_date = req.body.end_date
    if (req.body.done != undefined) task_data.done = req.body.done

    Task.updateOne({_id : req.params.id}, req.body)
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.send(err));
}
controller.destroy = (req, res) => {
    Task.deleteOne({_id : req.params.id})
    .then((queryResult) => res.json(queryResult))
    .catch((err) => res.send(err));
};
module.exports = controller