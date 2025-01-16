# CustomerBenefitGrantCustom

## Example Usage

```typescript
import { CustomerBenefitGrantCustom } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantCustom = {
  createdAt: new Date("2024-09-19T12:26:05.228Z"),
  modifiedAt: new Date("2024-08-28T07:29:05.324Z"),
  id: "<value>",
  grantedAt: new Date("2024-03-20T14:59:12.421Z"),
  revokedAt: new Date("2023-06-10T11:26:39.673Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2025-08-09T09:21:03.493Z"),
    modifiedAt: new Date("2023-05-04T02:40:37.506Z"),
    id: "<value>",
    email: "Callie_Stiedemann@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Heard Island and McDonald Islands",
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
    createdAt: new Date("2025-08-05T08:59:04.399Z"),
    modifiedAt: new Date("2025-08-05T00:25:50.473Z"),
    id: "<value>",
    description:
      "after incidentally incomparable jealously unsung dim amount um",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-06-19T01:31:29.617Z"),
      modifiedAt: new Date("2024-02-12T17:44:21.809Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://strident-priesthood.com/",
      bio: "<value>",
      company: "Brown, White and Hartmann",
      blog: "<value>",
      location: "<value>",
      email: "Abigale_Hackett92@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 867330,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 500239,
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