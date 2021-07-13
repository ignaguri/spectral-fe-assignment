# Spectral FE Assignment

## Description
This SPA was made as an assignment for an interview.
It displays the consumption of energy of electrical assets over time, having this information come from an external API.

### Libraries used
- Vue: frontend framework
- Vuex: state management
- Chart.js: charts library
- Axios: HTTP client for making API requests
- Jest: test framework

### Project structure
- `<root>`: contains configuration files & package definition.
- `src/api`: contains the API requests to get the assets & measurements information.
    - These requests are made using Axios.
    - There's a `responseInterceptor.js` file that is used to mock responses during development and should be deactivated when building for production.
- `src/components`: contains the components used throughout the application.
- `src/config`: contains the application configuration, as API URLs & endpoints.
- `src/mocks`: contains the mocked responses used by `responseInterceptor.js`.
- `src/sections`: contains the main sections of the app.
    - `Chart`: the container for drawing the linear chart showing energy consumption.
    - `Sidebar`: the lateral menu where the user chooses the asset whose information wants to see.
- `src/store`: contains all the files related to the Vuex store.
    - `actions`: the actions that would be dispatched by the components to commit the mutations.
        - `setSelectedAsset`: for changing the currently `state.selectedAsset`.
        - `fetchAssets`: retrieves assets from the server and saves them in `state.assets`.
        - `fetchMeasurements`: retrieves measurements from the server and saves them in `state.measurements`.
    - `constants`: a file containing all the names of state values, actions, mutations & getters functions names in order to avoid using plain strings which are error prone.
    - `getters`: returns date from the state with some processing done.
        - `assetTree`: returns the assets in a tree-like structure for easier iteration & managing.
        - `getMeasurementsByAsset`: returns an object with the energy measurements of each month for the currently selected asset. If the asset has children, it returns the sum of its children's consumptions.
    - `mutations`: the actual modifications of the state.
    - `utils`: some utility functions used for the `getters`.
- `src/App.vue`: the app root, defining the layout and sections used.
- `src/main.js`: the app entry point.

### Components
For this app, 3 components are being used:

- `Layout`
Used to give the app structure and styles. It contains two slot placeholders for Sidebar and Chart.

- `TreeView`
A list that renders a `TreeItem` component for every item of the `items` prop that was passed.

- `TreeItem`
A list item containing a clickable item name which will expand in another list of `TreeItem`s if it has children. The list-style type (bullets) varies depending on whether the item is open, closed, or is the end of the tree branch.

### Screenshot
![image](https://user-images.githubusercontent.com/9204176/125376806-26ab6900-e362-11eb-89df-3cfbdd4a97ab.png)

---

## Project setup

> In order to run this project you must have Node.JS v14 installed

Install dependencies before running the project
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

With Jest --watch:
```
npm run test:watch
```
### Lints and fixes files
```
npm run lint
```

> This scaffolding was created with [vue-cli](https://cli.vuejs.org/)
