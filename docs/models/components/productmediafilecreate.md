# ProductMediaFileCreate

Schema to create a file to be used as a product media file.

## Example Usage

```typescript
import { ProductMediaFileCreate } from "@polar-sh/sdk/models/components/productmediafilecreate.js";

let value: ProductMediaFileCreate = {
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
  name: "<value>",
  mimeType: "<value>",
  size: 635240,
  upload: {
    parts: [
      {
        number: 511975,
        chunkStart: 159846,
        chunkEnd: 725310,
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
| `mimeType`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | MIME type of the file. Only images are supported for this type of file.              |                                                                                      |
| `size`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | Size of the file. A maximum of 10 MB is allowed for this type of file.               |                                                                                      |
| `checksumSha256Base64`                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |
| `upload`                                                                             | [components.S3FileCreateMultipart](../../models/components/s3filecreatemultipart.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `service`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |                                                                                      |
| `version`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |                                                                                      |