# BenefitAdsSubscriber

## Example Usage

```typescript
import { BenefitAdsSubscriber } from "@polar-sh/sdk/models/components/benefitadssubscriber.js";

let value: BenefitAdsSubscriber = {
  createdAt: new Date("2023-01-10T13:24:18.025Z"),
  modifiedAt: new Date("2024-02-26T18:38:22.806Z"),
  id: "<value>",
  description:
    "modulo boyfriend miserable actually truthfully spear yuck ultimately whether misspend",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2025-07-04T11:17:21.724Z"),
    modifiedAt: new Date("2024-10-16T06:34:22.622Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://informal-perp.org/",
    bio: "<value>",
    company: "Wyman LLC",
    blog: "<value>",
    location: "<value>",
    email: "Hassie.Keebler@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 780189,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 506298,
    profileSettings: {},
    featureSettings: {},
  },
  properties: {},
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the benefit.                                                                        |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the benefit.                                                               |
| `selectable`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is selectable when creating a product.                                    |
| `deletable`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is deletable.                                                             |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the benefit.                                                |
| `organization`                                                                                | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | [components.BenefitAdsProperties](../../models/components/benefitadsproperties.md)            | :heavy_check_mark:                                                                            | Properties for a benefit of type `ads`.                                                       |