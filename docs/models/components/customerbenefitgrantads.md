# CustomerBenefitGrantAds

## Example Usage

```typescript
import { CustomerBenefitGrantAds } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantAds = {
  createdAt: new Date("2024-03-08T08:22:27.702Z"),
  modifiedAt: new Date("2022-03-15T06:42:11.490Z"),
  id: "<value>",
  grantedAt: new Date("2024-02-21T14:44:41.629Z"),
  revokedAt: new Date("2022-03-18T07:56:55.620Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  benefit: {
    createdAt: new Date("2023-03-09T04:01:27.021Z"),
    modifiedAt: new Date("2022-05-17T22:22:57.707Z"),
    id: "<value>",
    description:
      "remark offset major doubtfully whether jealously immediately spew section fearless",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-04-18T15:52:30.847Z"),
      modifiedAt: new Date("2022-09-24T10:58:44.754Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://intent-hutch.net/",
      bio: "<value>",
      company: "Spinka - Collins",
      blog: "<value>",
      location: "<value>",
      email: "Gudrun66@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 516918,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 589391,
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