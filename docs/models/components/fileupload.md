# FileUpload

## Example Usage

```typescript
import { FileUpload } from "@polar-sh/sdk/models/components";

let value: FileUpload = {
  id: "<value>",
  organizationId: "<value>",
  name: "<value>",
  path: "/etc",
  mimeType: "<value>",
  size: 857125,
  storageVersion: "<value>",
  checksumEtag: "<value>",
  checksumSha256Base64: "<value>",
  checksumSha256Hex: "<value>",
  lastModifiedAt: new Date("2022-02-13T10:57:56.431Z"),
  upload: {
    id: "<id>",
    path: "/etc/mail",
    parts: [
      {
        number: 483706,
        chunkStart: 271252,
        chunkEnd: 458259,
        url: "http://energetic-great-grandmother.com",
        expiresAt: new Date("2024-01-06T20:04:16.147Z"),
      },
    ],
  },
  version: "<value>",
  service: "downloadable",
  sizeReadable: "<value>",
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
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