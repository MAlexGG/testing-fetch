import { getApiData } from '../src/api.js';
import { jest } from '@jest/globals';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: (data) => {
      return Promise.resolve({ text:'soy un texto' })},
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test('getApiData should return a text', async ()=>{
    const text = await getApiData();
    expect(text).toBe('soy un texto');
    expect(fetch).toHaveBeenCalledTimes(1);
});

