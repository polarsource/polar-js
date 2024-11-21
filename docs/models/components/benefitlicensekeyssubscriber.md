# BenefitLicenseKeysSubscriber

## Example Usage

```typescript
import { BenefitLicenseKeysSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeysSubscriber = {
  createdAt: new Date("2023-11-01T12:23:46.032Z"),
  modifiedAt: new Date("2024-11-27T23:07:28.367Z"),
  id: "<value>",
  description: "and minus confute pish",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2024-11-27T19:05:06.518Z"),
      modifiedAt: new Date("2022-05-17T09:48:42.675Z"),
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
    createdAt: new Date("2022-03-30T10:02:42.903Z"),
    modifiedAt: new Date("2024-05-26T12:06:04.723Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://dim-swing.org/",
    bio: "<value>",
    company: "Spinka - Stokes",
    blog: "<value>",
    location: "<value>",
    email: "Kennith_Gutkowski24@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 412950,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 705781,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 621428,
      timeframe: "day",
    },
    activations: {
      limit: 646456,
      enableUserAdmin: false,
    },
    limitUsage: 141314,
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