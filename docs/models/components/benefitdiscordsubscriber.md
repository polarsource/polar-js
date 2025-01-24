# BenefitDiscordSubscriber

## Example Usage

```typescript
import { BenefitDiscordSubscriber } from "@polar-sh/sdk/models/components/benefitdiscordsubscriber.js";

let value: BenefitDiscordSubscriber = {
  createdAt: new Date("2024-02-04T10:48:51.582Z"),
  modifiedAt: new Date("2023-08-20T14:51:19.861Z"),
  id: "<value>",
  description: "violin intellect questionable blah yearningly coincide yippee",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2023-05-02T15:57:51.261Z"),
    modifiedAt: new Date("2025-09-09T22:48:36.314Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://slimy-invite.name",
    bio: "<value>",
    company: "Rowe - Powlowski",
    blog: "<value>",
    location: "<value>",
    email: "Treva78@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 266079,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 765202,
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
| `type`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The description of the benefit.                                                                                |
| `selectable`                                                                                                   | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether the benefit is selectable when creating a product.                                                     |
| `deletable`                                                                                                    | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether the benefit is deletable.                                                                              |
| `organizationId`                                                                                               | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The ID of the organization owning the benefit.                                                                 |
| `organization`                                                                                                 | [components.Organization](../../models/components/organization.md)                                             | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `properties`                                                                                                   | [components.BenefitDiscordSubscriberProperties](../../models/components/benefitdiscordsubscriberproperties.md) | :heavy_check_mark:                                                                                             | Properties available to subscribers for a benefit of type `discord`.                                           |