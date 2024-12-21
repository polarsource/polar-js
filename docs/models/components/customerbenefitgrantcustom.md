# CustomerBenefitGrantCustom

## Example Usage

```typescript
import { CustomerBenefitGrantCustom } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantCustom = {
  createdAt: new Date("2023-06-16T18:30:15.527Z"),
  modifiedAt: new Date("2024-03-27T12:26:38.918Z"),
  id: "<value>",
  grantedAt: new Date("2024-04-26T21:53:34.696Z"),
  revokedAt: new Date("2022-01-14T06:47:19.215Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2022-02-11T11:01:25.106Z"),
    modifiedAt: new Date("2023-06-08T09:44:26.832Z"),
    id: "<value>",
    email: "Cristopher26@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Saint Lucia",
    },
    taxId: [
      "ca_pst_bc",
    ],
    oauthAccounts: {
      "key": {
        accountId: "<id>",
        accountUsername: "<value>",
      },
    },
  },
  benefit: {
    createdAt: new Date("2024-09-10T13:02:30.656Z"),
    modifiedAt: new Date("2022-03-04T10:48:40.423Z"),
    id: "<value>",
    description: "ew monasticism failing whether crazy vainly broken er",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-11-13T10:52:23.813Z"),
      modifiedAt: new Date("2024-10-14T18:51:40.332Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://perfumed-vestment.info",
      bio: "<value>",
      company: "Kessler Inc",
      blog: "<value>",
      location: "<value>",
      email: "Kevin54@hotmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 459436,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 625192,
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