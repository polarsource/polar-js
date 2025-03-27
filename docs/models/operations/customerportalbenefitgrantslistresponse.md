# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-11-20T07:43:39.299Z"),
        modifiedAt: new Date("2025-05-17T00:38:55.045Z"),
        id: "<value>",
        grantedAt: new Date("2023-08-03T01:24:03.604Z"),
        revokedAt: new Date("2024-04-12T14:05:02.894Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2025-12-23T03:06:01.181Z"),
          modifiedAt: new Date("2024-03-27T12:47:48.745Z"),
          id: "<value>",
          email: "Halie_Leuschke@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "SE",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          oauthAccounts: {
            "key": {
              accountId: "<id>",
              accountUsername: "<value>",
            },
          },
        },
        benefit: {
          createdAt: new Date("2024-03-26T12:38:41.209Z"),
          modifiedAt: new Date("2025-11-24T06:43:52.548Z"),
          id: "<value>",
          description: "pfft waver ouch yowza how",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2023-06-06T12:57:12.595Z"),
            modifiedAt: new Date("2023-07-05T05:14:36.043Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://stained-fundraising.biz",
            email: "Leola.Rath26@hotmail.com",
            website: "<value>",
            socials: [
              {
                platform: "instagram",
                url: "https://defensive-begonia.biz/",
              },
            ],
            detailsSubmittedAt: new Date("2024-02-15T06:00:45.519Z"),
            featureSettings: {
              issueFundingEnabled: false,
            },
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Jacobson LLC",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 225824,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 338978,
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
      totalCount: 548022,
      maxPage: 492688,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |