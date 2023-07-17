/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This file is auto generated by Konfig (https://konfigthis.com).
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 * @interface UploadImageRequest
 */
export interface UploadImageRequest {
    /**
     * Additional data to pass to server
     * @type {string}
     * @memberof UploadImageRequest
     */
    'additionalMetadata'?: string;
    /**
     * file to upload
     * @type {Uint8Array | File}
     * @memberof UploadImageRequest
     */
    'file'?: Uint8Array | File;
}

