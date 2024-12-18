# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-01-06T17:26:28.158Z"),
        modifiedAt: new Date("2022-10-28T12:38:34.300Z"),
        id: "<value>",
        grantedAt: new Date("2023-09-12T23:56:24.242Z"),
        revokedAt: new Date("2024-12-23T10:36:50.056Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        benefit: {
          createdAt: new Date("2023-03-27T12:43:43.871Z"),
          modifiedAt: new Date("2024-07-16T06:38:50.927Z"),
          id: "<value>",
          description: "amnesty swath likewise zowie",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2022-08-13T11:19:58.638Z"),
            modifiedAt: new Date("2022-03-13T14:24:49.734Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://flawless-concentration.name",
            bio: "<value>",
            company: "Crona LLC",
            blog: "<value>",
            location: "<value>",
            email: "Matteo.Leannon@hotmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 570553,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 531387,
            profileSettings: {},
            featureSettings: {},
          },
          properties: {
            repositoryOwner: "polarsource",
            repositoryName: "private_repo",
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 998014,
      maxPage: 895939,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |