# Next.js AppKit Starter

Next.js AppKit Starter is an open-source project that provides a powerful and flexible starting point for building Web3 dapps using Next.js, AppKit, and Wagmi. This starter kit is designed to help developers quickly set up and start building decentralized applications (dApps) with best practices and modern tooling.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Configuration](#configuration)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- Next.js 13+ with App Router
- AppKit integration for smart contract interactions
- Wagmi hooks for Ethereum interactions and wallet management
- Tailwind CSS for styling
- TypeScript support
- ESLint and Prettier for code quality

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js (v14.0.0 or later)
- pnpm or npm (v6.0.0 or later) or yarn (v1.22.0 or later)
- Git

## Getting Started

To get started with the Next.js AppKit Starter, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/michojekunle/appkit-starter.git
   cd appkit-starter
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

3. Copy the example environment file and update it with your values:

   ```bash
   cp .env.example .env.local
   ```

   Edit the `.env.local` file and add your project-specific variables.

4. Start the development server:

   ```bash
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application running.

## Project Structure

The project structure follows Next.js 13+ conventions with the App Router:

```
nextjs-appkit-starter/
├── app/
│   ├── _components/
│   │   ├── appkit-wagmi-integration.tsx
│   │   ├── header.tsx
│   │   ├── index.tsx
│   │   └── initial-state-provider.tsx
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│       └── ...
├── public/
│   └── ...
├── styles/
│   └── globals.css
├── .env.example
├── .eslintrc.json
├── .gitignore
├── next.config.js
├── package.json
├── README.md
├── tailwind.config.js
└── tsconfig.json
```

## Configuration

1. Update the `.env.local` file with your project-specific variables:

   ```
   NEXT_PUBLIC_PROJECT_ID=your_wallet_connect_project_id
   NEXT_PUBLIC_CONTRACT_ADDRESS=your_contract_address
   ```

2. Modify the `next.config.js` file if you need to add custom Next.js configuration.

3. Update the `tailwind.config.js` file to customize your Tailwind CSS setup.

## Usage

### AppKit Integration

The `components/appkit-wagmi-integration.tsx` file demonstrates how to use AppKit and Wagmi hooks to interact with smart contracts. You can use this as a reference for implementing your own contract interactions.

### Wallet Connection

The project uses AppKit for wallet connection. The `w3-button` component is already integrated into the layout, allowing users to connect their wallets easily.


## Customization

- Update the content in `app/page.tsx` to customize the landing page.
- Modify the `components/header.tsx` file to change the header content and styling.
- Add your own smart contract ABIs and addresses in the `components/appkit-wagmi-integration.tsx` file.
- Customize the overall styling by editing the `styles/globals.css` file and using Tailwind CSS classes.

## Deployment

To deploy your Next.js AppKit Starter project, you can use platforms like Vercel, Netlify, or any other hosting service that supports Next.js applications. Follow these general steps:

1. Push your code to a Git repository (e.g., GitHub, GitLab, Bitbucket).
2. Connect your repository to your chosen hosting platform.
3. Configure your environment variables on the hosting platform.
4. Deploy your application.

For specific deployment instructions, refer to your hosting provider's documentation.

## Contributing

We welcome contributions to the Next.js AppKit Starter project! Here's how you can contribute:

1. Fork the repository on GitHub.
2. Clone your forked repository to your local machine.
3. Create a new branch for your feature or bug fix:
   ```bash
   git checkout -b feature/your-feature-name
   ```
4. Make your changes and commit them with a descriptive commit message.
5. Push your changes to your fork on GitHub:
   ```bash
   git push origin feature/your-feature-name
   ```
6. Open a pull request from your fork to the main repository.

Please ensure that your code follows the project's coding standards and includes appropriate tests if applicable.

### Reporting Issues

If you encounter any bugs or have suggestions for improvements, please open an issue on the GitHub repository. Provide as much detail as possible, including steps to reproduce the issue and your environment details.

### Code of Conduct

Please note that this project is released with a Contributor Code of Conduct. By participating in this project, you agree to abide by its terms.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

I hope you find the Next.js AppKit Starter helpful for your Web3 Dapp development journey. If you have any questions or need further assistance, please don't hesitate to reach out or open an issue on GitHub. Happy coding!
