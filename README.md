# BlogNode API
## Hostname
* http://localhost:3000/api
## API
### Official
* Authen
 * POST/authen/signin
* Users
  * POST/users/login
  * GET/users/
  * GET/users/:id
  * PUT/users/:id
  * DELETE/users/:id
  
| key |	type | description |
| --- | --- | --- |
| username | string |  |
| password | string |  |

* Categories
  * POST/categories
  * GET/categories/
  * GET/categories/:id
  * PUT/categories/:id
  * DELETE/categories/:id
  
| key |	type | description |
| --- | --- | --- |
| name | string |  |


* Posts
  * POST/posts
  * GET/posts/
  * GET/posts/:id
  * PUT/posts/:id
  * DELETE/posts/:id
  
| key |	type | description |
| --- | --- | --- |
| title | string |  |
| text | string |  |

* Photos
 * POST/photos
 
 | key |	type | description |
| --- | --- | --- |
| photo | file | jpeg, jpg, png |
