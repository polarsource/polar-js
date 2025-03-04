# FilesUploadedRequest

## Example Usage

```typescript
import { FilesUploadedRequest } from "@polar-sh/sdk/models/operations/filesuploaded.js";

let value: FilesUploadedRequest = {
  id: "<value>",
  fileUploadCompleted: {
    id: "<id>",
    path: "/private/tmp",
    parts: [
      {
        number: 604247,
        checksumEtag: "<value>",
        checksumSha256Base64: "<value>",
      },
    ],
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `id`                                                                             | *string*                                                                         | :heavy_check_mark:                                                               | The file ID.                                                                     |
| `fileUploadCompleted`                                                            | [components.FileUploadCompleted](../../models/components/fileuploadcompleted.md) | :heavy_check_mark:                                                               | N/A                                                                              |