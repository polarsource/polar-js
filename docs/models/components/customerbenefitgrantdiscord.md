# CustomerBenefitGrantDiscord

## Example Usage

```typescript
import { CustomerBenefitGrantDiscord } from "@polar-sh/sdk/models/components/customerbenefitgrantdiscord.js";

let value: CustomerBenefitGrantDiscord = {
  createdAt: new Date("2023-04-02T19:52:21.245Z"),
  modifiedAt: new Date("2023-11-02T07:46:05.555Z"),
  id: "<value>",
  grantedAt: new Date("2024-06-14T15:29:42.558Z"),
  revokedAt: new Date("2024-02-07T19:33:05.653Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: true,
  isRevoked: false,
  customer: {
    createdAt: new Date("2025-10-07T04:17:24.786Z"),
    modifiedAt: new Date("2025-05-05T02:01:44.871Z"),
    id: "<value>",
    email: "Sedrick_Paucek@hotmail.com",
    emailVerified: true,
    name: "<value>",
    billingName: "<value>",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    oauthAccounts: {},
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2024-05-17T00:28:43.446Z"),
    modifiedAt: new Date("2024-07-03T08:18:47.444Z"),
    type: "discord",
    description:
      "reasonable blah vibraphone instead loose rosy furthermore swiftly",
    selectable: true,
    deletable: true,
    organizationId: "<value>",
    metadata: {
      "key": 185641,
    },
    organization: {
      createdAt: new Date("2024-07-06T05:20:15.511Z"),
      modifiedAt: new Date("2024-10-26T03:36:06.540Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://handy-impact.net",
      prorationBehavior: "prorate",
      allowCustomerUpdates: true,
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