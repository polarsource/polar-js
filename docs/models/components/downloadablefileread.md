# DownloadableFileRead

File to be associated with the downloadables benefit.

## Example Usage

```typescript
import { DownloadableFileRead } from "@polar-sh/sdk/models/components";

let value: DownloadableFileRead = {
  id: "<value>",
  organizationId: "<value>",
  name: "<value>",
  path: "/private/tmp",
  mimeType: "<value>",
  size: 115834,
  storageVersion: "<value>",
  checksumEtag: "<value>",
  checksumSha256Base64: "<value>",
  checksumSha256Hex: "<value>",
  lastModifiedAt: new Date("2023-06-10T19:26:45.225Z"),
  version: "<value>",
  isUploaded: false,
  createdAt: new Date("2023-05-16T22:28:24.854Z"),
  sizeReadable: "<value>",
};
```

## Fields

| Field                                                                                            | Type                                                                                             | Required                                                                                         | Description                                                                                      |
| ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| `id`                                                                                             | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `organizationId`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `name`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `path`                                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `mimeType`                                                                                       | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `size`                                                                                           | *number*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `storageVersion`                                                                                 | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `checksumEtag`                                                                                   | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `checksumSha256Base64`                                                                           | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `checksumSha256Hex`                                                                              | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `lastModifiedAt`                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `version`                                                                                        | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `service`                                                                                        | [components.DownloadableFileReadService](../../models/components/downloadablefilereadservice.md) | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `isUploaded`                                                                                     | *boolean*                                                                                        | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `createdAt`                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)    | :heavy_check_mark:                                                                               | N/A                                                                                              |
| `sizeReadable`                                                                                   | *string*                                                                                         | :heavy_check_mark:                                                                               | N/A                                                                                              |