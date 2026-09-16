/**
 * 아주 단순한 로거. 나중에 winston 같은 걸로 교체 예정이었음.
 */
function info(message) {
  console.log(`[INFO] ${new Date().toISOString()} - ${message}`);
}

function error(message) {
  console.error(`[ERROR] ${new Date().toISOString()} - ${message}`);
}

module.exports = { info, error };
