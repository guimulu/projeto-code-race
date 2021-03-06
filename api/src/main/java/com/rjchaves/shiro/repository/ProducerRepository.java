package com.rjchaves.shiro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rjchaves.shiro.entities.Producer;

@Repository
public interface ProducerRepository extends JpaRepository<Producer, Long> {
	
}
