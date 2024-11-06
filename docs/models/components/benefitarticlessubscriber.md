# BenefitArticlesSubscriber

## Example Usage

```typescript
import { BenefitArticlesSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitArticlesSubscriber = {
  createdAt: new Date("2022-12-02T16:06:08.205Z"),
  modifiedAt: new Date("2024-07-05T06:36:23.390Z"),
  id: "<value>",
  description: "if carefully eek clavicle cantaloupe inside towards ignorance",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2023-04-22T00:36:49.607Z"),
      modifiedAt: new Date("2022-11-02T04:50:51.282Z"),
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
    createdAt: new Date("2022-01-06T12:53:03.799Z"),
    modifiedAt: new Date("2022-07-24T04:31:39.728Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://trim-doorpost.org",
    bio: "<value>",
    company: "Gulgowski Group",
    blog: "<value>",
    location: "<value>",
    email: "Wyman.Prosacco@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 551570,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 123016,
    donationsEnabled: false,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {
    paidArticles: false,
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the benefit.                                                                                           |
| `type`                                                                                                           | [components.Type](../../models/components/type.md)                                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `description`                                                                                                    | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The description of the benefit.                                                                                  |
| `selectable`                                                                                                     | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the benefit is selectable when creating a product.                                                       |
| `deletable`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | Whether the benefit is deletable.                                                                                |
| `organizationId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the organization owning the benefit.                                                                   |
| `grants`                                                                                                         | [components.BenefitGrantSubscriber](../../models/components/benefitgrantsubscriber.md)[]                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `organization`                                                                                                   | [components.Organization](../../models/components/organization.md)                                               | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `properties`                                                                                                     | [components.BenefitArticlesSubscriberProperties](../../models/components/benefitarticlessubscriberproperties.md) | :heavy_check_mark:                                                                                               | Properties available to subscribers for a benefit of type `articles`.                                            |