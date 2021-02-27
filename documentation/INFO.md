# Project Overview


###### Technology Stack (Subject to Change)
| Software | Purpose | Pros | Cons | Useful Links |
| --------------- | :-------------- | --------------- | --------------- | --------------- |
| React        |Front-end for web client 	| Very modular<br />Fast downloads of site for users (3KB variants exist of libraries)<br />Easier to pick up compared to Angular<br />Larger variety of tutorials available compared to almost every other SPA tool<br />Good integration with React Native for higher-performance _native_ applications | Team members have less experience with it<br />Vue.js is a competing framework that is said to be easier to pick up |  |
|Cordova |Native apps with no code changes | Negligible changes or no changes in code required to generate Android APK from web app | Slow performance compared to true native apps |  |
|React Native |Native apps with minimal code changes	| Better performance compared to Cordova/Ionic/etc.<br />Can access some native device features which are usually blocked by browsers	| Some changes to code required                                |  |
|Okta |Authentication	| Easy way to provide multiple secure sign-in & sign-up options<br />Free service	| Reliance on third-party service                              |  |
|MongoDB |Data storage	| Integrates well with Node-based stacks	| Less features compared to some other options (both SQL & NoSQL) |  |
|Mongoose |MongoDB ORM	| Simplifies database access	| Additional non-essential dependency                          |  |
|Node | JavaScript back-end framework for server component | Allows usage of a single language (JavaScript) and its associated ecosystem and tools for both back-end and front-end work<br />Works well for asynchronous programming<br />Very high amount and variety of tutorials, developers & tools	| Seems to be less-favoured than Python & Go for fast development of back-end services by experienced developers |  |
|Express |Reduces boilerplate code that needs to be written for Node applications by providing helper functions	| Extremely common library to use in conjunction with Node (most Node tutorials typically assume Express will be used as well) | None (Node can be used more directly when needed) |  |

Current selection of tools and libraries is commonly known as the **MERN stack** and has components that integrate well with each other.