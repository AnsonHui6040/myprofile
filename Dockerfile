FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html /usr/share/nginx/html/index.html
COPY photography.html /usr/share/nginx/html/photography.html
COPY projects.html /usr/share/nginx/html/projects.html
COPY awards.html /usr/share/nginx/html/awards.html
COPY shared.jsx /usr/share/nginx/html/shared.jsx
COPY photo/ /usr/share/nginx/html/photo/

RUN nginx -t

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null || exit 1
