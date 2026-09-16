const { nanoid } = require('nanoid');

const VALID_STATUSES = ['todo', 'in_progress', 'done'];

/**
 * 새 Task 객체 생성.
 * dueDate 포맷: 'YYYY-M-D' (기존 데이터와의 호환을 위해 유지 중)
 */
function createTask({ title, assigneeId, dueDate, status = 'todo' }) {
  if (!title) {
    throw Object.assign(new Error('title is required'), { status: 400 });
  }
  if (!VALID_STATUSES.includes(status)) {
    throw Object.assign(new Error(`invalid status: ${status}`), { status: 400 });
  }

  return {
    id: nanoid(8),
    title,
    assigneeId: assigneeId || null,
    dueDate: dueDate || null,
    status,
    createdAt: new Date().toISOString(),
  };
}

module.exports = { createTask, VALID_STATUSES };
