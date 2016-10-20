##Setup:

- install docker
- `sudo docker build -t rakuten_api_demo_webserver .`
- `sudo docker run -d --name rakuten_api_demo_webserver_1 -p 9000:3000 --restart=always -e RAKUTEN_APP_ID='<replace your app id>' rakuten_api_demo_webserver`

##other useful commands:

- List all images
  - `sudo docker images`

- Remove image
  - `sudo docker rmi IMAGE_ID`

- List all containers
  - `sudo docker ps -a`

- Stop container
  - `sudo docker stop CONTAINER_ID`

- Remove container
  - `sudo docker rm CONTAINER_ID`
