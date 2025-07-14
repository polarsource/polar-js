# FilesUploadedRequest

## Example Usage

```typescript
import { FilesUploadedRequest } from "@polar-sh/sdk/models/operations/filesuploaded.js";

let value: FilesUploadedRequest = {
  id: "<value>",
  fileUploadCompleted: {
    id: "<id>",
    path: "/etc/ppp",
    parts: [],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The file ID.                                                                     |
| `fileUploadCompleted`                                                            | [components.FileUploadCompleted](../../models/components/fileuploadcompleted.md) | :heavy_check_mark:                                                               | N/A                                                                              |