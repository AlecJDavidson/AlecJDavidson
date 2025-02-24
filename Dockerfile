# Use the official lightweight Nginx image
FROM nginx:alpine

# Remove the default Nginx configuration if you need custom settings (optional)
# RUN rm /etc/nginx/conf.d/default.conf

# Copy your static site from the dist directory into Nginx's public folder
COPY dist/ /usr/share/nginx/html

# Expose port 80 to the host
EXPOSE 80

# Nginx is already configured to run in the foreground with the base image

