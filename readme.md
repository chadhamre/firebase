#### 1. Coding

To complete this coding challenge, I took the following steps:

1. Generated fake data
1. Populated realtime firebase database
1. Created express server with four dependencies list below
1. Add a single endpoint that fetches the data from firebase and returns it as JSON.

{
  "express": "^4.16.4",
  "firebase": "^5.9.2",
  "firebase-admin": "^7.2.0",
  "opn": "^6.0.0"
}

To start the server run `yarn start`.

Notes:

- To test with the database, you'll need the serviceAccountKey which I have included in the body of the email I sent.
- Even though this could easily have been written in one file, I organized files/folders in a way to facilitate adding additional endpoints.
- One of the advantages of firebase is that it has the ability to serve clients directly, through https, without the api layer. If express was not suggested, I might have done that or possibly used cloud functions and opted for a serverless model.
- My next step would be to add tests (likely using JEST)

#### 2. Security

To secure this api, I would:
- Use/require SSL
- Add input parameter validation middleware up front
- Add authentication middleware to be sure only authorized clients can access the endpoints. JSON Web Tokens (JWT) might a good option for this job.
- With the authentication middleware, I would ensure clients had the least privileges required.

#### 2. Architecture

Obviously there are many ways such an API could be architected. And I'd need to make a few assumptions, which I'll make now:

- I assume SalesForce will hit my server with a webhook when customer data is created or updated
- I assume I'll want to access this data into a client.


##### RESTAPI

Since we are using Firebase, I'd also want to use google for my REST api. For simplicity, I'll use Google Cloud Functions to keep the setup serverless. To begin, I'd create two functions:

1. webhook endpoint: this is the endpoint where Salesforce will notify us that new data is available. When a webhook is received this endpoint will call a second function.
2. data fetch: this endpoint will fetch credentials from memory for salesforce, fetch the new data from salesforce, transform it if required, and update the customer data object in firebase.

##### CLIENT

For added security, speed and the possibility of real-time updating, we will serve the client app through firebase directly.
