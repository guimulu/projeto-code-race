package com.rjchaves.shiro.repository;

import java.util.Calendar;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rjchaves.shiro.entities.Token;

public interface TokenRepository extends JpaRepository<Token, Long>{
	public Optional<Token> findByTokenAndExpirationDateGreaterThan(String token, Calendar today);
}
