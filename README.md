# Telegram Reputation Service

## Overview

Simple RESTful API for checking Telegram users reputation.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
npm run start:prod
```

## Configuration

You can configure the application through environment variables.

| Name          | Description                                     | Default value   |
| ------------- | ----------------------------------------------- | --------------- |
| ADMIN_API_KEY | Used for creating and removing API Keys         | None (required) |
| PORT          | Port where the API is listening for connections | `3000`          |
| DB_HOST       | Postgres host                                   | `db`            |
| DB_PORT       | Postgres port                                   | `5432`          |
| DB_NAME       | Postgres database name                          | `tgreputation`  |
| DB_USER       | Postgres username                               | `postgres`      |
| DB_PASSWORD   | Postgres password                               | `postgres`      |

## Methods

### GET `/users/{userId}`

Check user reputation. `userId` should be the Telegram userId.

```
GET /users/123456
```

```json
{
  "id": "123456",
  "tags": [
    {
      "tag": "spam",
      "count": 3
    },
    {
      "tag": "flood",
      "count": 5
    },
    {
      "tag": "bot",
      "count": 7
    }
  ]
}
```

### POST `/votes`

Submit a vote for a user. Requires an API Key.

Example using the API Key `1a2b3c4d`.

```
POST /votes
Authorization: bearer 1a2b3c4d
```

```json
{
  "userId": "123456",
  "tag": "spam"
}
```

### POST `/api-keys`

Creates a new API Key. This method requires the `ADMIN_API_KEY`. Returns
the created API Key.

```
POST /api-keys
Authorization: <ADMIN_API_KEY>
```

### GET `/api-keys`

Returns all the created API Key. This method requires the `ADMIN_API_KEY`.

```
GET /api-keys
Authorization: <ADMIN_API_KEY>
```

### DELETE `/api-keys`

Deletes all the created API Key. This method requires the `ADMIN_API_KEY`.

```
DELETE /api-keys
Authorization: <ADMIN_API_KEY>
```
