# BenefitCustomSubscriber

## Example Usage

```typescript
import { BenefitCustomSubscriber } from "@polar-sh/sdk/models/components/benefitcustomsubscriber.js";

let value: BenefitCustomSubscriber = {
  id: "<value>",
  createdAt: new Date("2025-11-30T04:35:35.570Z"),
  modifiedAt: new Date("2024-02-26T07:33:16.529Z"),
  metadata: {
    "key": false,
  },
  description:
    "innocently selfish hence manner manner climb reasoning mentor upside-down at",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2025-10-18T09:14:25.735Z"),
    modifiedAt: new Date("2023-05-18T17:21:37.773Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://whimsical-onset.name/",
    email: "Arianna_Kulas13@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "tiktok",
        url: "https://fragrant-bar.name",
      },
    ],
    detailsSubmittedAt: new Date("2024-06-25T05:00:31.676Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Franecki LLC",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
  },
  properties: {
    note: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the benefit.                                                                                       |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `metadata`                                                                                                   | Record<string, *components.BenefitCustomSubscriberMetadata*>                                                 | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `type`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The description of the benefit.                                                                              |
| `selectable`                                                                                                 | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is selectable when creating a product.                                                   |
| `deletable`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is deletable.                                                                            |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the organization owning the benefit.                                                               |
| `organization`                                                                                               | [components.Organization](../../models/components/organization.md)                                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitCustomSubscriberProperties](../../models/components/benefitcustomsubscriberproperties.md) | :heavy_check_mark:                                                                                           | Properties available to subscribers for a benefit of type `custom`.                                          |