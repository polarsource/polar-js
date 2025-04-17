# BenefitDownloadablesSubscriber

## Example Usage

```typescript
import { BenefitDownloadablesSubscriber } from "@polar-sh/sdk/models/components/benefitdownloadablessubscriber.js";

let value: BenefitDownloadablesSubscriber = {
  id: "<value>",
  createdAt: new Date("2024-02-11T02:38:58.436Z"),
  modifiedAt: new Date("2025-09-10T10:17:52.189Z"),
  description: "happy whisper sad woot out psst tousle",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  metadata: {
    "key": false,
  },
  organization: {
    createdAt: new Date("2023-12-07T04:34:35.188Z"),
    modifiedAt: new Date("2024-03-20T12:40:24.940Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://lost-colonialism.com",
    email: "Dean.Kertzmann@yahoo.com",
    website: "<value>",
    socials: [
      {
        platform: "instagram",
        url: "https://whole-amendment.com/",
      },
    ],
    detailsSubmittedAt: new Date("2023-04-06T16:09:31.468Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
  },
  properties: {
    activeFiles: [
      "<value>",
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
| `type`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `description`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The description of the benefit.                                                                                            |
| `selectable`                                                                                                               | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is selectable when creating a product.                                                                 |
| `deletable`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is deletable.                                                                                          |
| `organizationId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the organization owning the benefit.                                                                             |
| `metadata`                                                                                                                 | Record<string, *components.BenefitDownloadablesSubscriberMetadata*>                                                        | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `organization`                                                                                                             | [components.Organization](../../models/components/organization.md)                                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `properties`                                                                                                               | [components.BenefitDownloadablesSubscriberProperties](../../models/components/benefitdownloadablessubscriberproperties.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |