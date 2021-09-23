# API Rest to trainee

## Requirements

- Node
- Yarn (recommended) ou NPM

## Running application

```bash

# Installing libraries
$ yarn # or npm install

# Running appication
$ yarn start # or npm run start
```

## Routes

- [Authentication](#authentication)
- [User](#user)
- [Posts](#posts)

### <a name="authentication"></a>Authentication

| Method   | Path        | Return |
| -------- | ----------- | ------ |
| **POST** | /auth/token | Object |

```json
# --- Body Request ---
{
  "username" : "string",
  "password" : "string"
}

# --- Response ---
{
  "token" : "string"
}
```

### <a name="user"></a>User

**Header:** Authorization: Bearer {token}

| Method  | Path  | Return        | Description   |
| ------- | ----- | ------------- | ------------- |
| **GET** | /user | Object\<User> | Get data user |

```json
# --- Response <User> ---
{
  "id": "number",
  "name": "string",
  "username": "string",
  "avatar": "string",
  "createdAt": "string"
}
```

### <a name="posts"></a>Posts

> For more details, check the [json-server documentation](https://github.com/typicode/json-server).

**Header:** Authorization: Bearer {token}

| Method     | Path       | Return        | Description            |
| ---------- | ---------- | ------------- | ---------------------- |
| **GET**    | /posts     | Array\<Post>  | list posts             |
| **GET**    | /posts/:id | Object\<Post> | get by id              |
| **POST**   | /posts     | Object\<Post> | Insert or Update posts |
| **DELETE** | /posts/:id | Object\<Post> | Delete posts           |

```json
# --- Response <Post> ---
{
  "id": "number",
  "title": "string",
  "author": "string",
  "createdAt": "string",
  "comments": [
    {
      "id": "number",
      "body": "string",
      "createdAt": "string"
    }
  ]
}
```
