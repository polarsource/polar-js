# DownloadableFileCreate

Schema to create a file to be associated with the downloadables benefit.

## Example Usage

```typescript
import { DownloadableFileCreate } from "@polar-sh/sdk/models/components/downloadablefilecreate.js";

let value: DownloadableFileCreate = {
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  name: "<value>",
  mimeType: "<value>",
  size: 726480,
  upload: {
    parts: [
      {
        number: 370306,
        chunkStart: 793719,
        chunkEnd: 744216,
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          | Example                                                                              |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `organizationId`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                 |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `mimeType`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `size`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `checksumSha256Base64`                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `upload`                                                                             | [components.S3FileCreateMultipart](../../models/components/s3filecreatemultipart.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `service`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `version`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |