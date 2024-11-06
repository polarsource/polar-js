# S3FileCreatePart

## Example Usage

```typescript
import { S3FileCreatePart } from "@polar-sh/sdk/models/components";

let value: S3FileCreatePart = {
  number: 940497,
  chunkStart: 966607,
  chunkEnd: 844253,
};
```

## Fields

| Field                  | Type                   | Required               | Description            |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `number`               | *number*               | :heavy_check_mark:     | N/A                    |
| `chunkStart`           | *number*               | :heavy_check_mark:     | N/A                    |
| `chunkEnd`             | *number*               | :heavy_check_mark:     | N/A                    |
| `checksumSha256Base64` | *string*               | :heavy_minus_sign:     | N/A                    |