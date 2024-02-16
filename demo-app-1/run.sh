# docker pull mongo
# docker pull mongo-express


docker run -d \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME="admin" \
    -e MONGO_INITDB_ROOT_PASSWORD="password" \
    --net mongo-network \
    --name mongodb mongo

docker run -d \
    --net mongo-network \
    --name mongo-express \
    -p 8081:8081 \
    -e ME_CONFIG_OPTIONS_EDITORTHEME="ambiance" \
    -e ME_CONFIG_MONGODB_SERVER="mongodb" \
    -e ME_CONFIG_BASICAUTH_USERNAME="admin" \
    -e ME_CONFIG_BASICAUTH_PASSWORD="password" \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME="admin" \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD="password" \
    mongo-express
