# BenefitAdsSubscriber

## Example Usage

```typescript
import { BenefitAdsSubscriber } from "@polar-sh/sdk/models/components/benefitadssubscriber.js";

let value: BenefitAdsSubscriber = {
  createdAt: new Date("2024-09-16T03:31:12.272Z"),
  modifiedAt: new Date("2025-05-04T10:05:39.302Z"),
  id: "<value>",
  description: "machine eyebrow along dead pfft reassemble heighten wear",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2024-10-27T06:01:39.364Z"),
    modifiedAt: new Date("2023-09-04T21:23:13.781Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://discrete-sanity.info/",
    bio: "<value>",
    company: "Swift - Hyatt",
    blog: "<value>",
    location: "<value>",
    email: "Weldon_Lang@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 682564,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 677807,
    profileSettings: {},
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
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