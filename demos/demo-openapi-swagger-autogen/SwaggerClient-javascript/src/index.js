/*
 * Démo Design-first du service web de billetterie de concerts
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.63
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from './ApiClient';
import ConcertDetail from './model/ConcertDetail';
import Concerts from './model/Concerts';
import HalLinkObject from './model/HalLinkObject';
import LoginBody from './model/LoginBody';
import AdministrationApi from './api/AdministrationApi';
import ConcertsApi from './api/ConcertsApi';
import DefaultApi from './api/DefaultApi';

/**
* Object.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var DmoDesignFirstDuServiceWebDeBilletterieDeConcerts = require('index'); // See note below*.
* var xxxSvc = new DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new DmoDesignFirstDuServiceWebDeBilletterieDeConcerts.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 0.0.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ConcertDetail model constructor.
     * @property {module:model/ConcertDetail}
     */
    ConcertDetail,

    /**
     * The Concerts model constructor.
     * @property {module:model/Concerts}
     */
    Concerts,

    /**
     * The HalLinkObject model constructor.
     * @property {module:model/HalLinkObject}
     */
    HalLinkObject,

    /**
     * The LoginBody model constructor.
     * @property {module:model/LoginBody}
     */
    LoginBody,

    /**
    * The AdministrationApi service constructor.
    * @property {module:api/AdministrationApi}
    */
    AdministrationApi,

    /**
    * The ConcertsApi service constructor.
    * @property {module:api/ConcertsApi}
    */
    ConcertsApi,

    /**
    * The DefaultApi service constructor.
    * @property {module:api/DefaultApi}
    */
    DefaultApi
};