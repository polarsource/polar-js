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
              createdAt: new Date("2023-09-04T12:35:29.724Z"),
              modifiedAt: new Date("2024-05-27T08:53:02.662Z"),
              type: "downloadables",
              description: "cautiously pike true considering superior about",
              selectable: true,
              deletable: false,
              organizationId: "<value>",
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/media",
              mimeType: "<value>",
              size: 824371,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-02-18T19:01:12.258Z"),
              version: "<value>",
              service: "product_media",
              isUploaded: true,
              createdAt: new Date("2024-07-19T01:58:20.240Z"),
              sizeReadable: "<value>",
              publicUrl: "https://dim-apparatus.biz/",
            },
          ],
        },
      ],
      discount: {
        duration: "repeating",
        durationInMonths: 13743,
        type: "fixed",
        basisPoints: 1000,
        createdAt: new Date("2023-05-02T03:13:00.458Z"),
        modifiedAt: new Date("2024-11-18T01:03:14.408Z"),
        id: "<value>",
        metadata: {},
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-02-16T11:30:48.051Z"),
        endsAt: new Date("2024-12-28T19:07:39.973Z"),
        maxRedemptions: 571035,
        redemptionsCount: 98203,
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