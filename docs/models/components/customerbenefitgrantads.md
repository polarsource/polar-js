# CustomerBenefitGrantAds

## Example Usage

```typescript
import { CustomerBenefitGrantAds } from "@polar-sh/sdk/models/components/customerbenefitgrantads.js";

let value: CustomerBenefitGrantAds = {
  createdAt: new Date("2025-05-10T16:59:51.268Z"),
  modifiedAt: new Date("2024-01-26T02:08:19.912Z"),
  id: "<value>",
  grantedAt: new Date("2024-08-19T06:06:53.937Z"),
  revokedAt: new Date("2024-04-13T22:22:57.873Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2024-05-06T01:33:06.900Z"),
    modifiedAt: new Date("2024-06-16T05:41:02.707Z"),
    id: "<value>",
    email: "Queen85@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "United States Minor Outlying Islands",
    },
    taxId: [
      "<id>",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2025-08-30T02:25:42.565Z"),
    modifiedAt: new Date("2025-07-30T07:23:10.648Z"),
    id: "<value>",
    description: "jiggle narrow while honored absent urban busily",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2025-08-20T17:29:24.705Z"),
      modifiedAt: new Date("2024-04-01T13:16:59.523Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://worthless-hammock.name/",
      bio: "<value>",
      company: "Fahey, Glover and Ritchie",
      blog: "<value>",
      location: "<value>",
      email: "Cole.Altenwerth@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 759015,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 57387,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
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
| `customer`                                                                                    | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `benefit`                                                                                     | [components.BenefitAdsSubscriber](../../models/components/benefitadssubscriber.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | [components.BenefitGrantAdsProperties](../../models/components/benefitgrantadsproperties.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |