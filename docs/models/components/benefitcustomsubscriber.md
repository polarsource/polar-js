# BenefitCustomSubscriber

## Example Usage

```typescript
import { BenefitCustomSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitCustomSubscriber = {
  createdAt: new Date("2023-09-15T07:57:16.201Z"),
  modifiedAt: new Date("2022-06-02T21:32:40.622Z"),
  id: "<value>",
  description: "yowza upliftingly whoa fuel oof matter under indolent and",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2022-08-08T09:17:22.587Z"),
      modifiedAt: new Date("2023-11-14T17:27:52.001Z"),
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
    createdAt: new Date("2022-05-06T16:52:19.881Z"),
    modifiedAt: new Date("2023-10-24T06:27:18.505Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://internal-eyebrow.com/",
    bio: "<value>",
    company: "Windler LLC",
    blog: "<value>",
    location: "<value>",
    email: "Verlie95@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 148004,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 85685,
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