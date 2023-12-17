docker build --no-cache -f SQL\Dockerfile.PostgreSql -t generaciya_6-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t generaciya_6-java/app ../../..
