# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-05-25T17:05:30.262Z"),
        modifiedAt: new Date("2025-08-26T07:12:11.781Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://unwritten-parsnip.name",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2025-02-27T23:03:31.631Z"),
          modifiedAt: new Date("2023-08-31T20:30:50.225Z"),
          id: "<value>",
          name: "<value>",
          description: "certainly past for kiss representation",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2024-10-08T21:58:12.889Z"),
              modifiedAt: new Date("2023-12-09T12:07:34.499Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-08-22T15:41:23.211Z"),
              modifiedAt: new Date("2024-10-13T17:33:07.782Z"),
              id: "<value>",
              type: "ads",
              description: "bravely tankful step-mother",
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
              path: "/opt/share",
              mimeType: "<value>",
              size: 96748,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-11-11T07:14:50.067Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-12-18T13:55:58.887Z"),
              sizeReadable: "<value>",
              publicUrl: "https://stormy-colon.net",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-12-14T06:40:09.825Z"),
          modifiedAt: new Date("2023-05-06T23:30:24.719Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 744608,
          recurringInterval: "year",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 716863,
          currency: "UAE Dirham",
          createdAt: new Date("2025-02-18T03:02:24.560Z"),
          modifiedAt: new Date("2024-11-08T22:21:04.694Z"),
          id: "<value>",
          metadata: {
            "key": 650063,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-12-31T08:52:08.907Z"),
          endsAt: new Date("2024-11-02T00:12:23.441Z"),
          maxRedemptions: 201564,
          redemptionsCount: 307891,
          organizationId: "<value>",
        },
        url: "https://tangible-fishery.org",
      },
    ],
    pagination: {
      totalCount: 946912,
      maxPage: 712252,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |