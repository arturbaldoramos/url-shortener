### Step 1: Build stage
FROM golang:alpine as builder

WORKDIR /url-shortener/api

# Copy the Go module files and download dependencies
COPY go.mod go.sum ./
RUN go mod download

# Copy the application source code and build the binary
COPY . .
RUN go build -o main .


## Step 2: Runtime stage
FROM scratch

## Copy the main executable
COPY --from=builder /url-shortener/api/main /
## Copy env file
COPY --from=builder /url-shortener/api/.env /

EXPOSE 3000

CMD ["./main"]