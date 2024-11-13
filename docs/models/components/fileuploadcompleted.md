# FileUploadCompleted

## Example Usage

```typescript
import { FileUploadCompleted } from "@polar-sh/sdk/models/components";

let value: FileUploadCompleted = {
  id: "<id>",
  path: "/var",
  parts: [
    {
      number: 76555,
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