# SubscriptionsListResponse

## Example Usage

```typescript
import { SubscriptionsListResponse } from "@polar-sh/sdk/models/operations/subscriptionslist.js";

let value: SubscriptionsListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2025-11-12T09:37:47.736Z"),
        modifiedAt: new Date("2023-02-09T03:20:07.090Z"),
        id: "<value>",
        amount: 30199,
        currency: "Comoro Franc",
        recurringInterval: "year",
        status: "incomplete_expired",
        currentPeriodStart: new Date("2025-03-05T05:55:41.747Z"),
        currentPeriodEnd: new Date("2025-10-26T08:46:25.013Z"),
        cancelAtPeriodEnd: false,
        canceledAt: new Date("2024-06-30T08:01:42.296Z"),
        startedAt: new Date("2023-05-14T10:49:12.653Z"),
        endsAt: new Date("2025-07-13T10:55:22.957Z"),
        endedAt: new Date("2025-10-30T10:17:08.825Z"),
        customerId: "<value>",
        productId: "<value>",
        priceId: "<value>",
        discountId: "<value>",
        checkoutId: "<value>",
        customerCancellationReason: "unused",
        customerCancellationComment: "<value>",
        metadata: {
          "key": 839746,
        },
        customer: {
          id: "992fae2a-2a17-4b7a-8d9e-e287cf90131b",
          createdAt: new Date("2024-02-18T01:32:51.561Z"),
          modifiedAt: new Date("2024-07-01T15:28:38.660Z"),
          metadata: {
            "key": "<value>",
          },
          externalId: "usr_1337",
          email: "customer@example.com",
          emailVerified: true,
          name: "John Doe",
          billingAddress: {
            country: "US",
          },
          taxId: [
            "FR61954506077",
            "eu_vat",
          ],
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
          avatarUrl: "https://www.gravatar.com/avatar/xxx?d=blank",
        },
        userId: "<value>",
        user: {
          id: "<value>",
          email: "Laurence_Kautzer@hotmail.com",
          publicName: "<value>",
        },
        product: {
          createdAt: new Date("2023-02-25T00:32:40.607Z"),
          modifiedAt: new Date("2025-08-27T14:08:51.409Z"),
          id: "<value>",
          name: "<value>",
          description:
            "ack schlep evenly save whoa annual appertain overproduce which husband",
          recurringInterval: "month",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          metadata: {
            "key": "<value>",
          },
          prices: [
            {
              createdAt: new Date("2023-05-17T10:00:26.592Z"),
              modifiedAt: new Date("2024-03-15T16:48:42.473Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              type: "one_time",
              recurringInterval: "year",
              priceCurrency: "<value>",
              priceAmount: 790426,
            },
          ],
          benefits: [
            {
              createdAt: new Date("2023-03-13T13:45:54.118Z"),
              modifiedAt: new Date("2024-11-02T02:07:42.121Z"),
              id: "<value>",
              description: "negative onto barring airbus",
              selectable: false,
              deletable: false,
              organizationId: "<value>",
              properties: {
                repositoryOwner: "polarsource",
                repositoryName: "private_repo",
                permission: "admin",
              },
            },
          ],
          medias: [
            {
              id: "<value>",
              organizationId: "<value>",
              name: "<value>",
              path: "/private",
              mimeType: "<value>",
              size: 259760,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-07-26T07:19:00.921Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-06-23T01:36:53.052Z"),
              sizeReadable: "<value>",
              publicUrl: "https://partial-diversity.biz",
            },
          ],
          attachedCustomFields: [
            {
              customFieldId: "<value>",
              customField: {
                createdAt: new Date("2024-12-07T13:45:36.051Z"),
                modifiedAt: new Date("2023-06-28T22:06:32.977Z"),
                id: "<value>",
                metadata: {
                  "key": false,
                },
                slug: "<value>",
                name: "<value>",
                organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
                properties: {},
              },
              order: 436910,
              required: false,
            },
          ],
        },
        price: {
          createdAt: new Date("2023-06-06T08:25:03.114Z"),
          modifiedAt: new Date("2023-05-16T01:56:09.556Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          type: "recurring",
          recurringInterval: "month",
          priceCurrency: "<value>",
          minimumAmount: 712800,
          maximumAmount: 23055,
          presetAmount: 975882,
        },
        discount: {
          duration: "forever",
          type: "percentage",
          basisPoints: 410156,
          createdAt: new Date("2025-01-23T03:02:21.169Z"),
          modifiedAt: new Date("2023-01-27T08:32:29.912Z"),
          id: "<value>",
          metadata: {
            "key": false,
          },
          name: "<value>",
          code: "<value>",
          startsAt: new Date("2024-08-23T18:41:55.864Z"),
          endsAt: new Date("2025-03-09T13:52:06.839Z"),
          maxRedemptions: 941748,
          redemptionsCount: 420311,
          organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
        },
      },
    ],
    pagination: {
      totalCount: 104312,
      maxPage: 33740,
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `result`                                                                                   | [components.ListResourceSubscription](../../models/components/listresourcesubscription.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |