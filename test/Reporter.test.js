import Reporter from '../src/zait/modules/reporters/Reporter';
import {assert} from 'chai';

describe('Reporter', function () {
  let reporter;

  before(function () {
    reporter = new Reporter();
  });

  describe('reportLog', function () {
    it('should return standard message, when report status is undefined', function () {
      assert.strictEqual(
        reporter.reportLog,
        'Can not figure out report status. Please check reporter results' +
        ' by yourself and alert developer.'
      );
    });

    it('should return Fail, when report status code is 1', function () {
      reporter.reportStatusCode = 1;

      assert.strictEqual(reporter.reportLog, 'Fail');
    });

    it('should return Success, when report status code is 0', function () {
      reporter.reportStatusCode = 0;

      assert.strictEqual(reporter.reportLog, 'Success');
    });
  });

  describe('report()', function () {
    it('should throws error because it is not implemented.', function () {
      assert.throws(reporter.report, 'Field is not implemented');
    });
  });
});
