# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-03-11T16:17:46.711Z"),
        modifiedAt: new Date("2024-03-29T00:56:36.017Z"),
        id: "<value>",
        amount: 881310,
        currency: "Lek",
        recurringInterval: "year",
        status: "active",
        currentPeriodStart: new Date("2024-09-19T07:28:52.145Z"),
        currentPeriodEnd: new Date("2024-01-22T03:42:55.455Z"),
        cancelAtPeriodEnd: false,
        startedAt: new Date("2023-04-04T18:27:33.065Z"),
        endedAt: new Date("2023-09-26T16:52:07.472Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        metadata: {
          "key": "<value>",
        },
        customer: {
          createdAt: new Date("2022-06-27T17:11:48.345Z"),
          modifiedAt: new Date("2022-09-03T07:48:25.330Z"),
          id: "<value>",
          metadata: {
            "key": 266824,
          },
          email: "Joshuah2@gmail.com",
          emailVerified: false,
          name: "<value>",
          billingAddress: {
            country: "Uruguay",
          },
          taxId: [
            "<id>",
          ],
          organizationId: "<value>",
          avatarUrl: "https://flustered-chiffonier.name/",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Zena.Howell59@gmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2022-10-14T20:50:51.008Z"),
          modifiedAt: new Date("2022-11-24T20:33:31.652Z"),
          id: "<value>",
          name: "<value>",
          description: "gadzooks ah within",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": 906561,
          },
          prices: [
            {
              createdAt: new Date("2024-04-18T11:56:30.460Z"),
              modifiedAt: new Date("2023-01-25T10:11:34.679Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-09-12T21:48:55.870Z"),
              modifiedAt: new Date("2022-08-19T01:15:21.496Z"),
              id: "<value>",
              description:
                "known upside-down inspect embarrassment wring excepting lined hastily",
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
              path: "/proc",
              mimeType: "<value>",
              size: 671561,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-10-10T15:09:32.839Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-01-29T12:22:17.411Z"),
              sizeReadable: "<value>",
              publicUrl: "https://apt-stall.net/",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2024-04-23T05:52:51.473Z"),
                modifiedAt: new Date("2023-11-26T04:25:21.513Z"),
                id: "<value>",
                metadata: {
                  "key": 750430,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "<value>",
                properties: {},
              },
              order: 160977,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2023-07-22T08:04:46.795Z"),
          modifiedAt: new Date("2023-01-09T03:56:49.180Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 730624,
          maximumAmount: 434240,
          presetAmount: 470068,
          recurringInterval: "month",
        },
        discount: {
          duration: "once",
          type: "fixed",
          basisPoints: 537645,
          createdAt: new Date("2022-10-21T06:32:36.312Z"),
          modifiedAt: new Date("2022-07-04T16:50:18.446Z"),
          id: "<value>",
          metadata: {
            "key": 105868,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-03-01T09:59:49.344Z"),
          endsAt: new Date("2023-09-29T22:07:33.788Z"),
          maxRedemptions: 41769,
          redemptionsCount: 953830,
          organizationId: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 771762,
      maxPage: 974390,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |