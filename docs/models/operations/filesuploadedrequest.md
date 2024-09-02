# FilesUploadedRequest

## Example Usage

```typescript
import { FilesUploadedRequest } from "@polar-sh/sdk/models/operations";

let value: FilesUploadedRequest = {
    id: "<value>",
    fileUploadCompleted: {
        id: "<id>",
        path: "/private/var",
        parts: [
            {
                number: 54338,
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