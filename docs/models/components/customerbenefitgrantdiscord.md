# CustomerBenefitGrantDiscord

## Example Usage

```typescript
import { CustomerBenefitGrantDiscord } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantDiscord = {
  createdAt: new Date("2024-02-04T22:44:09.809Z"),
  modifiedAt: new Date("2025-02-01T20:11:50.129Z"),
  id: "<value>",
  grantedAt: new Date("2025-06-25T06:53:42.834Z"),
  revokedAt: new Date("2023-07-18T04:09:50.300Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  customer: {
    createdAt: new Date("2024-11-16T06:19:22.427Z"),
    modifiedAt: new Date("2023-06-24T21:14:12.329Z"),
    id: "<value>",
    email: "Janis_Murazik39@gmail.com",
    emailVerified: false,
    name: "<value>",
    billingAddress: {
      country: "Ukraine",
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
    createdAt: new Date("2024-07-16T16:35:31.351Z"),
    modifiedAt: new Date("2023-03-21T03:43:40.209Z"),
    id: "<value>",
    description: "boastfully until hence",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-08-21T21:47:18.524Z"),
      modifiedAt: new Date("2025-08-19T03:07:08.900Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://rusty-tusk.biz/",
      bio: "<value>",
      company: "Yost - Beatty",
      blog: "<value>",
      location: "<value>",
      email: "Santino_Dare72@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 501792,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 893477,
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