# S3FileCreateMultipart

## Example Usage

```typescript
import { S3FileCreateMultipart } from "@polar-sh/sdk/models/components";

let value: S3FileCreateMultipart = {
  parts: [
    {
      number: 435562,
      chunkStart: 701543,
      chunkEnd: 338709,
    },
  ],
};
```

## Fields

| Field                                                                        | Type                                                                         | Required                                                                     | Description                                                                  |
| ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| `parts`                                                                      | [components.S3FileCreatePart](../../models/components/s3filecreatepart.md)[] | :heavy_check_mark:                                                           | N/A                                                                          |