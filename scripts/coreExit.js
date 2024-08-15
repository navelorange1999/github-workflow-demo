const core = require('@actions/core');

(() => {
    core.setFailed('Manually exiting the workflow');
})();