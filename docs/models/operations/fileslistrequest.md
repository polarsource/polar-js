# FilesListRequest

## Example Usage

```typescript
import { FilesListRequest } from "@polar-sh/sdk/models/operations/fileslist.js";

let value: FilesListRequest = {
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

## Fields

| Field                                           | Type                                            | Required                                        | Description                                     | Example                                         |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `organizationId`                                | *string*                                        | :heavy_minus_sign:                              | N/A                                             | 1dbfc517-0bbf-4301-9ba8-555ca42b9737            |
| `ids`                                           | *string*[]                                      | :heavy_minus_sign:                              | List of file IDs to get.                        |                                                 |
| `page`                                          | *number*                                        | :heavy_minus_sign:                              | Page number, defaults to 1.                     |                                                 |
| `limit`                                         | *number*                                        | :heavy_minus_sign:                              | Size of a page, defaults to 10. Maximum is 100. |                                                 |