# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
    result: {
        items: [
            {
                createdAt: new Date("2023-01-24T00:50:36.460Z"),
                modifiedAt: new Date("2023-10-10T14:19:01.765Z"),
                id: "<value>",
                name: "<value>",
                description: "Optional logistical algorithm",
                isRecurring: false,
                isArchived: false,
                organizationId: "<value>",
                type: "individual",
                isHighlighted: false,
                prices: [
                    {
                        createdAt: new Date("2023-12-16T16:55:28.304Z"),
                        modifiedAt: new Date("2022-12-18T19:30:41.398Z"),
                        id: "<value>",
                        priceAmount: 431418,
                        priceCurrency: "<value>",
                        isArchived: false,
                        recurringInterval: "month",
                    },
                ],
                benefits: [
                    {
                        createdAt: new Date("2022-06-04T19:48:20.525Z"),
                        modifiedAt: new Date("2023-02-07T20:20:50.899Z"),
                        id: "<value>",
                        description: "Compatible grid-enabled website",
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
                        path: "/usr/src",
                        mimeType: "<value>",
                        size: 260341,
                        storageVersion: "<value>",
                        checksumEtag: "<value>",
                        checksumSha256Base64: "<value>",
                        checksumSha256Hex: "<value>",
                        lastModifiedAt: new Date("2024-06-02T14:07:36.337Z"),
                        version: "<value>",
                        isUploaded: false,
                        createdAt: new Date("2023-08-12T13:50:25.062Z"),
                        sizeReadable: "<value>",
                        publicUrl: "<value>",
                    },
                ],
            },
        ],
        pagination: {
            totalCount: 703889,
            maxPage: 447926,
        },
    },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |