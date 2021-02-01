const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        // format.errors({ stack: true }),
        format.splat(),
        format.printf((info) => {
            if (info instanceof Error) {
                return `${info.timestamp} - [${info.level.toUpperCase()}] - ${info.stack}`;
            }
            return `${info.timestamp} - [${info.level.toUpperCase()}] - ${info.message}`;
        })
    ),
    transports: [
        // Logs to console
        new transports.Console(),
        // Errors log file
        new transports.File({ filename: './logs/server-error.log', level: 'error' }),
        // All logs file
        new transports.File({ filename: './logs/server.log' })
    ]
});

module.exports.logger = logger;
