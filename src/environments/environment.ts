// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  API_BASE_URL: 'http://192.168.1.113:3000/nfc/',
  WEATHER_API:
    'https://api.openweathermap.org/data/2.5//weather?q=nasik&appid=',
  WEATHER_API_KEY: 'b326d0250896b8840d30cb1bdd5fcf80',
  ICON_URL: '/assets/icon/weather/',
  AVATAR_URL: 'http://192.168.1.113:3000/',
  SECRET_KEY: '123india',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
