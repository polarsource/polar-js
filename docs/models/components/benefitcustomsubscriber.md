# BenefitCustomSubscriber

## Example Usage

```typescript
import { BenefitCustomSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitCustomSubscriber = {
  createdAt: new Date("2024-08-22T03:08:35.867Z"),
  modifiedAt: new Date("2022-11-09T06:43:16.309Z"),
  id: "<value>",
  description:
    "spanish questioningly in prickly meh as pfft grandson inexperienced pike",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2024-05-09T08:31:13.630Z"),
      modifiedAt: new Date("2023-03-27T19:49:06.695Z"),
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
    createdAt: new Date("2024-03-30T08:14:55.210Z"),
    modifiedAt: new Date("2023-03-24T17:25:25.814Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://nervous-illusion.biz/",
    bio: "<value>",
    company: "Hoppe, Batz and Homenick",
    blog: "<value>",
    location: "<value>",
    email: "Sadye_Dooley@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 76818,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 55356,
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
| `type`                                                                                                       | [components.BenefitCustomSubscriberType](../../models/components/benefitcustomsubscribertype.md)             | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `description`                                                                                                | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The description of the benefit.                                                                              |
| `selectable`                                                                                                 | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is selectable when creating a product.                                                   |
| `deletable`                                                                                                  | *boolean*                                                                                                    | :heavy_check_mark:                                                                                           | Whether the benefit is deletable.                                                                            |
| `organizationId`                                                                                             | *string*                                                                                                     | :heavy_check_mark:                                                                                           | The ID of the organization owning the benefit.                                                               |
| `grants`                                                                                                     | [components.BenefitGrantSubscriber](../../models/components/benefitgrantsubscriber.md)[]                     | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `organization`                                                                                               | [components.Organization](../../models/components/organization.md)                                           | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `properties`                                                                                                 | [components.BenefitCustomSubscriberProperties](../../models/components/benefitcustomsubscriberproperties.md) | :heavy_check_mark:                                                                                           | Properties available to subscribers for a benefit of type `custom`.                                          |