# CustomerPortalBenefitGrantsListResponse

## Example Usage

```typescript
import { CustomerPortalBenefitGrantsListResponse } from "@polar-sh/sdk/models/operations/customerportalbenefitgrantslist.js";

let value: CustomerPortalBenefitGrantsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-07-13T01:18:49.376Z"),
        modifiedAt: new Date("2025-02-20T09:36:47.164Z"),
        id: "<value>",
        grantedAt: new Date("2023-01-28T00:16:43.776Z"),
        revokedAt: new Date("2025-02-06T08:24:40.978Z"),
        customerId: "<value>",
        benefitId: "<value>",
        subscriptionId: "<value>",
        orderId: "<value>",
        isGranted: true,
        isRevoked: false,
        customer: {
          createdAt: new Date("2025-10-07T04:17:24.786Z"),
          modifiedAt: new Date("2025-05-05T02:01:44.871Z"),
          id: "<value>",
          email: "Sedrick_Paucek@hotmail.com",
          emailVerified: true,
          name: "<value>",
          billingName: "<value>",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "911144442",
            "us_ein",
          ],
          oauthAccounts: {},
        },
        benefit: {
          id: "<value>",
          createdAt: new Date("2023-07-10T03:04:33.155Z"),
          modifiedAt: new Date("2023-06-26T20:31:24.411Z"),
          type: "meter_credit",
          description:
            "yowza er dreamily gadzooks eventually outrun playfully mortally",
          selectable: false,
          deletable: true,
          organizationId: "<value>",
          metadata: {},
          organization: {
            createdAt: new Date("2024-03-27T03:55:24.068Z"),
            modifiedAt: new Date("2025-02-03T21:10:18.351Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://huge-lid.net/",
            email: "Dalton_Anderson49@hotmail.com",
            website: "<value>",
            socials: [],
            status: "under_review",
            detailsSubmittedAt: new Date("2024-02-22T02:01:31.430Z"),
            featureSettings: {
              issueFundingEnabled: false,
              seatBasedPricingEnabled: false,
              revopsEnabled: false,
            },
            subscriptionSettings: {
              allowMultipleSubscriptions: true,
              allowCustomerUpdates: true,
              prorationBehavior: "invoice",
            },
            notificationSettings: {
              newOrder: false,
              newSubscription: true,
            },
            customerEmailSettings: {
              orderConfirmation: true,
              subscriptionCancellation: true,
              subscriptionConfirmation: true,
              subscriptionCycled: false,
              subscriptionPastDue: true,
              subscriptionRevoked: false,
              subscriptionUncanceled: false,
              subscriptionUpdated: false,
            },
          },
          properties: {
            units: 430943,
            rollover: true,
            meterId: "<value>",
          },
        },
        properties: {},
      },
    ],
    pagination: {
      totalCount: 607201,
      maxPage: 808600,
    },
  },
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `result`                                                                                                   | [components.ListResourceCustomerBenefitGrant](../../models/components/listresourcecustomerbenefitgrant.md) | :heavy_check_mark:                                                                                         | N/A                                                                                                        |