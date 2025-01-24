# CustomerBenefitGrantCustom

## Example Usage

```typescript
import { CustomerBenefitGrantCustom } from "@polar-sh/sdk/models/components/customerbenefitgrantcustom.js";

let value: CustomerBenefitGrantCustom = {
  createdAt: new Date("2023-09-12T04:43:40.792Z"),
  modifiedAt: new Date("2025-11-05T09:52:24.551Z"),
  id: "<value>",
  grantedAt: new Date("2025-08-23T21:53:56.912Z"),
  revokedAt: new Date("2023-06-05T13:24:57.695Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2025-08-27T22:34:29.586Z"),
    modifiedAt: new Date("2023-08-04T22:15:19.791Z"),
    id: "<value>",
    email: "Tomasa67@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Mongolia",
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
    createdAt: new Date("2023-07-24T16:49:09.098Z"),
    modifiedAt: new Date("2024-12-18T11:49:29.196Z"),
    id: "<value>",
    description: "overvalue key impressive spook",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2025-09-04T07:29:51.061Z"),
      modifiedAt: new Date("2023-05-15T07:54:47.723Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://immaculate-catalyst.org/",
      bio: "<value>",
      company: "Robel, Cummerata and Gislason",
      blog: "<value>",
      location: "<value>",
      email: "Riley27@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 31690,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 911452,
      profileSettings: {},
      featureSettings: {},
    },
    properties: {
      note: "<value>",
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                              | Type                                                                                               | Required                                                                                           | Description                                                                                        |
| -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Creation timestamp of the object.                                                                  |
| `modifiedAt`                                                                                       | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | Last modification timestamp of the object.                                                         |
| `id`                                                                                               | *string*                                                                                           | :heavy_check_mark:                                                                                 | The ID of the object.                                                                              |
| `grantedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `revokedAt`                                                                                        | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)      | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `customerId`                                                                                       | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `benefitId`                                                                                        | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `subscriptionId`                                                                                   | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `orderId`                                                                                          | *string*                                                                                           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `isGranted`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `isRevoked`                                                                                        | *boolean*                                                                                          | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `customer`                                                                                         | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)             | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `benefit`                                                                                          | [components.BenefitCustomSubscriber](../../models/components/benefitcustomsubscriber.md)           | :heavy_check_mark:                                                                                 | N/A                                                                                                |
| `properties`                                                                                       | [components.BenefitGrantCustomProperties](../../models/components/benefitgrantcustomproperties.md) | :heavy_check_mark:                                                                                 | N/A                                                                                                |