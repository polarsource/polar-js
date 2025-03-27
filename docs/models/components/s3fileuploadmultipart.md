# S3FileUploadMultipart

## Example Usage

```typescript
import { S3FileUploadMultipart } from "@polar-sh/sdk/models/components/s3fileuploadmultipart.js";

let value: S3FileUploadMultipart = {
  id: "<id>",
  path: "/Users",
  parts: [
    {
      number: 877838,
      chunkStart: 27034,
      chunkEnd: 285888,
      url: "https://lanky-typeface.info",
      expiresAt: new Date("2023-05-20T05:27:19.668Z"),
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