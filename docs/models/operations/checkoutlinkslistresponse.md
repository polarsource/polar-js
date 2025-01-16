# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-06T20:26:04.230Z"),
        modifiedAt: new Date("2023-08-15T06:07:54.440Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://athletic-parsnip.name",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2024-03-30T12:30:12.307Z"),
          modifiedAt: new Date("2024-11-18T08:24:51.450Z"),
          id: "<value>",
          name: "<value>",
          description: "salty ha whether or properly emphasise",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-11-26T09:08:13.270Z"),
              modifiedAt: new Date("2024-07-05T02:56:49.501Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 41772,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-06-30T15:21:44.204Z"),
              modifiedAt: new Date("2024-09-15T08:24:23.778Z"),
              id: "<value>",
              type: "custom",
              description:
                "left scent intensely angrily above untried litter phooey who because",
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
              path: "/srv",
              mimeType: "<value>",
              size: 885479,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-03-31T21:19:11.709Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-07-06T08:06:49.685Z"),
              sizeReadable: "<value>",
              publicUrl: "https://cavernous-sesame.name/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-09-24T02:25:29.580Z"),
          modifiedAt: new Date("2025-02-04T14:45:48.895Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 358587,
          maximumAmount: 359637,
          presetAmount: 391789,
          recurringInterval: "month",
        },
        discount: {
          duration: "forever",
          type: "fixed",
          amount: 282966,
          currency: "Comoro Franc",
          createdAt: new Date("2023-04-15T00:20:50.174Z"),
          modifiedAt: new Date("2024-02-28T01:23:53.379Z"),
          id: "<value>",
          metadata: {
            "key": 931141,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-06-30T02:59:06.785Z"),
          endsAt: new Date("2023-09-27T02:59:25.428Z"),
          maxRedemptions: 444782,
          redemptionsCount: 214965,
          organizationId: "<value>",
        },
        url: "https://vibrant-attraction.net",
      },
    ],
    pagination: {
      totalCount: 439211,
      maxPage: 825580,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |