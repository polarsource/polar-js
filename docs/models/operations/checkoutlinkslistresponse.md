# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-11-26T13:01:36.250Z"),
        modifiedAt: new Date("2023-04-21T14:32:08.849Z"),
        id: "<value>",
        metadata: {
          "key": 431108,
        },
        clientSecret: "<value>",
        successUrl: "https://submissive-summary.com",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2024-01-03T09:18:02.838Z"),
          modifiedAt: new Date("2023-11-16T02:48:54.405Z"),
          id: "<value>",
          name: "<value>",
          description:
            "healthily chip hmph haunting unsightly babyish collaboration",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-01-05T00:44:03.803Z"),
              modifiedAt: new Date("2022-11-04T15:24:50.946Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 719819,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-04-24T05:16:25.615Z"),
              modifiedAt: new Date("2023-12-13T16:47:35.521Z"),
              id: "<value>",
              type: "ads",
              description:
                "surprisingly provided whenever heavy aha dimly deduct amnesty",
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
              path: "/usr/ports",
              mimeType: "<value>",
              size: 162181,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-02-17T02:15:02.061Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-04-04T14:22:24.111Z"),
              sizeReadable: "<value>",
              publicUrl: "https://aching-swath.biz",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-06-06T00:17:15.191Z"),
          modifiedAt: new Date("2022-06-06T20:01:07.651Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 871590,
          recurringInterval: "month",
        },
        discount: {
          duration: "once",
          durationInMonths: 904911,
          type: "percentage",
          amount: 345233,
          currency: "Costa Rican Colon",
          createdAt: new Date("2024-09-27T13:25:44.103Z"),
          modifiedAt: new Date("2022-08-13T11:19:58.638Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-11-23T01:36:41.126Z"),
          endsAt: new Date("2022-10-31T16:41:22.925Z"),
          maxRedemptions: 177892,
          redemptionsCount: 605091,
          organizationId: "<value>",
        },
        url: "https://cultivated-minion.net/",
      },
    ],
    pagination: {
      totalCount: 693777,
      maxPage: 252144,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |