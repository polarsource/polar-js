# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-26T15:21:43.295Z"),
        modifiedAt: new Date("2024-06-30T02:18:36.520Z"),
        id: "<value>",
        grantedAt: new Date("2025-05-09T22:10:56.397Z"),
        revokedAt: new Date("2024-12-13T21:12:16.851Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2025-12-23T06:42:41.549Z"),
          modifiedAt: new Date("2025-04-25T01:05:15.633Z"),
          id: "<value>",
          email: "Hannah_Hoeger33@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Madagascar",
          },
          taxId: [
            "br_cnpj",
          ],
          oauthAccounts: {
            "key": {
              accountId: "<id>",
              accountUsername: "<value>",
            },
          },
        },
        benefit: {
          createdAt: new Date("2025-04-19T21:02:01.154Z"),
          modifiedAt: new Date("2024-07-10T15:52:40.789Z"),
          id: "<value>",
          description: "circa around underneath yowza guide hence negative",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2024-09-01T04:24:59.727Z"),
            modifiedAt: new Date("2023-08-11T11:47:49.202Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://noted-postbox.info/",
            bio: "<value>",
            company: "Hane Inc",
            blog: "<value>",
            location: "<value>",
            email: "Rose.Wisoky49@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 477431,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 399266,
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
      totalCount: 374779,
      maxPage: 299514,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |