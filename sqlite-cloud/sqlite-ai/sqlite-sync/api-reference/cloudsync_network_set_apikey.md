### `cloudsync_network_set_apikey(apikey)`

**Description:** Sets the API key for network requests. This key is included in the `Authorization` header of all subsequent requests.

**Parameters:**

- `apikey` (TEXT): The API key.

**Returns:** None.

**Example:**

```sql
SELECT cloudsync_network_set_apikey('your_api_key');
```
