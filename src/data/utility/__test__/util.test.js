import {
  convertObjectIntoURLString,
  apiResponseErrorHandler,
  rejectPromise,
  getFormattedErrorArray,
  convertObjectIntoKeyValueArray,
  arrayReduce,
  hasSameObjectId,
  pushKeyAndMessageToArray,
} from '../Util';

describe('Convert object key/value into url string', () => {
  it('should match the string values limit and offset', async () => {
    let data = {
      limit: 20,
      offset: 1,
    };

    const urlString = await convertObjectIntoURLString(data);
    expect(urlString).toMatch(/limit/);
    expect(urlString).toMatch(/offset/);
  });
});

describe('Handle API Error', () => {
  it('should return promise (reject) object with stausCode, statusText and errorMessage', async () => {
    const errors = {
      response: {
        status: 400,
        statusText: 'Bad Request',
        errorMessage: {
          email: ['Duplicate Email'],
        },
      },
    };
    const result = await apiResponseErrorHandler(errors);
    expect('statusCode' in result).toBeTruthy();
    expect('statusText' in result).toBeTruthy();
    expect('errorMessage' in result).toBeTruthy();
    expect.arrayContaining(result.errorMessage);
  });
});

describe('Response Promise Reject', () => {
  it('should return promise (reject) object with stausCode, statusText and errorMessage', async () => {
    const errors = {
      response: {
        status: 400,
        statusText: 'Bad Request',
        errorMessage: 'Errror String',
      },
    };

    const result = await rejectPromise(errors);
    expect('statusCode' in result).toBeTruthy();
    expect('statusText' in result).toBeTruthy();
    expect('errorMessage' in result).toBeTruthy();
  });
});

describe('Format error messages into key value objects inside of array', () => {
  const errorMessage = {
    email: ['Duplicate Email'],
  };
  const expected = ['email', ['Duplicate Email']];

  it('matches if the actual object contains expected key: value pairs', async () => {
    const result = getFormattedErrorArray(errorMessage);
    expect(result).toEqual(expect.objectContaining(expected));
  });
});

describe('Convert Object into key/value array.', () => {
  const errorMessage = {
    email: ['Duplicate Email'],
  };
  const expected = ['email', ['Duplicate Email']];

  it('matches if the actual object contains expected key: value pairs', async () => {
    const result = convertObjectIntoKeyValueArray(errorMessage);
    expect(result).toEqual(expect.objectContaining(expected));
  });
});

describe('Iterate the array and format by using ES 6 reduce method', () => {
  const data = [1, 2, 3];

  it('should response key/value elements inside of an array', async () => {
    const result = await arrayReduce(data, data.sort(), []);
    it('tests result value types correctly', () => {
      expect(result).toBeType('array');
    });
  });
});

describe('Store key/value element into array', () => {
  it('should response new array with key/value elements', async () => {
    const [key, value] = ['key', 'messages'];

    const result = await pushKeyAndMessageToArray([], [key, value]);
    expect(result).toBe('array');
  });
});

describe('Check the same object id in two params', () => {
  it('true/false value in ', async () => {
    const objectA = {id: 1};
    const objectB = {id: 1};
    const result = await hasSameObjectId(objectA, objectB);
    expect(result).toBe('array');
  });
});
