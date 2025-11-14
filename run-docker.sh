docker build -t ssl-dev .
docker run --rm -p 7000:7000 -v $(pwd):/app ssl-dev
