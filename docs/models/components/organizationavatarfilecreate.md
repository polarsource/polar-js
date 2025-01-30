# OrganizationAvatarFileCreate

Schema to create a file to be used as an organization avatar.

## Example Usage

```typescript
import { OrganizationAvatarFileCreate } from "@polar-sh/sdk/models/components/organizationavatarfilecreate.js";

let value: OrganizationAvatarFileCreate = {
  name: "<value>",
  mimeType: "<value>",
  size: 550329,
  upload: {
    parts: [
      {
        number: 124065,
        chunkStart: 786178,
        chunkEnd: 511956,
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `organizationId`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `mimeType`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | MIME type of the file. Only images are supported for this type of file.              |
| `size`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | Size of the file. A maximum of 1 MB is allowed for this type of file.                |
| `checksumSha256Base64`                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `upload`                                                                             | [components.S3FileCreateMultipart](../../models/components/s3filecreatemultipart.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `service`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `version`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |