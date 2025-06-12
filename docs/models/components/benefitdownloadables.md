# BenefitDownloadables

## Example Usage

```typescript
import { BenefitDownloadables } from "@polar-sh/sdk/models/components/benefitdownloadables.js";

let value: BenefitDownloadables = {
  id: "<value>",
  createdAt: new Date("2023-10-19T18:24:22.763Z"),
  modifiedAt: new Date("2024-09-19T16:48:07.217Z"),
  description: "supposing allocation dull scowl bootleg illiterate hmph amid",
  selectable: true,
  deletable: true,
  organizationId: "<value>",
  metadata: {
    "key": false,
  },
  properties: {
    archived: {
      "key": false,
    },
    files: [
      "<value 1>",
      "<value 2>",
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the benefit.                                                                                 |
| `createdAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | Creation timestamp of the object.                                                                      |
| `modifiedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | Last modification timestamp of the object.                                                             |
| `type`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The description of the benefit.                                                                        |
| `selectable`                                                                                           | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | Whether the benefit is selectable when creating a product.                                             |
| `deletable`                                                                                            | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | Whether the benefit is deletable.                                                                      |
| `organizationId`                                                                                       | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the organization owning the benefit.                                                         |
| `metadata`                                                                                             | Record<string, *components.BenefitDownloadablesMetadata*>                                              | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `properties`                                                                                           | [components.BenefitDownloadablesProperties](../../models/components/benefitdownloadablesproperties.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |