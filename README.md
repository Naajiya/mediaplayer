# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


-styling  react components
    -material ui
    -react -bootstrap

-setting up path for component in react
    -install react router dom : npm i react-router-dom
        -react app must be render inside <BrowserRouter> -main.jsx
        -components needs to setup path must inside <Routes> component of react router dom in app.jsx 
        -use route component to define each component path


how to deplot
1.create index.js file in server folder
2.update script in package.json file as "start":"node index.js"
3.create .gitignore file and add 'node_modules' folder
4.define josn server to run run json file in index.js