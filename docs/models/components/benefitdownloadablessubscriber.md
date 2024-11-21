# BenefitDownloadablesSubscriber

## Example Usage

```typescript
import { BenefitDownloadablesSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitDownloadablesSubscriber = {
  createdAt: new Date("2022-06-20T17:47:05.715Z"),
  modifiedAt: new Date("2023-07-08T02:12:48.329Z"),
  id: "<value>",
  description: "similar suddenly ugh ignite briefly",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2022-03-02T16:05:32.858Z"),
      modifiedAt: new Date("2024-01-17T05:20:40.624Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
    },
  ],
  organization: {
    createdAt: new Date("2024-10-08T23:33:49.995Z"),
    modifiedAt: new Date("2023-06-25T08:18:55.202Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://staid-phrase.org",
    bio: "<value>",
    company: "Gorczany, Schamberger and Pouros",
    blog: "<value>",
    location: "<value>",
    email: "Ardith99@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 477222,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 570437,
    profileSettings: {},
    featureSettings: {},
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
| `createdAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | Creation timestamp of the object.                                                                                          |
| `modifiedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | Last modification timestamp of the object.                                                                                 |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the benefit.                                                                                                     |
| `type`                                                                                                                     | [components.BenefitDownloadablesSubscriberType](../../models/components/benefitdownloadablessubscribertype.md)             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `description`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The description of the benefit.                                                                                            |
| `selectable`                                                                                                               | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is selectable when creating a product.                                                                 |
| `deletable`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is deletable.                                                                                          |
| `organizationId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the organization owning the benefit.                                                                             |
| `grants`                                                                                                                   | [components.BenefitGrantSubscriber](../../models/components/benefitgrantsubscriber.md)[]                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `organization`                                                                                                             | [components.Organization](../../models/components/organization.md)                                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `properties`                                                                                                               | [components.BenefitDownloadablesSubscriberProperties](../../models/components/benefitdownloadablessubscriberproperties.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |