# ListResourceProduct

## Example Usage

```typescript
import { ListResourceProduct } from "@polar-sh/sdk/models/components";

let value: ListResourceProduct = {
  items: [
    {
      createdAt: new Date("2023-10-02T20:58:37.340Z"),
      modifiedAt: new Date("2022-12-11T02:07:31.634Z"),
      id: "<value>",
      name: "<value>",
      description:
        "why whereas mmm warlike unnecessarily kaleidoscopic apropos",
      isRecurring: false,
      isArchived: false,
      organizationId: "<value>",
      prices: [
        {
          createdAt: new Date("2023-02-26T10:25:54.049Z"),
          modifiedAt: new Date("2023-07-24T11:51:33.211Z"),
          id: "<value>",
          isArchived: false,
          recurringInterval: "year",
        },
      ],
      benefits: [
        {
          createdAt: new Date("2024-03-06T13:27:13.872Z"),
          modifiedAt: new Date("2022-01-29T12:41:56.507Z"),
          id: "<value>",
          type: "github_repository",
          description: "when times decryption redound eminent",
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
          path: "/private",
          mimeType: "<value>",
          size: 574923,
          storageVersion: "<value>",
          checksumEtag: "<value>",
          checksumSha256Base64: "<value>",
          checksumSha256Hex: "<value>",
          lastModifiedAt: new Date("2022-06-01T08:25:28.208Z"),
          version: "<value>",
          isUploaded: false,
          createdAt: new Date("2022-12-03T10:32:14.023Z"),
          sizeReadable: "<value>",
          publicUrl: "https://important-provider.biz",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 470724,
    maxPage: 821046,
  },
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `items`                                                                | [components.ProductOutput](../../models/components/productoutput.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `pagination`                                                           | [components.Pagination](../../models/components/pagination.md)         | :heavy_check_mark:                                                     | N/A                                                                    |