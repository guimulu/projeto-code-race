package com.rjchaves.shiro.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rjchaves.shiro.entities.Token;

public interface TokenRepository extends JpaRepository<Token, Long>{
	public Token findByToken(String token);
}
