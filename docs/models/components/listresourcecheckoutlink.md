# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-09-09T21:26:26.151Z"),
      modifiedAt: new Date("2023-07-06T14:44:50.101Z"),
      id: "<value>",
      metadata: {
        "key": 3644.82,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://sociable-blight.name",
      label: "<value>",
      allowDiscountCodes: false,
      requireBillingAddress: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2023-07-30T01:48:46.245Z"),
          modifiedAt: new Date("2025-03-13T23:22:16.769Z"),
          id: "<value>",
          name: "<value>",
          description: "unto genuine only thongs furlough over hmph or",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-02-08T10:57:40.553Z"),
              modifiedAt: new Date("2023-09-30T08:58:22.924Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 355160,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2025-11-15T17:04:11.501Z"),
              modifiedAt: new Date("2023-11-12T17:47:04.748Z"),
              type: "meter_credit",
              description:
                "lasting wee spherical rewrite superficial shoulder graffiti rag adult retract",
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
              path: "/usr/src",
              mimeType: "<value>",
              size: 67477,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2024-01-23T01:28:32.431Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-03-02T05:41:12.613Z"),
              sizeReadable: "<value>",
              publicUrl: "https://worldly-captain.biz",
            },
          ],
        },
      ],
      discount: {
        duration: "forever",
        type: "percentage",
        amount: 796004,
        currency: "Guarani",
        createdAt: new Date("2023-09-19T19:25:20.184Z"),
        modifiedAt: new Date("2024-11-06T13:44:36.687Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-04-01T19:27:46.945Z"),
        endsAt: new Date("2025-06-29T15:53:41.746Z"),
        maxRedemptions: 686205,
        redemptionsCount: 371816,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      url: "https://knotty-bookend.name",
    },
  ],
  pagination: {
    totalCount: 461590,
    maxPage: 761926,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |