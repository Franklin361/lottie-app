import 'whatwg-fetch'; // fetch

import { config } from 'dotenv';

config({
    path: '.env'
});

jest.mock('./src/utils/getEnvironments', () => ({
    getEnvironments: () => ({ ...process.env })
}));