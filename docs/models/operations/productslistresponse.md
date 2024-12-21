# ProductsListResponse

## Example Usage

```typescript
import { ProductsListResponse } from "@polar-sh/sdk/models/operations";

let value: ProductsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2023-04-22T15:26:51.405Z"),
        modifiedAt: new Date("2022-07-05T00:33:17.947Z"),
        id: "<value>",
        name: "<value>",
        description:
          "unlike anenst pip deceivingly whoever tomatillo what puff woot dicker",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 925381,
        },
        prices: [
          {
            createdAt: new Date("2024-12-02T12:41:20.649Z"),
            modifiedAt: new Date("2023-06-10T19:47:10.644Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 905121,
            maximumAmount: 37980,
            presetAmount: 523917,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-10-01T15:06:38.998Z"),
            modifiedAt: new Date("2023-04-01T07:55:07.200Z"),
            id: "<value>",
            description: "aw since phew psst hamburger help",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              note: "<value>",
            },
            isTaxApplicable: false,
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/usr/share",
            mimeType: "<value>",
            size: 275887,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-04-21T08:15:49.364Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2022-02-04T12:03:58.393Z"),
            sizeReadable: "<value>",
            publicUrl: "https://bony-overheard.org",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2022-02-03T22:19:42.582Z"),
              modifiedAt: new Date("2022-10-24T03:31:40.178Z"),
              id: "<value>",
              metadata: {
                "key": "<value>",
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 405510,
            required: false,
          },
        ],
      },
    ],
    pagination: {
      totalCount: 452742,
      maxPage: 167200,
    },
  },
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `result`                                                                         | [components.ListResourceProduct](../../models/components/listresourceproduct.md) | :heavy_check_mark:                                                               | N/A                                                                              |