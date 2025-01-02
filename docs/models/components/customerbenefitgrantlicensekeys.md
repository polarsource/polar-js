# CustomerBenefitGrantLicenseKeys

## Example Usage

```typescript
import { CustomerBenefitGrantLicenseKeys } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantLicenseKeys = {
  createdAt: new Date("2024-08-06T08:14:46.348Z"),
  modifiedAt: new Date("2023-03-01T08:59:33.586Z"),
  id: "<value>",
  grantedAt: new Date("2023-06-02T13:52:45.545Z"),
  revokedAt: new Date("2025-09-26T07:23:43.790Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2025-08-17T20:38:44.628Z"),
    modifiedAt: new Date("2025-06-13T01:35:49.200Z"),
    id: "<value>",
    email: "Ford54@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Kazakhstan",
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
    createdAt: new Date("2024-04-05T15:03:35.148Z"),
    modifiedAt: new Date("2023-08-14T01:50:08.497Z"),
    id: "<value>",
    description:
      "priesthood individual entomb psst jaggedly kissingly forenenst marathon um",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2023-04-14T20:13:02.673Z"),
      modifiedAt: new Date("2024-05-09T07:01:19.772Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://insecure-digestive.info",
      bio: "<value>",
      company: "Bayer, Kuhn and Dickinson",
      blog: "<value>",
      location: "<value>",
      email: "Pablo17@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 408680,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 182103,
      profileSettings: {},
      featureSettings: {},
    },
    properties: {
      prefix: "<value>",
      expires: {
        ttl: 611180,
        timeframe: "month",
      },
      activations: {
        limit: 388671,
        enableCustomerAdmin: false,
      },
      limitUsage: 31468,
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