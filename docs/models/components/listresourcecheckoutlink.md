# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      createdAt: new Date("2024-09-09T21:26:26.151Z"),
      modifiedAt: new Date("2023-07-06T14:44:50.101Z"),
      id: "<value>",
      metadata: {
        "key": 3644.82,
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://sociable-blight.name",
      label: "<value>",
      allowDiscountCodes: false,
      requireBillingAddress: false,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          metadata: {
            "key": "<value>",
          },
          createdAt: new Date("2023-07-30T01:48:46.245Z"),
          modifiedAt: new Date("2025-03-13T23:22:16.769Z"),
          id: "<value>",
          name: "<value>",
          description: "unto genuine only thongs furlough over hmph or",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-02-08T10:57:40.553Z"),
              modifiedAt: new Date("2023-09-30T08:58:22.924Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "recurring",
              recurringInterval: "year",
              priceCurrency: "<value>",
              minimumAmount: 355160,
              maximumAmount: 957766,
              presetAmount: 288085,
            },
          ],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2025-09-13T05:00:18.409Z"),
              modifiedAt: new Date("2025-10-01T02:42:02.873Z"),
              type: "license_keys",
              description:
                "fatal icy obediently violently cheerfully unethically",
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
              path: "/selinux",
              mimeType: "<value>",
              size: 788168,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-07-28T16:44:08.077Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2024-08-04T21:08:03.686Z"),
              sizeReadable: "<value>",
              publicUrl: "https://self-assured-scarification.info/",
            },
          ],
        },
      ],
      discount: {
        duration: "once",
        durationInMonths: 676716,
        type: "percentage",
        basisPoints: 848979,
        createdAt: new Date("2024-03-20T14:39:16.080Z"),
        modifiedAt: new Date("2023-02-24T09:53:40.009Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-02-16T15:05:47.392Z"),
        endsAt: new Date("2025-07-31T05:23:13.556Z"),
        maxRedemptions: 13217,
        redemptionsCount: 748553,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      url: "https://stark-interviewer.net",
    },
  ],
  pagination: {
    totalCount: 404275,
    maxPage: 731321,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |