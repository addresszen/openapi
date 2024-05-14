.DEFAULT_GOAL := help

now := $$(date '+%F_%H:%M:%S%5N')

## -- Build --

## Build
.PHONY: build
build: prepare copy replace compile

## Prepare deps
.PHONY: prepare
prepare:
	npm install

## Copy files from node_modules
.PHONY: copy
copy:
	cp node_modules/@ideal-postcodes/openapi/openapi.ts .
	cp node_modules/@ideal-postcodes/openapi/dist/openapi.json dist/
	cp node_modules/@ideal-postcodes/openapi/dist/openapi.yaml dist/

## Replace key terms in file
.PHONY: replace
replace:
	npm run replace

## Compile typescript
.PHONY: compile
compile:
	npm run build

## How to use this Makefile
.PHONY: help
help:
	@printf "Usage\n";

	@awk '{ \
			if ($$0 ~ /^.PHONY: [a-zA-Z\-\_0-9]+$$/) { \
				helpCommand = substr($$0, index($$0, ":") + 2); \
				if (helpMessage) { \
					printf "\033[36m%-20s\033[0m %s\n", \
						helpCommand, helpMessage; \
					helpMessage = ""; \
				} \
			} else if ($$0 ~ /^[a-zA-Z\-\_0-9.]+:/) { \
				helpCommand = substr($$0, 0, index($$0, ":")); \
				if (helpMessage) { \
					printf "\033[36m%-20s\033[0m %s\n", \
						helpCommand, helpMessage; \
					helpMessage = ""; \
				} \
			} else if ($$0 ~ /^##/) { \
				if (helpMessage) { \
					helpMessage = helpMessage"\n                     "substr($$0, 3); \
				} else { \
					helpMessage = substr($$0, 3); \
				} \
			} else { \
				if (helpMessage) { \
					print "\n                     "helpMessage"\n" \
				} \
				helpMessage = ""; \
			} \
		}' \
		$(MAKEFILE_LIST)
