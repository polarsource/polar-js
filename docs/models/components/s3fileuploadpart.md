# S3FileUploadPart

## Example Usage

```typescript
import { S3FileUploadPart } from "@polar-sh/sdk/models/components";

let value: S3FileUploadPart = {
  number: 404429,
  chunkStart: 377668,
  chunkEnd: 485638,
  url: "https://haunting-mouser.biz/",
  expiresAt: new Date("2023-05-22T07:36:17.577Z"),
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `number`                                                                                      | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `chunkStart`                                                                                  | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `chunkEnd`                                                                                    | *number*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `checksumSha256Base64`                                                                        | *string*                                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |
| `url`                                                                                         | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `expiresAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `headers`                                                                                     | Record<string, *string*>                                                                      | :heavy_minus_sign:                                                                            | N/A                                                                                           |