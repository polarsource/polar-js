# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-29T03:30:19.700Z"),
        modifiedAt: new Date("2024-07-23T17:16:26.152Z"),
        id: "<value>",
        amount: 907111,
        currency: "UAE Dirham",
        recurringInterval: "month",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2025-05-06T19:40:45.220Z"),
        currentPeriodEnd: new Date("2024-03-02T09:50:18.418Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-07-06T08:09:01.868Z"),
        startedAt: new Date("2024-08-01T21:03:06.067Z"),
        endsAt: new Date("2025-11-07T04:58:21.844Z"),
        endedAt: new Date("2024-04-29T23:40:43.285Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "missing_features",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        metadata: {
          "key": false,
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2023-07-20T22:17:57.471Z"),
          modifiedAt: new Date("2024-12-03T04:34:28.027Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "FR",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2023-05-25T17:05:30.262Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Aubree56@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-08-31T20:30:50.225Z"),
          modifiedAt: new Date("2023-11-27T20:53:52.117Z"),
          id: "<value>",
          name: "<value>",
          description:
            "cheerfully hasty behind developmental meanwhile entwine hubris at aching",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": 96748,
          },
          prices: [
            {
              createdAt: new Date("2025-10-15T06:39:38.625Z"),
              modifiedAt: new Date("2025-05-30T23:02:22.464Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 253262,
              maximumAmount: 287603,
              presetAmount: 983831,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-03-27T02:09:03.208Z"),
              modifiedAt: new Date("2025-03-27T12:57:13.873Z"),
              id: "<value>",
              description: "giggle wherever mechanically taxicab",
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
              path: "/Library",
              mimeType: "<value>",
              size: 549070,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-04-19T04:54:29.029Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-02-20T07:50:17.255Z"),
              sizeReadable: "<value>",
              publicUrl: "https://sociable-sailor.net",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2023-03-22T05:40:31.125Z"),
                modifiedAt: new Date("2023-07-05T06:38:06.989Z"),
                id: "<value>",
                metadata: {
                  "key": "<value>",
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
                properties: {},
              },
              order: 755787,
              required: false,
            },
          ],
        },
        discount: {
          duration: "forever",
          type: "fixed",
          amount: 538374,
          currency: "Iceland Krona",
          createdAt: new Date("2023-10-27T08:26:38.601Z"),
          modifiedAt: new Date("2025-11-07T05:30:16.112Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-01-03T23:03:49.284Z"),
          endsAt: new Date("2025-11-22T07:12:32.700Z"),
          maxRedemptions: 697987,
          redemptionsCount: 687387,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        price: {
          createdAt: new Date("2024-03-24T10:24:54.886Z"),
          modifiedAt: new Date("2023-09-14T10:51:44.160Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "year",
        },
        prices: [
          {
            createdAt: new Date("2023-02-15T03:31:01.054Z"),
            modifiedAt: new Date("2025-07-28T13:40:48.410Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 539107,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 200628,
      maxPage: 638376,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |