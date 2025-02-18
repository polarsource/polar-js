# CustomerBenefitGrantLicenseKeys

## Example Usage

```typescript
import { CustomerBenefitGrantLicenseKeys } from "@polar-sh/sdk/models/components/customerbenefitgrantlicensekeys.js";

let value: CustomerBenefitGrantLicenseKeys = {
  createdAt: new Date("2024-04-27T11:16:44.414Z"),
  modifiedAt: new Date("2024-02-01T09:05:51.525Z"),
  id: "<value>",
  grantedAt: new Date("2023-07-19T15:18:09.282Z"),
  revokedAt: new Date("2024-06-19T03:57:39.135Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2023-10-25T17:11:33.457Z"),
    modifiedAt: new Date("2024-07-10T12:32:56.304Z"),
    id: "<value>",
    email: "Elbert_Monahan27@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Niger",
    },
    taxId: [
      "ch_vat",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2023-08-30T23:13:41.963Z"),
    modifiedAt: new Date("2025-06-18T01:18:49.622Z"),
    id: "<value>",
    description: "outside oh altruistic bah mmm luck oh fussy graft",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-07-28T11:20:08.331Z"),
      modifiedAt: new Date("2024-09-16T04:00:31.324Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://sardonic-mythology.com",
      bio: "<value>",
      company: "Casper - Langosh",
      blog: "<value>",
      location: "<value>",
      email: "Rodolfo.Larkin@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 27651,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 924297,
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
        ttl: 674572,
        timeframe: "month",
      },
      activations: {
        limit: 789654,
        enableCustomerAdmin: false,
      },
      limitUsage: 962380,
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