# MolKet Web Portfolio

![image](https://github.com/user-attachments/assets/8bd4b38c-80a7-4d8c-9533-38a97443cbf9)

## Overview
MolKet is a cutting-edge platform offering quantum molecular dynamics, cryptography, and neuromorphic computing services, powered by hybrid high-performance computing (HPC) and quantum computing platforms. This web application serves as the front-end interface for MolKet, providing users with access to consulting services, AI-driven molecular simulations, and educational resources. Built with **React**, **Vite**, and **Tailwind CSS**, the application delivers a responsive, modern, and user-friendly experience.

## Features

- **Responsive Navigation**: A fixed navigation bar with links to Home, About, Services, How It Works, Team, and Contact sections, including a dropdown for resources.
- **Interactive Sections**:
  - **Home**: Introduces MolKet’s quantum solutions with a call-to-action for demo requests and service exploration.
  - **About**: Details MolKet’s mission to simplify chemistry simulations using AI and quantum computing.
  - **Services**: Highlights offerings like algorithm design, HPC/QC integration, and consultancy.
  - **How It Works**: Step-by-step guide on using MolKet’s AI-assisted environment for simulations, with code examples.
  - **Featured Videos**: Showcases videos on quantum intelligence and chemical design.
  - **Team**: Profiles the founders, Dr. Taha Selim and Alain Chancé, with their credentials and publications.
  - **Contact**: Provides location, email, and phone details for user inquiries.
- **Custom Styling**: Utilizes Tailwind CSS for responsive design, animations, and a quantum-inspired gradient aesthetic.
- **Code Highlighting**: Integrates Prism.js for syntax highlighting of Python code snippets used in simulation examples.
- **SEO Optimization**: Includes meta tags for search engine and social media visibility.

## Prerequisites

To run the MolKet web application locally, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- A modern web browser (e.g., Chrome, Firefox)

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/zainmo11/Molket.git
   cd molket-web
   ```

2. **Install Dependencies**:
   Using npm:
   ```bash
   npm install
   ```
   Or using yarn:
   ```bash
   yarn install
   ```

3. **Run the Development Server**:
   ```bash
   npm run dev
   ```
   Or:
   ```bash
   yarn dev
   ```
   This will start the Vite development server, typically accessible at `http://localhost:5173`.

## Project Structure

```plaintext
molket-web/
├── public/
│   ├── logo.png                # MolKet logo
│   ├── favicon-16x16.png       # Favicon
│   ├── deck_general_compact_new.004.jpeg  # Image for About section
│   ├── deck_general_compact_new_s1.001.jpeg  # Image for Development Model
│   ├── ezgif.com-gif-to-mp4.mp4  # Video for About section
│   ├── taha_profile_bw_enhance_circle_wbackn.png  # Team profile image
│   ├── Alain_Chance-modified.png  # Team profile image
├── src/
│   ├── main.tsx                # Entry point for React application
│   ├── index.css               # Tailwind CSS and custom styles
│   ├── components/             # React components
|       ├── About.tsx
|       ├── Contact.tsx
|       ├── Footer.tsx
|       ├── Hero.tsx
|       ├── HowItWorks.tsx
|       ├── Model.tsx
|       ├── Navbar.tsx
|       ├── Services.tsx
|       ├── Team.tsx
|       ├── Videos.tsx
│   ├── assets/                 # Additional static assets
├── index.html                  # Main HTML file
├── package.json                # Project dependencies and scripts
├── vite.config.ts              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── README.md                   # This file
```

## Usage

- **Navigation**: Use the top navigation bar to explore different sections. On mobile devices, a hamburger menu toggles the navigation links.
- **Request a Demo**: Click the “Request a Demo” buttons to access the Typeform link for scheduling.
- **Code Examples**: View Python code snippets in the “How It Works” section, demonstrating how to use the MolKet SDK for quantum simulations.
- **External Resources**:
  - Access the [MolKet Lab](http://jupyterhub.molket.io) for interactive coding.
  - Explore [MolKet.jl examples](https://github.com/molket-io/molket.jl/tree/main/examples) on GitHub.
  - Visit the [Use Cases](usecases.html) page for detailed applications.

## Building for Production

To create a production build:

```bash
npm run build
```

This generates optimized static files in the `dist/` directory, ready for deployment.

## Deployment

Deploy the application to a static hosting service like Vercel, Netlify, or GitHub Pages. Ensure the `dist/` folder is uploaded, and configure the server to serve `index.html` for single-page application routing.

## Technologies Used

- **React**: Front-end JavaScript library for building the user interface.
- **Vite**: Fast build tool and development server.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Prism.js**: Syntax highlighting for code snippets.
- **Lucide Icons**: SVG icons used for visual elements.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

Please ensure your code follows the project’s coding standards and includes relevant tests.

## License

© 2025 MolKet SAS. All rights reserved.

## Contact

For inquiries, reach out to:

- **Email**: [contact@molket.io](mailto:contact@molket.io), [business@molket.io](mailto:business@molket.io)
- **Phone**: +33 1 42 65 28 27
- **Location**: MOLKET SAS, 38, rue des Mathurins, 75008, Paris, France

Visit [molket.io](https://www.molket.io) for more information.
