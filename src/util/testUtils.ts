import { isEqual } from 'lodash';
import * as winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.printf(({ level, message }) => {
      const colorize = level === 'info' ? '\x1b[32m' : '\x1b[31m';
      const reset = '\x1b[0m';
      return `${colorize}${message}${reset}`;
    }),
  ),
  transports: [new winston.transports.Console()],
});

export type TestCase = {
  input: any[];
  result: any;
};

export function runTests(solution: (...input: any[]) => any, testCases: TestCase[]) {
  testCases.forEach(({ input, result }, index) => {
    const expected = solution(...input);
    const passed = isEqual(expected, result);

    if (passed) {
      logger.info(`Test Case ${index + 1}: Passed | Result: ${JSON.stringify(expected)} | Expected: ${JSON.stringify(result)}`);
    } else {
      logger.error(`Test Case ${index + 1}: Failed | Result: ${JSON.stringify(expected)} | Expected: ${JSON.stringify(result)}`);
    }
  });
}
