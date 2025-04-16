# BenefitLicenseKeysSubscriber

## Example Usage

```typescript
import { BenefitLicenseKeysSubscriber } from "@polar-sh/sdk/models/components/benefitlicensekeyssubscriber.js";

let value: BenefitLicenseKeysSubscriber = {
  id: "<value>",
  createdAt: new Date("2024-07-17T05:09:36.262Z"),
  modifiedAt: new Date("2023-03-17T14:59:08.856Z"),
  metadata: {
    "key": 304809,
  },
  description: "about although instead brown onto far-flung duh",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2025-02-08T09:18:28.757Z"),
    modifiedAt: new Date("2024-05-24T23:06:44.900Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://charming-assist.info",
    email: "Garth.Boyer95@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "youtube",
        url: "https://delirious-comparison.name",
      },
    ],
    detailsSubmittedAt: new Date("2024-08-17T09:00:52.231Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "DuBuque Group",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
  },
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 886682,
      timeframe: "month",
    },
    activations: {
      limit: 276790,
      enableCustomerAdmin: false,
    },
    limitUsage: 112280,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the benefit.                                                                                                 |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Creation timestamp of the object.                                                                                      |
| `modifiedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Last modification timestamp of the object.                                                                             |
| `metadata`                                                                                                             | Record<string, *components.BenefitLicenseKeysSubscriberMetadata*>                                                      | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `type`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The description of the benefit.                                                                                        |
| `selectable`                                                                                                           | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is selectable when creating a product.                                                             |
| `deletable`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deletable.                                                                                      |
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the organization owning the benefit.                                                                         |
| `organization`                                                                                                         | [components.Organization](../../models/components/organization.md)                                                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | [components.BenefitLicenseKeysSubscriberProperties](../../models/components/benefitlicensekeyssubscriberproperties.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |