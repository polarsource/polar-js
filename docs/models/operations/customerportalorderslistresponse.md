# CustomerPortalOrdersListResponse

## Example Usage

```typescript
import { CustomerPortalOrdersListResponse } from "@polar-sh/sdk/models/operations";

let value: CustomerPortalOrdersListResponse = {
  result: {
    items: [
      {
        createdAt: new Date("2024-08-28T00:26:15.207Z"),
        modifiedAt: new Date("2023-12-25T03:14:41.243Z"),
        id: "<value>",
        amount: 238315,
        taxAmount: 907673,
        currency: "Dobra",
        customerId: "<value>",
        productId: "<value>",
        productPriceId: "<value>",
        subscriptionId: "<value>",
        userId: "<value>",
        product: {
          createdAt: new Date("2023-12-31T22:04:58.038Z"),
          modifiedAt: new Date("2023-11-15T04:34:57.852Z"),
          id: "<value>",
          name: "<value>",
          description:
            "inasmuch yawningly selfishly pinion webbed lest excluding bravely provided",
          isRecurring: false,
          isArchived: false,
          organizationId: "<value>",
          prices: [
            {
              createdAt: new Date("2025-11-07T05:30:16.112Z"),
              modifiedAt: new Date("2023-12-07T05:12:12.503Z"),
              id: "<value>",
              isArchived: false,
              productId: "<value>",
              priceCurrency: "<value>",
              priceAmount: 669673,
              recurringInterval: "year",
            },
          ],
          benefits: [
            {
              createdAt: new Date("2025-02-03T23:50:07.399Z"),
              modifiedAt: new Date("2025-01-23T09:01:57.863Z"),
              id: "<value>",
              type: "downloadables",
              description:
                "above phew crossly league athwart phooey positively eyeglasses",
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
              path: "/mnt",
              mimeType: "<value>",
              size: 600071,
              storageVersion: "<value>",
              checksumEtag: "<value>",
              checksumSha256Base64: "<value>",
              checksumSha256Hex: "<value>",
              lastModifiedAt: new Date("2023-09-28T08:39:39.127Z"),
              version: "<value>",
              isUploaded: false,
              createdAt: new Date("2023-01-18T13:41:31.922Z"),
              sizeReadable: "<value>",
              publicUrl: "https://turbulent-suspension.org/",
            },
          ],
          organization: {
            createdAt: new Date("2023-07-31T19:59:30.248Z"),
            modifiedAt: new Date("2025-01-04T03:37:00.423Z"),
            id: "<value>",
            name: "<value>",
            slug: "<value>",
            avatarUrl: "https://fatherly-papa.name/",
            bio: "<value>",
            company: "Rowe - Vandervort",
            blog: "<value>",
            location: "<value>",
            email: "Baby.Stanton@gmail.com",
            twitterUsername: "<value>",
            pledgeMinimumAmount: 975761,
            pledgeBadgeShowAmount: false,
            defaultUpfrontSplitToContributors: 557090,
            profileSettings: {},
            featureSettings: {},
          },
        },
        productPrice: {
          createdAt: new Date("2024-05-07T04:59:11.042Z"),
          modifiedAt: new Date("2023-10-24T05:26:05.632Z"),
          id: "<value>",
          isArchived: false,
          productId: "<value>",
          priceCurrency: "<value>",
          minimumAmount: 253656,
          maximumAmount: 553029,
          presetAmount: 671207,
        },
        subscription: {
          createdAt: new Date("2023-02-09T05:05:40.460Z"),
          modifiedAt: new Date("2023-02-12T21:33:27.477Z"),
          id: "<value>",
          amount: 27843,
          currency: "Malagasy Ariary",
          recurringInterval: "year",
          status: "active",
          currentPeriodStart: new Date("2024-06-14T11:17:00.227Z"),
          currentPeriodEnd: new Date("2024-09-06T07:42:30.967Z"),
          cancelAtPeriodEnd: false,
          canceledAt: new Date("2023-11-26T21:34:29.808Z"),
          startedAt: new Date("2025-09-29T03:58:20.205Z"),
          endsAt: new Date("2025-07-21T15:03:42.701Z"),
          endedAt: new Date("2024-07-02T20:27:58.335Z"),
          customerId: "<value>",
          productId: "<value>",
          priceId: "<value>",
          discountId: "<value>",
          checkoutId: "<value>",
          customerCancellationReason: "too_complex",
          customerCancellationComment: "<value>",
        },
      },
    ],
    pagination: {
      totalCount: 609764,
      maxPage: 240842,
    },
  },
};
```

## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `result`                                                                                     | [components.ListResourceCustomerOrder](../../models/components/listresourcecustomerorder.md) | :heavy_check_mark:                                                                           | N/A                                                                                          |