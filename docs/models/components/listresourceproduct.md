# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2024-02-03T09:20:15.518Z"),
      modifiedAt: new Date("2023-06-15T03:09:20.689Z"),
      id: "<value>",
      name: "<value>",
      description: "boldly stabilise midwife whereas incidentally",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2024-10-16T20:09:04.547Z"),
          modifiedAt: new Date("2024-06-28T09:31:01.146Z"),
          id: "<value>",
          isArchived: false,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-01-03T09:19:38.124Z"),
          modifiedAt: new Date("2023-05-19T06:42:57.063Z"),
          id: "<value>",
          description:
            "beside smoggy yuck nearly failing ew up decongestant valentine deployment",
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
          path: "/usr/libexec",
          mimeType: "<value>",
          size: 902216,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-09-13T21:23:26.372Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-04-27T14:10:19.519Z"),
          sizeReadable: "<value>",
          publicUrl: "https://assured-granny.com/",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 166138,
    maxPage: 627397,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |