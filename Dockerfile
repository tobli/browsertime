FROM sitespeedio/webbrowsers:firefox-50.0-chrome-54.0

ENV BROWSERTIME_XVFB true

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

VOLUME /browsertime-results

COPY package.json /usr/src/app/
RUN npm install --production
COPY . /usr/src/app

WORKDIR /

COPY docker/scripts/start.sh /start.sh
COPY docker/Roboto-Black.ttf /Roboto-Black.ttf

ENTRYPOINT ["/start.sh"]
