# Job Tracker – Chrome Extension

A Chrome extension that lets you save job postings directly from job board websites to your Job Tracker account — no copy-pasting required.

## Related Repositories

- [**Frontend**](https://github.com/Trev-B/jobs-app-frontend) — React UI
- [**Backend**](https://github.com/Trev-B/jobs-app-backend) — Node.js/Express REST API
- **Chrome Extension** (this repo)

## Tech Stack

- **React 18** with React Router v6
- **Axios** for communication with the Job Tracker backend
- Built with **Create React App** and packaged as a Chrome extension

## Features

- Save job postings to your Job Tracker account directly from the browser
- Authenticates with the same credentials as the main Job Tracker app

## Getting Started

### Prerequisites

- Node.js 16+
- Google Chrome
- The [backend](https://github.com/Trev-B/jobs-app-backend) running locally or deployed

### Installation

```bash
git clone https://github.com/Trev-B/jobs-app-chrome-extension.git
cd jobs-app-chrome-extension
npm install
npm run build
```

### Loading in Chrome

1. Open Chrome and navigate to `chrome://extensions`
2. Enable **Developer mode** (toggle in the top right)
3. Click **Load unpacked**
4. Select the `build` folder generated in the previous step

### Configuration

Update the API base URL in the source to point to your backend instance before building:

```env
REACT_APP_API_URL=http://localhost:5000
```
