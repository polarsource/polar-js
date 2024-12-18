# CustomerBenefitGrantDiscord

## Example Usage

```typescript
import { CustomerBenefitGrantDiscord } from "@polar-sh/sdk/models/components";

let value: CustomerBenefitGrantDiscord = {
  createdAt: new Date("2023-08-31T00:49:01.651Z"),
  modifiedAt: new Date("2024-02-02T12:36:51.052Z"),
  id: "<value>",
  grantedAt: new Date("2024-10-26T12:43:46.379Z"),
  revokedAt: new Date("2024-09-14T17:53:29.108Z"),
  customerId: "<value>",
  benefitId: "<value>",
  subscriptionId: "<value>",
  orderId: "<value>",
  isGranted: false,
  isRevoked: false,
  benefit: {
    createdAt: new Date("2023-10-18T05:26:12.523Z"),
    modifiedAt: new Date("2023-09-19T01:12:09.442Z"),
    id: "<value>",
    description: "manage what cutover",
    selectable: false,
    deletable: false,
    organizationId: "<value>",
    organization: {
      createdAt: new Date("2024-11-24T15:15:39.142Z"),
      modifiedAt: new Date("2024-05-19T00:29:31.464Z"),
      id: "<value>",
      name: "<value>",
      slug: "<value>",
      avatarUrl: "https://shiny-instance.com",
      bio: "<value>",
      company: "Johns and Sons",
      blog: "<value>",
      location: "<value>",
      email: "Carole.Kuhlman31@gmail.com",
      twitterUsername: "<value>",
      pledgeMinimumAmount: 633911,
      pledgeBadgeShowAmount: false,
      defaultUpfrontSplitToContributors: 920081,
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
| `benefit`                                                                                            | [components.BenefitDiscordSubscriber](../../models/components/benefitdiscordsubscriber.md)           | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `properties`                                                                                         | [components.BenefitGrantDiscordProperties](../../models/components/benefitgrantdiscordproperties.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |