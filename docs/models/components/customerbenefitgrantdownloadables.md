# CustomerBenefitGrantDownloadables

## Example Usage

```typescript
import { CustomerBenefitGrantDownloadables } from "@polar-sh/sdk/models/components/customerbenefitgrantdownloadables.js";

let value: CustomerBenefitGrantDownloadables = {
  createdAt: new Date("2023-01-27T00:25:14.511Z"),
  modifiedAt: new Date("2025-08-24T04:18:26.075Z"),
  id: "<value>",
  grantedAt: new Date("2025-06-20T19:23:52.677Z"),
  revokedAt: new Date("2025-10-23T14:56:00.000Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2023-12-11T02:29:40.537Z"),
    modifiedAt: new Date("2023-07-16T23:00:46.513Z"),
    id: "<value>",
    email: "Marta.Cummings27@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Mozambique",
    },
    taxId: [
      "my_sst",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2024-12-04T16:26:10.535Z"),
    modifiedAt: new Date("2025-07-26T06:01:01.239Z"),
    id: "<value>",
    description: "at offset extremely",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-06-13T11:12:06.613Z"),
      modifiedAt: new Date("2023-10-20T10:32:29.068Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://minty-postbox.com/",
      bio: "<value>",
      company: "Bailey, Price and Wilderman",
      blog: "<value>",
      location: "<value>",
      email: "Annabel18@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 419566,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 387341,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "invoice",
      },
    },
    properties: {
      activeFiles: [
        "<value>",
      ],
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Creation timestamp of the object.                                                                                |
| `modifiedAt`                                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | Last modification timestamp of the object.                                                                       |
| `id`                                                                                                             | *string*                                                                                                         | :heavy_check_mark:                                                                                               | The ID of the object.                                                                                            |
| `grantedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `revokedAt`                                                                                                      | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                    | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customerId`                                                                                                     | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `benefitId`                                                                                                      | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `subscriptionId`                                                                                                 | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `orderId`                                                                                                        | *string*                                                                                                         | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `isGranted`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `isRevoked`                                                                                                      | *boolean*                                                                                                        | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `customer`                                                                                                       | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)                           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `benefit`                                                                                                        | [components.BenefitDownloadablesSubscriber](../../models/components/benefitdownloadablessubscriber.md)           | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `properties`                                                                                                     | [components.BenefitGrantDownloadablesProperties](../../models/components/benefitgrantdownloadablesproperties.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |