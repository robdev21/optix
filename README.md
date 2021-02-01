# Optix Technical Test

### By Rob Boone, Jan 2021
<br />
<br />

## Installation
In the parent directory (with package.json)
<br />
<br />
**Install all dependencies:**
<br />
`
npm install
`
<br />
<br />
**Build the React app**
<br />
`
npm run build-react
`
<br />
<br />
**Build and run node server**
<br />
`
npm run build-server
`
<br />
`
npm run start-server
`
<br />
<br />
You will find the page running at http://localhost:5252/
<br />
<br />
*If you run into issues with port 5252 already being used, you may run the server as follows:*
<br />
`
PORT=<YOUR PORT> npm run start-server
`
<br />
<br />
<br />
## Alternative Installation With Docker
If you have docker installed the below will allow a repeatable build
<br />
<br />
In the parent directory (alongside Dockerfile)
<br />
<br />
`
docker build -t optix_image .
`
<br/>
`
docker run -p 5252:5252 optix_image 
`
<br />
<br />
You will find the page running at http://localhost:5252/
<br />
<br />
*If you run into issues with port 5252 already being used, you may change your mapping as follows:*
<br />
`
docker run -p <YOUR PORT>:5252 optix_image
`
<br />