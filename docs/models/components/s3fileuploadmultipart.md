# S3FileUploadMultipart

## Example Usage

```typescript
import { S3FileUploadMultipart } from "@polar-sh/sdk/models/components/s3fileuploadmultipart.js";

let value: S3FileUploadMultipart = {
  id: "<id>",
  path: "/etc",
  parts: [
    {
      number: 139432,
      chunkStart: 32442,
      chunkEnd: 162408,
      url: "https://rotating-baseboard.net/",
      expiresAt: new Date("2024-03-20T08:23:26.056Z"),
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