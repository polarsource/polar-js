# OrganizationAvatarFileRead

File to be used as an organization avatar.

## Example Usage

```typescript
import { OrganizationAvatarFileRead } from "@polar-sh/sdk/models/components";

let value: OrganizationAvatarFileRead = {
  id: "<value>",
  organizationId: "<value>",
  name: "<value>",
  path: "/mnt",
  mimeType: "<value>",
  size: 819777,
  storageVersion: "<value>",
  checksumEtag: "<value>",
  checksumSha256Base64: "<value>",
  checksumSha256Hex: "<value>",
  lastModifiedAt: new Date("2024-05-22T11:38:34.003Z"),
  version: "<value>",
  isUploaded: false,
  createdAt: new Date("2024-03-27T12:14:29.936Z"),
  sizeReadable: "<value>",
  publicUrl: "https://well-made-airbus.com",
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the object.                                                                                        |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `name`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `path`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `mimeType`                                                                                                   | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `size`                                                                                                       | *number*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `storageVersion`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `checksumEtag`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `checksumSha256Base64`                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `checksumSha256Hex`                                                                                          | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `lastModifiedAt`                                                                                             | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `version`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `service`                                                                                                    | [components.OrganizationAvatarFileReadService](../../models/components/organizationavatarfilereadservice.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isUploaded`                                                                                                 | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `sizeReadable`                                                                                               | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `publicUrl`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |