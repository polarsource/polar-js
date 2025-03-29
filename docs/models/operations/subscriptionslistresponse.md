# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-05T06:38:06.989Z"),
        modifiedAt: new Date("2023-01-11T20:48:09.099Z"),
        id: "<value>",
        amount: 755787,
        currency: "Cuban Peso",
        recurringInterval: "month",
        status: "incomplete",
        currentPeriodStart: new Date("2024-08-13T01:23:24.662Z"),
        currentPeriodEnd: new Date("2024-03-23T15:39:58.699Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-10-27T08:26:38.601Z"),
        startedAt: new Date("2025-11-07T05:30:16.112Z"),
        endsAt: new Date("2023-12-07T05:12:12.503Z"),
        endedAt: new Date("2025-01-03T23:03:49.284Z"),
        customerId: "<value>",
        productId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "other",
        customerCancellationComment: "<value>",
        priceId: "<value>",
        metadata: {
          "key": false,
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2025-01-23T09:01:57.863Z"),
          modifiedAt: new Date("2025-05-08T14:16:36.701Z"),
          metadata: {
            "key": 409155,
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          deletedAt: new Date("2024-12-08T17:18:13.370Z"),
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Garrick.Stiedemann53@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2024-11-30T15:51:01.387Z"),
          modifiedAt: new Date("2024-12-15T11:06:40.873Z"),
          id: "<value>",
          name: "<value>",
          description:
            "crossly league athwart phooey positively eyeglasses stratify than hmph",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": false,
          },
          prices: [
            {
              createdAt: new Date("2024-09-02T13:41:49.073Z"),
              modifiedAt: new Date("2025-05-07T19:52:37.336Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
              priceCurrency: "<value>",
              unitAmount: 270279,
              includedUnits: 253656,
              capAmount: 553029,
              meterId: "<value>",
              meter: {
                id: "<value>",
                name: "<value>",
              },
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-02-09T05:05:40.460Z"),
              modifiedAt: new Date("2023-02-12T21:33:27.477Z"),
              id: "<value>",
              description: "toaster urgently seagull",
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
              path: "/boot/defaults",
              mimeType: "<value>",
              size: 899586,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-08-20T18:04:06.658Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-02-02T10:55:26.311Z"),
              sizeReadable: "<value>",
              publicUrl: "https://enlightened-flood.net",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2024-12-17T17:23:25.138Z"),
                modifiedAt: new Date("2025-06-16T09:26:41.863Z"),
                id: "<value>",
                metadata: {
                  "key": false,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
                properties: {},
              },
              order: 604713,
              required: false,
            },
          ],
        },
        discount: {
          duration: "once",
          durationInMonths: 428593,
          type: "percentage",
          basisPoints: 761893,
          createdAt: new Date("2024-12-23T22:20:10.160Z"),
          modifiedAt: new Date("2023-05-18T15:26:11.061Z"),
          id: "<value>",
          metadata: {
            "key": 965902,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-10-17T06:13:37.826Z"),
          endsAt: new Date("2023-03-17T14:15:47.145Z"),
          maxRedemptions: 14767,
          redemptionsCount: 603437,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
        price: {
          createdAt: new Date("2025-08-27T01:34:30.868Z"),
          modifiedAt: new Date("2025-09-14T17:23:49.285Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "year",
        },
        prices: [
          {
            createdAt: new Date("2023-03-26T23:06:39.615Z"),
            modifiedAt: new Date("2023-04-01T00:38:08.817Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 121444,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 528836,
      maxPage: 566874,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |