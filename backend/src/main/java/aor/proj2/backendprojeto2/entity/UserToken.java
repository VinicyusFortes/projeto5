package aor.proj2.backendprojeto2.entity;

import jakarta.persistence.*;

import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name="user_tokens")
public class UserToken implements Serializable {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column
  private Long id;

  @ManyToOne
  @JoinColumn(name="username", referencedColumnName = "username", nullable = false)
  private UserEntity user;

  @Column(name = "token_type", nullable = false)
  private String tokenType; // Tipo do token (ex: 'session', 'verification', 'password_reset')

  @Column(name = "token", nullable = false)
  private String token; // O valor do token

  @Column(name = "expiration_timestamp", nullable = false)
  private LocalDateTime expirationTimestamp; // Data e hora de expiração do token

  @Column(name = "status", nullable = false, columnDefinition = "VARCHAR(50) DEFAULT 'active'")
  private String status; // Status do token (ex: 'active', 'expired', 'used')

  @Column(name = "created_at", nullable = false, updatable = false)
  private LocalDateTime createdAt; // Data de criação do token

  @Column(name = "updated_at")
  private LocalDateTime updatedAt;

  //Construtor padrao
  public UserToken() {

  }

  //Getters e setters
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public UserEntity getUser() {
    return user;
  }

  public void setUser(UserEntity user) {
    this.user = user;
  }

  public String getTokenType() {
    return tokenType;
  }

  public void setTokenType(String tokenType) {
    this.tokenType = tokenType;
  }

  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  public LocalDateTime getExpirationTimestamp() {
    return expirationTimestamp;
  }

  public void setExpirationTimestamp(LocalDateTime expirationTimestamp) {
    this.expirationTimestamp = expirationTimestamp;
  }

  public String getStatus() {
    return status;
  }

  public void setStatus(String status) {
    this.status = status;
  }

  public LocalDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(LocalDateTime createdAt) {
    this.createdAt = createdAt;
  }

  public LocalDateTime getUpdatedAt() {
    return updatedAt;
  }

  public void setUpdatedAt(LocalDateTime updatedAt) {
    this.updatedAt = updatedAt;
  }
}
