# BenefitAdsSubscriber

## Example Usage

```typescript
import { BenefitAdsSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitAdsSubscriber = {
  createdAt: new Date("2022-12-27T14:26:27.740Z"),
  modifiedAt: new Date("2022-05-04T07:32:27.021Z"),
  id: "<value>",
  description: "clinch capitalise less verify past meh viability",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2024-04-24T22:48:28.937Z"),
      modifiedAt: new Date("2023-01-26T13:27:14.904Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      properties: {},
    },
  ],
  organization: {
    createdAt: new Date("2022-01-20T10:50:32.334Z"),
    modifiedAt: new Date("2023-12-22T15:24:11.981Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://clueless-trench.org/",
    bio: "<value>",
    company: "Gutkowski - Cummerata",
    blog: "<value>",
    location: "<value>",
    email: "Samir73@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 281416,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 690654,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the benefit.                                                                        |
| `type`                                                                                        | [components.BenefitAdsSubscriberType](../../models/components/benefitadssubscribertype.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the benefit.                                                               |
| `selectable`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is selectable when creating a product.                                    |
| `deletable`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is deletable.                                                             |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the benefit.                                                |
| `grants`                                                                                      | [components.BenefitGrantAds](../../models/components/benefitgrantads.md)[]                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `organization`                                                                                | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | [components.BenefitAdsProperties](../../models/components/benefitadsproperties.md)            | :heavy_check_mark:                                                                            | Properties for a benefit of type `ads`.                                                       |