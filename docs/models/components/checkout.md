# Checkout

A checkout session.

## Example Usage

```typescript
import { Checkout } from "@polar-sh/sdk/models/components";

let value: Checkout = {
    id: "<id>",
    customerEmail: "<value>",
    customerName: "<value>",
    product: {
        createdAt: new Date("2022-11-05T03:26:51.552Z"),
        modifiedAt: new Date("2022-12-18T20:42:53.320Z"),
        id: "<value>",
        name: "<value>",
        description: "Realigned 4th generation knowledge base",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        type: "business",
        isHighlighted: false,
        prices: [
            {
                createdAt: new Date("2022-05-01T07:46:13.650Z"),
                modifiedAt: new Date("2023-08-05T19:44:41.161Z"),
                id: "<value>",
                priceAmount: 606308,
                priceCurrency: "<value>",
                isArchived: false,
            },
        ],
        benefits: [
            {
                createdAt: new Date("2024-02-10T17:25:58.582Z"),
                modifiedAt: new Date("2023-12-31T13:59:13.213Z"),
                id: "<value>",
                type: "github_repository",
                description: "Ameliorated web-enabled success",
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
                size: 682119,
                storageVersion: "<value>",
                checksumEtag: "<value>",
                checksumSha256Base64: "<value>",
                checksumSha256Hex: "<value>",
                lastModifiedAt: new Date("2024-08-08T09:57:53.622Z"),
                version: "<value>",
                isUploaded: false,
                createdAt: new Date("2024-09-03T21:07:57.724Z"),
                sizeReadable: "<value>",
                publicUrl: "<value>",
            },
        ],
    },
    productPrice: {
        createdAt: new Date("2022-01-02T07:45:50.322Z"),
        modifiedAt: new Date("2023-08-10T06:27:10.605Z"),
        id: "<value>",
        priceAmount: 937219,
        priceCurrency: "<value>",
        isArchived: false,
    },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `id`                                                                 | *string*                                                             | :heavy_check_mark:                                                   | The ID of the checkout.                                              |
| `url`                                                                | *string*                                                             | :heavy_minus_sign:                                                   | URL the customer should be redirected to complete the purchase.      |
| `customerEmail`                                                      | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `customerName`                                                       | *string*                                                             | :heavy_check_mark:                                                   | N/A                                                                  |
| `product`                                                            | [components.ProductOutput](../../models/components/productoutput.md) | :heavy_check_mark:                                                   | A product.                                                           |
| `productPrice`                                                       | *components.ProductPriceOutput*                                      | :heavy_check_mark:                                                   | N/A                                                                  |