# BlogNode API
## Hostname
* http://localhost:3000/api
## API
### Official
* Authen
 * POST/authen/signin
* Users

| key |	type | description |
| --- | --- | --- |
| username | string |  |
| password | string |  |

  * POST/users/login
  * GET/users/
  * GET/users/:id
  * PUT/users/:id
  * DELETE/users/:id
* Categories

| key |	type | description |
| --- | --- | --- |
| name | string |  |

  * POST/categories
  * GET/categories/
  * GET/categories/:id
  * PUT/categories/:id
  * DELETE/categories/:id
* Posts

| key |	type | description |
| --- | --- | --- |
| title | string |  |
| text | string |  |

  * GET/posts/
  * GET/posts/:id
  * PUT/posts/:id
  * DELETE/posts/:id
