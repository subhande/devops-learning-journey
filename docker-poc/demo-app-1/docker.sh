# docker pull mongo
# docker pull mongo-express

docker stop mongodb && docker container rm mongodb
docker stop mongo-express && docker container rm mongo-express


docker run -d \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME="admin" \
    -e MONGO_INITDB_ROOT_PASSWORD="password" \
    --net mongo-network \
    --name mongodb mongo

docker run -d \
    --net mongo-network \
    --name mongo-express \
    -p 8080:8081 \
    -e ME_CONFIG_OPTIONS_EDITORTHEME="ambiance" \
    -e ME_CONFIG_MONGODB_SERVER="mongodb" \
    -e ME_CONFIG_BASICAUTH_USERNAME="admin" \
    -e ME_CONFIG_BASICAUTH_PASSWORD="password" \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME="admin" \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD="password" \
    mongo-express

docker stop demo-app-1
docker container rm demo-app-1
docker build -t demo-app-1:1.0 .
docker run -d -p 3000:3000 --net mongo-network --name demo-app-1 demo-app-1
# docker run -d -p 3000:3000 --net mongo-network --name demo-app demo-app-1