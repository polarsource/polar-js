# BenefitLicenseKeysSubscriber

## Example Usage

```typescript
import { BenefitLicenseKeysSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeysSubscriber = {
  createdAt: new Date("2023-05-30T15:13:20.991Z"),
  modifiedAt: new Date("2024-09-25T16:00:15.843Z"),
  id: "<value>",
  description: "retool space informal minus dark while",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2022-10-20T02:42:42.383Z"),
      modifiedAt: new Date("2022-07-07T00:56:28.352Z"),
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
    createdAt: new Date("2024-04-09T15:34:08.463Z"),
    modifiedAt: new Date("2023-09-26T04:44:57.014Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://impish-finding.name/",
    bio: "<value>",
    company: "O'Connell and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Lia_Franey75@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 211693,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 684273,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 780639,
      timeframe: "day",
    },
    activations: {
      limit: 448314,
      enableUserAdmin: false,
    },
    limitUsage: 716296,
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