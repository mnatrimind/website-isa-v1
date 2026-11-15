# Build stage
FROM node:22.23.4-alpine AS builder

WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build-time env vars (baked into JS bundles by Next.js)
ARG NEXT_PUBLIC_API_URL=https://app.isaconciliia.com.br
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL
ARG NEXT_PUBLIC_PRICING_API_URL=https://app.isaconcilia.com.br/api/public/plans
ENV NEXT_PUBLIC_PRICING_API_URL=$NEXT_PUBLIC_PRICING_API_URL

# Build the application
RUN npm run build

# Production stage
FROM node:22.23.4-alpine

WORKDIR /app

# Install dumb-init to handle signals properly, and krb5-libs required by Node.js gssapi bindings
RUN apk add --no-cache dumb-init krb5-libs

# Create a non-root user before copying files so ownership can be set correctly
RUN addgroup -g 1001 -S nodejs && \
    adduser -S nextjs -u 1001

# Copy package files from builder
COPY package.json package-lock.json ./

# Copy built application from builder with correct ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
COPY --from=builder --chown=nextjs:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

# Pre-create the image cache directory with correct permissions
RUN mkdir -p .next/cache/images && chown -R nextjs:nodejs .next/cache

USER nextjs

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

# Use dumb-init to handle signals
ENTRYPOINT ["dumb-init", "--"]

# Start the application
CMD ["npm", "start"]
