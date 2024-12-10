# BenefitDownloadablesSubscriber

## Example Usage

```typescript
import { BenefitDownloadablesSubscriber } from "@polar-sh/sdk/models/components";

let value: BenefitDownloadablesSubscriber = {
  createdAt: new Date("2024-10-13T03:45:54.403Z"),
  modifiedAt: new Date("2022-04-19T10:55:46.022Z"),
  id: "<value>",
  description: "to miserably translation patiently apropos even",
  selectable: false,
  deletable: false,
  organizationId: "<value>",
  grants: [
    {
      createdAt: new Date("2024-10-04T05:17:56.798Z"),
      modifiedAt: new Date("2023-05-17T13:33:17.351Z"),
      id: "<value>",
      isGranted: false,
      isRevoked: false,
      subscriptionId: "<value>",
      orderId: "<value>",
      userId: "<value>",
      benefitId: "<value>",
    },
  ],
  organization: {
    createdAt: new Date("2023-06-02T19:27:31.182Z"),
    modifiedAt: new Date("2024-01-01T07:09:52.741Z"),
    id: "<value>",
    name: "<value>",
    slug: "<value>",
    avatarUrl: "https://mundane-swordfish.info/",
    bio: "<value>",
    company: "Kling and Sons",
    blog: "<value>",
    location: "<value>",
    email: "Nedra_Bechtelar@yahoo.com",
    twitterUsername: "<value>",
    pledgeMinimumAmount: 45176,
    pledgeBadgeShowAmount: false,
    defaultUpfrontSplitToContributors: 918082,
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
| `type`                                                                                                                     | [components.BenefitDownloadablesSubscriberType](../../models/components/benefitdownloadablessubscribertype.md)             | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `description`                                                                                                              | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The description of the benefit.                                                                                            |
| `selectable`                                                                                                               | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is selectable when creating a product.                                                                 |
| `deletable`                                                                                                                | *boolean*                                                                                                                  | :heavy_check_mark:                                                                                                         | Whether the benefit is deletable.                                                                                          |
| `organizationId`                                                                                                           | *string*                                                                                                                   | :heavy_check_mark:                                                                                                         | The ID of the organization owning the benefit.                                                                             |
| `grants`                                                                                                                   | [components.BenefitGrantSubscriber](../../models/components/benefitgrantsubscriber.md)[]                                   | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `organization`                                                                                                             | [components.Organization](../../models/components/organization.md)                                                         | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |
| `properties`                                                                                                               | [components.BenefitDownloadablesSubscriberProperties](../../models/components/benefitdownloadablessubscriberproperties.md) | :heavy_check_mark:                                                                                                         | N/A                                                                                                                        |