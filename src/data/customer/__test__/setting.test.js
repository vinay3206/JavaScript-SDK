import { getTokenAsync } from '../../account/Auth';
import {
  getCustomerPreferenceSettingsAsync,
  getCustomerSettingsAsync
} from '../Setting';
import CONFIG from './Config';

// test('Test for getting WhiteLabel for customer', async () =>{
//     jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
//     const result = getTokenAsync(CONFIG.email, CONFIG.password, CONFIG.clientId, CONFIG.clientSecret);
//     const token = await result;
//     const response = getCustomerPreferenceSettingsAsync(CONFIG.domain, token.accessToken);
//     const whiteLabel = await response;
// })
//
test('Test for getting WhiteLabel for public with invalid domain for customer', async () => {
    // jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    // const result = getTokenAsync(CONFIG.email, CONFIG.password, CONFIG.clientId, CONFIG.clientSecret);
    // const token = await result;
    // const response = getCustomerPreferenceSettingsAsync(CONFIG.invalidDomain, token.accessToken);
    // await expect(response).rejects.toHaveProperty('statusCode', 404);
})

describe('Retreive customer setting', () => {
  it('should response a list of setting', async () => {
    const urlString = await getCustomerSettingsAsync(14445, 'routing', token.accessToken);
    expect(typeof urlString).toBe('string')
  });
});
