# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-13T09:05:48.830Z"),
        modifiedAt: new Date("2024-03-31T22:54:18.001Z"),
        id: "<value>",
        grantedAt: new Date("2023-09-29T10:20:06.709Z"),
        revokedAt: new Date("2024-06-24T08:32:46.463Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2025-08-29T03:02:44.062Z"),
          modifiedAt: new Date("2025-08-18T00:45:54.098Z"),
          id: "<value>",
          email: "Felton_Rutherford90@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "SE",
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
          createdAt: new Date("2023-08-08T20:48:50.504Z"),
          modifiedAt: new Date("2025-11-03T16:35:05.103Z"),
          id: "<value>",
          description:
            "spice basic phooey exaggerate frightfully travel er ugh",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2024-06-13T14:36:55.399Z"),
            modifiedAt: new Date("2023-06-24T12:40:04.159Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://watery-cope.name/",
            email: "Noemie_Rempel@hotmail.com",
            website: "<value>",
            socials: [
              {
                platform: "github",
                url: "https://vast-worth.org/",
              },
            ],
            detailsSubmittedAt: new Date("2023-11-22T06:39:10.655Z"),
            featureSettings: {
              issueFundingEnabled: false,
            },
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "invoice",
            },
            bio: "<value>",
            company: "Thompson LLC",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 542120,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 264047,
            profileSettings: {},
          },
          properties: {
            guildId: "<id>",
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 11004,
      maxPage: 655937,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |