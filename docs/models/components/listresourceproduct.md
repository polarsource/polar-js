# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
    items: [
        {
            createdAt: new Date("2024-12-15T03:45:01.172Z"),
            modifiedAt: new Date("2023-01-21T16:11:36.352Z"),
            id: "<value>",
            name: "<value>",
            description: "Monitored non-volatile task-force",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            type: "individual",
            isHighlighted: false,
            prices: [
                {
                    createdAt: new Date("2024-06-10T02:34:07.582Z"),
                    modifiedAt: new Date("2022-10-20T07:11:40.624Z"),
                    id: "<value>",
                    priceAmount: 976226,
                    priceCurrency: "<value>",
                    isArchived: false,
                    recurringInterval: "year",
                },
            ],
            benefits: [
                {
                    createdAt: new Date("2024-11-14T19:09:53.487Z"),
                    modifiedAt: new Date("2024-04-17T23:02:17.676Z"),
                    id: "<value>",
                    description: "Cross-group neutral definition",
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
                    path: "/Network",
                    mimeType: "<value>",
                    size: 82057,
                    storageVersion: "<value>",
                    checksumEtag: "<value>",
                    checksumSha256Base64: "<value>",
                    checksumSha256Hex: "<value>",
                    lastModifiedAt: new Date("2022-06-11T20:43:17.206Z"),
                    version: "<value>",
                    isUploaded: false,
                    createdAt: new Date("2024-04-18T17:40:39.234Z"),
                    sizeReadable: "<value>",
                    publicUrl: "<value>",
                },
            ],
        },
    ],
    pagination: {
        totalCount: 62636,
        maxPage: 21688,
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.ProductOutput](../../models/components/productoutput.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |