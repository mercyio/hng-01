# HNG Stage 01 API

A simple REST API that takes a number and returns interesting mathematical properties about it, along with a fun fact.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- Node.js and npm: Download and install Node.js from [nodejs.org](https://nodejs.org/).

## Installation

Install project dependencies using npm :
   ```bash
   npm install
   ```

### Local Development Setup
Clone the repository: 
  ```bash
   `git clone https://github.com/mercyio/hng-01.git`
   ```


Navigate to project directory:
  ```bash
    `cd stage-1`
   ```


Install dependencies: 
 ```bash
    `npm install`
   ```
OR

Install project dependencies using yarn :
```bash
yarn install
```

### Start the Project

Once you've done your installation setup, you can start your project:

```bash 
npm run start:dev
```
Your backend server should now be running.


## API Documentation

### Endpoint
Production: GET/https://hng-01-2i4b.onrender.com/api/classify-number?number={{number}}
Local: GET/http://localhost:5575/api/classify-number?number={{number}}

### Base URL
The API will be running at:
Production: https://hng-01-2i4b.onrender.com/api/classify-number?number={{number}}
Local: http://localhost:5575/api/classify-number?number={{number}}

### Example Request 
### Using Browser
local: Simply visit http://localhost:5575/api/classify-number?number=371 in your web browser
or
production: https://hng-01-2i4b.onrender.com/api/classify-number?number=371

### Using cURL
curl http://localhost:5575/api/classify-number?number=371

### Using Postman
Open Postman,
Create a new http GET request,
Enter URL: http://localhost:5575/api/classify-number?number=371 or  https://hng-01-2i4b.onrender.com/api/classify-number?number=371

Click Send,
View the JSON response,

NB: Make sure your code is running if you are using the localhost url

### Example Response

```json
{
    "number": "371",
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong, odd"],
    "digit_sum": 11,
    "fun_fact": "371 is a narcissistic number."
}
