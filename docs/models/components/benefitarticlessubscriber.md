# BenefitArticlesSubscriber

## Example Usage

```typescript
import { BenefitArticlesSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitArticlesSubscriber = {
  createdAt: new Date("2023-05-08T12:12:24.685Z"),
  modifiedAt: new Date("2022-06-15T01:33:14.819Z"),
  id: "<value>",
  description: "however for suckle along although boohoo consequently",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2024-09-15T03:58:39.261Z"),
      modifiedAt: new Date("2024-12-17T17:51:01.747Z"),
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
    createdAt: new Date("2022-12-25T20:13:46.460Z"),
    modifiedAt: new Date("2024-02-10T23:02:01.882Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://caring-grandson.name/",
    bio: "<value>",
    company: "Schuppe - Kuphal",
    blog: "<value>",
    location: "<value>",
    email: "Larue42@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 770940,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 356351,
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