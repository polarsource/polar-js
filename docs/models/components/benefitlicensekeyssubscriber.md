# BenefitLicenseKeysSubscriber

## Example Usage

```typescript
import { BenefitLicenseKeysSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeysSubscriber = {
  createdAt: new Date("2024-05-26T12:06:04.723Z"),
  modifiedAt: new Date("2022-06-27T17:44:33.524Z"),
  id: "<value>",
  description: "obvious past energetically gentle",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2023-10-15T20:28:38.974Z"),
      modifiedAt: new Date("2022-07-10T19:03:58.934Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
      properties: {},
    },
  ],
  organization: {
    createdAt: new Date("2023-06-07T06:55:01.621Z"),
    modifiedAt: new Date("2022-07-09T16:29:33.851Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://impartial-hovel.biz/",
    bio: "<value>",
    company: "Gorczany - Fisher",
    blog: "<value>",
    location: "<value>",
    email: "Mikayla_Bosco7@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 352596,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 240545,
    donationsEnabled: false,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 594648,
      timeframe: "day",
    },
    activations: {
      limit: 719852,
      enableUserAdmin: false,
    },
    limitUsage: 767361,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Creation timestamp of the object.                                                                                      |
| `modifiedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Last modification timestamp of the object.                                                                             |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the benefit.                                                                                                 |
| `type`                                                                                                                 | [components.BenefitLicenseKeysSubscriberType](../../models/components/benefitlicensekeyssubscribertype.md)             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The description of the benefit.                                                                                        |
| `selectable`                                                                                                           | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is selectable when creating a product.                                                             |
| `deletable`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deletable.                                                                                      |
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the organization owning the benefit.                                                                         |
| `grants`                                                                                                               | [components.BenefitGrantLicenseKeys](../../models/components/benefitgrantlicensekeys.md)[]                             | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `organization`                                                                                                         | [components.Organization](../../models/components/organization.md)                                                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | [components.BenefitLicenseKeysSubscriberProperties](../../models/components/benefitlicensekeyssubscriberproperties.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |