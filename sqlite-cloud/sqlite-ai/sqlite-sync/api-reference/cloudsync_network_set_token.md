### `cloudsync_network_set_token(token)`

**Description:** Sets the authentication token to be used for network requests. This token will be included in the `Authorization` header of all subsequent requests. For more information, refer to the [Access Tokens documentation](https://docs.sqlitecloud.io/docs/access-tokens).

**Parameters:**

- `token` (TEXT): The authentication token.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_network_set_token('your_auth_token');
```
