# CustomerBenefitGrantAds

## Example Usage

```typescript
import { CustomerBenefitGrantAds } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantAds = {
  createdAt: new Date("2024-04-24T16:56:02.290Z"),
  modifiedAt: new Date("2024-09-13T17:33:20.087Z"),
  id: "<value>",
  grantedAt: new Date("2022-10-05T01:05:42.886Z"),
  revokedAt: new Date("2022-05-27T00:07:13.026Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  benefit: {
    createdAt: new Date("2024-04-22T05:43:29.394Z"),
    modifiedAt: new Date("2024-03-11T02:46:48.262Z"),
    id: "<value>",
    description:
      "midst whoa amongst yet remark offset major doubtfully whether",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-11-27T18:57:19.094Z"),
      modifiedAt: new Date("2024-11-11T04:11:04.408Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://wry-pigpen.biz/",
      bio: "<value>",
      company: "Towne and Sons",
      blog: "<value>",
      location: "<value>",
      email: "Buck.Huels67@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 796978,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 580148,
      profileSettings: {},
      featureSettings: {},
    },
    properties: {},
  },
  properties: {
    advertisementCampaignId: "<id>",
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the object.                                                                         |
| `grantedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `revokedAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `customerId`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `benefitId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `subscriptionId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `orderId`                                                                                     | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isGranted`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isRevoked`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `benefit`                                                                                     | [components.BenefitAdsSubscriber](../../models/components/benefitadssubscriber.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | [components.BenefitGrantAdsProperties](../../models/components/benefitgrantadsproperties.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |