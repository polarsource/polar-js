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
        "key": false,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://thick-ruin.com/",
      label: "<value>",
      allowDiscountCodes: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          createdAt: new Date("2024-11-15T11:52:10.205Z"),
          modifiedAt: new Date("2023-05-06T18:46:31.484Z"),
          id: "<value>",
          name: "<value>",
          description: "however nor winding roughly",
          recurringInterval: "year",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-07-07T01:47:29.047Z"),
              modifiedAt: new Date("2024-07-21T15:18:05.983Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "month",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2024-01-29T03:00:31.325Z"),
              modifiedAt: new Date("2024-01-30T08:26:10.007Z"),
              id: "<value>",
              type: "license_keys",
              description: "ultimate pro tapioca vice",
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
              path: "/media",
              mimeType: "<value>",
              size: 899826,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2025-10-01T02:42:02.873Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2025-06-17T15:11:56.123Z"),
              sizeReadable: "<value>",
              publicUrl: "https://insistent-fit.org/",
            },
          ],
        },
      ],
      discount: {
        duration: "forever",
        type: "percentage",
        basisPoints: 262710,
        createdAt: new Date("2025-05-17T08:18:24.938Z"),
        modifiedAt: new Date("2024-02-28T01:45:43.788Z"),
        id: "<value>",
        metadata: {
          "key": 989927,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-11-04T11:31:15.688Z"),
        endsAt: new Date("2025-09-14T06:27:38.712Z"),
        maxRedemptions: 382049,
        redemptionsCount: 302169,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      productId: "<value>",
      productPriceId: "<value>",
      product: {
        createdAt: new Date("2025-10-04T20:58:30.623Z"),
        modifiedAt: new Date("2025-03-29T10:59:02.708Z"),
        id: "<value>",
        name: "<value>",
        description: "see uh-huh whoa not outside hmph hollow",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        prices: [
          {
            createdAt: new Date("2024-01-23T01:28:32.431Z"),
            modifiedAt: new Date("2025-03-02T05:41:12.613Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "recurring",
            recurringInterval: "year",
            priceCurrency: "<value>",
            priceAmount: 115791,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-11-16T10:39:31.883Z"),
            modifiedAt: new Date("2023-05-04T16:12:25.102Z"),
            id: "<value>",
            type: "github_repository",
            description:
              "smarten for boastfully kissingly reflecting than oof joyfully",
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
            path: "/rescue",
            mimeType: "<value>",
            size: 843173,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-01-17T23:09:38.819Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-04-01T04:45:18.992Z"),
            sizeReadable: "<value>",
            publicUrl: "https://marvelous-going.info/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2023-05-28T13:24:02.626Z"),
        modifiedAt: new Date("2025-06-15T03:25:49.136Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        type: "recurring",
        recurringInterval: "year",
      },
      url: "https://spiteful-secret.name",
    },
  ],
  pagination: {
    totalCount: 839971,
    maxPage: 103395,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |