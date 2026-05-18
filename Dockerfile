FROM nginx:alpine

COPY site /usr/share/nginx/html

# Копируем созданный выше конфиг внутрь контейнера
COPY default.conf /etc/nginx/conf.d/default.conf