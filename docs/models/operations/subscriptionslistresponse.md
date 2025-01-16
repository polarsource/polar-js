# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-02-23T21:20:36.645Z"),
        modifiedAt: new Date("2023-07-25T19:11:47.477Z"),
        id: "<value>",
        amount: 662959,
        currency: "Kyat",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2025-07-03T02:02:56.645Z"),
        currentPeriodEnd: new Date("2023-11-14T23:31:26.880Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-02-04T19:24:29.006Z"),
        startedAt: new Date("2024-05-14T06:17:05.573Z"),
        endsAt: new Date("2024-08-20T05:45:34.061Z"),
        endedAt: new Date("2023-09-22T01:42:46.171Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "switched_service",
        customerCancellationComment: "<value>",
        metadata: {
          "key": false,
        },
        customer: {
          createdAt: new Date("2023-08-10T01:37:49.523Z"),
          modifiedAt: new Date("2024-08-26T10:02:28.026Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Susan27@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "India",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://showy-guacamole.name/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Mia_Wiza@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-12-24T15:57:34.849Z"),
          modifiedAt: new Date("2024-05-17T10:58:40.372Z"),
          id: "<value>",
          name: "<value>",
          description: "phew psst hamburger help on drat woot",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": 515170,
          },
          prices: [
            {
              createdAt: new Date("2023-04-12T22:50:54.198Z"),
              modifiedAt: new Date("2023-06-20T08:26:29.394Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 96177,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-02-04T05:36:24.325Z"),
              modifiedAt: new Date("2025-06-25T10:13:45.773Z"),
              id: "<value>",
              description:
                "anenst who golden unethically vicinity aggravating seemingly provided plagiarise",
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
              path: "/opt",
              mimeType: "<value>",
              size: 440396,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-07-26T06:29:32.744Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-03-15T18:32:23.984Z"),
              sizeReadable: "<value>",
              publicUrl: "https://unpleasant-eyebrow.net/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2024-01-31T09:00:48.397Z"),
                modifiedAt: new Date("2024-07-28T20:15:39.685Z"),
                id: "<value>",
                metadata: {
                  "key": 624525,
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
              order: 729858,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2024-10-01T21:44:40.357Z"),
          modifiedAt: new Date("2025-09-15T23:39:45.179Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        discount: {
          duration: "once",
          type: "percentage",
          basisPoints: 729191,
          createdAt: new Date("2024-12-11T12:14:26.116Z"),
          modifiedAt: new Date("2023-03-03T01:21:59.910Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-09-19T11:42:12.411Z"),
          endsAt: new Date("2023-09-26T13:03:20.700Z"),
          maxRedemptions: 939108,
          redemptionsCount: 668015,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 232193,
      maxPage: 165563,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |