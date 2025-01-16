# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-04-08T08:12:25.263Z"),
        modifiedAt: new Date("2023-08-13T04:54:32.640Z"),
        id: "<value>",
        grantedAt: new Date("2024-04-22T05:47:56.110Z"),
        revokedAt: new Date("2023-04-12T12:02:51.750Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2024-08-13T01:23:24.662Z"),
          modifiedAt: new Date("2024-03-23T15:39:58.699Z"),
          id: "<value>",
          email: "Valentin69@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Saudi Arabia",
          },
          taxId: [
            "ge_vat",
          ],
          oauthAccounts: {
            "key": {
              accountId: "<id>",
              accountUsername: "<value>",
            },
          },
        },
        benefit: {
          createdAt: new Date("2023-09-14T10:51:44.160Z"),
          modifiedAt: new Date("2025-11-14T12:22:42.084Z"),
          id: "<value>",
          description:
            "around mindless that deer instead developmental coaxingly after",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2023-12-01T20:12:04.141Z"),
            modifiedAt: new Date("2025-08-15T21:46:11.495Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://urban-corporation.net",
            bio: "<value>",
            company: "Gislason LLC",
            blog: "<value>",
            location: "<value>",
            email: "Burdette.Vandervort@yahoo.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 849120,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 462270,
            profileSettings: {},
            featureSettings: {},
          },
          properties: {
            guildId: "<id>",
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 763922,
      maxPage: 585371,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |