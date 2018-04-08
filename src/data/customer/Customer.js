/**
 * @fileoverview This file contains all general Customer related functions that are triggered by a Customer
 */

import axios from 'axios';
import endpoints from '../Endpoint';
import camelize from 'camelize';
import {apiResponseErrorHandler} from '../utility/Util';

/**
 * Create New Customer
 * @param {string} email
 * @param {string} password
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} phone
 * @param {string} birthday
 * @param {int} identityId
 * @param {string} coName
 * @param {string} coPhone
 * @param {string} coVatNo
 * @return {object} Promise resolve/reject
 */
export const createNewCustomerAsync = async ({
  email,
  password,
  firstName,
  lastName,
  phone,
  birthday,
  identityId,
  coName,
  coPhone,
  coVatNo,
}) => {
  try {
    const response = await axios({
      method: 'POST',
      url: endpoints.NEW_CUSTOMER,
      headers: {'Content-Type': 'application/json'},
      data: {
        email,
        password,
        firstName,
        lastName,
        phone,
        identityId,
        birthday,
        companyName: coName,
        companyPhone: coPhone,
        companyVatNumber: coVatNo,
      },
    });
    return camelize(response.data.data);
  } catch (e) {
    return apiResponseErrorHandler(e);
  }
};
