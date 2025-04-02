# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components/listresourcesubscription.js";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2024-12-06T11:35:57.570Z"),
      modifiedAt: new Date("2024-08-04T04:50:26.460Z"),
      id: "<value>",
      amount: 162123,
      currency: "Belarusian Ruble",
      recurringInterval: "year",
      status: "unpaid",
      currentPeriodStart: new Date("2023-07-20T06:31:48.274Z"),
      currentPeriodEnd: new Date("2023-10-12T00:08:33.493Z"),
      cancelAtPeriodEnd: false,
      canceledAt: new Date("2023-05-13T03:49:22.519Z"),
      startedAt: new Date("2024-10-13T16:24:24.825Z"),
      endsAt: new Date("2025-10-12T17:44:21.842Z"),
      endedAt: new Date("2023-09-18T20:45:01.005Z"),
      customerId: "<value>",
      productId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      customerCancellationReason: "switched_service",
      customerCancellationComment: "<value>",
      priceId: "<value>",
      metadata: {
        "key": false,
      },
      customer: {
        id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
        createdAt: new Date("2025-02-15T06:40:47.027Z"),
        modifiedAt: new Date("2024-08-02T00:03:08.625Z"),
        metadata: {
          "key": 730840,
        },
        externalId: "usr_1337",
        email: "customer@example.com",
        emailVerified: true,
        name: "John Doe",
        billingAddress: {
          country: "FR",
        },
        taxId: [
          "911144442",
          "us_ein",
        ],
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        deletedAt: new Date("2023-11-05T11:56:40.347Z"),
        avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Terry_Hauck@gmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2023-04-25T05:44:28.693Z"),
        modifiedAt: new Date("2023-06-02T22:08:45.097Z"),
        id: "<value>",
        name: "<value>",
        description:
          "blank waft tabletop jealously liberalize monthly large democratize",
        recurringInterval: "year",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 523055,
        },
        prices: [
          {
            createdAt: new Date("2023-07-29T11:08:51.150Z"),
            modifiedAt: new Date("2025-11-25T03:26:32.516Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            type: "one_time",
            recurringInterval: "month",
            priceCurrency: "<value>",
            priceAmount: 308179,
          },
        ],
        benefits: [
          {
            createdAt: new Date("2024-09-27T00:54:43.987Z"),
            modifiedAt: new Date("2025-12-31T10:16:33.207Z"),
            id: "<value>",
            description: "outfit an rebuff till ready openly geez",
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
            path: "/usr/libexec",
            mimeType: "<value>",
            size: 28946,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-02-19T00:25:38.865Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2024-03-06T17:42:52.129Z"),
            sizeReadable: "<value>",
            publicUrl: "https://dazzling-order.org/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-01-04T19:07:59.286Z"),
              modifiedAt: new Date("2025-08-17T05:40:50.868Z"),
              id: "<value>",
              metadata: {
                "key": false,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
              properties: {
                options: [
                  {
                    value: "<value>",
                    label: "<value>",
                  },
                ],
              },
            },
            order: 524212,
            required: false,
          },
        ],
      },
      discount: {
        duration: "once",
        durationInMonths: 150525,
        type: "fixed",
        amount: 526773,
        currency: "Pakistan Rupee",
        createdAt: new Date("2024-11-09T04:26:31.210Z"),
        modifiedAt: new Date("2025-08-14T16:22:24.415Z"),
        id: "<value>",
        metadata: {
          "key": 829708,
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2023-06-03T21:44:38.598Z"),
        endsAt: new Date("2023-07-08T03:01:51.436Z"),
        maxRedemptions: 918413,
        redemptionsCount: 354705,
        organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
      },
      price: {
        createdAt: new Date("2025-11-29T05:37:45.875Z"),
        modifiedAt: new Date("2024-11-29T23:53:33.954Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        recurringInterval: "month",
      },
      prices: [
        {
          createdAt: new Date("2023-06-08T14:30:43.169Z"),
          modifiedAt: new Date("2024-02-09T02:39:53.057Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          priceAmount: 57871,
        },
      ],
    },
  ],
  pagination: {
    totalCount: 378735,
    maxPage: 241254,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |