# BenefitLicenseKeysSubscriber

## Example Usage

```typescript
import { BenefitLicenseKeysSubscriber } from "@polar-sh/sdk/models/components/benefitlicensekeyssubscriber.js";

let value: BenefitLicenseKeysSubscriber = {
  createdAt: new Date("2023-10-21T04:47:42.657Z"),
  modifiedAt: new Date("2025-05-26T20:33:27.961Z"),
  id: "<value>",
  description: "amid incidentally thread whose what",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2023-11-29T08:43:46.201Z"),
    modifiedAt: new Date("2023-10-22T23:11:32.871Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://cuddly-stall.org",
    bio: "<value>",
    company: "Erdman and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Elroy0@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 23738,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 881551,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "prorate",
    },
  },
  properties: {
    prefix: "<value>",
    expires: {
      ttl: 936700,
      timeframe: "year",
    },
    activations: {
      limit: 179707,
      enableCustomerAdmin: false,
    },
    limitUsage: 54286,
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