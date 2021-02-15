FROM node

RUN git clone https://github.com/phillies/vue_example.git /opt/vue_example
WORKDIR /opt/vue_example
RUN npm install

CMD ["npm", "run", "serve"]
