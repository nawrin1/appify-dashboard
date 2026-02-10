# AppifyDevs Analytics Dashboard

A responsive, Admin Analytics Dashboard built with **Next.js**, **TypeScript**, and **Redux Toolkit**. This project visualizes business analysis data using modern charts.

##  Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/nawrin1/appify-dashboard
   cd appify-dashboard
   ```

2. **Install dependencies:**
    ```
    npm install
    ```
3. **Run the server**
    ```
    npm run dev
    ```
4. **Access the dashboard:**
    ```
    Open the link of localhost in your browser

    ```

## Tech Stack

- Framework: Next.js
- Language: TypeScript
- State Management: Redux Toolkit
- Styling: Tailwind CSS
- Charts: Recharts
- Icons: Lucide React

## Architecture Decisions
Global State Management: Redux Toolkit is used to manage the dashboard's state, including sidebar toggling and data filter for dynamic data visualization.

### Modular Component Folder Structure:

- components/layout: Contains structural elements like the Sidebar.
- components/dashboard: Contains components of dashboard like KPI cards and specialized charts for visualization.
- components/ui:  Contains Generic UI elements like custom dropdown filters and buttons
