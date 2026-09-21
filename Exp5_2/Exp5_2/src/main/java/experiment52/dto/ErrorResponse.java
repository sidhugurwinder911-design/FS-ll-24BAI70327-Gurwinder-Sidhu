package experiment52.dto;

import java.time.LocalDateTime;

public class ErrorResponse {
    private String status;
    private String message;
    private String path;
    private String correlationId;
    private LocalDateTime timestamp;

    public ErrorResponse() {}

    public ErrorResponse(String status, String message, String path,
                         String correlationId, LocalDateTime timestamp) {
        this.status = status;
        this.message = message;
        this.path = path;
        this.correlationId = correlationId;
        this.timestamp = timestamp;
    }

    public String getStatus() { return status; }
    public String getMessage() { return message; }
    public String getPath() { return path; }
    public String getCorrelationId() { return correlationId; }
    public LocalDateTime getTimestamp() { return timestamp; }

    public void setStatus(String status) { this.status = status; }
    public void setMessage(String message) { this.message = message; }
    public void setPath(String path) { this.path = path; }
    public void setCorrelationId(String correlationId) { this.correlationId = correlationId; }
    public void setTimestamp(LocalDateTime timestamp) { this.timestamp = timestamp; }
}
