# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2022-05-23T05:16:33.686Z"),
        modifiedAt: new Date("2022-03-06T10:54:16.543Z"),
        id: "<value>",
        metadata: {
          "key": 186130,
        },
        clientSecret: "<value>",
        successUrl: "https://vast-luck.com/",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2024-07-12T20:11:48.961Z"),
          modifiedAt: new Date("2024-12-13T14:09:53.381Z"),
          id: "<value>",
          name: "<value>",
          description: "after sheepishly bah um mid bloom",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2022-01-06T05:55:38.572Z"),
              modifiedAt: new Date("2023-08-30T22:15:46.090Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 113894,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-07-13T06:15:38.872Z"),
              modifiedAt: new Date("2024-10-29T03:35:07.212Z"),
              id: "<value>",
              description:
                "pixellate where nicely heating for perfectly midwife loyalty",
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
              path: "/var/tmp",
              mimeType: "<value>",
              size: 396184,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-10-22T17:31:37.327Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-03-11T10:51:29.864Z"),
              sizeReadable: "<value>",
              publicUrl: "https://sentimental-descent.org/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2024-04-22T19:44:51.587Z"),
          modifiedAt: new Date("2022-04-02T03:33:58.167Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          priceAmount: 974775,
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 757824,
          currency: "UAE Dirham",
          createdAt: new Date("2022-10-06T15:31:52.701Z"),
          modifiedAt: new Date("2024-04-01T00:20:32.487Z"),
          id: "<value>",
          metadata: {
            "key": 114952,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-03-08T10:02:12.604Z"),
          endsAt: new Date("2023-02-16T14:27:00.850Z"),
          maxRedemptions: 568162,
          redemptionsCount: 667977,
          organizationId: "<value>",
        },
        url: "https://mammoth-grandson.com",
      },
    ],
    pagination: {
      totalCount: 804823,
      maxPage: 713371,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |