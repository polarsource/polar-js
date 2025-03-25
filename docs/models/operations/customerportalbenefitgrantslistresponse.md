# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-03-03T12:48:04.573Z"),
        modifiedAt: new Date("2024-07-13T03:00:57.860Z"),
        id: "<value>",
        grantedAt: new Date("2024-10-24T14:03:39.770Z"),
        revokedAt: new Date("2025-05-23T23:20:42.360Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2023-01-10T01:45:38.585Z"),
          modifiedAt: new Date("2024-08-29T13:23:07.720Z"),
          id: "<value>",
          email: "Waino.Sanford@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "FR",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          oauthAccounts: {
            "key": {
              accountId: "<id>",
              accountUsername: "<value>",
            },
          },
        },
        benefit: {
          createdAt: new Date("2025-05-17T20:33:59.866Z"),
          modifiedAt: new Date("2024-10-25T00:19:43.987Z"),
          id: "<value>",
          description:
            "distant fast stake hoof about or especially bashfully upbeat independence",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2024-09-12T03:16:04.857Z"),
            modifiedAt: new Date("2025-08-15T23:39:09.100Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://silky-devastation.com/",
            email: "Aidan_Franey@yahoo.com",
            website: "<value>",
            socials: [
              {
                platform: "instagram",
                url: "https://impartial-polarisation.com",
              },
            ],
            detailsSubmittedAt: new Date("2024-08-13T09:05:48.830Z"),
            featureSettings: {
              issueFundingEnabled: false,
            },
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Kunde - Torphy",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 875942,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 670444,
            profileSettings: {},
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
      totalCount: 352665,
      maxPage: 774467,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |