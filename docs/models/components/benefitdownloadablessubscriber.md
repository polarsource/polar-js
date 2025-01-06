# BenefitDownloadablesSubscriber

## Example Usage

```typescript
import { BenefitDownloadablesSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitDownloadablesSubscriber = {
  createdAt: new Date("2023-01-16T20:56:53.226Z"),
  modifiedAt: new Date("2024-03-30T19:03:13.780Z"),
  id: "<value>",
  description: "yahoo failing unsightly hmph habit finally gee",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2024-09-30T23:51:31.367Z"),
    modifiedAt: new Date("2025-06-13T14:18:18.458Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://electric-emergent.info",
    bio: "<value>",
    company: "Turner, Bailey and Zemlak",
    blog: "<value>",
    location: "<value>",
    email: "Brenden57@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 472631,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 229202,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {
    activeFiles: [
      "<value>",
    ],
  },
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | Creation timestamp of the object.                                                                                          |
| `modifiedAt`                                                                                                               | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)                              | :heavy_check_mark:                                                                                                         | Last modification timestamp of the object.                                                                                 |
| `id`                                                                                                                       | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the benefit.                                                                                                     |
| `type`                                                                                                                     | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `description`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The description of the benefit.                                                                                            |
| `selectable`                                                                                                               | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is selectable when creating a product.                                                                 |
| `deletable`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is deletable.                                                                                          |
| `organizationId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the organization owning the benefit.                                                                             |
| `organization`                                                                                                             | [components.Organization](../../models/components/organization.md)                                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `properties`                                                                                                               | [components.BenefitDownloadablesSubscriberProperties](../../models/components/benefitdownloadablessubscriberproperties.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |