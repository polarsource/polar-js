# S3FileCreatePart

## Example Usage

```typescript
import { S3FileCreatePart } from "@polar-sh/sdk/models/components/s3filecreatepart.js";

let value: S3FileCreatePart = {
  number: 570377,
  chunkStart: 459004,
  chunkEnd: 19789,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `number`               | *number*               | :heavy_check_mark:     | N/A                    |
| `chunkStart`           | *number*               | :heavy_check_mark:     | N/A                    |
| `chunkEnd`             | *number*               | :heavy_check_mark:     | N/A                    |
| `checksumSha256Base64` | *string*               | :heavy_minus_sign:     | N/A                    |