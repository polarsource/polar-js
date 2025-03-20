# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-08-19T23:00:43.842Z"),
        modifiedAt: new Date("2025-05-05T04:40:41.715Z"),
        id: "<value>",
        grantedAt: new Date("2025-04-08T13:59:19.653Z"),
        revokedAt: new Date("2023-10-04T01:16:05.901Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: false,
        isRevoked: false,
        customer: {
          createdAt: new Date("2023-02-25T05:47:17.502Z"),
          modifiedAt: new Date("2023-01-24T19:19:35.600Z"),
          id: "<value>",
          email: "Yessenia.Hegmann@hotmail.com",
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
          createdAt: new Date("2023-07-28T09:28:39.533Z"),
          modifiedAt: new Date("2025-08-30T12:48:15.916Z"),
          id: "<value>",
          description: "before versus hmph abnegate lest dimly geez why",
          selectable: false,
          deletable: false,
          organizationId: "<value>",
          organization: {
            createdAt: new Date("2025-03-16T12:30:01.164Z"),
            modifiedAt: new Date("2024-10-18T05:20:57.644Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://prickly-scout.com",
            email: "Anibal_McGlynn@yahoo.com",
            website: "<value>",
            socials: [
              {
                platform: "facebook",
                url: "https://untimely-minor.org/",
              },
            ],
            detailsSubmittedAt: new Date("2025-11-12T16:42:19.718Z"),
            featureSettings: {
              issueFundingEnabled: false,
            },
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Turcotte Inc",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 716618,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 472385,
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
      totalCount: 90044,
      maxPage: 907238,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |