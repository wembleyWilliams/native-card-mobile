FROM node:18.17
LABEL authors="Wembley"
# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=development
ENV NODE_ENV $NODE_ENV

# default to port 19006 for node, and 19001 and 19002 (tests) for debug
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

# install global packages
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
#RUN npm install --unsafe-perm --allow-root -g npm@9.x expo-cli@latest

RUN npm i --unsafe-perm --allow-root -g npm@latest expo-cli@latest

# install dependencies first, in a different location for easier app bind mounting for local development
# due to default /opt permissions we have to create the dir with root and change perms
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ENV PATH /usr/src/.bin:$PATH
COPY ./package*.json ./
RUN npm install
RUN npm install typescript@latest

# copy in our source code last, as it changes the most
#WORKDIR /usr/src/app
# for development, we bind mount volumes; comment out for production
COPY ./ .

ENTRYPOINT ["npm", "run"]
CMD ["web"]