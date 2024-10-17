# S3FileUploadMultipart

## Example Usage

```typescript
import { S3FileUploadMultipart } from "@polar-sh/sdk/models/components";

let value: S3FileUploadMultipart = {
  id: "<id>",
  path: "/usr/libdata",
  parts: [
    {
      number: 581098,
      chunkStart: 386441,
      chunkEnd: 681458,
      url: "https://gullible-behest.net/",
      expiresAt: new Date("2022-03-19T19:33:36.442Z"),
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