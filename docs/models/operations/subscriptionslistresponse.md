# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-05-27T20:34:46.070Z"),
        modifiedAt: new Date("2023-04-14T01:43:46.701Z"),
        id: "<value>",
        amount: 297239,
        currency: "Pa'anga",
        recurringInterval: "month",
        status: "trialing",
        currentPeriodStart: new Date("2024-08-09T12:03:56.304Z"),
        currentPeriodEnd: new Date("2025-09-22T19:19:28.493Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-11-20T10:48:09.719Z"),
        startedAt: new Date("2023-03-28T21:20:40.864Z"),
        endsAt: new Date("2025-11-05T12:32:55.334Z"),
        endedAt: new Date("2025-11-19T00:13:51.965Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "missing_features",
        customerCancellationComment: "<value>",
        metadata: {
          "key": "<value>",
        },
        customer: {
          createdAt: new Date("2024-01-22T16:24:11.216Z"),
          modifiedAt: new Date("2025-04-24T10:11:14.990Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          email: "Blake_Smitham87@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Palau",
          },
          taxId: [
            "sg_gst",
          ],
          organizationId: "<value>",
          avatarUrl: "https://forceful-lamp.info/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Tyreek55@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-12-28T03:58:42.549Z"),
          modifiedAt: new Date("2025-10-18T21:22:24.698Z"),
          id: "<value>",
          name: "<value>",
          description:
            "generally taxicab interestingly yieldingly educated upward manipulate silky only",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": false,
          },
          prices: [
            {
              createdAt: new Date("2024-03-24T16:19:50.509Z"),
              modifiedAt: new Date("2025-10-15T16:17:01.365Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 823715,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-04-27T01:14:33.844Z"),
              modifiedAt: new Date("2025-09-05T10:50:54.881Z"),
              id: "<value>",
              description:
                "muddy victoriously lounge queasily likewise helplessly um convoke",
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
              path: "/usr/src",
              mimeType: "<value>",
              size: 639117,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-03-19T21:59:33.886Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-05-20T12:06:48.290Z"),
              sizeReadable: "<value>",
              publicUrl: "https://tattered-affiliate.info/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2023-07-04T01:07:45.503Z"),
                modifiedAt: new Date("2025-01-04T02:48:29.766Z"),
                id: "<value>",
                metadata: {
                  "key": false,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 80917,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2025-05-19T12:26:17.943Z"),
          modifiedAt: new Date("2024-04-01T05:44:56.686Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          durationInMonths: 57801,
          type: "percentage",
          amount: 141696,
          currency: "Baht",
          createdAt: new Date("2024-08-16T10:41:10.454Z"),
          modifiedAt: new Date("2025-07-05T04:07:13.645Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-06-08T13:49:52.565Z"),
          endsAt: new Date("2023-08-24T17:55:33.239Z"),
          maxRedemptions: 517526,
          redemptionsCount: 443031,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 261600,
      maxPage: 280017,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |