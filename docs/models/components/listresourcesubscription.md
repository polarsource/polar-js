# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2023-10-19T07:06:48.555Z"),
      modifiedAt: new Date("2025-04-19T09:50:49.398Z"),
      id: "<value>",
      amount: 657551,
      currency: "Baht",
      recurringInterval: "year",
      status: "active",
      currentPeriodStart: new Date("2023-10-31T16:22:57.100Z"),
      currentPeriodEnd: new Date("2023-03-02T22:30:52.651Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-12-04T11:57:18.685Z"),
      startedAt: new Date("2023-02-20T16:46:58.778Z"),
      endsAt: new Date("2024-04-16T07:25:55.449Z"),
      endedAt: new Date("2023-09-05T11:26:27.176Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_expensive",
      customerCancellationComment: "<value>",
      metadata: {
        "key": "<value>",
      },
      customer: {
        createdAt: new Date("2023-03-31T05:58:58.809Z"),
        modifiedAt: new Date("2025-07-08T07:43:25.000Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Tobin.Macejkovic@hotmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Estonia",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://unlawful-testimonial.com/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Alexzander.Wisoky@hotmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2023-02-20T13:35:17.401Z"),
        modifiedAt: new Date("2023-01-18T22:36:01.996Z"),
        id: "<value>",
        name: "<value>",
        description: "bar hm dress indeed into fooey actual",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 232112,
        },
        prices: [
          {
            createdAt: new Date("2024-09-19T08:42:36.771Z"),
            modifiedAt: new Date("2024-05-04T14:29:15.094Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            priceAmount: 193564,
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2025-05-03T11:56:53.225Z"),
            modifiedAt: new Date("2023-01-28T01:28:09.985Z"),
            id: "<value>",
            description: "even pish secret institute",
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
            path: "/var",
            mimeType: "<value>",
            size: 418407,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-09-24T17:25:50.604Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-09-06T12:21:23.106Z"),
            sizeReadable: "<value>",
            publicUrl: "https://delectable-honesty.info/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-07-10T10:39:26.328Z"),
              modifiedAt: new Date("2023-01-13T10:05:01.779Z"),
              id: "<value>",
              metadata: {
                "key": 267267,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 164432,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2025-07-04T18:11:33.164Z"),
        modifiedAt: new Date("2024-08-19T16:02:56.231Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 193794,
        maximumAmount: 751286,
        presetAmount: 521333,
        recurringInterval: "year",
      },
      discount: {
        duration: "forever",
        durationInMonths: 319002,
        type: "fixed",
        basisPoints: 690987,
        createdAt: new Date("2025-12-01T04:15:48.042Z"),
        modifiedAt: new Date("2023-11-10T06:10:54.367Z"),
        id: "<value>",
        metadata: {
          "key": 576331,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-11-11T12:00:22.100Z"),
        endsAt: new Date("2023-09-28T20:54:23.206Z"),
        maxRedemptions: 961633,
        redemptionsCount: 524026,
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 728387,
    maxPage: 781341,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |