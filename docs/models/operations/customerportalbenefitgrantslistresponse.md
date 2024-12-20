# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-04-10T01:39:52.504Z"),
        modifiedAt: new Date("2024-10-22T20:05:01.882Z"),
        id: "<value>",
        grantedAt: new Date("2024-05-16T05:43:28.083Z"),
        revokedAt: new Date("2022-12-07T08:40:22.698Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        benefit: {
          createdAt: new Date("2022-05-11T09:25:22.123Z"),
          modifiedAt: new Date("2022-02-13T14:07:36.704Z"),
          id: "<value>",
          description: "pish heavily weakly aw unless heartache",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2024-01-21T22:27:17.016Z"),
            modifiedAt: new Date("2023-02-24T13:40:14.894Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://optimal-sightseeing.name",
            bio: "<value>",
            company: "Howell and Sons",
            blog: "<value>",
            location: "<value>",
            email: "Chad77@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 919857,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 420942,
            profileSettings: {},
            featureSettings: {},
          },
          properties: {
            prefix: "<value>",
            expires: {
              ttl: 788509,
              timeframe: "year",
            },
            activations: {
              limit: 928743,
              enableCustomerAdmin: false,
            },
            limitUsage: 997164,
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 734579,
      maxPage: 334548,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |