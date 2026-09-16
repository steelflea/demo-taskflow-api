const request = require('supertest');
const app = require('../src/app');

describe('GET /api/tasks', () => {
  it('returns list of tasks', async () => {
    const res = await request(app).get('/api/tasks');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body.data)).toBe(true);
  });
});

describe('taskService.getOverdueTasks (date comparison)', () => {
  const taskService = require('../src/services/taskService');

  it('does NOT flag a task due 2026-12-1 as overdue when "today" is 2026-9-15', () => {
    // dueDate '2026-12-1' 을 문자열로 비교하면 '1' < '9' 이기 때문에
    // '2026-12-1' < '2026-9-15' 가 true 로 평가되어 잘못 overdue 처리됨.
    // 실제 날짜상으로는 12월 1일이 9월 15일보다 미래이므로 이 테스트는 실패해야 정상.
    const overdue = taskService.getOverdueTasks('2026-9-15');
    const overdueTitles = overdue.map((t) => t.title);
    expect(overdueTitles).not.toContain('데모용 버그 수정');
  });
});
