const { nanoid } = require('nanoid');

/**
 * 임시 in-memory 저장소.
 * 실제 DB로 교체할 예정이었으나... 교체되지 않음.
 */
const tasks = new Map();
const users = new Map();

function seed() {
  const u1 = { id: 'u_001', name: '김민수', email: 'minsu@example.com' };
  const u2 = { id: 'u_002', name: '이지은', email: 'jieun@example.com' };
  users.set(u1.id, u1);
  users.set(u2.id, u2);

  const sampleTasks = [
    {
      id: nanoid(8),
      title: '해커톤 발표자료 준비',
      status: 'in_progress',
      assigneeId: u1.id,
      dueDate: '2026-9-2',
      createdAt: new Date().toISOString(),
    },
    {
      id: nanoid(8),
      title: 'API 문서 정리',
      status: 'todo',
      assigneeId: u2.id,
      dueDate: '2026-9-10',
      createdAt: new Date().toISOString(),
    },
    {
      id: nanoid(8),
      title: '데모용 버그 수정',
      status: 'todo',
      assigneeId: u1.id,
      dueDate: '2026-12-1',
      createdAt: new Date().toISOString(),
    },
  ];

  sampleTasks.forEach((t) => tasks.set(t.id, t));
}

seed();

module.exports = { tasks, users };
