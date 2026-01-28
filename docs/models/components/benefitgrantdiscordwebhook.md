# BenefitGrantDiscordWebhook

## Example Usage

```typescript
import { BenefitGrantDiscordWebhook } from "@polar-sh/sdk/models/components/benefitgrantdiscordwebhook.js";

let value: BenefitGrantDiscordWebhook = {
  createdAt: new Date("2026-04-01T03:14:09.160Z"),
  modifiedAt: new Date("2025-07-28T13:13:39.901Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2024-06-04T21:28:32.740Z"),
    modifiedAt: new Date("2024-03-21T15:56:34.258Z"),
    metadata: {
      "key": "<value>",
    },
    externalId: "usr_1337",
    email: "customer@example.com",
    emailVerified: true,
    type: "individual",
    name: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-09-04T17:38:48.600Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2026-01-19T18:11:16.982Z"),
    modifiedAt: new Date("2025-10-05T12:09:29.297Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2026-12-31T14:07:04.115Z"),
    modifiedAt: new Date("2024-06-10T03:32:41.157Z"),
    type: "discord",
    description: "that frightfully fantastic wound as",
    selectable: true,
    deletable: false,
    organizationId: "<value>",
    metadata: {},
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
| `memberId`                                                                                           | *string*                                                                                             | :heavy_minus_sign:                                                                                   | The ID of the member concerned by this grant.                                                        |
| `benefitId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the benefit concerned by this grant.                                                       |
| `error`                                                                                              | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                         | :heavy_minus_sign:                                                                                   | The error information if the benefit grant failed with an unrecoverable error.                       |
| `customer`                                                                                           | [components.Customer](../../models/components/customer.md)                                           | :heavy_check_mark:                                                                                   | A customer in an organization.                                                                       |
| `member`                                                                                             | [components.Member](../../models/components/member.md)                                               | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |
| `benefit`                                                                                            | [components.BenefitDiscord](../../models/components/benefitdiscord.md)                               | :heavy_check_mark:                                                                                   | A benefit of type `discord`.<br/><br/>Use it to automatically invite your backers to a Discord server. |
| `properties`                                                                                         | [components.BenefitGrantDiscordProperties](../../models/components/benefitgrantdiscordproperties.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `previousProperties`                                                                                 | [components.BenefitGrantDiscordProperties](../../models/components/benefitgrantdiscordproperties.md) | :heavy_minus_sign:                                                                                   | N/A                                                                                                  |