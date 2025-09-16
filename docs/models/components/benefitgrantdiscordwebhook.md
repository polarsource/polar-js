# BenefitGrantDiscordWebhook

## Example Usage

```typescript
import { BenefitGrantDiscordWebhook } from "@polar-sh/sdk/models/components/benefitgrantdiscordwebhook.js";

let value: BenefitGrantDiscordWebhook = {
  createdAt: new Date("2025-04-01T03:14:09.160Z"),
  modifiedAt: new Date("2024-07-28T13:13:39.901Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-04-26T10:19:45.222Z"),
    modifiedAt: new Date("2025-02-01T06:50:40.155Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2025-09-01T02:27:46.266Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-03-24T01:24:22.231Z"),
    modifiedAt: new Date("2025-09-09T16:14:57.265Z"),
    type: "discord",
    description: "contrast crystallize robust finally",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    metadata: {
      "key": 386.61,
    },
    properties: {
      guildId: "<id>",
      roleId: "<id>",
      kickMember: false,
      guildToken: "<value>",
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
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the grant.                                                                                 |
| `grantedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The timestamp when the benefit was granted. If `None`, the benefit is not granted.                   |
| `isGranted`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the benefit is granted.                                                                      |
| `revokedAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_minus_sign:                                                                                   | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.                   |
| `isRevoked`                                                                                          | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the benefit is revoked.                                                                      |
| `subscriptionId`                                                                                     | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the subscription that granted this benefit.                                                |
| `orderId`                                                                                            | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the order that granted this benefit.                                                       |
| `customerId`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the customer concerned by this grant.                                                      |
| `benefitId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the benefit concerned by this grant.                                                       |
| `error`                                                                                              | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                         | :heavy_minus_sign:                                                                                   | The error information if the benefit grant failed with an unrecoverable error.                       |
| `customer`                                                                                           | [components.Customer](../../models/components/customer.md)                                           | :heavy_check_mark:                                                                                   | A customer in an organization.                                                                       |
| `benefit`                                                                                            | [components.BenefitDiscord](../../models/components/benefitdiscord.md)                               | :heavy_check_mark:                                                                                   | A benefit of type `discord`.<br/><br/>Use it to automatically invite your backers to a Discord server. |
| `properties`                                                                                         | [components.BenefitGrantDiscordProperties](../../models/components/benefitgrantdiscordproperties.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `previousProperties`                                                                                 | [components.BenefitGrantDiscordProperties](../../models/components/benefitgrantdiscordproperties.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |