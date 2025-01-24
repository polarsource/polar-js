# CustomerBenefitGrantAds

## Example Usage

```typescript
import { CustomerBenefitGrantAds } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantAds = {
  createdAt: new Date("2025-08-30T02:25:42.565Z"),
  modifiedAt: new Date("2025-07-30T07:23:10.648Z"),
  id: "<value>",
  grantedAt: new Date("2024-09-20T21:20:54.703Z"),
  revokedAt: new Date("2023-06-11T17:47:53.592Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2025-02-10T17:55:23.281Z"),
    modifiedAt: new Date("2025-11-01T11:41:59.439Z"),
    id: "<value>",
    email: "Arden72@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Netherlands",
    },
    taxId: [
      "sa_vat",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2024-08-13T07:34:07.606Z"),
    modifiedAt: new Date("2023-04-10T03:12:40.114Z"),
    id: "<value>",
    description: "well-off joyful aw defiantly",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2025-11-30T13:09:12.603Z"),
      modifiedAt: new Date("2024-08-01T03:05:20.153Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://frightened-bonfire.org",
      bio: "<value>",
      company: "Kiehn and Sons",
      blog: "<value>",
      location: "<value>",
      email: "Kiera73@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 200596,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 308739,
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