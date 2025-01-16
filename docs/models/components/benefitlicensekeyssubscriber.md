# BenefitLicenseKeysSubscriber

## Example Usage

```typescript
import { BenefitLicenseKeysSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitLicenseKeysSubscriber = {
  createdAt: new Date("2025-04-09T16:23:40.595Z"),
  modifiedAt: new Date("2025-12-26T22:45:57.487Z"),
  id: "<value>",
  description: "delightfully plumber fray elevator",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2024-07-19T20:38:40.921Z"),
    modifiedAt: new Date("2023-10-27T06:47:16.886Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://swift-unit.info",
    bio: "<value>",
    company: "Stokes, Marvin and Corkery",
    blog: "<value>",
    location: "<value>",
    email: "Tyrell46@hotmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 722363,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 999386,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 627299,
      timeframe: "day",
    },
    activations: {
      limit: 812025,
      enableCustomerAdmin: false,
    },
    limitUsage: 538609,
  },
};
```

## Fields

| Field                                                                                                                  | Type                                                                                                                   | Required                                                                                                               | Description                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                            | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Creation timestamp of the object.                                                                                      |
| `modifiedAt`                                                                                                           | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                          | :heavy_check_mark:                                                                                                     | Last modification timestamp of the object.                                                                             |
| `id`                                                                                                                   | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the benefit.                                                                                                 |
| `type`                                                                                                                 | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `description`                                                                                                          | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The description of the benefit.                                                                                        |
| `selectable`                                                                                                           | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is selectable when creating a product.                                                             |
| `deletable`                                                                                                            | *boolean*                                                                                                              | :heavy_check_mark:                                                                                                     | Whether the benefit is deletable.                                                                                      |
| `organizationId`                                                                                                       | *string*                                                                                                               | :heavy_check_mark:                                                                                                     | The ID of the organization owning the benefit.                                                                         |
| `organization`                                                                                                         | [components.Organization](../../models/components/organization.md)                                                     | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |
| `properties`                                                                                                           | [components.BenefitLicenseKeysSubscriberProperties](../../models/components/benefitlicensekeyssubscriberproperties.md) | :heavy_check_mark:                                                                                                     | N/A                                                                                                                    |