FROM nginx:alpine
COPY index.html /usr/share/nginx/html/index.html
COPY photography.html /usr/share/nginx/html/photography.html
COPY projects.html /usr/share/nginx/html/projects.html
COPY awards.html /usr/share/nginx/html/awards.html
COPY shared.jsx /usr/share/nginx/html/shared.jsx
COPY photo/ /usr/share/nginx/html/photo/
EXPOSE 80
