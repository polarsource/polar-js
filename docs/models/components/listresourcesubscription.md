# ListResourceSubscription

## Example Usage

```typescript
import { ListResourceSubscription } from "@polar-sh/sdk/models/components";

let value: ListResourceSubscription = {
  items: [
    {
      createdAt: new Date("2023-09-10T18:58:43.516Z"),
      modifiedAt: new Date("2024-08-25T11:58:09.669Z"),
      id: "<value>",
      amount: 409918,
      currency: "Yemeni Rial",
      recurringInterval: "year",
      status: "active",
      currentPeriodStart: new Date("2025-11-07T20:33:08.048Z"),
      currentPeriodEnd: new Date("2023-04-11T09:48:38.635Z"),
      cancelAtPeriodEnd: false,
      startedAt: new Date("2023-10-25T20:57:12.614Z"),
      endedAt: new Date("2024-01-15T15:33:33.250Z"),
      customerId: "<value>",
      productId: "<value>",
      priceId: "<value>",
      discountId: "<value>",
      checkoutId: "<value>",
      metadata: {
        "key": false,
      },
      customer: {
        createdAt: new Date("2025-04-19T23:42:02.974Z"),
        modifiedAt: new Date("2023-11-30T23:12:05.956Z"),
        id: "<value>",
        metadata: {
          "key": false,
        },
        email: "Jeremie.Hahn@gmail.com",
        emailVerified: false,
        name: "<value>",
        billingAddress: {
          country: "French Southern Territories",
        },
        taxId: [
          "<id>",
        ],
        organizationId: "<value>",
        avatarUrl: "https://aged-swanling.com/",
      },
      userId: "<value>",
      user: {
        id: "<value>",
        email: "Malika_Hammes47@gmail.com",
        publicName: "<value>",
      },
      product: {
        createdAt: new Date("2024-03-23T13:34:49.566Z"),
        modifiedAt: new Date("2023-02-02T17:07:23.419Z"),
        id: "<value>",
        name: "<value>",
        description:
          "er over aha probable steep telescope woot shallow ready likely",
        isRecurring: false,
        isArchived: false,
        organizationId: "<value>",
        metadata: {
          "key": 507819,
        },
        prices: [
          {
            createdAt: new Date("2025-06-09T18:38:23.027Z"),
            modifiedAt: new Date("2025-08-25T15:21:53.101Z"),
            id: "<value>",
            isArchived: false,
            productId: "<value>",
            priceCurrency: "<value>",
            minimumAmount: 666762,
            maximumAmount: 288130,
            presetAmount: 873245,
            recurringInterval: "month",
          },
        ],
        benefits: [
          {
            createdAt: new Date("2023-05-28T12:26:51.418Z"),
            modifiedAt: new Date("2025-11-19T23:44:15.502Z"),
            id: "<value>",
            description: "versus mmm however",
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
            path: "/usr/lib",
            mimeType: "<value>",
            size: 621230,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2025-06-16T04:21:10.746Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-03-27T07:52:32.211Z"),
            sizeReadable: "<value>",
            publicUrl: "https://official-hundred.info/",
          },
        ],
        attachedCustomFields: [
          {
            customFieldId: "<value>",
            customField: {
              createdAt: new Date("2024-12-21T00:45:52.216Z"),
              modifiedAt: new Date("2023-10-03T04:08:49.934Z"),
              id: "<value>",
              metadata: {
                "key": 95232,
              },
              slug: "<value>",
              name: "<value>",
              organizationId: "<value>",
              properties: {},
            },
            order: 745274,
            required: false,
          },
        ],
      },
      price: {
        createdAt: new Date("2023-07-05T02:18:29.661Z"),
        modifiedAt: new Date("2023-06-28T00:20:02.984Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 15228,
        maximumAmount: 777881,
        presetAmount: 728700,
        recurringInterval: "month",
      },
      discount: {
        duration: "forever",
        durationInMonths: 884089,
        type: "fixed",
        amount: 29564,
        currency: "Czech Koruna",
        createdAt: new Date("2024-07-24T16:06:53.635Z"),
        modifiedAt: new Date("2023-01-09T10:05:29.328Z"),
        id: "<value>",
        metadata: {
          "key": "<value>",
        },
        name: "<value>",
        code: "<value>",
        startsAt: new Date("2025-02-03T20:36:51.045Z"),
        endsAt: new Date("2024-05-06T01:50:43.417Z"),
        maxRedemptions: 948639,
        redemptionsCount: 910767,
        organizationId: "<value>",
      },
    },
  ],
  pagination: {
    totalCount: 276458,
    maxPage: 377716,
  },
};
```

## Fields

| Field                                                                | Type                                                                 | Required                                                             | Description                                                          |
| -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------------------------------- |
| `items`                                                              | [components.Subscription](../../models/components/subscription.md)[] | :heavy_check_mark:                                                   | N/A                                                                  |
| `pagination`                                                         | [components.Pagination](../../models/components/pagination.md)       | :heavy_check_mark:                                                   | N/A                                                                  |