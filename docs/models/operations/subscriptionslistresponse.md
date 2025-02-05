# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-05-05T13:10:17.632Z"),
        modifiedAt: new Date("2024-01-01T00:27:16.216Z"),
        id: "<value>",
        amount: 284949,
        currency: "Rupiah",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2024-07-18T18:53:24.110Z"),
        currentPeriodEnd: new Date("2025-12-22T19:23:26.375Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-03-31T16:13:48.951Z"),
        startedAt: new Date("2024-03-28T17:58:24.040Z"),
        endsAt: new Date("2023-11-08T09:32:49.355Z"),
        endedAt: new Date("2024-09-03T06:17:32.428Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "unused",
        customerCancellationComment: "<value>",
        metadata: {
          "key": false,
        },
        customer: {
          createdAt: new Date("2025-12-30T13:22:32.320Z"),
          modifiedAt: new Date("2025-11-02T00:33:03.085Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Nicola_Rodriguez@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Malta",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://near-accompanist.org",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Marlon44@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-07-30T22:25:36.191Z"),
          modifiedAt: new Date("2023-04-25T12:59:08.238Z"),
          id: "<value>",
          name: "<value>",
          description:
            "afterwards gray against depend although offensively alliance",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": false,
          },
          prices: [
            {
              createdAt: new Date("2025-07-11T05:15:47.275Z"),
              modifiedAt: new Date("2023-06-21T05:44:00.806Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-08-05T04:22:38.604Z"),
              modifiedAt: new Date("2024-01-28T21:34:54.077Z"),
              id: "<value>",
              description: "because fencing maul but from",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                imageHeight: 400,
                imageWidth: 400,
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/proc",
              mimeType: "<value>",
              size: 90205,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-12-11T14:27:58.846Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-12-03T06:25:18.097Z"),
              sizeReadable: "<value>",
              publicUrl: "https://authorized-cook.name",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2024-03-30T16:46:12.008Z"),
                modifiedAt: new Date("2023-01-30T13:17:24.903Z"),
                id: "<value>",
                metadata: {
                  "key": false,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 290128,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2024-05-14T06:17:05.573Z"),
          modifiedAt: new Date("2024-08-20T05:45:34.061Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 240941,
          maximumAmount: 498711,
          presetAmount: 925381,
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          basisPoints: 905121,
          createdAt: new Date("2023-02-11T15:02:00.343Z"),
          modifiedAt: new Date("2024-07-28T05:07:27.507Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-10-25T00:03:32.852Z"),
          endsAt: new Date("2025-10-01T15:06:38.998Z"),
          maxRedemptions: 415447,
          redemptionsCount: 463038,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 403074,
      maxPage: 739469,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |