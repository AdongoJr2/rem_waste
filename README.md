# REM Waste - Skip Size Selection Application

This is a frontend application for selecting skip sizes, built with modern web development practices and a clean user interface.

You can access the UI [here](https://rem-waste-skip-size.web.app/)

## Table of Contents

-   [Tech Stack](#tech-stack)
-   [Installation](#installation)
-   [Running the Application](#running-the-application)
-   [Building for Production](#building-for-production)
-   [Deployment (Firebase)](#deployment-firebase)
-   [Approach Taken](#approach-taken)

## Tech Stack

The project is built using the following core technologies and libraries:

* [React.js](https://react.dev/) (v19)
* [PNPM](https://pnpm.io/) package manager (v10.11.0)
* [Node.js](https://nodejs.org/) (v22.15.1)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [Tailwind CSS](https://tailwindcss.com/)
* [Shadcn UI](https://ui.shadcn.com/)
* [Redux Toolkit](https://redux-toolkit.js.org/) for state management
* [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) for data fetching

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/AdongoJr2/rem_waste.git
cd rem_waste
pnpm install
```

## Running the Application

To run the application in development mode:

```bash
pnpm dev
```

This will start the development server, and you can view the application in your browser, typically at `http://localhost:5173`.

## Building for Production

To build the application for production:

```bash
pnpm build
```

This command will compile TypeScript, bundle your assets, and output them to the `dist` directory, ready for deployment.


## Deployment (Firebase)

The project includes Firebase Hosting configurations for seamless deployment.

* **On Merge to `main`:** The `firebase-hosting-merge.yml` workflow automatically builds and deploys the application to your Firebase Hosting `live` channel when changes are merged into the `main` branch.
* **On Pull Request:** The `firebase-hosting-pull-request.yml` workflow builds and deploys a preview version of the application for each pull request, allowing for easy review before merging.

These workflows utilize GitHub Actions and require your Firebase project credentials to be set up as GitHub secrets.

## Approach Taken

The development of this application focused on creating a modern, responsive, and user-friendly experience for skip size selection. Key aspects of the approach included:

* **Modern UI/UX:** The design prioritizes a clean and intuitive interface, ensuring a smooth user journey.
* **Mobile Responsiveness:** The layout and components are designed to adapt seamlessly across various devices, from mobile phones to larger desktops.
* **Clean UI with React Best Practices:** Components are structured logically, promoting reusability and maintainability. Functional components with hooks are utilized for state and lifecycle management.
* **Shadcn UI Integration:** Leveraging Shadcn UI components, which are built on Radix UI primitives and styled with Tailwind CSS, ensures accessibility, consistency, and a polished look while allowing for deep customization through CSS variables.
* **Redux Toolkit for State Management:** For managing the application's state, particularly the selected skip, Redux Toolkit was chosen for its simplified API, immutability features, and built-in RTK Query for efficient data fetching and caching.
* Aimed to maintain component files to less than 200 lines of code
