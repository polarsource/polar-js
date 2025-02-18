# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2023-02-07T09:04:35.807Z"),
      modifiedAt: new Date("2024-01-19T06:45:59.460Z"),
      id: "<value>",
      metadata: {
        "key": false,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://serene-clamp.biz/",
      label: "<value>",
      allowDiscountCodes: false,
      discountId: "<value>",
      organizationId: "<value>",
      products: [
        {
          createdAt: new Date("2023-11-21T22:53:54.525Z"),
          modifiedAt: new Date("2023-01-17T00:25:32.190Z"),
          id: "<value>",
          name: "<value>",
          description: "to since circa in failing squeaky",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-09-29T04:13:26.424Z"),
              modifiedAt: new Date("2024-03-16T15:09:49.842Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "month",
              priceCurrency: "<value>",
              priceAmount: 35044,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-04-11T13:31:09.956Z"),
              modifiedAt: new Date("2023-01-03T09:17:46.428Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "splurge give even closed blah crystallize fine times yet",
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
              path: "/usr/local/bin",
              mimeType: "<value>",
              size: 397879,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-02-25T15:09:11.481Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-11-17T05:21:02.494Z"),
              sizeReadable: "<value>",
              publicUrl: "https://minor-petticoat.info",
            },
          ],
        },
      ],
      discount: {
        duration: "forever",
        type: "fixed",
        amount: 677862,
        currency: "Falkland Islands Pound",
        createdAt: new Date("2024-12-08T15:11:52.881Z"),
        modifiedAt: new Date("2023-09-14T06:51:41.271Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-03-02T10:25:24.644Z"),
        endsAt: new Date("2023-05-10T01:15:05.305Z"),
        maxRedemptions: 592655,
        redemptionsCount: 88050,
        organizationId: "<value>",
      },
      productId: "<value>",
      productPriceId: "<value>",
      product: {
        createdAt: new Date("2025-11-28T03:50:45.871Z"),
        modifiedAt: new Date("2024-01-07T19:21:33.053Z"),
        id: "<value>",
        name: "<value>",
        description: "beside gah fatal",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2025-07-19T04:58:26.102Z"),
            modifiedAt: new Date("2024-03-21T15:06:50.006Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-11-27T16:44:57.724Z"),
            modifiedAt: new Date("2023-07-22T16:30:04.938Z"),
            id: "<value>",
            type: "github_repository",
            description: "underneath taxicab quirkily",
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
            path: "/opt/bin",
            mimeType: "<value>",
            size: 921566,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-01-22T13:47:16.368Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-08-31T01:11:59.221Z"),
            sizeReadable: "<value>",
            publicUrl: "https://different-horde.biz",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-04-25T10:47:31.841Z"),
        modifiedAt: new Date("2024-03-08T05:01:58.919Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "one_time",
        recurringInterval: "month",
      },
      url: "https://plump-seal.net",
    },
  ],
  pagination: {
    totalCount: 174370,
    maxPage: 743991,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |