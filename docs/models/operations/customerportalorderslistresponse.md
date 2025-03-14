# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations/customerportalorderslist.js";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-07-10T18:42:27.218Z"),
        modifiedAt: new Date("2024-08-02T19:53:46.631Z"),
        id: "<value>",
        subtotalAmount: 51805,
        discountAmount: 268983,
        netAmount: 142828,
        amount: 168995,
        taxAmount: 942687,
        totalAmount: 794081,
        refundedAmount: 368602,
        refundedTaxAmount: 203024,
        currency: "Vatu",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2024-10-28T23:02:26.222Z"),
          modifiedAt: new Date("2025-10-01T18:18:50.926Z"),
          id: "<value>",
          name: "<value>",
          description:
            "blah emotional singing pure brook stabilise rule consequently",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-07-29T12:09:43.909Z"),
              modifiedAt: new Date("2024-10-22T23:44:34.056Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 35105,
              maximumAmount: 110305,
              presetAmount: 392271,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-04-09T17:11:39.632Z"),
              modifiedAt: new Date("2025-09-28T01:57:20.979Z"),
              id: "<value>",
              type: "discord",
              description:
                "ick until fooey finer unconscious synergy embossing colossal",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/usr/ports",
              mimeType: "<value>",
              size: 944040,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-09-12T22:19:36.481Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-08-15T02:08:42.106Z"),
              sizeReadable: "<value>",
              publicUrl: "https://frilly-steeple.info",
            },
          ],
          organization: {
            createdAt: new Date("2023-09-14T20:25:12.952Z"),
            modifiedAt: new Date("2023-01-01T16:39:18.155Z"),
            id: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://harmful-swing.info/",
            email: "Tyra_Johns90@gmail.com",
            website: "<value>",
            socials: [
              {
                platform: "youtube",
                url: "https://wordy-cruelty.info",
              },
            ],
            detailsSubmittedAt: new Date("2023-05-31T17:10:56.042Z"),
            featureSettings: {},
            subscriptionSettings: {
              allowMultipleSubscriptions: false,
              allowCustomerUpdates: false,
              prorationBehavior: "prorate",
            },
            bio: "<value>",
            company: "Parisian LLC",
            blog: "<value>",
            location: "<value>",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 227250,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 442837,
            profileSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2023-12-18T08:36:34.657Z"),
          modifiedAt: new Date("2025-07-22T03:53:22.451Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 15071,
          maximumAmount: 954586,
          presetAmount: 125912,
        },
        subscription: {
          createdAt: new Date("2025-08-28T10:25:00.818Z"),
          modifiedAt: new Date("2024-09-02T08:16:36.630Z"),
          id: "<value>",
          amount: 622665,
          currency: "Pakistan Rupee",
          recurringInterval: "month",
          status: "trialing",
          currentPeriodStart: new Date("2023-02-07T16:34:11.417Z"),
          currentPeriodEnd: new Date("2025-11-18T15:15:06.779Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2025-11-08T08:57:15.102Z"),
          startedAt: new Date("2024-05-20T16:38:15.015Z"),
          endsAt: new Date("2024-07-09T20:09:31.518Z"),
          endedAt: new Date("2024-01-04T12:01:20.971Z"),
          customerId: "<value>",
          productId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "low_quality",
          customerCancellationComment: "<value>",
          priceId: "<value>",
        },
        items: [
          {
            createdAt: new Date("2023-04-02T14:09:43.552Z"),
            modifiedAt: new Date("2025-10-26T14:12:43.692Z"),
            id: "<value>",
            label: "<value>",
            amount: 20908,
            taxAmount: 512296,
            proration: false,
            productPriceId: "<value>",
          },
        ],
      },
    ],
    pagination: {
      totalCount: 680674,
      maxPage: 908839,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |