# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2022-05-01T02:07:16.246Z"),
      modifiedAt: new Date("2023-09-13T03:59:21.804Z"),
      id: "<value>",
      name: "<value>",
      description: "Managed object-oriented superstructure",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2022-02-06T02:35:49.481Z"),
          modifiedAt: new Date("2022-12-06T23:22:56.589Z"),
          id: "<value>",
          isArchived: false,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-04-01T21:14:09.557Z"),
          modifiedAt: new Date("2022-09-11T10:55:49.019Z"),
          id: "<value>",
          description: "Front-line value-added definition",
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
          path: "/opt",
          mimeType: "<value>",
          size: 3709,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2024-07-15T04:55:18.869Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-06-19T16:55:47.504Z"),
          sizeReadable: "<value>",
          publicUrl: "<value>",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 204144,
    maxPage: 255264,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.ProductOutput](../../models/components/productoutput.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |