# CustomerBenefitGrantDiscord

## Example Usage

```typescript
import { CustomerBenefitGrantDiscord } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantDiscord = {
  createdAt: new Date("2024-11-15T03:39:42.090Z"),
  modifiedAt: new Date("2025-10-10T06:04:08.009Z"),
  id: "<value>",
  grantedAt: new Date("2023-12-12T13:29:21.662Z"),
  revokedAt: new Date("2024-03-11T05:35:19.085Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2023-11-07T06:01:20.379Z"),
    modifiedAt: new Date("2023-05-08T18:58:25.406Z"),
    id: "<value>",
    email: "Austyn_Marks@hotmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Haiti",
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
    createdAt: new Date("2023-05-13T01:49:45.783Z"),
    modifiedAt: new Date("2024-03-18T10:26:27.496Z"),
    id: "<value>",
    description: "reassuringly conjecture gah",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2023-08-15T18:14:34.029Z"),
      modifiedAt: new Date("2024-11-28T19:36:58.004Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://spiffy-pepper.org/",
      bio: "<value>",
      company: "King LLC",
      blog: "<value>",
      location: "<value>",
      email: "Davonte_Gorczany58@yahoo.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 787928,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 15611,
      profileSettings: {},
      featureSettings: {},
    },
    properties: {
      guildId: "<id>",
    },
  },
  properties: {},
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the object.                                                                                |
| `grantedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `revokedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `customerId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `benefitId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `subscriptionId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `orderId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `isGranted`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `isRevoked`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `customer`                                                                                           | [components.CustomerPortalCustomer](../../models/components/customerportalcustomer.md)               | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `benefit`                                                                                            | [components.BenefitDiscordSubscriber](../../models/components/benefitdiscordsubscriber.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `properties`                                                                                         | [components.BenefitGrantDiscordProperties](../../models/components/benefitgrantdiscordproperties.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |