FROM node:22.19.0-alpine3.22
USER root

RUN apk update && apk add --no-cache \
    bash \
    git \
    curl \
    wget \
    jq \
    tree \
    htop \
    openssh-client \
    ca-certificates \
    tmux

RUN npm install -g pnpm

RUN mkdir -p /home/node/.bashrc.d && \
    { \
      echo 'alias ll="ls -l"' && \
      echo 'alias l="ls -la"' && \
      echo 'alias gs="git status"' && \
      echo 'alias ga="git add"' && \
      echo 'alias gc="git commit -m"' && \
      echo 'alias gp="git push"' && \
      echo 'alias gd="git diff"' && \
      echo 'alias d="docker"' && \
      echo 'alias dc="docker compose"' && \
      echo 'export PATH=$PATH:$(npm bin -g)' && \
      echo 'PS1="\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ "'; \
    } >> /home/node/.bashrc

RUN npm install -g typescript eslint prettier nodemon

USER node
WORKDIR /home/node
