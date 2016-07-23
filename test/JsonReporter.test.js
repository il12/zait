import JsonReporter from '../src/zait/modules/reporters/JsonReporter';
import {assert} from 'chai';
import fs from 'fs';

describe('JSON reporter', function () {

  describe('report()', function () {
    let measures;
    let options = {};

    before(function () {
      measures = {
        some: 'Yeah',
        measures: 'Baby',
        for_test: 'test me fully'
      };
    });

    beforeEach(function () {
      try {
        fs.unlinkSync(options.report_path);
      } catch (e) {}
    });

    it('report file should exists', function () {
      options.report_path = './zait_report.json';

      const jsonReporter = new JsonReporter(measures, options, 'test');

      jsonReporter.report();

      assert.isTrue(fs.statSync(options.report_path).isFile());
    });

    it('should throws error when it can\'t reports', function () {
      options.report_path = '/zait_doesn_is_not_allowed_here';

      const jsonReporter = new JsonReporter(measures, options, 'test');

      assert.throws(jsonReporter.report);
    });

    it('report status should be zero', function () {
      options.report_path = './zait_report.json';

      const jsonReporter = new JsonReporter(measures, options, 'test');

      jsonReporter.report();

      assert.strictEqual(jsonReporter.reportStatusCode, 0);
    });

    it('report status code should be 1(non zero code)', function () {
      options.report_path = '/zait_is_not_allowed_here';

      const jsonReporter = new JsonReporter(measures, options, 'test');

      jsonReporter.report();

      assert.strictEqual(jsonReporter.reportStatusCode, 1);
    });
  });
});
