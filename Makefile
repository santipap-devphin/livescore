pull:
	git reset --hard
	git clean -f
	git fetch
	git pull
build:
	docker-compose build nextjs
start:
	docker-compose down
	docker-compose up -d
	docker image prune -f
	docker-compose ps
update: pull build start