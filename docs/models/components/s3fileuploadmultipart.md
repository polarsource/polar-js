# S3FileUploadMultipart

## Example Usage

```typescript
import { S3FileUploadMultipart } from "@polar-sh/sdk/models/components";

let value: S3FileUploadMultipart = {
  id: "<id>",
  path: "/bin",
  parts: [
    {
      number: 11964,
      chunkStart: 425984,
      chunkEnd: 130565,
      url: "https://helpless-brochure.name/",
      expiresAt: new Date("2023-12-14T02:17:32.598Z"),
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `id`                                                                         | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `path`                                                                       | *string*                                                                     | :heavy_check_mark:                                                           | N/A                                                                          |
| `parts`                                                                      | [components.S3FileUploadPart](../../models/components/s3fileuploadpart.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |