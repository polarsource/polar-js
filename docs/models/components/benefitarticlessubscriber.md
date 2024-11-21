# BenefitArticlesSubscriber

## Example Usage

```typescript
import { BenefitArticlesSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitArticlesSubscriber = {
  createdAt: new Date("2023-09-28T18:25:52.569Z"),
  modifiedAt: new Date("2024-01-31T04:14:13.740Z"),
  id: "<value>",
  description:
    "middle accurate repeatedly supposing ferociously where loyally beyond",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2022-05-09T00:29:29.459Z"),
      modifiedAt: new Date("2023-04-20T03:01:19.557Z"),
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
    createdAt: new Date("2023-12-25T03:29:06.681Z"),
    modifiedAt: new Date("2022-04-14T13:23:36.206Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://tasty-partridge.biz/",
    bio: "<value>",
    company: "Turner - Grant",
    blog: "<value>",
    location: "<value>",
    email: "Zula43@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 134205,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 91136,
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