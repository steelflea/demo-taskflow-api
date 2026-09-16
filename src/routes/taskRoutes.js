const express = require('express');
const controller = require('../controllers/taskController');
const { requireApiKey } = require('../middleware/auth');

const router = express.Router();

// 조회는 공개, 변경은 API 키 필요 (일단은 이렇게 정해놓음)
router.get('/', controller.listTasks);
router.get('/overdue', controller.listOverdueTasks);
router.get('/:id', controller.getTask);

router.post('/', requireApiKey, controller.createTask);
router.patch('/:id', requireApiKey, controller.updateTask);
router.delete('/:id', requireApiKey, controller.deleteTask);

module.exports = router;
