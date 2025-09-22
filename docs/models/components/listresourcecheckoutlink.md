# ListResourceCheckoutLink

## Example Usage

```typescript
import { ListResourceCheckoutLink } from "@polar-sh/sdk/models/components/listresourcecheckoutlink.js";

let value: ListResourceCheckoutLink = {
  items: [
    {
      id: "<value>",
      createdAt: new Date("2023-07-06T14:44:50.101Z"),
      modifiedAt: new Date("2024-02-04T11:19:52.791Z"),
      trialInterval: "year",
      trialIntervalCount: null,
      metadata: {
        "key": "<value>",
      },
      paymentProcessor: "stripe",
      clientSecret: "<value>",
      successUrl: "https://rapid-doorpost.info",
      label: "<value>",
      allowDiscountCodes: true,
      requireBillingAddress: true,
      discountId: "<value>",
      organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      products: [
        {
          metadata: {
            "key": 286697,
          },
          id: "<value>",
          createdAt: new Date("2024-08-04T15:56:23.244Z"),
          modifiedAt: new Date("2025-07-13T16:36:37.984Z"),
          trialInterval: "week",
          trialIntervalCount: 560922,
          name: "<value>",
          description:
            "roughly lest sternly while metabolise hence who lasting wee spherical",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [],
          benefits: [
            {
              id: "<value>",
              createdAt: new Date("2025-05-25T16:58:54.608Z"),
              modifiedAt: new Date("2023-09-04T14:15:13.546Z"),
              type: "meter_credit",
              description:
                "pity and paltry shakily even fair aha as masquerade versus",
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
              path: "/sbin",
              mimeType: "<value>",
              size: 498972,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-09-13T15:53:42.753Z"),
              version: "<value>",
              service: "product_media",
              isUploaded: false,
              createdAt: new Date("2024-08-06T00:24:30.544Z"),
              sizeReadable: "<value>",
              publicUrl: "https://enchanting-bell.net/",
            },
          ],
        },
      ],
      discount: {
        duration: "once",
        durationInMonths: 450011,
        type: "percentage",
        basisPoints: 56820,
        createdAt: new Date("2025-07-10T00:00:38.572Z"),
        modifiedAt: new Date("2024-06-26T03:23:33.136Z"),
        id: "<value>",
        metadata: {},
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-11-15T04:46:36.215Z"),
        endsAt: new Date("2025-12-18T11:14:27.994Z"),
        maxRedemptions: null,
        redemptionsCount: 635731,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      url: "https://spherical-instruction.net/",
    },
  ],
  pagination: {
    totalCount: 607201,
    maxPage: 808600,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.CheckoutLink](../../models/components/checkoutlink.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |