# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-07-08T08:45:37.880Z"),
        modifiedAt: new Date("2025-01-25T19:36:23.667Z"),
        id: "<value>",
        name: "<value>",
        description:
          "till in near graffiti pish heavily weakly aw unless heartache",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": false,
        },
        prices: [
          {
            createdAt: new Date("2024-09-21T04:25:18.763Z"),
            modifiedAt: new Date("2025-06-08T18:22:37.952Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-02-29T23:21:45.876Z"),
            modifiedAt: new Date("2025-06-03T23:03:37.728Z"),
            id: "<value>",
            description: "usable gray aha",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              guildId: "<id>",
              roleId: "<id>",
              guildToken: "<value>",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/bin",
            mimeType: "<value>",
            size: 777583,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-02-26T06:41:33.845Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-01-19T08:43:15.594Z"),
            sizeReadable: "<value>",
            publicUrl: "https://excellent-parsnip.info",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2023-09-04T07:30:51.531Z"),
              modifiedAt: new Date("2025-01-12T09:52:23.650Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 334590,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 63661,
      maxPage: 939414,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |