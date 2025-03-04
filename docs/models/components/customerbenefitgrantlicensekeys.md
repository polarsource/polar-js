# CustomerBenefitGrantLicenseKeys

## Example Usage

```typescript
import { CustomerBenefitGrantLicenseKeys } from "@polar-sh/sdk/models/components/customerbenefitgrantlicensekeys.js";

let value: CustomerBenefitGrantLicenseKeys = {
  createdAt: new Date("2024-04-21T14:18:59.007Z"),
  modifiedAt: new Date("2025-12-07T04:48:23.043Z"),
  id: "<value>",
  grantedAt: new Date("2024-08-30T05:51:37.577Z"),
  revokedAt: new Date("2025-06-02T04:49:52.259Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2025-04-22T19:20:53.019Z"),
    modifiedAt: new Date("2024-03-16T20:09:33.162Z"),
    id: "<value>",
    email: "Blake89@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Taiwan",
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
    createdAt: new Date("2025-05-19T15:18:16.482Z"),
    modifiedAt: new Date("2023-03-02T23:25:37.864Z"),
    id: "<value>",
    description:
      "thankfully jovially duh knowingly mmm despite digestive zowie whose",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-12-30T18:24:30.633Z"),
      modifiedAt: new Date("2023-10-24T12:02:10.879Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://boring-digit.biz/",
      bio: "<value>",
      company: "D'Amore LLC",
      blog: "<value>",
      location: "<value>",
      email: "Skylar.Mayert74@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 798044,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 778955,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
      },
    },
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 782694,
        timeframe: "month",
      },
      activations: {
        limit: 510652,
        enableCustomerAdmin: false,
      },
      limitUsage: 626869,
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the object.                                                                                        |
| `grantedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `revokedAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `customerId`                                                                                                 | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `benefitId`                                                                                                  | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `subscriptionId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `orderId`                                                                                                    | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isGranted`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `isRevoked`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `customer`                                                                                                   | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)                       | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `benefit`                                                                                                    | [components.BenefitLicenseKeysSubscriber](../../models/components/benefitlicensekeyssubscriber.md)           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitGrantLicenseKeysProperties](../../models/components/benefitgrantlicensekeysproperties.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |