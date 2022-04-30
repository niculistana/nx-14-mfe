FROM alpine:3.14
RUN apk add --no-cache git npm sed
RUN mkdir -p /build
COPY build-client.sh /build
COPY netlify.toml /build
COPY .npmrc /build
COPY .yarnrc /build
WORKDIR /build
RUN chmod +x build-client.sh
CMD [ "./build-client.sh" ]