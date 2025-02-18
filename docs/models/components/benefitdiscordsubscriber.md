# BenefitDiscordSubscriber

## Example Usage

```typescript
import { BenefitDiscordSubscriber } from "@polar-sh/sdk/models/components/benefitdiscordsubscriber.js";

let value: BenefitDiscordSubscriber = {
  createdAt: new Date("2025-11-29T10:23:36.754Z"),
  modifiedAt: new Date("2025-02-10T01:04:09.916Z"),
  id: "<value>",
  description: "husk jiggle runway schlep atomize wilted",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2024-06-20T17:26:01.877Z"),
    modifiedAt: new Date("2025-05-16T04:06:10.206Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://candid-conservative.info/",
    bio: "<value>",
    company: "Towne LLC",
    blog: "<value>",
    location: "<value>",
    email: "Gerhard_Jakubowski53@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 83602,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 122604,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
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