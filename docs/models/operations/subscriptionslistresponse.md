# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-12-30T04:19:31.943Z"),
        modifiedAt: new Date("2023-02-22T04:07:24.139Z"),
        id: "<value>",
        amount: 546829,
        currency: "Jamaican Dollar",
        recurringInterval: "year",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2025-06-21T18:59:46.675Z"),
        currentPeriodEnd: new Date("2023-05-23T22:32:12.108Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-04-27T01:14:33.844Z"),
        startedAt: new Date("2025-09-05T10:50:54.881Z"),
        endsAt: new Date("2025-03-29T04:12:45.563Z"),
        endedAt: new Date("2025-11-06T14:12:40.935Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "too_complex",
        customerCancellationComment: "<value>",
        metadata: {
          "key": "<value>",
        },
        customer: {
          createdAt: new Date("2025-08-08T16:43:50.985Z"),
          modifiedAt: new Date("2025-04-01T16:45:09.403Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Roosevelt.VonRueden78@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Uganda",
          },
          taxId: [
            "us_ein",
          ],
          organizationId: "<value>",
          avatarUrl: "https://definite-beret.name",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Jaquan_Swift@yahoo.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-11-06T12:13:20.149Z"),
          modifiedAt: new Date("2024-06-09T10:43:13.145Z"),
          id: "<value>",
          name: "<value>",
          description:
            "sans circle motionless bah optimistically where amongst nervously lest supposing",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": 232318,
          },
          prices: [
            {
              createdAt: new Date("2025-09-26T15:24:16.086Z"),
              modifiedAt: new Date("2024-04-25T23:55:35.873Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
              priceCurrency: "<value>",
              minimumAmount: 423,
              maximumAmount: 785188,
              presetAmount: 343742,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-08-05T12:30:07.482Z"),
              modifiedAt: new Date("2024-06-23T20:18:33.272Z"),
              id: "<value>",
              description: "mostly meh almost stool yowza tune-up fortunate",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                note: "<value>",
              },
              isTaxApplicable: false,
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/Users",
              mimeType: "<value>",
              size: 607768,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-03-11T15:11:25.655Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-08-17T02:26:23.783Z"),
              sizeReadable: "<value>",
              publicUrl: "https://better-confusion.name",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2025-06-06T21:50:54.193Z"),
                modifiedAt: new Date("2024-03-06T00:25:52.572Z"),
                id: "<value>",
                metadata: {
                  "key": "<value>",
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 841363,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2025-04-20T06:19:25.302Z"),
          modifiedAt: new Date("2025-10-20T06:57:50.822Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 60497,
          maximumAmount: 482627,
          presetAmount: 419883,
        },
        discount: {
          duration: "forever",
          durationInMonths: 710308,
          type: "fixed",
          basisPoints: 184265,
          createdAt: new Date("2025-01-25T18:20:45.664Z"),
          modifiedAt: new Date("2024-05-13T23:16:26.464Z"),
          id: "<value>",
          metadata: {
            "key": 804656,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-01-23T08:51:17.105Z"),
          endsAt: new Date("2024-06-23T19:13:34.057Z"),
          maxRedemptions: 506854,
          redemptionsCount: 68285,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 687513,
      maxPage: 443878,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |