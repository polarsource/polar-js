# FilesListRequest

## Example Usage

```typescript
import { FilesListRequest } from "@polar-sh/sdk/models/operations";

let value: FilesListRequest = {};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `organizationId`                                | *string*                                        | :heavy_minus_sign:                              | N/A                                             |
| `ids`                                           | *string*[]                                      | :heavy_minus_sign:                              | List of file IDs to get.                        |
| `page`                                          | *number*                                        | :heavy_minus_sign:                              | Page number, defaults to 1.                     |
| `limit`                                         | *number*                                        | :heavy_minus_sign:                              | Size of a page, defaults to 10. Maximum is 100. |