# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-02-24T16:21:53.377Z"),
        modifiedAt: new Date("2023-01-01T08:57:57.767Z"),
        id: "<value>",
        amount: 710882,
        currency: "Cordoba Oro",
        recurringInterval: "month",
        status: "past_due",
        currentPeriodStart: new Date("2024-12-31T08:52:08.907Z"),
        currentPeriodEnd: new Date("2024-11-02T00:12:23.441Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2023-08-09T21:56:05.990Z"),
        startedAt: new Date("2023-12-04T10:46:27.608Z"),
        endsAt: new Date("2025-08-16T10:14:32.165Z"),
        endedAt: new Date("2025-07-04T17:25:22.868Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "missing_features",
        customerCancellationComment: "<value>",
        metadata: {
          "key": false,
        },
        customer: {
          createdAt: new Date("2025-11-03T19:33:32.529Z"),
          modifiedAt: new Date("2025-02-19T15:03:41.243Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          externalId: "<id>",
          email: "Jasmin.Treutel@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Turks and Caicos Islands",
          },
          taxId: [
            "cl_tin",
          ],
          organizationId: "<value>",
          avatarUrl: "https://ironclad-arcade.name",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Ollie.Doyle16@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-04-08T08:12:25.263Z"),
          modifiedAt: new Date("2023-08-13T04:54:32.640Z"),
          id: "<value>",
          name: "<value>",
          description: "out furthermore furthermore talkative but that",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          prices: [
            {
              createdAt: new Date("2023-09-22T17:39:37.386Z"),
              modifiedAt: new Date("2023-04-12T21:22:01.938Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 382113,
              maximumAmount: 295816,
              presetAmount: 48431,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-06-09T16:32:01.402Z"),
              modifiedAt: new Date("2024-08-25T13:48:26.011Z"),
              id: "<value>",
              description:
                "aha hence outside thread modulo hence so massive tarry usually",
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
              path: "/root",
              mimeType: "<value>",
              size: 696583,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-06-24T18:17:35.994Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-09-10T10:32:59.950Z"),
              sizeReadable: "<value>",
              publicUrl: "https://strict-galoshes.name/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2025-04-29T04:35:05.789Z"),
                modifiedAt: new Date("2024-10-24T18:21:22.581Z"),
                id: "<value>",
                metadata: {
                  "key": false,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 297851,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2025-04-15T00:49:44.087Z"),
          modifiedAt: new Date("2024-12-23T22:20:10.160Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          basisPoints: 68972,
          createdAt: new Date("2023-01-17T04:26:28.465Z"),
          modifiedAt: new Date("2024-10-23T08:47:55.241Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2025-10-10T22:03:40.205Z"),
          endsAt: new Date("2025-08-27T01:34:30.868Z"),
          maxRedemptions: 901209,
          redemptionsCount: 648245,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 31026,
      maxPage: 561844,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |