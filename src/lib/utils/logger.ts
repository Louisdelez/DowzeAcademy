type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogEvent {
  action: string;
  userId?: string;
  details?: Record<string, unknown>;
  timestamp: string;
}

function formatLog(level: LogLevel, event: LogEvent): string {
  return `[${level.toUpperCase()}] [${event.timestamp}] ${event.action}${
    event.userId ? ` (user: ${event.userId})` : ''
  }${event.details ? ` ${JSON.stringify(event.details)}` : ''}`;
}

export const logger = {
  info: (action: string, userId?: string, details?: Record<string, unknown>) => {
    const event: LogEvent = {
      action,
      userId,
      details,
      timestamp: new Date().toISOString(),
    };
    console.log(formatLog('info', event));
  },

  warn: (action: string, userId?: string, details?: Record<string, unknown>) => {
    const event: LogEvent = {
      action,
      userId,
      details,
      timestamp: new Date().toISOString(),
    };
    console.warn(formatLog('warn', event));
  },

  error: (action: string, error: unknown, userId?: string, details?: Record<string, unknown>) => {
    const event: LogEvent = {
      action,
      userId,
      details: {
        ...details,
        error: error instanceof Error ? error.message : String(error),
      },
      timestamp: new Date().toISOString(),
    };
    console.error(formatLog('error', event));
  },

  debug: (action: string, userId?: string, details?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'development') {
      const event: LogEvent = {
        action,
        userId,
        details,
        timestamp: new Date().toISOString(),
      };
      console.debug(formatLog('debug', event));
    }
  },

  // Specific user action logs
  userAction: {
    login: (userId: string) => {
      logger.info('USER_LOGIN', userId);
    },
    logout: (userId: string) => {
      logger.info('USER_LOGOUT', userId);
    },
    moduleStarted: (userId: string, moduleId: string) => {
      logger.info('MODULE_STARTED', userId, { moduleId });
    },
    theoryViewed: (userId: string, moduleId: string) => {
      logger.info('THEORY_VIEWED', userId, { moduleId });
    },
    quizSubmitted: (userId: string, moduleId: string, passed: boolean, score: number) => {
      logger.info('QUIZ_SUBMITTED', userId, { moduleId, passed, score });
    },
    practiceCompleted: (userId: string, moduleId: string) => {
      logger.info('PRACTICE_COMPLETED', userId, { moduleId });
    },
    moduleCompleted: (userId: string, moduleId: string) => {
      logger.info('MODULE_COMPLETED', userId, { moduleId });
    },
  },

  // Admin action logs
  adminAction: {
    login: (username: string) => {
      logger.info('ADMIN_LOGIN', undefined, { username });
    },
    logout: (username: string) => {
      logger.info('ADMIN_LOGOUT', undefined, { username });
    },
    contentCreated: (entityType: string, entityId: string) => {
      logger.info('CONTENT_CREATED', undefined, { entityType, entityId });
    },
    contentUpdated: (entityType: string, entityId: string) => {
      logger.info('CONTENT_UPDATED', undefined, { entityType, entityId });
    },
    contentDeleted: (entityType: string, entityId: string) => {
      logger.info('CONTENT_DELETED', undefined, { entityType, entityId });
    },
    contentPublished: (entityType: string, entityId: string) => {
      logger.info('CONTENT_PUBLISHED', undefined, { entityType, entityId });
    },
  },
};
