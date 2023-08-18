# ExpressJS API

This Express.JS API was made as an assessment for the Software Engineering Class at Information Systems B.Sc. in UFPE

<br>

---

[You can check this app`s Database Model here](/docs/Database_Model.md)

[You can check this app`s Documentation draft here](NatDexdVUbjZVkNTXEtPS+mn3kOcvEUSM6kHA3gu)

[You can check how to deploy this app using AWS Elastic BeanStalk here](/docs/Deploy_Notes.md)

[You can check test notes and draft here](/docs/Test_Notes.md)

You can test this API locally using Postman:
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/19132676-ba9babf8-fca0-4060-bdc7-e3268c2d972a?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D19132676-ba9babf8-fca0-4060-bdc7-e3268c2d972a%26entityType%3Dcollection%26workspaceId%3Dc253871f-f102-4203-b742-299cebd203fa)

---

<br>

# Running in dev mode

Clone this repository  
Set up the .env file with mongodb uri, and run these commands:

```cmd
npm install
```

```cmd
npm start-dev
```
<br>

# Testing

Just run

```cmd
npm test
```

to execute tests for this app  
<br>

# Docker / Deploy

You can use tools like Docker Desktop to deploy this project in your local machine.

Clone this repository  
Set up the .env file with mongodb uri and run this command:

```cmd
docker compose up
```

You can also check [how to deploy using AWS Elastic BeanStalk](/docs/Deploy_Notes.md)
