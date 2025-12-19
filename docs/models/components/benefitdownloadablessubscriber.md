# BenefitDownloadablesSubscriber

## Example Usage

```typescript
import { BenefitDownloadablesSubscriber } from "@polar-sh/sdk/models/components/benefitdownloadablessubscriber.js";

let value: BenefitDownloadablesSubscriber = {
  id: "<value>",
  createdAt: new Date("2024-02-11T02:38:58.436Z"),
  modifiedAt: new Date("2024-10-05T02:08:44.345Z"),
  type: "downloadables",
  description: "at hm afraid yowza scent complication",
  selectable: true,
  deletable: true,
  organizationId: "<value>",
  metadata: {},
  organization: {
    createdAt: new Date("2023-02-09T14:46:30.040Z"),
    modifiedAt: new Date("2024-07-28T16:12:54.009Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://spotless-knight.com/",
    prorationBehavior: "prorate",
    allowCustomerUpdates: true,
  },
  properties: {
    activeFiles: [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the benefit.                                                                                                     |
| `createdAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | Creation timestamp of the object.                                                                                          |
| `modifiedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | Last modification timestamp of the object.                                                                                 |
| `type`                                                                                                                     | *"downloadables"*                                                                                                          | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `description`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The description of the benefit.                                                                                            |
| `selectable`                                                                                                               | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is selectable when creating a product.                                                                 |
| `deletable`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is deletable.                                                                                          |
| `organizationId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the organization owning the benefit.                                                                             |
| `metadata`                                                                                                                 | Record<string, *components.MetadataOutputType*>                                                                            | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `organization`                                                                                                             | [components.BenefitSubscriberOrganization](../../models/components/benefitsubscriberorganization.md)                       | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `properties`                                                                                                               | [components.BenefitDownloadablesSubscriberProperties](../../models/components/benefitdownloadablessubscriberproperties.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |