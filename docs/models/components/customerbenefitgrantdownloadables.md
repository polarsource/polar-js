# CustomerBenefitGrantDownloadables

## Example Usage

```typescript
import { CustomerBenefitGrantDownloadables } from "@polar-sh/sdk/models/components/customerbenefitgrantdownloadables.js";

let value: CustomerBenefitGrantDownloadables = {
  createdAt: new Date("2023-10-17T00:01:30.572Z"),
  modifiedAt: new Date("2025-02-14T15:33:57.970Z"),
  id: "<value>",
  grantedAt: new Date("2023-02-26T13:53:56.478Z"),
  revokedAt: new Date("2024-01-14T02:23:02.233Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2024-04-12T07:18:48.482Z"),
    modifiedAt: new Date("2023-03-22T07:53:37.413Z"),
    id: "<value>",
    email: "Justus.Swift-Waters@yahoo.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Congo",
    },
    taxId: [
      "ca_pst_sk",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2023-03-13T09:32:54.501Z"),
    modifiedAt: new Date("2024-05-07T00:30:07.587Z"),
    id: "<value>",
    description: "unlike ew aw yuck because neglected delete versus",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2025-01-23T16:26:05.111Z"),
      modifiedAt: new Date("2025-06-17T01:38:31.962Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://outlying-vision.info",
      bio: "<value>",
      company: "Feeney, Brakus and Davis",
      blog: "<value>",
      location: "<value>",
      email: "Jaime38@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 404116,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 608069,
      profileSettings: {},
      featureSettings: {},
      subscriptionSettings: {
        allowMultipleSubscriptions: false,
        allowCustomerUpdates: false,
        prorationBehavior: "prorate",
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