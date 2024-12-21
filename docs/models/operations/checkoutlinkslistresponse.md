# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-19T00:44:40.900Z"),
        modifiedAt: new Date("2022-09-04T11:08:06.633Z"),
        id: "<value>",
        metadata: {
          "key": 711148,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://secret-adviser.net",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2022-09-22T07:56:37.387Z"),
          modifiedAt: new Date("2023-12-09T16:49:01.680Z"),
          id: "<value>",
          name: "<value>",
          description: "whoever jealous stabilise furthermore nippy geez",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2022-07-23T21:38:00.079Z"),
              modifiedAt: new Date("2024-09-11T23:55:44.792Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 435822,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-10-30T10:46:00.137Z"),
              modifiedAt: new Date("2023-03-31T12:47:48.425Z"),
              id: "<value>",
              type: "custom",
              description: "blend hm woot colon",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/var/tmp",
              mimeType: "<value>",
              size: 389425,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-10-29T12:28:00.902Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-04-19T21:02:57.554Z"),
              sizeReadable: "<value>",
              publicUrl: "https://smart-archaeology.name",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-11-21T01:25:00.188Z"),
          modifiedAt: new Date("2023-11-01T14:02:30.154Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
        discount: {
          duration: "forever",
          durationInMonths: 561768,
          type: "percentage",
          amount: 320819,
          currency: "Kenyan Shilling",
          createdAt: new Date("2023-09-27T16:42:50.105Z"),
          modifiedAt: new Date("2022-01-09T20:45:49.123Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-06-17T19:37:34.527Z"),
          endsAt: new Date("2022-07-17T20:04:23.072Z"),
          maxRedemptions: 719073,
          redemptionsCount: 105224,
          organizationId: "<value>",
        },
        url: "https://super-pneumonia.org",
      },
    ],
    pagination: {
      totalCount: 711678,
      maxPage: 221188,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |