# CustomerBenefitGrantDownloadables

## Example Usage

```typescript
import { CustomerBenefitGrantDownloadables } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantDownloadables = {
  createdAt: new Date("2025-04-17T01:09:14.302Z"),
  modifiedAt: new Date("2023-10-11T20:38:52.127Z"),
  id: "<value>",
  grantedAt: new Date("2023-03-21T23:21:40.012Z"),
  revokedAt: new Date("2023-08-20T04:01:20.962Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2024-11-10T01:04:24.933Z"),
    modifiedAt: new Date("2024-08-24T13:55:21.944Z"),
    id: "<value>",
    email: "Antwan24@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Madagascar",
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
    createdAt: new Date("2023-06-02T13:52:45.545Z"),
    modifiedAt: new Date("2025-09-26T07:23:43.790Z"),
    id: "<value>",
    description:
      "casement the priesthood individual entomb psst jaggedly kissingly forenenst marathon",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-12-20T23:02:17.882Z"),
      modifiedAt: new Date("2024-04-04T00:34:06.285Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://frivolous-agreement.com/",
      bio: "<value>",
      company: "Botsford, Klein and Smitham",
      blog: "<value>",
      location: "<value>",
      email: "Delores.Senger48@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 60269,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 785555,
      profileSettings: {},
      featureSettings: {},
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