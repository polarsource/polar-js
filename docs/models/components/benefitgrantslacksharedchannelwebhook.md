# BenefitGrantSlackSharedChannelWebhook

## Example Usage

```typescript
import { BenefitGrantSlackSharedChannelWebhook } from "@polar-sh/sdk/models/components/benefitgrantslacksharedchannelwebhook.js";

let value: BenefitGrantSlackSharedChannelWebhook = {
  createdAt: new Date("2024-06-28T05:52:04.301Z"),
  modifiedAt: new Date("2025-07-14T01:56:01.573Z"),
  id: "<value>",
  isGranted: true,
  isRevoked: true,
  subscriptionId: "<value>",
  orderId: "<value>",
  customerId: "<value>",
  benefitId: "<value>",
  customer: {
    id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
    createdAt: new Date("2025-06-17T00:37:51.966Z"),
    modifiedAt: null,
    metadata: {
      "key": false,
    },
    emailVerified: true,
    type: "team",
    name: "John Doe",
    billingName: "John Doe",
    billingAddress: {
      country: "US",
    },
    taxId: [
      "911144442",
      "us_ein",
    ],
    organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    deletedAt: new Date("2026-05-07T07:40:23.194Z"),
    avatarUrl: "https://www.gravatar.com/avatar/xxx?d=404",
  },
  member: {
    id: "<value>",
    createdAt: new Date("2024-08-29T23:41:53.521Z"),
    modifiedAt: new Date("2024-05-20T19:39:16.494Z"),
    customerId: "<value>",
    email: "member@example.com",
    name: "Jane Doe",
    externalId: "usr_1337",
    role: "billing_manager",
  },
  benefit: {
    id: "<value>",
    createdAt: new Date("2025-09-07T08:47:55.525Z"),
    modifiedAt: new Date("2024-05-14T18:17:34.719Z"),
    type: "slack_shared_channel",
    description: "wetly unless glossy",
    selectable: true,
    deletable: true,
    isDeleted: false,
    organizationId: "<value>",
    metadata: {
      "key": false,
    },
    visibility: "draft",
    properties: {
      slackIntegrationId: "<value>",
      channelNameTemplate: "<value>",
    },
    visibilityConfigurable: true,
  },
  properties: {},
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | Creation timestamp of the object.                                                                                          |
| `modifiedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | Last modification timestamp of the object.                                                                                 |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the grant.                                                                                                       |
| `grantedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_minus_sign:                                                                                                         | The timestamp when the benefit was granted. If `None`, the benefit is not granted.                                         |
| `isGranted`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is granted.                                                                                            |
| `revokedAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_minus_sign:                                                                                                         | The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.                                         |
| `isRevoked`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is revoked.                                                                                            |
| `subscriptionId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the subscription that granted this benefit.                                                                      |
| `orderId`                                                                                                                  | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the order that granted this benefit.                                                                             |
| `customerId`                                                                                                               | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the customer concerned by this grant.                                                                            |
| `memberId`                                                                                                                 | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The ID of the member concerned by this grant.                                                                              |
| `benefitId`                                                                                                                | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the benefit concerned by this grant.                                                                             |
| `error`                                                                                                                    | [components.BenefitGrantError](../../models/components/benefitgranterror.md)                                               | :heavy_minus_sign:                                                                                                         | The error information if the benefit grant failed with an unrecoverable error.                                             |
| `customer`                                                                                                                 | *components.Customer*                                                                                                      | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `member`                                                                                                                   | [components.Member](../../models/components/member.md)                                                                     | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |
| `benefit`                                                                                                                  | [components.BenefitSlackSharedChannel](../../models/components/benefitslacksharedchannel.md)                               | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `properties`                                                                                                               | [components.BenefitGrantSlackSharedChannelProperties](../../models/components/benefitgrantslacksharedchannelproperties.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `previousProperties`                                                                                                       | [components.BenefitGrantSlackSharedChannelProperties](../../models/components/benefitgrantslacksharedchannelproperties.md) | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |