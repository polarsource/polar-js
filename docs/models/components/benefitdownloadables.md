# BenefitDownloadables

## Example Usage

```typescript
import { BenefitDownloadables } from "@polar-sh/sdk/models/components";

let value: BenefitDownloadables = {
  createdAt: new Date("2024-02-22T02:51:06.328Z"),
  modifiedAt: new Date("2024-06-08T12:27:33.773Z"),
  id: "<value>",
  description: "indeed sour jovially forceful synergy not home",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  properties: {
    archived: {
      "key": false,
    },
    files: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | Creation timestamp of the object.                                                                      |
| `modifiedAt`                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)          | :heavy_check_mark:                                                                                     | Last modification timestamp of the object.                                                             |
| `id`                                                                                                   | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the benefit.                                                                                 |
| `type`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The description of the benefit.                                                                        |
| `selectable`                                                                                           | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | Whether the benefit is selectable when creating a product.                                             |
| `deletable`                                                                                            | *boolean*                                                                                              | :heavy_check_mark:                                                                                     | Whether the benefit is deletable.                                                                      |
| `organizationId`                                                                                       | *string*                                                                                               | :heavy_check_mark:                                                                                     | The ID of the organization owning the benefit.                                                         |
| `properties`                                                                                           | [components.BenefitDownloadablesProperties](../../models/components/benefitdownloadablesproperties.md) | :heavy_check_mark:                                                                                     | N/A                                                                                                    |