import axios from 'axios';
import endpoints from '../Endpoint';
import camelize from 'camelize';
import {apiResponseErrorHandler} from '../utility/Util';

/**
 * Request reset password
 * @param {string} email
 * @return {object} Promise resolve/reject
 */
export const resetPasswordRequestAsync = async (email) => {
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.PASSWORD_RESET,
      headers: {'Content-Type': 'application/json'},
      data: {
        email,
      },
    });

    return camelize(response.data.data);
  } catch (e) {
    return apiResponseErrorHandler(e);
  }
};

/**
 * Reset password with valid refresh token
 * @param {string} token
 * @param {string} email
 * @param {string} password
 * @param {string} confirmPassword
 * @return {object} Promise resolve/reject
 */
export const resetPasswordAsync = async (
  token,
  email,
  password,
  confirmPassword
) => {
  try {
    const response = await axios({
      method: 'PUT',
      url: endpoints.PASSWORD_RESET,
      headers: {'Content-Type': 'application/json'},
//TODO: API is expecting a token, but API works fine without passing token
      data: {
        token,
        email,
        password,
        confirmPassword,
      },
    });
    return camelize(response.data.data);
  } catch (e) {
    return apiResponseErrorHandler(e);
  }
};

/**
 * Validate Reset Password Token
 * @param {string} token
 * @return {object} Promise resolve/reject
 */
export const validateResetPasswordTokenAsync = async (token) => {
  //TODO: we need to rename this function as it's not related to the ResetPasswordToken but the validate the AccessToken
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.PASSWORD_RESET_TOKEN,
      headers: {'Content-Type': 'application/json'},
      data: {
        token,
      },
    });

    return camelize(response.data.data);
  } catch (e) {
    return apiResponseErrorHandler(e);
  }
};

/**
 * Retrieve Driver's jobs for driver app
 * Old code for driver app (Should move to carpal driver sdk)
 * @param {int} id
 * @param {string} token
 * @param {string} date
 * @return {object} Promise resolve/reject
 * @deprecated since version 0.1.77
 */
export const getDriverJobsAsync = async (id, token, date) => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.MY_JOBS.replace('{0}', id).replace('{1}', date),
      headers: {Authorization: token},
    });
    return camelize(response.data.data);
  } catch (e) {
    return apiResponseErrorHandler(e);
  }
};

/**
 * Retrieve Driver's legs route for driver app
 * Old code for driver app (Should move to carpal driver sdk)
 * @param {string} id
 * @param {string} token
 * @param {string} date
 * @return {object} Promise resolve/reject
 * @deprecated since version 0.1.77
 */
export const getDriverLegsAsync = async (id, token, date) => {
  try {
    const response = await axios({
      method: 'GET',
      url: endpoints.MY_LEGS.replace('{0}', id).replace('{1}', date),
      headers: {Authorization: token},
    });
    return camelize(response.data.data);
  } catch (e) {
    return apiResponseErrorHandler(e);
  }
};
