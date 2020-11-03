module.exports = {
    appenders: {
      out: {
        type: "console"
      },
      access: {
        type: "dateFile", // 日期类型
        filename: "logs/node/buss", // 日志输出路径，及命名
        pattern: "yyyy-MM-dd.log", // 日志命名的时间戳
        alwaysIncludePattern: true
      },
      error: {
        type: "dateFile",
        filename: "logs/node/error",
        pattern: "yyyy-MM-dd.log",
        alwaysIncludePattern: true
      }
    },
    categories: {
      default: {
        appenders: ["access", "out", "error"],
        level: "info"
      }
    }
  };