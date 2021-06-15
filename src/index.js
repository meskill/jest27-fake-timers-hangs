const fastglob = require('fast-glob');

exports.fn = async () => {
    return fastglob('**/*.{js,json}', {
        cwd: __dirname
    });
}