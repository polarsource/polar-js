# BenefitAdsSubscriber

## Example Usage

```typescript
import { BenefitAdsSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitAdsSubscriber = {
  createdAt: new Date("2024-08-06T23:09:15.332Z"),
  modifiedAt: new Date("2024-02-08T20:24:45.233Z"),
  id: "<value>",
  description:
    "ah unique interestingly throughout mixture scenario why grandiose vainly",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2023-02-09T06:12:33.108Z"),
      modifiedAt: new Date("2023-06-04T12:09:50.425Z"),
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
    createdAt: new Date("2023-04-15T14:47:40.530Z"),
    modifiedAt: new Date("2022-05-08T15:09:38.886Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://sick-airline.com/",
    bio: "<value>",
    company: "Stiedemann - Morissette",
    blog: "<value>",
    location: "<value>",
    email: "Odessa.Weber-Waelchi58@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 564647,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 318030,
    donationsEnabled: false,
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