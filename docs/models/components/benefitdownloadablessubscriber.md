# BenefitDownloadablesSubscriber

## Example Usage

```typescript
import { BenefitDownloadablesSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitDownloadablesSubscriber = {
  createdAt: new Date("2024-04-11T15:10:30.195Z"),
  modifiedAt: new Date("2024-04-26T00:40:26.962Z"),
  id: "<value>",
  description: "ick attest huff quixotic oh giant even equal",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2025-03-30T00:41:56.529Z"),
    modifiedAt: new Date("2025-08-22T05:35:25.241Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://noxious-secrecy.org/",
    bio: "<value>",
    company: "Gerlach, Bins and Ebert",
    blog: "<value>",
    location: "<value>",
    email: "Katharina.Bins@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 245870,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 707050,
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