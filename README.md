# BlogNode API
## Hostname
* https://ngblogapi.herokuapp.com/
## API
### Official
* Authen
  * POST/authen/signin
* Users
  * POST /api/users/login
  * GET /api/users/
  * GET /api/users/:id
  * PUT /api/users/:id
  * DELETE /api/users/:id
  
| key |	type | description |
| --- | --- | --- |
| username | string |  |
| password | string |  |

* Categories
  * POST /api/categories
  * GET /api/categories/
  * GET /api/categories/:id
  * PUT /api/categories/:id
  * DELETE /api/categories/:id
  
| key |	type | description |
| --- | --- | --- |
| name | string |  |


* Posts
  * POST /api/posts
  * GET /api/posts/
  * GET /api/posts/:id
  * PUT /api/posts/:id
  * DELETE /api/posts/:id
  
| key |	type | description |
| --- | --- | --- |
| title | string |  |
| text | string |  |

* Photos
  * POST /api/photos
 
| key |	type | description |
| --- | --- | --- |
| photo | file | jpeg, jpg, png |

** Note: ** PhotoUrl: https://ngblogapi.herokuapp.com/photos/{filename}
