# BenefitAdsSubscriber

## Example Usage

```typescript
import { BenefitAdsSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitAdsSubscriber = {
  createdAt: new Date("2024-11-28T16:58:32.600Z"),
  modifiedAt: new Date("2023-01-18T02:26:54.532Z"),
  id: "<value>",
  description: "little hmph flood",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2024-05-27T22:36:34.200Z"),
      modifiedAt: new Date("2022-02-10T14:02:38.783Z"),
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
    createdAt: new Date("2022-03-22T20:53:34.094Z"),
    modifiedAt: new Date("2023-09-26T23:35:22.282Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://pretty-doorpost.org/",
    bio: "<value>",
    company: "Bernhard, Sawayn and Wisozk",
    blog: "<value>",
    location: "<value>",
    email: "Mya97@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 610766,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 695088,
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