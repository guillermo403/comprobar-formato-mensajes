function log (...args) {
  writeLog(args.join(' '), 'log')
}

function error (...args) {
  writeLog(args.join(' '), 'error')
}

function warn (...args) {
  writeLog(args.join(' '), 'warn')
}

function info (...args) {
  writeLog(args.join(' '), 'info')
}

function writeLog (text, logType) {
  const d = new Date().toISOString()
  console.log(`[${d}] [${logType}] # ${text}`)
}

const logger = {
  log,
  error,
  warn,
  info
}

export default logger
