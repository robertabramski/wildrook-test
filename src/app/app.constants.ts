/*
The scope of this project may not warrant a
global constants file but in a full application,
this file could easily grow.

Specifically, this constant is used to avoid
magic numbers across JS and CSS.
*/
export const NAV_PADDING = 110;

/*
Since this endpoint could vanish at any point in time,
the payload has been added locally.
*/
export const wrEndpoint:string = 'https://auditwolftestdata.azurewebsites.net/api/SecurityControlRecommendations';
export const localEndpoint:string = 'assets/response.json';
