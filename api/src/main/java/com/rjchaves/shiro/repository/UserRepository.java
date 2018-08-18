package com.rjchaves.shiro.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rjchaves.shiro.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
	
}
