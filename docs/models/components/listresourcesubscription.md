# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2023-11-17T14:35:18.819Z"),
      modifiedAt: new Date("2024-02-10T13:04:40.129Z"),
      id: "<value>",
      amount: 576624,
      currency: "Dobra",
      recurringInterval: "year",
      status: "incomplete",
      currentPeriodStart: new Date("2024-12-13T12:08:21.329Z"),
      currentPeriodEnd: new Date("2024-10-11T06:36:37.814Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2024-10-20T15:06:03.630Z"),
      startedAt: new Date("2025-05-19T11:50:21.965Z"),
      endsAt: new Date("2025-10-24T21:22:16.317Z"),
      endedAt: new Date("2025-03-31T02:07:48.328Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "low_quality",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      metadata: {
        "key": false,
      },
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-08-06T06:22:45.544Z"),
        modifiedAt: new Date("2023-11-25T10:08:10.795Z"),
        metadata: {
          "key": "<value>",
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "FR",
        },
        taxId: [
          "FR61954506077",
          "eu_vat",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2023-05-20T17:25:15.201Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Adelia_Schaden@yahoo.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2025-05-04T07:22:05.808Z"),
        modifiedAt: new Date("2025-07-29T01:03:47.705Z"),
        id: "<value>",
        name: "<value>",
        description: "reasonable while carefully ouch incidentally",
        recurringInterval: "month",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": false,
        },
        prices: [
          {
            createdAt: new Date("2024-06-11T03:06:20.381Z"),
            modifiedAt: new Date("2023-10-03T02:53:48.626Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-06-28T03:53:07.992Z"),
            modifiedAt: new Date("2023-06-28T09:57:58.789Z"),
            id: "<value>",
            description: "deer weary out ape solemnly",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
            properties: {
              repositoryOwner: "polarsource",
              repositoryName: "private_repo",
              permission: "triage",
            },
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/sys",
            mimeType: "<value>",
            size: 5966,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2024-04-17T20:26:13.694Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2023-01-28T05:14:01.831Z"),
            sizeReadable: "<value>",
            publicUrl: "https://dim-vision.biz/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-04-06T03:34:52.031Z"),
              modifiedAt: new Date("2025-08-02T21:26:59.664Z"),
              id: "<value>",
              metadata: {
                "key": 7092,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {},
            },
            order: 111600,
            required: false,
          },
        ],
      },
      discount: {
        duration: "once",
        type: "fixed",
        amount: 785583,
        currency: "Saudi Riyal",
        createdAt: new Date("2023-09-26T04:56:43.373Z"),
        modifiedAt: new Date("2024-03-03T21:41:06.197Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-03-21T06:20:08.783Z"),
        endsAt: new Date("2024-09-11T00:54:49.380Z"),
        maxRedemptions: 115028,
        redemptionsCount: 994055,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      price: {
        createdAt: new Date("2023-06-17T16:03:26.154Z"),
        modifiedAt: new Date("2025-12-21T09:00:48.902Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      prices: [
        {
          createdAt: new Date("2025-05-01T03:28:56.356Z"),
          modifiedAt: new Date("2023-09-29T17:43:45.476Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          recurringInterval: "month",
        },
      ],
    },
  ],
  pagination: {
    totalCount: 472655,
    maxPage: 943603,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |