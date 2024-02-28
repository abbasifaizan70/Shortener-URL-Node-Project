# URL Shortener Service

This is a simple URL shortener service built with Node.js and MongoDB. It allows users to shorten URLs and track visits to these URLs.

## Features

- **Shorten URLs**: Convert long URLs into short, manageable links.
- **Redirect**: Use the short URL to redirect to the original URL.
- **Analytics**: Check the number of visits to the shortened URLs.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Mongoose

### Installation

1. Clone the repo
   ```sh
   git clone [your-repo-link]

2. Install NPM packages
   ```sh
   npm install

### Running the Server
1. Start the server
   ```sh
   npm start

### Usage
#### Shortening a URL
- Endpoint: POST http://localhost:8001/url
- Body:
  ```sh
  {
    "url": "https://example.com"
  }
- This will return a JSON response with the shortened URL.

### Redirecting to the Original URL
- Visit http://localhost:8001/[shortId] in your browser.
- You will be redirected to the original URL associated with the shortId.

### Checking Analytics
- Endpoint: GET http://localhost:8001/url/analytics/[shortId]
- This endpoint provides the number of times the shortened URL has been visited.

### Contributing
- Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.
   
