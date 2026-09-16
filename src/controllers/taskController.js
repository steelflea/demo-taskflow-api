const taskService = require('../services/taskService');

function listTasks(req, res, next) {
  try {
    const { status, assigneeId } = req.query;
    const tasks = taskService.getAllTasks({ status, assigneeId });
    res.json({ data: tasks });
  } catch (err) {
    next(err);
  }
}

function getTask(req, res, next) {
  try {
    const task = taskService.getTaskById(req.params.id);
    res.json({ data: task });
  } catch (err) {
    next(err);
  }
}

function createTask(req, res, next) {
  try {
    const task = taskService.addTask(req.body);
    res.status(201).json({ data: task });
  } catch (err) {
    next(err);
  }
}

function updateTask(req, res, next) {
  try {
    const task = taskService.updateTask(req.params.id, req.body);
    res.json({ data: task });
  } catch (err) {
    next(err);
  }
}

function deleteTask(req, res, next) {
  try {
    taskService.deleteTask(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
}

function listOverdueTasks(req, res, next) {
  try {
    const tasks = taskService.getOverdueTasks();
    res.json({ data: tasks });
  } catch (err) {
    next(err);
  }
}

module.exports = {
  listTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
  listOverdueTasks,
};
