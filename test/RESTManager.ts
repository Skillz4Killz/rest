import ava from 'ava';
import nock = require('nock');
import { REST, RestOptionsDefaults } from '../src';

const api = new REST();

nock(`${RestOptionsDefaults.api}/v${RestOptionsDefaults.version}`)
	.get('/simpleGet')
	.reply(200, { test: true });

ava('no-token', (test): void => {
	test.throws(() => api.get('/simpleGet'), { instanceOf: Error, message: 'No bot token has been provided, and is required for the action you are trying to do.' });
});
