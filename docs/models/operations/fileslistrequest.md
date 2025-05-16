# FilesListRequest

## Example Usage

```typescript
import { FilesListRequest } from "@polar-sh/sdk/models/operations/fileslist.js";

let value: FilesListRequest = {
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `organizationId`                                     | *operations.FilesListQueryParamOrganizationIDFilter* | :heavy_minus_sign:                                   | Filter by organization ID.                           |
| `ids`                                                | *operations.FileIDFilter*                            | :heavy_minus_sign:                                   | Filter by file ID.                                   |
| `page`                                               | *number*                                             | :heavy_minus_sign:                                   | Page number, defaults to 1.                          |
| `limit`                                              | *number*                                             | :heavy_minus_sign:                                   | Size of a page, defaults to 10. Maximum is 100.      |