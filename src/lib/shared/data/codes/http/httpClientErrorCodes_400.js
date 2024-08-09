import badRequest_400 from './400/badRequest_400'
import unauthorized_401 from './400/unauthorized_401'
import paymentRequired_402 from './400/paymentRequired_402'
import forbidden_403 from './400/forbidden_403'
import notFound_404 from './400/notFound_404'
import methodNotAllowed_405 from './400/methodNotAllowed_405'
import notAcceptable_406 from './400/notAcceptable_406'
import proxyAuthenticationRequired_407 from './400/proxyAuthenticationRequired_407'
import requestTimeout_408 from './400/requestTimeout_408'
import conflict_409 from './400/conflict_409'
import gone_410 from './400/gone_410'
import lengthRequired_411 from './400/lengthRequired_411'
import preconditionFailed_412 from './400/preconditionFailed_412'
import payloadTooLarge_413 from './400/payloadTooLarge_413'
import uRITooLong_414 from './400/uRITooLong_414'
import unsupportedMediaType_415 from './400/unsupportedMediaType_415'
import rangeNotSatisfiable_416 from './400/rangeNotSatisfiable_416'
import expectationFailed_417 from './400/expectationFailed_417'
import teapot_418 from './400/teapot_418'
import misdirectedRequest_421 from './400/misdirectedRequest_421'
import unprocessableContent_422 from './400/unprocessableContent_422'
import locked_423 from './400/locked_423'
import failedDependency_424 from './400/failedDependency_424'
import tooEarly_425 from './400/tooEarly_425'
import upgradeRequired_426 from './400/upgradeRequired_426'
import preconditionRequired_428 from './400/preconditionRequired_428'
import tooManyRequests_429 from './400/tooManyRequests_429'
import requestHeaderFieldsTooLarge_431 from './400/requestHeaderFieldsTooLarge_431'
import unavailableForLegalReasons_451 from './400/unavailableForLegalReasons_451'
// import continue_100 from './400/continue_100'


const data = {
  title: '4xx: Client Error codes.',
    brandColour: '#9f173a',
  heartClass: 'heart-400',
    link: '/codes/http/4xx',
  logo: '/images/logos/400.svg',
  id: '4xx',
  shortDesc: 'This class of status code is intended for situations in which the error seems to have been caused by the client.',
  desc: [
    'Except when responding to a HEAD request, the server should include an entity containing an explanation of the error situation, and whether it is a temporary or permanent condition.',
    'These status codes are applicable to any request method. User agents should display any included entity to the user.',
  ],
    promo: [
      badRequest_400,
      tooManyRequests_429,
      requestHeaderFieldsTooLarge_431,
      unavailableForLegalReasons_451,
    ],
    data: [
      badRequest_400,
      unauthorized_401,
      paymentRequired_402,
      forbidden_403,
      notFound_404,
      methodNotAllowed_405,
      notAcceptable_406,
      proxyAuthenticationRequired_407,
      requestTimeout_408,
      conflict_409,
      gone_410,
      lengthRequired_411,
      preconditionFailed_412,
      payloadTooLarge_413,
      uRITooLong_414,
      unsupportedMediaType_415,
      rangeNotSatisfiable_416,
      expectationFailed_417,
      teapot_418,
      misdirectedRequest_421,
      unprocessableContent_422,
      locked_423,
      failedDependency_424,
      tooEarly_425,
      upgradeRequired_426,
      preconditionRequired_428,
      tooManyRequests_429,
      requestHeaderFieldsTooLarge_431,
      unavailableForLegalReasons_451,
    ]
  }

export default data;
