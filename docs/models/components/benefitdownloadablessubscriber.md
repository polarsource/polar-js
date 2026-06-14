# BenefitDownloadablesSubscriber

## Example Usage

```typescript
import { BenefitDownloadablesSubscriber } from "@polar-sh/sdk/models/components/benefitdownloadablessubscriber.js";

let value: BenefitDownloadablesSubscriber = {
  id: "<value>",
  createdAt: new Date("2025-02-10T02:38:58.436Z"),
  modifiedAt: new Date("2025-10-05T02:08:44.345Z"),
  type: "downloadables",
  description: "at hm afraid yowza scent complication",
  selectable: true,
  deletable: true,
  isDeleted: true,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2026-09-21T01:01:26.200Z"),
    modifiedAt: new Date("2024-02-09T14:46:30.040Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://quintessential-battle.net",
    prorationBehavior: "next_period",
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
| `isDeleted`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is deleted.                                                                                            |
| `organizationId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the organization owning the benefit.                                                                             |
| `organization`                                                                                                             | [components.BenefitSubscriberOrganization](../../models/components/benefitsubscriberorganization.md)                       | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `properties`                                                                                                               | [components.BenefitDownloadablesSubscriberProperties](../../models/components/benefitdownloadablessubscriberproperties.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |