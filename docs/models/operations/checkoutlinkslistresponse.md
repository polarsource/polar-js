# CheckoutLinksListResponse

## Example Usage

```typescript
import { CheckoutLinksListResponse } from "@polar-sh/sdk/models/operations";

let value: CheckoutLinksListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-06-29T12:39:44.029Z"),
        modifiedAt: new Date("2023-01-17T07:46:40.038Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        paymentProcessor: "stripe",
        clientSecret: "<value>",
        successUrl: "https://perfumed-premeditation.com",
        label: "<value>",
        allowDiscountCodes: false,
        productId: "<value>",
        productPriceId: "<value>",
        discountId: "<value>",
        product: {
          createdAt: new Date("2025-02-01T12:07:52.157Z"),
          modifiedAt: new Date("2023-04-03T01:32:48.709Z"),
          id: "<value>",
          name: "<value>",
          description: "weakly aw unless heartache heartfelt",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2023-02-02T00:46:51.716Z"),
              modifiedAt: new Date("2023-07-09T18:22:31.091Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-03-25T18:58:01.050Z"),
              modifiedAt: new Date("2025-07-23T04:21:06.226Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "shiny declaration athwart brr miskey recommendation yowza reiterate if meanwhile",
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
              path: "/var/mail",
              mimeType: "<value>",
              size: 414720,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-01-12T14:30:26.716Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-08-07T08:13:47.825Z"),
              sizeReadable: "<value>",
              publicUrl: "https://haunting-status.info",
            },
          ],
        },
        productPrice: {
          createdAt: new Date("2023-03-21T05:28:53.838Z"),
          modifiedAt: new Date("2025-08-18T01:01:53.905Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
        discount: {
          duration: "once",
          durationInMonths: 594407,
          type: "percentage",
          amount: 352419,
          currency: "Danish Krone",
          createdAt: new Date("2023-09-29T10:14:16.977Z"),
          modifiedAt: new Date("2023-04-10T18:30:00.576Z"),
          id: "<value>",
          metadata: {
            "key": "<value>",
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-12-07T01:02:09.495Z"),
          endsAt: new Date("2025-02-20T22:33:52.566Z"),
          maxRedemptions: 416604,
          redemptionsCount: 943644,
          organizationId: "<value>",
        },
        url: "https://second-haircut.biz/",
      },
    ],
    pagination: {
      totalCount: 194648,
      maxPage: 167613,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceCheckoutLink](../../models/components/listresourcecheckoutlink.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |