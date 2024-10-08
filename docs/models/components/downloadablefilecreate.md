# DownloadableFileCreate

Schema to create a file to be associated with the downloadables benefit.

## Example Usage

```typescript
import { DownloadableFileCreate } from "@polar-sh/sdk/models/components";

let value: DownloadableFileCreate = {
  name: "<value>",
  mimeType: "<value>",
  size: 450561,
  upload: {
    parts: [
      {
        number: 459536,
        chunkStart: 386185,
        chunkEnd: 29923,
      },
    ],
  },
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `organizationId`                                                                                     | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `name`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `mimeType`                                                                                           | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `size`                                                                                               | *number*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `checksumSha256Base64`                                                                               | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `upload`                                                                                             | [components.S3FileCreateMultipart](../../models/components/s3filecreatemultipart.md)                 | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `service`                                                                                            | [components.DownloadableFileCreateService](../../models/components/downloadablefilecreateservice.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `version`                                                                                            | *string*                                                                                             | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |