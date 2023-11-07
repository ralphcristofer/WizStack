![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![Radix UI](https://img.shields.io/badge/radix_ui-%23AC4EA4.svg?style=for-the-badge&logo=radix-ui&logoColor=white)

# MERN Stack w/Vite & Radix UI
> Milestone project for COMP229 - Web Application Development

## Navigating the Repo

This might be a little confusing to navigate at first, so here's a quick guide to help you out.
Provided below is a list of the directories and their contents, most files will contain a 
`ex` in front of them signifying that they are examples and should be removed.

```bash
.
├── node_modules
├── public
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   └── ...
│   ├── db/
│   │   ├── controllers/
│   │   │   └── ...
│   │   └── models/
│   │       └── ...
│   ├── layout/
│   │   └── ...
│   ├── routers/
│   │   └── ...
│   └── utils/
│       ├── constants/
│       │   └── ...
│       └── helpers/
│           └── ...
├── .env
├── .env.local
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

Of course this is just a templated structure, and it will change throughout the duration of the project.

## Getting Started

1. Clone the repo `git clone <repo-url>`
2. Install dependencies `npm install`
3. Start the server `npm run dev` or `npm start`
4. View the template vite app at `http://localhost:4173`

This template is a starting point for building a MERN stack app with Vite. It includes the following:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Radix UI](https://www.radix-ui.com/)
- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [Mongoose](https://mongoosejs.com/)
- [ESLint](https://eslint.org/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [colors](https://www.npmjs.com/package/colors)

among many other packages. To view the full list of dependencies, check out the `package.json` file or use the command `npm list`.

Plugins used:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Contributors
<a href="https://github.com/Hi-kue/COMP229_Milestone/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Hi-kue/COMP229_Milestone" />
</a>

Once you become a contributor, this should be able to automatically update with your Github Icon but feel free to add whatever else you want 😄.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
