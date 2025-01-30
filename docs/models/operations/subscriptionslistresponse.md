# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-12-19T08:16:20.843Z"),
        modifiedAt: new Date("2023-04-01T20:57:17.921Z"),
        id: "<value>",
        amount: 760315,
        currency: "Cayman Islands Dollar",
        recurringInterval: "month",
        status: "canceled",
        currentPeriodStart: new Date("2024-12-21T04:51:51.441Z"),
        currentPeriodEnd: new Date("2024-03-28T22:44:50.176Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-05-27T18:03:05.713Z"),
        startedAt: new Date("2024-06-12T22:14:02.933Z"),
        endsAt: new Date("2023-07-30T21:51:42.150Z"),
        endedAt: new Date("2024-04-04T18:07:06.210Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
        metadata: {
          "key": "<value>",
        },
        customer: {
          createdAt: new Date("2024-04-20T08:15:49.364Z"),
          modifiedAt: new Date("2023-02-04T12:03:58.393Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Lorenzo.Veum-Bartell@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Japan",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://guilty-guard.biz",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Heidi_Larkin11@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-06-20T08:26:29.394Z"),
          modifiedAt: new Date("2023-04-16T09:50:51.591Z"),
          id: "<value>",
          name: "<value>",
          description: "consequently pfft drat via",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": false,
          },
          prices: [
            {
              createdAt: new Date("2025-07-11T21:54:59.517Z"),
              modifiedAt: new Date("2023-05-24T05:07:05.541Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-06-08T19:11:06.560Z"),
              modifiedAt: new Date("2025-05-29T00:31:19.231Z"),
              id: "<value>",
              description:
                "aggravating seemingly provided plagiarise gigantic shady that voluntarily behind machine",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {},
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/etc/namedb",
              mimeType: "<value>",
              size: 182943,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-08-27T10:00:00.988Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-11-08T19:03:18.551Z"),
              sizeReadable: "<value>",
              publicUrl: "https://spirited-marten.org/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2023-06-18T13:56:03.333Z"),
                modifiedAt: new Date("2023-04-20T02:36:06.073Z"),
                id: "<value>",
                metadata: {
                  "key": 535565,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {
                  options: [
                    {
                      value: "<value>",
                      label: "<value>",
                    },
                  ],
                },
              },
              order: 734297,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2025-12-18T10:40:41.400Z"),
          modifiedAt: new Date("2025-12-11T21:06:28.460Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 272159,
          maximumAmount: 791870,
          presetAmount: 766116,
          recurringInterval: "year",
        },
        discount: {
          duration: "repeating",
          durationInMonths: 376776,
          type: "percentage",
          amount: 602378,
          currency: "Rupiah",
          createdAt: new Date("2023-09-07T18:14:29.053Z"),
          modifiedAt: new Date("2025-01-21T03:32:20.896Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-03-12T18:05:56.442Z"),
          endsAt: new Date("2023-04-16T17:30:39.955Z"),
          maxRedemptions: 280607,
          redemptionsCount: 400653,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 407058,
      maxPage: 637675,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |