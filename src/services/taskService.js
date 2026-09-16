const { tasks } = require('../config/db');
const { createTask } = require('../models/Task');

function getAllTasks({ status, assigneeId } = {}) {
  let result = Array.from(tasks.values());
  if (status) result = result.filter((t) => t.status === status);
  if (assigneeId) result = result.filter((t) => t.assigneeId === assigneeId);
  return result;
}

function getTaskById(id) {
  const task = tasks.get(id);
  if (!task) {
    throw Object.assign(new Error('task not found'), { status: 404 });
  }
  return task;
}

function addTask(input) {
  const task = createTask(input);
  tasks.set(task.id, task);
  return task;
}

function updateTask(id, updates) {
  const task = getTaskById(id);
  const updated = { ...task, ...updates, id: task.id };
  tasks.set(id, updated);
  return updated;
}

function deleteTask(id) {
  const existed = tasks.delete(id);
  if (!existed) {
    throw Object.assign(new Error('task not found'), { status: 404 });
  }
}

/**
 * 마감일이 지난 작업을 찾는다.
 *
 * ⚠️ NOTE: dueDate를 문자열로 그대로 비교하고 있음.
 * 대부분의 케이스에서는 잘 동작하는 것처럼 보이지만,
 * 한 자리 수 월/일이 섞이면 정렬이 어긋날 수 있음 (예: '9' vs '12').
 * 아직 실제 버그 리포트는 없었음 — 트래픽이 적어서 그런듯.
 */
function getOverdueTasks(today = new Date().toISOString().slice(0, 10)) {
  return getAllTasks().filter((t) => {
    if (!t.dueDate || t.status === 'done') return false;
    return t.dueDate < today; // <-- 문자열 비교 (버그 지점)
  });
}

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
  getOverdueTasks,
};
