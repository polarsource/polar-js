# BenefitAdsSubscriber

## Example Usage

```typescript
import { BenefitAdsSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitAdsSubscriber = {
  createdAt: new Date("2022-05-02T15:57:51.261Z"),
  modifiedAt: new Date("2024-09-09T22:48:36.314Z"),
  id: "<value>",
  description:
    "section fearless caring hmph woot embed stir-fry mmm infatuated",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2023-12-16T07:00:39.939Z"),
    modifiedAt: new Date("2023-12-28T03:46:43.992Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://married-luck.info",
    bio: "<value>",
    company: "Harvey, Barton and Lynch",
    blog: "<value>",
    location: "<value>",
    email: "Neil_Sporer37@gmail.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 855180,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 341696,
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
| `type`                                                                                        | [components.BenefitAdsSubscriberType](../../models/components/benefitadssubscribertype.md)    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `description`                                                                                 | *string*                                                                                      | :heavy_check_mark:                                                                            | The description of the benefit.                                                               |
| `selectable`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is selectable when creating a product.                                    |
| `deletable`                                                                                   | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the benefit is deletable.                                                             |
| `organizationId`                                                                              | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the organization owning the benefit.                                                |
| `organization`                                                                                | [components.Organization](../../models/components/organization.md)                            | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `properties`                                                                                  | [components.BenefitAdsProperties](../../models/components/benefitadsproperties.md)            | :heavy_check_mark:                                                                            | Properties for a benefit of type `ads`.                                                       |