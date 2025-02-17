# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations/checkoutlinkslist.js";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-10-18T07:47:44.539Z"),
        modifiedAt: new Date("2023-05-25T06:22:01.598Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://careless-pecan.net/",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2024-06-03T07:51:56.631Z"),
          modifiedAt: new Date("2023-03-13T13:45:54.118Z"),
          id: "<value>",
          name: "<value>",
          description: "safe down oof beneath ick where athwart",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-12-05T13:35:01.303Z"),
              modifiedAt: new Date("2024-07-02T12:53:40.926Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 428712,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-05-21T07:11:51.975Z"),
              modifiedAt: new Date("2024-03-25T12:45:05.316Z"),
              id: "<value>",
              type: "downloadables",
              description: "although until essence",
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
              path: "/opt",
              mimeType: "<value>",
              size: 96454,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-06-19T12:29:53.961Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-08-06T16:20:10.726Z"),
              sizeReadable: "<value>",
              publicUrl: "https://curly-tomography.net/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2025-03-19T19:05:17.881Z"),
          modifiedAt: new Date("2025-12-26T04:13:50.574Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        discount: {
          duration: "once",
          type: "fixed",
          basisPoints: 289963,
          createdAt: new Date("2025-03-07T14:03:24.393Z"),
          modifiedAt: new Date("2024-11-20T01:45:48.881Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-04-25T16:29:54.006Z"),
          endsAt: new Date("2023-05-16T16:52:57.300Z"),
          maxRedemptions: 610209,
          redemptionsCount: 475082,
          organizationId: "<value>",
        },
        url: "https://bustling-kettledrum.biz/",
      },
    ],
    pagination: {
      totalCount: 873606,
      maxPage: 694002,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |