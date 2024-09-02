# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
    items: [
        {
            createdAt: new Date("2022-10-20T07:11:40.624Z"),
            modifiedAt: new Date("2024-12-05T22:38:23.244Z"),
            id: "<value>",
            name: "<value>",
            description: "Organic tangible time-frame",
            isRecurring: false,
            isArchived: false,
            organizationId: "<value>",
            type: "business",
            isHighlighted: false,
            prices: [
                {
                    createdAt: new Date("2024-02-05T06:43:41.039Z"),
                    modifiedAt: new Date("2022-10-26T08:43:16.322Z"),
                    id: "<value>",
                    priceAmount: 335498,
                    priceCurrency: "<value>",
                    isArchived: false,
                },
            ],
            benefits: [
                {
                    createdAt: new Date("2022-06-11T20:43:17.206Z"),
                    modifiedAt: new Date("2024-04-18T17:40:39.234Z"),
                    id: "<value>",
                    type: "custom",
                    description: "Ameliorated content-based budgetary management",
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
                    path: "/opt/sbin",
                    mimeType: "<value>",
                    size: 260628,
                    storageVersion: "<value>",
                    checksumEtag: "<value>",
                    checksumSha256Base64: "<value>",
                    checksumSha256Hex: "<value>",
                    lastModifiedAt: new Date("2023-07-27T02:35:23.562Z"),
                    version: "<value>",
                    isUploaded: false,
                    createdAt: new Date("2024-08-12T16:57:21.311Z"),
                    sizeReadable: "<value>",
                    publicUrl: "<value>",
                },
            ],
        },
    ],
    pagination: {
        totalCount: 773084,
        maxPage: 179410,
    },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.ProductOutput](../../models/components/productoutput.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |