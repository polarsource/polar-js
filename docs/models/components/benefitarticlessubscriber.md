# BenefitArticlesSubscriber

## Example Usage

```typescript
import { BenefitArticlesSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitArticlesSubscriber = {
  createdAt: new Date("2024-08-24T11:34:16.158Z"),
  modifiedAt: new Date("2023-02-09T14:24:57.874Z"),
  id: "<value>",
  description: "unless hmph towards yet whoa premise customise gah",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2024-08-06T23:09:15.332Z"),
      modifiedAt: new Date("2024-02-08T20:24:45.233Z"),
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
    createdAt: new Date("2024-07-16T13:54:19.093Z"),
    modifiedAt: new Date("2022-09-08T09:58:53.295Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://urban-earth.net",
    bio: "<value>",
    company: "Greenfelder and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Bernadette94@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 930942,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 475060,
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