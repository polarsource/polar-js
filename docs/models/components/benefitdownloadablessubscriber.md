# BenefitDownloadablesSubscriber

## Example Usage

```typescript
import { BenefitDownloadablesSubscriber } from "@polar-sh/sdk/models/components/benefitdownloadablessubscriber.js";

let value: BenefitDownloadablesSubscriber = {
  createdAt: new Date("2024-12-08T03:23:35.917Z"),
  modifiedAt: new Date("2024-07-20T20:09:55.663Z"),
  id: "<value>",
  description:
    "whose proliferate apud hefty bakeware why carefree dependable squeaky freely",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  organization: {
    createdAt: new Date("2025-02-09T20:20:37.854Z"),
    modifiedAt: new Date("2023-06-21T10:04:50.151Z"),
    id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://torn-mentor.biz",
    email: "Darron_Kiehn45@hotmail.com",
    website: "<value>",
    socials: [
      {
        platform: "linkedin",
        url: "https://unconscious-slipper.org/",
      },
    ],
    detailsSubmittedAt: new Date("2023-12-11T02:29:40.537Z"),
    featureSettings: {},
    subscriptionSettings: {
      allowMultipleSubscriptions: false,
      allowCustomerUpdates: false,
      prorationBehavior: "invoice",
    },
    bio: "<value>",
    company: "Pfeffer - Crona",
    blog: "<value>",
    location: "<value>",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 167831,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 230393,
    profileSettings: {},
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