# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-01-03T15:31:16.562Z"),
        modifiedAt: new Date("2025-12-30T13:22:32.320Z"),
        id: "<value>",
        amount: 945277,
        currency: "Tunisian Dinar",
        recurringInterval: "month",
        status: "canceled",
        currentPeriodStart: new Date("2024-11-06T00:12:06.644Z"),
        currentPeriodEnd: new Date("2025-03-28T09:54:30.322Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2025-12-07T06:57:19.598Z"),
        startedAt: new Date("2023-08-30T15:22:03.927Z"),
        endsAt: new Date("2024-02-01T01:45:50.315Z"),
        endedAt: new Date("2024-08-28T15:18:25.204Z"),
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
          createdAt: new Date("2024-08-17T14:54:19.654Z"),
          modifiedAt: new Date("2023-01-06T18:10:52.734Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          email: "Marlon44@yahoo.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Svalbard & Jan Mayen Islands",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://lavish-wriggler.org",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Axel73@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2025-11-21T17:00:59.466Z"),
          modifiedAt: new Date("2025-10-01T21:33:32.957Z"),
          id: "<value>",
          name: "<value>",
          description:
            "yahoo capitalize along meanwhile finally brightly burly wrongly hmph about",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          prices: [
            {
              createdAt: new Date("2024-10-27T16:30:27.786Z"),
              modifiedAt: new Date("2023-01-11T07:21:09.672Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 741702,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-04-10T15:17:38.981Z"),
              modifiedAt: new Date("2025-01-29T05:20:19.928Z"),
              id: "<value>",
              description: "elegantly interestingly mid before psst jaggedly",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                guildId: "<id>",
                roleId: "<id>",
                guildToken: "<value>",
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/Users",
              mimeType: "<value>",
              size: 458447,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-08-30T20:29:51.699Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-11-30T04:17:34.104Z"),
              sizeReadable: "<value>",
              publicUrl: "https://parallel-planula.biz/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2025-04-29T08:16:33.102Z"),
                modifiedAt: new Date("2023-11-09T21:59:58.532Z"),
                id: "<value>",
                metadata: {
                  "key": false,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 130265,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2025-03-09T20:13:31.276Z"),
          modifiedAt: new Date("2024-04-27T10:46:43.536Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 514491,
          maximumAmount: 474816,
          presetAmount: 53613,
          recurringInterval: "month",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 407162,
          currency: "Singapore Dollar",
          createdAt: new Date("2024-12-21T04:51:51.441Z"),
          modifiedAt: new Date("2024-03-28T22:44:50.176Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-06-12T22:14:02.933Z"),
          endsAt: new Date("2023-07-30T21:51:42.150Z"),
          maxRedemptions: 419484,
          redemptionsCount: 880752,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 275887,
      maxPage: 433708,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |