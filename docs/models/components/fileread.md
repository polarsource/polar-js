# FileRead

## Example Usage

```typescript
import { FileRead } from "@polar-sh/sdk/models/components";

let value: FileRead = {
  id: "<value>",
  organizationId: "<value>",
  name: "<value>",
  path: "/etc/mail",
  mimeType: "<value>",
  size: 917877,
  storageVersion: "<value>",
  checksumEtag: "<value>",
  checksumSha256Base64: "<value>",
  checksumSha256Hex: "<value>",
  lastModifiedAt: new Date("2022-03-30T20:02:19.882Z"),
  version: "<value>",
  isUploaded: false,
  createdAt: new Date("2023-06-11T21:25:18.159Z"),
  sizeReadable: "<value>",
  publicUrl: "<value>",
};
```

## Supported Types

### `components.DownloadableFileRead`

```typescript
const value: components.DownloadableFileRead = /* values here */
```

### `components.OrganizationAvatarFileRead`

```typescript
const value: components.OrganizationAvatarFileRead = /* values here */
```

### `components.ProductMediaFileReadOutput`

```typescript
const value: components.ProductMediaFileReadOutput = /* values here */
```

