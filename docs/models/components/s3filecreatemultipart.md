# S3FileCreateMultipart

## Example Usage

```typescript
import { S3FileCreateMultipart } from "@polar-sh/sdk/models/components/s3filecreatemultipart.js";

let value: S3FileCreateMultipart = {
  parts: [
    {
      number: 11964,
      chunkStart: 425984,
      chunkEnd: 130565,
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `parts`                                                                      | [components.S3FileCreatePart](../../models/components/s3filecreatepart.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |