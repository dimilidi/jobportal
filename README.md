# job-portal
[Design](https://www.figma.com/file/cmWtNE21nByCtTRUkoR2uS/Wireframing-DT?node-id=0%3A1&t=eXEWluvSXX6WsSus-0)



## Api Endpoints

### GET /advertisements

Query-Params

- userId=12345667
- search=DCI (Search-Field)
- location=Berlin
- page=1

Response-Body

```javascript
[
    {
        _id: "123",
        title: "My Title",
        description: "something",
        location: "My location",
        user: {
            name: "User Name",
            info: {
                telephone: "00496666666566",
                address: "My address",
                description: "About me text"
            }
        },
        createdAt: 2022-11-11T19:46:39.731+00:00,
        updatedAt: 2022-11-11T19:46:39.731+00:00
    }
]
```


### GET /advertisements/:id

Response-Body

```javascript
    {
        _id: "123",
        title: "My Title",
        description: "something",
        location: "My location",
        user: {
            name: "User Name",
            info: {
                telephone: "00496666666566",
                address: "My address",
                description: "About me text"
            }
        },
        createdAt: 2022-11-11T19:46:39.731+00:00,
        updatedAt: 2022-11-11T19:46:39.731+00:00
    }
```


### POST /advertisements

Post-Body

```javascript
    {
        title: "My Title",
        description: "something",
        location: "My location",
        user: "Udel17555klmjer54gj7"
    }
```

Response-Body

```javascript
    {
        _id: "123",
        title: "My Title",
        description: "something",
        location: "My location",
        user: {
            name: "User Name",
            info: {
                telephone: "00496666666566",
                address: "My address",
                description: "About me text"
            }
        },
        createdAt: 2022-11-11T19:46:39.731+00:00,
        updatedAt: 2022-11-11T19:46:39.731+00:00
    }
```


### POST /user/login

POST-Body

```javascript
    {
     email: "my@mail.de",
     password: "123456"
    }
```

Response-Body

```javascript
    {
     name: "User Name",
     email: "my@mail.de",
     avatar: "url-to-avatar"
    }
```

### POST /user/register

POST-Body

```javascript
    {
     email: "my@mail.de",
     password: "123456",
     name: "User Name",
     avatar: "file"
    }
```

Response-Body

```javascript
    {
     name: "User Name",
     email: "my@mail.de",
     avatar: "url-to-avatar"
    }
```


### GET /user

Response-Body

```javascript
    {
     name: "User Name",
     email: "my@mail.de",
     avatar: "url-to-avatar"
    }
```


