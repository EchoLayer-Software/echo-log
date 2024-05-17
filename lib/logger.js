const { LogConfig } = require("./config/log-config");
const { LogLevel }  = require("./utils/log-level");

class Logger {
    /**
     * @type {LogConfig}
     */
    #config;

    /**
     * @returns {Logger} A new instance of Logger with default values.
     * @description The default log level is `LogLevel.Info`.
     */
    static with_defaults() {
        return new Logger();
    }

    /**
     * @param {LogConfig} log_config The log config to be used.
     * @returns {Logger} A new instance of Logger with the specified log config.
     * @throws {Error} If the log_config is not an instance of LogConfig.
     */
    static with_config(log_config) {
        return new Logger(log_config);
    }

    constructor(log_config) {
        log_config = log_config || LogConfig.with_defaults();
        LogConfig.assert(log_config);
        this.#config = log_config;
    }

    /**
     * Get the current log level.
     *
     * @returns {LogLevel} The current log level.
     *
     * const logger = new Logger(LogLevel.Debug);
     * console.log(logger.level); // LogLevel.Debug
     * logger.level = LogLevel.Error; // throws error
     * logger.level = LogLevel.Debug; // works fine
     * logger.level = 0; // throws error
     */
    get level() {
        return this.#config.level;
    }
}

module.exports = { Logger }