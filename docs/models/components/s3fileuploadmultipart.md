# S3FileUploadMultipart

## Example Usage

```typescript
import { S3FileUploadMultipart } from "@polar-sh/sdk/models/components";

let value: S3FileUploadMultipart = {
  id: "<id>",
  path: "/tmp",
  parts: [
    {
      number: 649722,
      chunkStart: 644678,
      chunkEnd: 864630,
      url: "https://amazing-lid.info/",
      expiresAt: new Date("2024-12-21T15:53:12.734Z"),
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