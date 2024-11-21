# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-06-07T08:51:38.406Z"),
        modifiedAt: new Date("2022-05-03T19:56:19.516Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        clientSecret: "<value>",
        successUrl: "https://jumbo-tray.biz/",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2023-03-16T22:06:59.181Z"),
          modifiedAt: new Date("2023-11-06T16:40:09.305Z"),
          id: "<value>",
          name: "<value>",
          description:
            "incidentally gullible decongestant clonk scaly wherever pointless instantly minister um",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2022-05-09T19:55:42.332Z"),
              modifiedAt: new Date("2023-02-23T07:01:12.546Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 885523,
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-01-17T09:56:07.975Z"),
              modifiedAt: new Date("2023-05-17T07:09:08.398Z"),
              id: "<value>",
              description:
                "apud given fairly consequently celsius warmly fort likewise",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                paidArticles: false,
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/usr/local/bin",
              mimeType: "<value>",
              size: 721198,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-06-11T04:45:20.733Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-12-07T16:11:58.639Z"),
              sizeReadable: "<value>",
              publicUrl: "https://stupendous-interior.name",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-11-28T23:36:29.114Z"),
          modifiedAt: new Date("2023-09-25T16:52:43.387Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 169678,
          maximumAmount: 159469,
          presetAmount: 417030,
          recurringInterval: "month",
        },
        discount: {
          duration: "once",
          durationInMonths: 39210,
          type: "fixed",
          amount: 271550,
          currency: "Won",
          createdAt: new Date("2024-03-06T23:06:11.778Z"),
          modifiedAt: new Date("2023-06-05T11:01:30.776Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2022-02-08T14:25:18.262Z"),
          endsAt: new Date("2022-07-18T00:05:49.160Z"),
          maxRedemptions: 338514,
          redemptionsCount: 577496,
          organizationId: "<value>",
        },
        url: "https://gummy-doubter.com",
      },
    ],
    pagination: {
      totalCount: 821304,
      maxPage: 379666,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |