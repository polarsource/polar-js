# FileUploadCompleted

## Example Usage

```typescript
import { FileUploadCompleted } from "@polar-sh/sdk/models/components/fileuploadcompleted.js";

let value: FileUploadCompleted = {
  id: "<id>",
  path: "/home/user/dir",
  parts: [
    {
      number: 47554,
      checksumEtag: "<value>",
      checksumSha256Base64: "<value>",
    },
  ],
};
```

## Fields

| Field                                                                                          | Type                                                                                           | Required                                                                                       | Description                                                                                    |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| `id`                                                                                           | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `path`                                                                                         | *string*                                                                                       | :heavy_check_mark:                                                                             | N/A                                                                                            |
| `parts`                                                                                        | [components.S3FileUploadCompletedPart](../../models/components/s3fileuploadcompletedpart.md)[] | :heavy_check_mark:                                                                             | N/A                                                                                            |