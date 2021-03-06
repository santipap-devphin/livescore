pull:
	git fetch && git pull
build:
	docker-compose build nextjs
start:
	docker-compose down
	docker-compose up -d
	docker image prune -f
update: pull build start