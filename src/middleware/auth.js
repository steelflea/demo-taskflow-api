/**
 * x-api-key 헤더로 검사하는 아주 단순한 인증.
 * 프로덕션 급은 아님 — 데모/내부용으로만 사용.
 */
function requireApiKey(req, res, next) {
  const key = req.header('x-api-key');
  if (!key || key !== process.env.API_KEY) {
    return res.status(401).json({ error: 'unauthorized' });
  }
  next();
}

module.exports = { requireApiKey };
