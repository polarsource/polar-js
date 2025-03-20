# BenefitDiscordSubscriber

## Example Usage

```typescript
import { BenefitDiscordSubscriber } from "@polar-sh/sdk/models/components/benefitdiscordsubscriber.js";

let value: BenefitDiscordSubscriber = {
  createdAt: new Date("2023-05-26T16:11:49.684Z"),
  modifiedAt: new Date("2023-04-08T08:19:25.840Z"),
  id: "<value>",
  description: "limply cleaner suspiciously phooey gah amongst",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2024-01-15T10:39:41.179Z"),
    modifiedAt: new Date("2023-07-02T07:43:41.839Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://zealous-fireplace.info",
    email: "Clemmie39@gmail.com",
    website: "<value>",
    socials: [
      {
        platform: "youtube",
        url: "https://discrete-annual.biz",
      },
    ],
    detailsSubmittedAt: new Date("2023-04-21T22:49:26.449Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
    bio: "<value>",
    company: "Schimmel Inc",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 260492,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 861041,
    profileSettings: {},
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