# FileDownload

## Example Usage

```typescript
import { FileDownload } from "@polar-sh/sdk/models/components";

let value: FileDownload = {
  id: "<value>",
  organizationId: "<value>",
  name: "<value>",
  path: "/opt/lib",
  mimeType: "<value>",
  size: 959434,
  storageVersion: "<value>",
  checksumEtag: "<value>",
  checksumSha256Base64: "<value>",
  checksumSha256Hex: "<value>",
  lastModifiedAt: new Date("2022-07-10T19:50:26.525Z"),
  download: {
    url: "https://lanky-apparel.net",
    expiresAt: new Date("2023-04-17T17:18:20.772Z"),
  },
  version: "<value>",
  isUploaded: false,
  service: "product_media",
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
| `download`                                                                                    | [components.S3DownloadURL](../../models/components/s3downloadurl.md)                          | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `version`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isUploaded`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `service`                                                                                     | [components.FileServiceTypes](../../models/components/fileservicetypes.md)                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `sizeReadable`                                                                                | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |