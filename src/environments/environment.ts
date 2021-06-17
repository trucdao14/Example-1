// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appID: '',
  config: {
    apiKey: 'process.env.API_KEY',
    authDomain: 'process.env.AUTH_DOMAIN',
    databaseURL: 'process.env.DBURL',
    projectId: 'process.env.PID',
    storageBucket: 'process.env.BUCKET',
    messagingSenderId: 'process.env.MSGID'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
