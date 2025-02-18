# CustomerBenefitGrantAds

## Example Usage

```typescript
import { CustomerBenefitGrantAds } from "@polar-sh/sdk/models/components/customerbenefitgrantads.js";

let value: CustomerBenefitGrantAds = {
  createdAt: new Date("2025-02-13T02:44:27.976Z"),
  modifiedAt: new Date("2025-12-08T15:22:09.808Z"),
  id: "<value>",
  grantedAt: new Date("2024-10-06T18:53:01.108Z"),
  revokedAt: new Date("2023-04-07T23:51:00.199Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2024-05-16T23:08:38.509Z"),
    modifiedAt: new Date("2025-05-08T05:53:08.264Z"),
    id: "<value>",
    email: "Elena79@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Malta",
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
    createdAt: new Date("2024-11-08T20:03:10.103Z"),
    modifiedAt: new Date("2023-07-24T03:40:16.074Z"),
    id: "<value>",
    description: "deplore whenever self-reliant if",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2025-10-03T01:06:50.719Z"),
      modifiedAt: new Date("2023-07-20T01:30:01.199Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://alienated-hundred.biz/",
      bio: "<value>",
      company: "Rodriguez Inc",
      blog: "<value>",
      location: "<value>",
      email: "Blake.Shields19@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 349924,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 203956,
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