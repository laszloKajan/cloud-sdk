/* Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved. */

import { createLogger, MapType } from '@sap-cloud-sdk/util';
import axios, { AxiosError } from 'axios';
import { getAxiosConfigWithDefaults } from '../../http-client';
import { getAgentConfig } from '../http-agent';
import { ODataRequest, ODataRequestConfig } from '../request';
import { filterNullishValues, getHeader, getHeaderValue } from './headers-util';

const logger = createLogger({
  package: 'core',
  messageContext: 'csrf-headers'
});

/**
 * Get CSRF token and cookies for a request with destination related headers.
 * @param request The request to get CSRF headers for.
 * @param headers Destination related headers to include in the request.
 * @returns A promise to an object containing the CSRF related headers
 */
export async function buildCsrfHeaders<RequestT extends ODataRequestConfig>(
  request: ODataRequest<RequestT>,
  headers: MapType<string>
): Promise<MapType<string>> {
  const csrfHeaders = await makeCsrfRequest(request, headers);
  validateCsrfTokenResponse(csrfHeaders);
  return filterNullishValues({
    ...getHeader('x-csrf-token', headers),
    cookie: buildCookieHeaderValue(getHeaderValue('set-cookie', headers))
  });
}

function makeCsrfRequest<RequestT extends ODataRequestConfig>(
  request: ODataRequest<RequestT>,
  csrfRequestHeaders: MapType<string>
): Promise<MapType<any>> {
  if (!request.destination) {
    throw Error('The request destination is undefined.');
  }

  const axiosConfig = {
    headers: {
      ...csrfRequestHeaders,
      'x-csrf-token': 'Fetch',
      ...getAxiosConfigWithDefaults()
    },
    url: request.serviceUrl(),
    ...getAgentConfig(request.destination)
  };

  return axios
    .request(axiosConfig)
    .then(response => response.headers)
    .catch((error: AxiosError) => {
      if (!error.response) {
        throw new Error('The error response is undefined.');
      }
      return error.response.headers;
    });
}

function validateCsrfTokenResponse(responseHeaders: MapType<any>) {
  if (!responseHeaders['x-csrf-token']) {
    logger.warn(
      'Destination did not return a CSRF token. This may cause a failure when sending the OData request.'
    );
  }

  if (!responseHeaders['set-cookie']) {
    logger.warn('CSRF header response does not include cookies.');
  }

  return responseHeaders;
}

function buildCookieHeaderValue(cookies?: string[]): string | undefined {
  if (cookies && cookies.length) {
    return cookies.map((cookie: string) => cookie.split(';')[0]).join(';');
  }
}