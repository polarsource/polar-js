# CustomerBenefitGrantAds

## Example Usage

```typescript
import { CustomerBenefitGrantAds } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantAds = {
  createdAt: new Date("2025-10-18T00:02:52.345Z"),
  modifiedAt: new Date("2024-06-02T00:04:32.797Z"),
  id: "<value>",
  grantedAt: new Date("2023-09-09T04:56:49.668Z"),
  revokedAt: new Date("2025-01-05T08:25:05.244Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2023-10-21T07:37:15.037Z"),
    modifiedAt: new Date("2025-09-30T01:11:06.941Z"),
    id: "<value>",
    email: "Ova21@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Bouvet Island",
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
    createdAt: new Date("2024-02-10T10:02:23.518Z"),
    modifiedAt: new Date("2025-09-24T08:55:04.735Z"),
    id: "<value>",
    description: "supposing abaft uh-huh quickly",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2025-11-12T10:24:01.727Z"),
      modifiedAt: new Date("2025-05-01T10:55:39.996Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://dim-toaster.com",
      bio: "<value>",
      company: "Connelly, Hettinger and Hegmann",
      blog: "<value>",
      location: "<value>",
      email: "Myles26@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 564777,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 411312,
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
| `customer`                                                                                    | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)        | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `benefit`                                                                                     | [components.BenefitAdsSubscriber](../../models/components/benefitadssubscriber.md)            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | [components.BenefitGrantAdsProperties](../../models/components/benefitgrantadsproperties.md)  | :heavy_check_mark:                                                                            | N/A                                                                                           |