# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-12-23T04:40:26.461Z"),
        modifiedAt: new Date("2024-01-22T18:56:11.037Z"),
        id: "<value>",
        metadata: {
          "key": 846367,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://wide-eyed-distinction.info/",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2023-10-09T08:12:15.828Z"),
          modifiedAt: new Date("2024-06-07T06:20:48.185Z"),
          id: "<value>",
          name: "<value>",
          description: "cripple parade whoa horde range hm",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-06-27T10:23:07.802Z"),
              modifiedAt: new Date("2025-09-17T06:24:00.140Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 177033,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-12-26T16:17:58.881Z"),
              modifiedAt: new Date("2025-11-06T05:51:47.281Z"),
              id: "<value>",
              type: "custom",
              description: "deceivingly boiling extract once",
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
              path: "/Library",
              mimeType: "<value>",
              size: 873606,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-01-30T15:00:46.998Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-04-02T12:09:25.430Z"),
              sizeReadable: "<value>",
              publicUrl: "https://noted-someplace.name",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-05-02T16:32:25.486Z"),
          modifiedAt: new Date("2023-02-15T10:18:46.962Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 107285,
        },
        discount: {
          duration: "repeating",
          durationInMonths: 594788,
          type: "percentage",
          basisPoints: 395404,
          createdAt: new Date("2023-01-06T23:31:21.587Z"),
          modifiedAt: new Date("2023-03-20T12:47:23.657Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-10-12T06:28:55.012Z"),
          endsAt: new Date("2024-10-03T07:59:59.919Z"),
          maxRedemptions: 439622,
          redemptionsCount: 232137,
          organizationId: "<value>",
        },
        url: "https://amused-pocket-watch.net",
      },
    ],
    pagination: {
      totalCount: 83514,
      maxPage: 279503,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |