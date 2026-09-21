# Experiment 5.2 — Global Exception Handling and Structured Logging

This project implements the Experiment 5.2 requirements: global exception handling with `@RestControllerAdvice`, a custom `PostNotFoundException`, structured error responses, SLF4J logging, a request filter, correlation IDs using MDC, and a frontend for testing valid/invalid requests.

## Run in VS Code (Windows PowerShell)

1. Open this folder in VS Code.
2. Open Terminal → New Terminal.
3. Confirm the terminal is in the project folder.
4. If an old `target` folder is locked, stop Java with `Ctrl+C`, then run `taskkill /F /IM java.exe` and delete `target`.
5. Run:

   `.\mvnw.cmd clean`


6. Start:

   `.\mvnw.cmd spring-boot:run`

7. Open:
   `http://localhost:8080/`

8. For the REST API:
   `http://localhost:8080/api/posts`

9. For the required exception test:
   `http://localhost:8080/api/posts/invalid-id`

## Expected exception response

```json
{
  "status": "error",
  "message": "Post not found with id: invalid-id",
  "path": "/api/posts/invalid-id",
  "correlationId": "...",
  "timestamp": "..."
}
```

The correlation ID is also returned in the `X-Correlation-ID` HTTP response header and appears in the terminal log pattern.
