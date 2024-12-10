# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-07-09T08:15:10.336Z"),
        modifiedAt: new Date("2022-04-22T23:49:59.353Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        clientSecret: "<value>",
        successUrl: "https://bossy-humor.name",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2023-11-15T14:40:11.332Z"),
          modifiedAt: new Date("2024-03-18T18:13:22.694Z"),
          id: "<value>",
          name: "<value>",
          description: "now though tiny savour cap wisecrack zealous warming",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-08-29T15:18:25.204Z"),
              modifiedAt: new Date("2023-01-04T08:25:30.485Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              minimumAmount: 864625,
              maximumAmount: 542538,
              presetAmount: 5253,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-07-27T07:43:54.459Z"),
              modifiedAt: new Date("2024-01-22T21:27:26.400Z"),
              id: "<value>",
              type: "github_repository",
              description: "following once joyfully fork easily ick beret",
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
              path: "/lost+found",
              mimeType: "<value>",
              size: 262334,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2022-06-02T08:53:11.251Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-09-07T00:37:34.890Z"),
              sizeReadable: "<value>",
              publicUrl: "https://amused-widow.org/",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2022-06-21T05:44:00.806Z"),
          modifiedAt: new Date("2022-03-29T15:43:41.235Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
        },
        discount: {
          duration: "forever",
          durationInMonths: 322776,
          type: "percentage",
          basisPoints: 757041,
          createdAt: new Date("2023-11-04T14:23:23.053Z"),
          modifiedAt: new Date("2022-04-15T10:27:07.964Z"),
          id: "<value>",
          metadata: {
            "key": 13157,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2022-04-17T19:34:22.813Z"),
          endsAt: new Date("2024-03-09T07:03:18.418Z"),
          maxRedemptions: 272604,
          redemptionsCount: 159620,
          organizationId: "<value>",
        },
        url: "https://sugary-pliers.biz",
      },
    ],
    pagination: {
      totalCount: 167783,
      maxPage: 816103,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |