# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-03-15T19:09:10.567Z"),
        modifiedAt: new Date("2023-06-22T14:36:35.854Z"),
        id: "<value>",
        amount: 647125,
        currency: "Norwegian Krone",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2024-03-31T12:33:05.474Z"),
        currentPeriodEnd: new Date("2024-06-08T17:30:09.345Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-10-02T16:17:12.780Z"),
        startedAt: new Date("2025-01-12T12:44:08.199Z"),
        endsAt: new Date("2023-12-17T16:38:04.549Z"),
        endedAt: new Date("2025-04-19T01:05:03.927Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "switched_service",
        customerCancellationComment: "<value>",
        metadata: {
          "key": 656298,
        },
        customer: {
          createdAt: new Date("2023-12-23T08:13:29.025Z"),
          modifiedAt: new Date("2024-07-02T16:32:20.721Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Vaughn_Bayer84@hotmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Puerto Rico",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://stingy-vicinity.info",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Hobart1@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-11-15T02:48:54.405Z"),
          modifiedAt: new Date("2024-11-01T14:38:38.415Z"),
          id: "<value>",
          name: "<value>",
          description:
            "equally dearly shiny lieu yellow coordination absent bah",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          prices: [
            {
              createdAt: new Date("2023-06-04T10:07:51.925Z"),
              modifiedAt: new Date("2023-07-20T12:08:42.008Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 551475,
              maximumAmount: 284483,
              presetAmount: 382070,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-09-01T08:37:51.173Z"),
              modifiedAt: new Date("2025-08-19T11:27:16.475Z"),
              id: "<value>",
              description:
                "without upon table amid midst always jealously excitedly",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                archived: {
                  "key": false,
                },
                files: [
                  "<value>",
                ],
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/etc/namedb",
              mimeType: "<value>",
              size: 143096,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-08-13T06:17:28.680Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-04-02T02:58:06.798Z"),
              sizeReadable: "<value>",
              publicUrl: "https://exotic-term.name/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2023-08-05T15:41:47.092Z"),
                modifiedAt: new Date("2025-09-27T13:25:44.103Z"),
                id: "<value>",
                metadata: {
                  "key": "<value>",
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 65329,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2023-10-31T16:41:22.925Z"),
          modifiedAt: new Date("2023-07-14T23:16:31.297Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 605091,
          maximumAmount: 456372,
          presetAmount: 157070,
          recurringInterval: "year",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          basisPoints: 518855,
          createdAt: new Date("2024-01-05T21:57:51.624Z"),
          modifiedAt: new Date("2025-10-12T15:13:45.035Z"),
          id: "<value>",
          metadata: {
            "key": 570553,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-08-05T09:35:38.556Z"),
          endsAt: new Date("2025-12-29T19:44:24.118Z"),
          maxRedemptions: 895939,
          redemptionsCount: 987408,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 240387,
      maxPage: 482366,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |