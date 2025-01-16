# Oauth2AuthorizeResponseOauth2Authorize

Successful Response


## Supported Types

### `components.AuthorizeResponseUser`

```typescript
const value: components.AuthorizeResponseUser = {
  client: {
    createdAt: new Date("2025-08-19T11:27:16.475Z"),
    modifiedAt: new Date("2025-01-24T02:09:42.913Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://buzzing-papa.name/",
    logoUri: "https://nifty-willow.org",
    tosUri: "https://squiggly-rubric.org/",
    policyUri: "https://vast-giant.net/",
  },
  sub: {
    id: "<value>",
    email: "Frank_Pfannerstill39@yahoo.com",
    avatarUrl: "https://impolite-hamburger.name/",
  },
  scopes: [
    "admin",
  ],
};
```

### `components.AuthorizeResponseOrganization`

```typescript
const value: components.AuthorizeResponseOrganization = {
  client: {
    createdAt: new Date("2023-05-04T10:00:03.073Z"),
    modifiedAt: new Date("2023-07-10T04:52:57.046Z"),
    clientId: "<id>",
    clientName: "<value>",
    clientUri: "https://defensive-accompanist.biz/",
    logoUri: "https://yellow-handover.org",
    tosUri: "https://warped-affect.com/",
    policyUri: "https://twin-mentor.com/",
  },
  sub: {
    id: "<value>",
    slug: "<value>",
    avatarUrl: "https://damp-ghost.com",
  },
  scopes: [
    "issues:write",
  ],
  organizations: [
    {
      id: "<value>",
      slug: "<value>",
      avatarUrl: "https://unaware-colonialism.biz/",
    },
  ],
};
```

