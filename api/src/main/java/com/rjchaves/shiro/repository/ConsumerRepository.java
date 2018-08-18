package com.rjchaves.shiro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rjchaves.shiro.entities.Consumer;

@Repository
public interface ConsumerRepository extends JpaRepository<Consumer, Long> {
	
}
