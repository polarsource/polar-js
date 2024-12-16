# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-01-09T04:02:40.519Z"),
        modifiedAt: new Date("2024-03-19T17:51:10.770Z"),
        id: "<value>",
        grantedAt: new Date("2023-05-11T03:17:43.418Z"),
        revokedAt: new Date("2024-03-13T12:34:38.744Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        benefit: {
          createdAt: new Date("2023-06-30T12:39:44.029Z"),
          modifiedAt: new Date("2022-01-17T07:46:40.038Z"),
          id: "<value>",
          description:
            "heavily weakly aw unless heartache heartfelt hmph er including",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2023-07-19T00:44:40.900Z"),
            modifiedAt: new Date("2022-09-04T11:08:06.633Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://scented-sarong.net/",
            bio: "<value>",
            company: "Padberg - Flatley",
            blog: "<value>",
            location: "<value>",
            email: "Geo_Fahey@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 63661,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 939414,
            profileSettings: {},
            featureSettings: {},
          },
          properties: {
            activeFiles: [
              "<value>",
            ],
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 549045,
      maxPage: 831779,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |