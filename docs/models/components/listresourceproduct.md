# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2023-07-27T07:33:30.803Z"),
      modifiedAt: new Date("2022-08-24T21:54:03.774Z"),
      id: "<value>",
      name: "<value>",
      description:
        "times decryption redound eminent until license youthfully neglect wherever",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-07-17T20:00:09.846Z"),
          modifiedAt: new Date("2024-05-07T05:20:25.129Z"),
          id: "<value>",
          isArchived: false,
          priceCurrency: "<value>",
          minimumAmount: 887079,
          maximumAmount: 2011,
          presetAmount: 973627,
        },
      ],
      benefits: [
        {
          createdAt: new Date("2023-03-14T10:38:44.143Z"),
          modifiedAt: new Date("2023-02-07T23:32:20.056Z"),
          id: "<value>",
          type: "downloadables",
          description:
            "quaver solder savour sleepily kookily delight hmph despite",
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
          path: "/private/var",
          mimeType: "<value>",
          size: 895114,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2023-04-16T04:46:35.940Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2024-01-05T12:05:28.621Z"),
          sizeReadable: "<value>",
          publicUrl: "https://scaly-obedience.info/",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 549022,
    maxPage: 598149,
  },
};
```

## Fields

| Field                                                          | Type                                                           | Required                                                       | Description                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `items`                                                        | [components.Product](../../models/components/product.md)[]     | :heavy_check_mark:                                             | N/A                                                            |
| `pagination`                                                   | [components.Pagination](../../models/components/pagination.md) | :heavy_check_mark:                                             | N/A                                                            |