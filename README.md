# API Test to trainee

## Routes

- [Authentication](#authentication)
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
