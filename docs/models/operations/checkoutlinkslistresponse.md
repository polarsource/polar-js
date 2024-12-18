# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-08-27T10:02:28.026Z"),
        modifiedAt: new Date("2024-12-02T12:41:20.649Z"),
        id: "<value>",
        metadata: {
          "key": 905121,
        },
        clientSecret: "<value>",
        successUrl: "https://moist-abacus.biz/",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2024-10-01T15:06:38.998Z"),
          modifiedAt: new Date("2023-04-01T07:55:07.200Z"),
          id: "<value>",
          name: "<value>",
          description: "aw since phew psst hamburger help",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-04-21T08:15:49.364Z"),
              modifiedAt: new Date("2022-02-04T12:03:58.393Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 894030,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2022-03-29T04:02:08.271Z"),
              modifiedAt: new Date("2023-11-27T08:55:27.109Z"),
              id: "<value>",
              type: "license_keys",
              description:
                "whenever inside annually even knavishly mountain zowie thankfully submissive pro",
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
              path: "/etc/defaults",
              mimeType: "<value>",
              size: 710295,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-06-27T16:57:19.473Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2022-01-14T10:34:47.404Z"),
              sizeReadable: "<value>",
              publicUrl: "https://distant-affiliate.org/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-08-27T11:48:36.385Z"),
          modifiedAt: new Date("2022-05-17T14:59:44.284Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
        discount: {
          duration: "repeating",
          type: "fixed",
          amount: 617665,
          currency: "Gourde",
          createdAt: new Date("2023-04-28T16:09:54.349Z"),
          modifiedAt: new Date("2024-07-26T06:29:32.744Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2023-01-03T21:20:38.344Z"),
          endsAt: new Date("2024-09-10T07:57:41.624Z"),
          maxRedemptions: 315795,
          redemptionsCount: 750249,
          organizationId: "<value>",
        },
        url: "https://haunting-lieu.info",
      },
    ],
    pagination: {
      totalCount: 624525,
      maxPage: 729858,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |