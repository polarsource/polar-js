# CustomerBenefitGrantLicenseKeys

## Example Usage

```typescript
import { CustomerBenefitGrantLicenseKeys } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantLicenseKeys = {
  createdAt: new Date("2023-04-03T19:28:29.193Z"),
  modifiedAt: new Date("2025-10-31T19:53:30.190Z"),
  id: "<value>",
  grantedAt: new Date("2023-06-04T18:32:11.631Z"),
  revokedAt: new Date("2024-02-01T05:40:56.566Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2024-01-14T17:29:23.813Z"),
    modifiedAt: new Date("2023-12-28T12:33:32.648Z"),
    id: "<value>",
    email: "Rogers.Lockman@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Iceland",
    },
    taxId: [
      "bo_tin",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2023-05-03T03:10:03.746Z"),
    modifiedAt: new Date("2025-10-13T07:18:44.318Z"),
    id: "<value>",
    description: "anti bus digestive a",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-09-28T19:26:25.236Z"),
      modifiedAt: new Date("2024-03-14T04:01:44.816Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://pushy-drug.net",
      bio: "<value>",
      company: "Towne, Roob and Leffler",
      blog: "<value>",
      location: "<value>",
      email: "Nathanael47@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 215006,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 143576,
      profileSettings: {},
      featureSettings: {},
    },
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 933163,
        timeframe: "day",
      },
      activations: {
        limit: 268674,
        enableCustomerAdmin: false,
      },
      limitUsage: 840285,
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