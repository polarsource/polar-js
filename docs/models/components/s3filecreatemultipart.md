# S3FileCreateMultipart

## Example Usage

```typescript
import { S3FileCreateMultipart } from "@polar-sh/sdk/models/components";

let value: S3FileCreateMultipart = {
  parts: [
    {
      number: 461028,
      chunkStart: 795557,
      chunkEnd: 880094,
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `parts`                                                                      | [components.S3FileCreatePart](../../models/components/s3filecreatepart.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |