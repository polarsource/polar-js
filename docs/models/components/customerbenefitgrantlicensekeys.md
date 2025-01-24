# CustomerBenefitGrantLicenseKeys

## Example Usage

```typescript
import { CustomerBenefitGrantLicenseKeys } from "@polar-sh/sdk/models/components/customerbenefitgrantlicensekeys.js";

let value: CustomerBenefitGrantLicenseKeys = {
  createdAt: new Date("2025-01-05T08:25:05.244Z"),
  modifiedAt: new Date("2023-10-21T07:37:15.037Z"),
  id: "<value>",
  grantedAt: new Date("2025-09-30T01:11:06.941Z"),
  revokedAt: new Date("2024-06-06T20:12:27.672Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2025-05-09T20:55:16.513Z"),
    modifiedAt: new Date("2023-02-23T20:30:51.266Z"),
    id: "<value>",
    email: "Caleb.Stoltenberg@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Tunisia",
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
    createdAt: new Date("2024-11-07T03:51:26.863Z"),
    modifiedAt: new Date("2023-08-11T09:17:08.951Z"),
    id: "<value>",
    description: "around creaking since until forearm",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2023-12-28T12:33:32.648Z"),
      modifiedAt: new Date("2025-03-18T07:55:59.360Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://oily-management.biz",
      bio: "<value>",
      company: "Mann, Jenkins and Macejkovic",
      blog: "<value>",
      location: "<value>",
      email: "Berry.Erdman@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 555733,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 365429,
      profileSettings: {},
      featureSettings: {},
    },
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 405215,
        timeframe: "year",
      },
      activations: {
        limit: 497017,
        enableCustomerAdmin: false,
      },
      limitUsage: 422956,
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