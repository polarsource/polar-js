# BenefitDiscordSubscriber

## Example Usage

```typescript
import { BenefitDiscordSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitDiscordSubscriber = {
  createdAt: new Date("2024-10-22T15:16:19.696Z"),
  modifiedAt: new Date("2022-12-30T19:00:40.873Z"),
  id: "<value>",
  description: "gestate correctly trick",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2024-10-07T00:23:12.112Z"),
      modifiedAt: new Date("2022-01-09T13:26:23.661Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
    },
  ],
  organization: {
    createdAt: new Date("2023-10-08T13:24:38.931Z"),
    modifiedAt: new Date("2022-10-09T06:27:51.653Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://glass-citizen.info",
    bio: "<value>",
    company: "Zboncak Group",
    blog: "<value>",
    location: "<value>",
    email: "Roxanne_Shields@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 204877,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 810004,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {
    guildId: "<id>",
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Creation timestamp of the object.                                                                              |
| `modifiedAt`                                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                  | :heavy_check_mark:                                                                                             | Last modification timestamp of the object.                                                                     |
| `id`                                                                                                           | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the benefit.                                                                                         |
| `type`                                                                                                         | [components.BenefitDiscordSubscriberType](../../models/components/benefitdiscordsubscribertype.md)             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The description of the benefit.                                                                                |
| `selectable`                                                                                                   | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether the benefit is selectable when creating a product.                                                     |
| `deletable`                                                                                                    | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether the benefit is deletable.                                                                              |
| `organizationId`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the organization owning the benefit.                                                                 |
| `grants`                                                                                                       | [components.BenefitGrantSubscriber](../../models/components/benefitgrantsubscriber.md)[]                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `organization`                                                                                                 | [components.Organization](../../models/components/organization.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `properties`                                                                                                   | [components.BenefitDiscordSubscriberProperties](../../models/components/benefitdiscordsubscriberproperties.md) | :heavy_check_mark:                                                                                             | Properties available to subscribers for a benefit of type `discord`.                                           |