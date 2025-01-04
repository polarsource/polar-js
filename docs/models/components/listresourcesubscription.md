# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2023-05-18T07:48:42.632Z"),
      modifiedAt: new Date("2025-08-01T07:14:49.018Z"),
      id: "<value>",
      amount: 34431,
      currency: "Bahraini Dinar",
      recurringInterval: "year",
      status: "trialing",
      currentPeriodStart: new Date("2023-03-19T13:53:58.623Z"),
      currentPeriodEnd: new Date("2024-05-30T14:51:27.507Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-02-20T13:35:17.401Z"),
      startedAt: new Date("2023-01-18T22:36:01.996Z"),
      endsAt: new Date("2024-09-07T16:16:40.926Z"),
      endedAt: new Date("2023-08-20T11:34:06.259Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "too_complex",
      customerCancellationComment: "<value>",
      metadata: {
        "key": 132477,
      },
      customer: {
        createdAt: new Date("2025-12-14T21:42:23.324Z"),
        modifiedAt: new Date("2023-10-01T22:27:32.374Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        email: "Demetrius_Hermiston@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "Bhutan",
        },
        taxId: [
          "ca_bn",
        ],
        organizationId: "<value>",
        avatarUrl: "https://lonely-scale.biz/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Aleen.Boyle@hotmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-12-04T15:42:27.623Z"),
        modifiedAt: new Date("2023-06-06T03:35:17.126Z"),
        id: "<value>",
        name: "<value>",
        description: "wholly barring how scrutinise drat",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": "<value>",
        },
        prices: [
          {
            createdAt: new Date("2024-05-16T13:33:17.351Z"),
            modifiedAt: new Date("2024-06-01T19:27:31.182Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            recurringInterval: "year",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-08-06T19:59:13.240Z"),
            modifiedAt: new Date("2025-08-28T07:51:58.885Z"),
            id: "<value>",
            description:
              "avaricious vainly considering gadzooks viability individual",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {},
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/selinux",
            mimeType: "<value>",
            size: 953924,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-28T20:54:23.206Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-11-19T22:47:37.652Z"),
            sizeReadable: "<value>",
            publicUrl: "https://shadowy-scale.com",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2025-12-05T19:52:32.444Z"),
              modifiedAt: new Date("2025-08-07T07:44:13.681Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 326264,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2025-08-31T14:34:42.904Z"),
        modifiedAt: new Date("2023-10-20T02:42:42.383Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      discount: {
        duration: "forever",
        durationInMonths: 107863,
        type: "fixed",
        basisPoints: 332000,
        createdAt: new Date("2024-12-25T02:48:40.217Z"),
        modifiedAt: new Date("2024-04-05T18:20:13.817Z"),
        id: "<value>",
        metadata: {
          "key": 799388,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-02-13T22:50:11.093Z"),
        endsAt: new Date("2024-11-07T19:38:58.776Z"),
        maxRedemptions: 906468,
        redemptionsCount: 247782,
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 507557,
    maxPage: 756112,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |