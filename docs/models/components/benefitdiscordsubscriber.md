# BenefitDiscordSubscriber

## Example Usage

```typescript
import { BenefitDiscordSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitDiscordSubscriber = {
  createdAt: new Date("2023-06-27T15:00:49.644Z"),
  modifiedAt: new Date("2024-12-20T18:47:30.812Z"),
  id: "<value>",
  description: "made-up brr carelessly",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2022-02-07T09:13:36.865Z"),
      modifiedAt: new Date("2023-12-30T07:02:08.293Z"),
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
    createdAt: new Date("2024-08-08T23:38:36.457Z"),
    modifiedAt: new Date("2023-01-05T23:27:19.376Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://clear-cut-descendant.org",
    bio: "<value>",
    company: "Mohr Group",
    blog: "<value>",
    location: "<value>",
    email: "Ana35@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 365043,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 267684,
    donationsEnabled: false,
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