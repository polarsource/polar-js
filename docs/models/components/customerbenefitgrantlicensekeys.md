# CustomerBenefitGrantLicenseKeys

## Example Usage

```typescript
import { CustomerBenefitGrantLicenseKeys } from "@polar-sh/sdk/models/components/customerbenefitgrantlicensekeys.js";

let value: CustomerBenefitGrantLicenseKeys = {
  createdAt: new Date("2023-10-27T07:25:37.639Z"),
  modifiedAt: new Date("2024-03-03T04:40:18.515Z"),
  id: "<value>",
  grantedAt: new Date("2025-07-07T23:20:26.961Z"),
  revokedAt: new Date("2025-06-04T06:03:49.709Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2023-09-27T01:47:20.783Z"),
    modifiedAt: new Date("2025-07-05T13:20:54.308Z"),
    id: "<value>",
    email: "Seth71@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "FR61954506077",
      "eu_vat",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2023-03-01T16:32:42.679Z"),
    modifiedAt: new Date("2023-11-22T16:09:54.713Z"),
    id: "<value>",
    description: "drat wonderful knavishly forenenst",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2025-01-28T05:16:30.896Z"),
      modifiedAt: new Date("2023-10-19T23:23:19.077Z"),
      id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://impolite-bowling.name",
      bio: "<value>",
      company: "Raynor - Anderson",
      blog: "<value>",
      location: "<value>",
      email: "Sasha.Muller@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 375026,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 529884,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
    },
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 881882,
        timeframe: "month",
      },
      activations: {
        limit: 374436,
        enableCustomerAdmin: false,
      },
      limitUsage: 982213,
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