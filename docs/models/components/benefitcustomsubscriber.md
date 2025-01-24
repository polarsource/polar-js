# BenefitCustomSubscriber

## Example Usage

```typescript
import { BenefitCustomSubscriber } from "@polar-sh/sdk/models/components/benefitcustomsubscriber.js";

let value: BenefitCustomSubscriber = {
  createdAt: new Date("2023-03-05T12:03:53.313Z"),
  modifiedAt: new Date("2025-01-06T06:14:40.579Z"),
  id: "<value>",
  description: "incomparable jealously unsung dim amount",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2025-06-10T16:16:44.051Z"),
    modifiedAt: new Date("2025-03-31T02:26:27.528Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://illiterate-angle.com/",
    bio: "<value>",
    company: "Kuhlman, Hilpert and Dietrich",
    blog: "<value>",
    location: "<value>",
    email: "Megane.Russel94@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 451103,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 4980,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {
    note: "<value>",
  },
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `createdAt`                                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Creation timestamp of the object.                                                                            |
| `modifiedAt`                                                                                                 | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                | :heavy_check_mark:                                                                                           | Last modification timestamp of the object.                                                                   |
| `id`                                                                                                         | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the benefit.                                                                                       |
| `type`                                                                                                       | *string*                                                                                                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The description of the benefit.                                                                              |
| `selectable`                                                                                                 | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is selectable when creating a product.                                                   |
| `deletable`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is deletable.                                                                            |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the organization owning the benefit.                                                               |
| `organization`                                                                                               | [components.Organization](../../models/components/organization.md)                                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitCustomSubscriberProperties](../../models/components/benefitcustomsubscriberproperties.md) | :heavy_check_mark:                                                                                           | Properties available to subscribers for a benefit of type `custom`.                                          |