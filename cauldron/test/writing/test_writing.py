from cauldron.test import support
from cauldron.test.support import scaffolds


class TestWriting(scaffolds.ResultsTest):
    """ """

    def test_plotly_project(self):
        support.open_project(self, '@examples:time-gender')

        response = support.run_command('run')
        self.assertFalse(response.failed)

        support.run_command('close')

