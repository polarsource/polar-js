# FileUpload

## Example Usage

```typescript
import { FileUpload } from "@polar-sh/sdk/models/components";

let value: FileUpload = {
  id: "<value>",
  organizationId: "<value>",
  name: "<value>",
  path: "/usr/src",
  mimeType: "<value>",
  size: 429014,
  storageVersion: "<value>",
  checksumEtag: "<value>",
  checksumSha256Base64: "<value>",
  checksumSha256Hex: "<value>",
  lastModifiedAt: new Date("2025-01-04T12:05:28.621Z"),
  upload: {
    id: "<id>",
    path: "/opt/sbin",
    parts: [
      {
        number: 708007,
        chunkStart: 613225,
        chunkEnd: 441603,
        url: "https://pastel-sweatshop.net",
        expiresAt: new Date("2025-02-21T06:35:51.585Z"),
      },
    ],
  },
  version: "<value>",
  service: "organization_avatar",
  sizeReadable: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `name`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `path`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `mimeType`                                                                                    | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `size`                                                                                        | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `storageVersion`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checksumEtag`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checksumSha256Base64`                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checksumSha256Hex`                                                                           | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `lastModifiedAt`                                                                              | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `upload`                                                                                      | [components.S3FileUploadMultipart](../../models/components/s3fileuploadmultipart.md)          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `version`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isUploaded`                                                                                  | *boolean*                                                                                     | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `service`                                                                                     | [components.FileServiceTypes](../../models/components/fileservicetypes.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sizeReadable`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |