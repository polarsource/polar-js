# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2022-03-08T19:15:27.321Z"),
      modifiedAt: new Date("2023-07-27T07:33:30.803Z"),
      id: "<value>",
      name: "<value>",
      description: "before for oh eek",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-09-23T02:45:55.509Z"),
          modifiedAt: new Date("2022-06-01T08:25:28.208Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 306970,
          maximumAmount: 552212,
          presetAmount: 401260,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-05-31T21:54:59.370Z"),
          modifiedAt: new Date("2024-06-18T20:47:45.015Z"),
          id: "<value>",
          type: "custom",
          description:
            "coolly vein dress unhappy rewrite quaver solder savour sleepily kookily",
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
          size: 664193,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-03-04T08:45:54.051Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-09-09T18:27:38.526Z"),
          sizeReadable: "<value>",
          publicUrl: "https://old-daddy.info/",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 17530,
    maxPage: 249042,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |